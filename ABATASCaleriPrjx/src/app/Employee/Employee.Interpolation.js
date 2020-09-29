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
var InfInterpolation = (function () {
    function InfInterpolation() {
        this.selectedEmpCountRadioButton = 'All';
        this.employee = [
            { Code: '101', Name: 'Ben Stokes', Address: 'USA', Salary: 120000, Dateofbirth: '05/22/2012', Gender: 'Male' },
            { Code: '102', Name: 'Alen Bolt', Address: 'UK', Salary: 728000, Dateofbirth: '02/10/2012', Gender: 'Female' },
            { Code: '103', Name: 'David Smith', Address: 'Russia', Salary: 100000, Dateofbirth: '07/05/2012', Gender: 'Male' },
            { Code: '104', Name: 'Sandreas Van', Address: 'China', Salary: 196000, Dateofbirth: '11/21/2012', Gender: 'Female' },
            { Code: '105', Name: 'Will Forcy', Address: 'Japan', Salary: 960000, Dateofbirth: '10/29/2012', Gender: 'Male' },
            { Code: '106', Name: 'Kendy Tron', Address: 'UK', Salary: 820000, Dateofbirth: '10/20/2012', Gender: 'Male' },
            { Code: '107', Name: 'Malo Wade', Address: 'Italy', Salary: 590000, Dateofbirth: '05/09/2012', Gender: 'Male' },
            { Code: '108', Name: 'Watt Gary', Address: 'Japan', Salary: 150000, Dateofbirth: '10/21/2012', Gender: 'Female' },
            { Code: '109', Name: 'David Kelly', Address: 'Peru', Salary: 710000, Dateofbirth: '05/25/2012', Gender: 'Male' },
            { Code: '110', Name: 'David wally', Address: 'Peru', Salary: 560000, Dateofbirth: '05/06/2012', Gender: 'Male' }
        ];
    }
    InfInterpolation.prototype.getTotalEmployees = function () {
        this.employee = [
            { Code: '101', Name: 'Ben Stokes', Address: 'USA', Salary: 120000, Dateofbirth: '05/22/2012', Gender: 'Male' },
            { Code: '102', Name: 'Alen Bolt', Address: 'UK', Salary: 728000, Dateofbirth: '02/10/2012', Gender: 'Female' },
            { Code: '103', Name: 'David Smith', Address: 'Russia', Salary: 100000, Dateofbirth: '07/05/2012', Gender: 'Male' },
            { Code: '104', Name: 'Sandreas Van', Address: 'China', Salary: 196000, Dateofbirth: '11/21/2012', Gender: 'Female' },
            { Code: '105', Name: 'Will Forcy', Address: 'Japan', Salary: 960000, Dateofbirth: '10/29/2012', Gender: 'Male' },
            { Code: '106', Name: 'Kendy Tron', Address: 'UK', Salary: 820000, Dateofbirth: '10/20/2012', Gender: 'Male' },
            { Code: '107', Name: 'Malo Wade', Address: 'Italy', Salary: 590000, Dateofbirth: '05/09/2012', Gender: 'Male' },
            { Code: '108', Name: 'Watt Gary', Address: 'Japan', Salary: 150000, Dateofbirth: '10/21/2012', Gender: 'Female' },
            { Code: '110', Name: 'David wally', Address: 'Peru', Salary: 560000, Dateofbirth: '05/06/2012', Gender: 'Male' }
        ];
    };
    InfInterpolation.prototype.OnEmpCountRadioBtnChaged = function (getSelectedRadioBtnVal) {
        this.selectedEmpCountRadioButton = getSelectedRadioBtnVal;
    };
    InfInterpolation.prototype.getAllEmployeesCount = function () {
        return this.employee.length;
    };
    InfInterpolation.prototype.getMaleEmployeesCount = function () {
        return this.employee.filter(function (d) { return d.Gender === 'Male'; }).length;
    };
    InfInterpolation.prototype.getFemaleEmployeesCount = function () {
        return this.employee.filter(function (d) { return d.Gender === 'Female'; }).length;
    };
    return InfInterpolation;
}());
InfInterpolation = __decorate([
    core_1.Component({
        selector: 'my-Intr',
        templateUrl: 'app/Employee/Employee.Interpolation.html',
        styleUrls: ['app/Employee/Employee.Interpolation.css']
    }),
    __metadata("design:paramtypes", [])
], InfInterpolation);
exports.InfInterpolation = InfInterpolation;
//# sourceMappingURL=Employee.Interpolation.js.map