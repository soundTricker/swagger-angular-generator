"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
/** Extends FormArray so it contains definition of items for further creation */
class FormArrayExtended extends forms_1.FormArray {
    constructor(createControl, controls, ...rest) {
        super(controls, ...rest);
        this.createControl = createControl;
    }
    setValue(value, options = {}) {
        this.setSize(value.length);
        super.setValue(value, options);
    }
    /**
     * Sets specified number of controls in the array
     * @param size of the array
     */
    setSize(size) {
        while (size < this.controls.length)
            this.removeAt(0);
        while (size > this.controls.length)
            this.push(this.createControl());
    }
}
exports.FormArrayExtended = FormArrayExtended;
//# sourceMappingURL=formArrayExtended.js.map