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
var EmpChk2 = (function () {
    function EmpChk2() {
        this.Total = 10;
        this.Japan = 12;
        this.UK = 15;
        this.Password = "Admin@123";
        this.Address = "USA";
        this.selectedRadioValue = 'Total';
        this.emitRef = new core_1.EventEmitter();
    }
    EmpChk2.prototype.onChangeRadio = function () {
        this.emitRef.emit(this.selectedRadioValue);
        console.log(this.selectedRadioValue);
    };
    EmpChk2.prototype.GetData = function (data) {
        console.log(data.value);
        alert("");
    };
    return EmpChk2;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmpChk2.prototype, "Total", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmpChk2.prototype, "Japan", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmpChk2.prototype, "UK", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmpChk2.prototype, "emitRef", void 0);
EmpChk2 = __decorate([
    core_1.Component({
        selector: 'my-chk2',
        templateUrl: 'app/Employee/Employee.Check2.html',
        styleUrls: ['app/Employee/Employee.Count.css']
    })
], EmpChk2);
exports.EmpChk2 = EmpChk2;
//# sourceMappingURL=Employee.Check2.js.map