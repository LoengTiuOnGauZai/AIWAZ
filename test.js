'use strict';
var inquirer = require('inquirer');
var operation = require('./modules/Operations.js');


const CoreOption = require('./modules/Options/CoreOption.js');
const SafeModeOption = require('./modules/Options/SafeModeOption.js');
const NetworkOption = require('./modules/Options/NetworkOption.js');
const FileSystemOption = require('./modules/Options/FileSystemOption.js');
const ConfigurationOption = require('./modules/Options/ConfigurationOption.js');

let options = [
  new CoreOption(),
  new SafeModeOption(),
  new NetworkOption(),
  new FileSystemOption(),
  new ConfigurationOption()
]

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Please select service(s) to start :',
      name: 'Service',
      // ok thanks lol xd
      choices: options.map(opt => opt.getJson),
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must select atleast 1 service to start.';
        }
        return true;
      }
    }
  ])
  .then(answers => {
      //console.log(answers);
      StartProcess(answers);
  });

  function StartProcess(arr) {
    arr.Service.forEach(e => {
      // find the option by selected value
      const option = options.filter(x => x.value == e)[0];

      // execute the option
      option.execute();
    });

    //console.log(`${arr.Service} Length : ${arr.Service.length}`);

  }