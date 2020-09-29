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
var EmployeeCount = (function () {
    function EmployeeCount() {
        this.All = 10;
        this.Male = 4;
        this.Female = 6;
        this.selectedRadioBtnValue = 'All';
        this.emitRef = new core_1.EventEmitter();
    }
    EmployeeCount.prototype.OnRadioBtnSelectionChanged = function () {
        this.emitRef.emit(this.selectedRadioBtnValue);
        console.log(this.selectedRadioBtnValue);
    };
    return EmployeeCount;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCount.prototype, "All", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCount.prototype, "Male", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCount.prototype, "Female", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmployeeCount.prototype, "emitRef", void 0);
EmployeeCount = __decorate([
    core_1.Component({
        selector: 'my-count',
        templateUrl: 'app/Employee/Employee.Count.html',
        styleUrls: ['app/Employee/Employee.Count.css']
    })
], EmployeeCount);
exports.EmployeeCount = EmployeeCount;
//# sourceMappingURL=Employee.Count.js.map