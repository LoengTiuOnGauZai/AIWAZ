'use strict';
//Color Output
const chalk = require('chalk');

 //Custom checklist
const inquirer = require('inquirer');

//Import each Processes
const CoreOption = require('./modules/Options/CoreOption.js');
const SafeModeOption = require('./modules/Options/SafeModeOption.js');
const NetworkOption = require('./modules/Options/NetworkOption.js');
const FileSystemOption = require('./modules/Options/FileSystemOption.js');
const ConfigurationOption = require('./modules/Options/ConfigurationOption.js');

//Initiating Processes
const Processes = [
new CoreOption(),
new SafeModeOption(),
new NetworkOption(),
new FileSystemOption(),
new ConfigurationOption()
];

var RunningProcess = [];

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var isReadyToPrompt = false;

main();

function main() {
    process.stdout.write('\x1Bc');
    Banner("AIwaz");

    console.log('Awaiting input for action...\nEnter \'s\' to open process selection menu or \'q\' to quit.');

/* 
    Need to find a way to loop prompt
*/

    ProcessSelection();

}

function Banner(ProcessName) {
    var figlet = require('figlet');
    console.log(chalk`{red ${figlet.textSync(ProcessName, {horizontalLayout: 'filled'})}} {bgRed V.${require('./package.json').version}}
 @{yellow.inverse ChisanaKita} @{bgCyan JohnDoeAntler} {gray 2020}\n`);
}

function ProcessSelection() {
    //Configure checklist
    inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'Please select process(s) to start :',
            name: 'Process',
            choices: Processes.map(opt => opt.getJson),   //Get each process details
            validate: function(answer) {
                if (answer.length < 1)
                    return 'You must select atleast 1 process to start.\n (Input Ctrl + C to ternimate program)';
                return true;
            }
        }
    ]).then(choice => {
        ProcessHandler(choice.Process);
    });
}

function ProcessHandler(NewProcessList) {
    // Checks if there are any ProcessID needed to be ternimated.
    let Process_Termination_List = RunningProcess.filter(
        p => !NewProcessList.some(e => e === p)
    );

    console.log(Process_Termination_List);

    // If there are items in the Process_Termination_List : 
    if (Process_Termination_List.length > 0) {
        // Ternimate all processes.
        TernimateProcess(Process_Termination_List);
    }
    // Replace the new process list into the current one.
    RunningProcess = NewProcessList;

    console.log(RunningProcess);

    // Start all processes.
    StartProcess(RunningProcess);

    isReadyToPrompt = true;
}

function StartProcess(NewProcessList) {
    NewProcessList.forEach(e => {
        // Find the Unchecked ProcessID by user's checklist values.
        const currentID = Processes.filter(x => x.value == e && x.checked == false)[0];

        // Execute the process.
        currentID.execute();
    });
}

function TernimateProcess(NewProcessList) {
    NewProcessList.forEach(e => {
        // Find the Checked ProcessID by the Process_Termination_List values.
        const currentID = Processes.filter(x => x.value == e && x.checked == true)[0];

        // Terminate the process.
        currentID.terminate();
    });
}