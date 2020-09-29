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
var EmpChk1 = (function () {
    function EmpChk1() {
        this.selectedFilterRadiovalue = 'Total';
        this.studentList = [
            { StudentCode: 'STD141JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD142JK', StudentAddress: 'UK' },
            { StudentCode: 'STD143JK', StudentAddress: 'UK' },
            { StudentCode: 'STD144JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD145JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD146JK', StudentAddress: 'Japan' }
        ];
    }
    EmpChk1.prototype.getAllStudents = function () {
        this.studentList = [
            { StudentCode: 'STD141JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD142JK', StudentAddress: 'UK' },
            { StudentCode: 'STD143JK', StudentAddress: 'UK' },
            { StudentCode: 'STD144JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD145JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD146JK', StudentAddress: 'Japan' }
        ];
    };
    EmpChk1.prototype.getTotalCount = function () {
        return this.studentList.length;
    };
    EmpChk1.prototype.getJapanCount = function () {
        return this.studentList.filter(function (p) { return p.StudentAddress === 'Japan'; }).length;
    };
    EmpChk1.prototype.getUKCount = function () {
        return this.studentList.filter(function (p) { return p.StudentAddress === 'UK'; }).length;
    };
    EmpChk1.prototype.applyFilter = function (getsValue) {
        this.selectedFilterRadiovalue = getsValue;
    };
    return EmpChk1;
}());
EmpChk1 = __decorate([
    core_1.Component({
        selector: 'my-chk1',
        templateUrl: 'app/Employee/Employee.Check1.html',
        styleUrls: ['app/Employee/Employee.Check1.css']
    }),
    __metadata("design:paramtypes", [])
], EmpChk1);
exports.EmpChk1 = EmpChk1;
//# sourceMappingURL=Employee.Check1.js.map