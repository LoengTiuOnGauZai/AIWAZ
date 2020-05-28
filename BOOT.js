'use strict';
//Color Output
const chalk = require('chalk');

 //Custom checklist
var inquirer = require('inquirer');

var runningProcess = [];

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
        ProcessHandler(answers.Service);
    });

    function ProcessHandler(arr) {
        //If incoming Service(s) ID is equrl the now running process(s) ID.
        if (JSON.stringify(runningProcess)==JSON.stringify(arr)) {
            //Terminate all process(s).
        } else {
            //No Service running
            if (runningProcess.length == 0) {
                //Start running selected service
                StartProcess(arr);
            } else  {
                //The overlapped service(s) will be terminated.
                var overlapID;
                //filter out the duplicate ID and replacing them into the current running service.
                
            }

        }
    }

    function StartProcess(arr) {
        arr.forEach(e => {
        // find the option by selected value
        const option = options.filter(x => x.value == e)[0];

        // execute the option
        option.execute();
        });
    }
}