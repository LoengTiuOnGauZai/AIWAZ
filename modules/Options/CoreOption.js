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
        console.log(super.toString());
    }
}

module.exports = CoreOption;
