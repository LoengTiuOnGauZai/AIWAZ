const Action = require('./Action.js');

class SafeModeOption extends Action {
    constructor() {
        super(
            "AIwaz (SafeMode)",
            2,
            "SAFE_MODE",
            false,
            "Unavailable"
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

module.exports = SafeModeOption;