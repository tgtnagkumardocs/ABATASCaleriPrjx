"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var Employee_component_1 = require("./Employee/Employee.component");
var Employee_Interpolation_1 = require("./Employee/Employee.Interpolation");
var Employee_InputVar_1 = require("./Employee/Employee.InputVar");
var Employee_OutPtVar_1 = require("./Employee/Employee.OutPtVar");
var Employee_Count_1 = require("./Employee/Employee.Count");
var Employee_Check1_1 = require("./Employee/Employee.Check1");
var Employee_Check2_1 = require("./Employee/Employee.Check2");
var TemplateDrivenForm_1 = require("./Employee/TemplateDrivenForm");
var ReactiveForms_1 = require("./Employee/ReactiveForms");
var ServiceInformation_1 = require("./Employee/ServiceInformation");
var ServiceForms_1 = require("./Employee/ServiceForms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, Employee_component_1.EmployeeComponent, Employee_Interpolation_1.InfInterpolation, Employee_InputVar_1.InputVarClass, ServiceInformation_1.EmployeeService, Employee_OutPtVar_1.OutPtvars, Employee_Count_1.EmployeeCount, Employee_Check1_1.EmpChk1, Employee_Check2_1.EmpChk2, ReactiveForms_1.ReactForms, TemplateDrivenForm_1.TemplateForm],
        bootstrap: [app_component_1.AppComponent],
        providers: [ServiceForms_1.ServiceInfo]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map