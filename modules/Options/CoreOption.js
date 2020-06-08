const Action = require('./Action.js');

class CoreOption extends Action {
    constructor() {
        super(
            "AIwaz (core)",
            1,
            "CORE",
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

module.exports = CoreOption;
