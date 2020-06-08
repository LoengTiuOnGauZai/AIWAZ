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
        console.log(super.toString() + " successfully loaded."); 
        super.checked = true;
    }

    terminate() {
        console.log(super.toString() + " successfully cancelled."); 
        super.checked = false;
    }
}

module.exports = ConfigurationOption;
