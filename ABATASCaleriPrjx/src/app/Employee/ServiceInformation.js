"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ServiceForms_1 = require("./ServiceForms");
var EmployeeService = (function () {
    function EmployeeService(refVar) {
        this.refVar = refVar;
    }
    EmployeeService.prototype.ngOnInit = function () {
        var _this = this;
        this.refVar.getMet().subscribe(function (empData) { return _this.employee = empData; }, function (resError) { return _this.errorMsg = resError; });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Component({
        selector: 'my-service',
        templateUrl: 'app/Employee/ServiceInformation.html',
        styleUrls: ['app/Employee/Employee.Count.css']
    }),
    __metadata("design:paramtypes", [ServiceForms_1.ServiceInfo])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//this.employee = this.refVar.getMet();
//# sourceMappingURL=ServiceInformation.js.map