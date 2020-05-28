const Action = require('./Action.js');

class SafeModeOption extends Action {
    constructor() {
        // super({name: "AIwaz (core)", value: 1, short: "CORE", checked: false});
        super(
            "AIwaz (SafeMode)",
            2,
            "SAFE_MODE",
            false,
            "Unavailable"
        );
    }

    execute () {
        console.log(super.toString());
    }
}

module.exports = SafeModeOption;