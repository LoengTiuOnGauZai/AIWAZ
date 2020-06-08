const Action = require('./Action.js');

class NetworkOption extends Action {
    constructor() {
        super(
            "Network",
            3,
            "NETWORK",
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

module.exports = NetworkOption;
