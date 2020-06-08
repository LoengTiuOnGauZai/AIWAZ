const Action = require('./Action.js');

class FileSystemOption extends Action {
    constructor() {
        super(
            "File System",
            4,
            "FS",
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

module.exports = FileSystemOption;