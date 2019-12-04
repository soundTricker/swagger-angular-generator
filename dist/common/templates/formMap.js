"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
/** Extends FormGroup so it contains definition of map items for further creation */
class FormMap extends forms_1.FormGroup {
    constructor(createControl, controls, ...rest) {
        super(controls, ...rest);
        this.createControl = createControl;
    }
    setValue(value, options = {}) {
        this.setShape(Object.keys(value));
        super.setValue(value, options);
    }
    /**
     * Sets child controls for a specified list of keys
     * @param keys list of keys new form group should contain
     */
    setShape(keys) {
        const allKeys = new Set([...keys, ...Object.keys(this.controls)]);
        allKeys.forEach(key => {
            // add control for a new one
            if (!(key in this.controls))
                this.addControl(key, this.createControl());
            // remove control if missing
            else if (!keys.includes(key))
                this.removeControl(key);
        });
    }
}
exports.FormMap = FormMap;
//# sourceMappingURL=formMap.js.map