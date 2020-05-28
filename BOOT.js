'use strict';

const chalk = require('chalk');
 
var inquirer = require('inquirer');

main();

function main() {
    Banner("AIwaz");
}

function Banner(ProcessName) {
    var figlet = require('figlet');
    figlet.text(ProcessName, {
        font: 'Standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'default'
    },(err, data) => {
        if(err) console.error(err);
        console.log(chalk`{red ${data}} {bgRed V.${require('./package.json').version}}\n @{yellow.inverse ChisanaKita} @{bgCyan JohnDoeAntler} {gray 2020}\n`);
    });
}