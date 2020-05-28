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
        console.log(super.toString()); 
    }
}

module.exports = NetworkOption;
