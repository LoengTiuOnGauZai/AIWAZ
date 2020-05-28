class Operations {
    constructor() {}
    actions = [];

    ExecuteAction(action) {
        this.actions.push(action);
        action.execute();
    }

}











