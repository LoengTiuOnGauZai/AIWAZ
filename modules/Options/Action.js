// export default <-- 比我睇的, module.exports 即係typescript export default, module.exports.XXXXX = YYY == export const XXX =  YYY;
class Action {

    constructor(name, value, short, checked, disabled) {
        this.name = name;
        this.value = value;
        this.short = short;
        this.checked = checked;
        this.disabled = disabled;
    }

    get getName() {
        return this.name;
    }

    get getValue() {
        return this.value;
    }

    get getShort() {
        return this.short;
    }

    get getChecked() {
        return this.checked;
    }

    get getDisabled() {
        return this.disabled;
    }

    toString() {
        return `[ ${this.short} ] successfully loaded.`;
    }

    get getJson() {
        return {
            name: this.name,
            value: this.value,
            short: this.short,
            checked: this.checked,
            disabled: this.disabled
        };
    }
}

module.exports = Action;