"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReactForms = (function () {
    function ReactForms() {
        this.myReactForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            mailid: new forms_1.FormControl()
        });
    }
    ReactForms.prototype.GetReactDetails = function () {
        alert('dsd');
        console.log(this.myReactForm.value);
    };
    return ReactForms;
}());
ReactForms = __decorate([
    core_1.Component({
        selector: 'my-React',
        templateUrl: 'app/Employee/ReactiveForms.html',
        styleUrls: ['app/Employee/Employee.Check1.css']
    })
], ReactForms);
exports.ReactForms = ReactForms;
//# sourceMappingURL=ReactiveForms.js.map