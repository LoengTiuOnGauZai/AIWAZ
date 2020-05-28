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
        console.log(super.toString()); 
    }
}

module.exports = FileSystemOption;