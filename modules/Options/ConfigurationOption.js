const Action = require('./Action.js');

class ConfigurationOption extends Action {
    constructor() {
        super(
            "Configuration",
            5,
            "CONFIG",
            false,
            false
        );
    }

    execute() {
        console.log(super.toString()); 
    }
}

module.exports = ConfigurationOption;
