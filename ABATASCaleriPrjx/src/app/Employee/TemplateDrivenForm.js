"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TemplateForm = (function () {
    function TemplateForm() {
        this.UserName = 'Plunket';
        this.Mail = 'Admin@1254';
    }
    TemplateForm.prototype.GetFormData = function (data) {
        console.log(data.value);
    };
    return TemplateForm;
}());
TemplateForm = __decorate([
    core_1.Component({
        selector: 'my-form',
        templateUrl: 'app/Employee/TemplateDrivenForm.html',
        styleUrls: ['app/Employee/Employee.Check1.css']
    })
], TemplateForm);
exports.TemplateForm = TemplateForm;
//# sourceMappingURL=TemplateDrivenForm.js.map