'use strict';
//Color Output
const chalk = require('chalk');

 //Custom checklist
var inquirer = require('inquirer');



main();

function main() {
    Banner("AIwaz");
    ServiceSelection();
}

function Banner(ProcessName) {
    var figlet = require('figlet');
    console.log(chalk`{red ${figlet.textSync(ProcessName, {horizontalLayout: 'filled'})}} {bgRed V.${require('./package.json').version}}
@{yellow.inverse ChisanaKita} @{bgCyan JohnDoeAntler} {gray 2020}\n`);
}

function ServiceSelection() {
    //Import each services
    const CoreOption = require('./modules/Options/CoreOption.js');
    const SafeModeOption = require('./modules/Options/SafeModeOption.js');
    const NetworkOption = require('./modules/Options/NetworkOption.js');
    const FileSystemOption = require('./modules/Options/FileSystemOption.js');
    const ConfigurationOption = require('./modules/Options/ConfigurationOption.js');

    //Instants services
    let options = [
    new CoreOption(),
    new SafeModeOption(),
    new NetworkOption(),
    new FileSystemOption(),
    new ConfigurationOption()
    ]

    //Configure checklist
    inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'Please select service(s) to start :',
            name: 'Service',
            choices: options.map(opt => opt.getJson),   //Get each services details
            validate: function(answer) {
                if (answer.length < 1)
                    return 'You must select atleast 1 service to start.';
                return true;
            }
        }
    ]).then(answers => {
        StartProcess(answers);
    });

    function StartProcess(arr) {
        arr.Service.forEach(e => {
        // find the option by selected value
        const option = options.filter(x => x.value == e)[0];

        // execute the option
        option.execute();
        });
    }
}