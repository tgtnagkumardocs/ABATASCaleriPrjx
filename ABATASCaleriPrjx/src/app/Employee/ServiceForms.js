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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var ServiceInfo = (function () {
    function ServiceInfo(_http) {
        this._http = _http;
    }
    ServiceInfo.prototype.getMet = function () {
        return this._http.get("https://localhost:44334/api/Emps")
            .map(function (response) { return response.json(); })
            .catch(this._catchError);
    };
    ServiceInfo.prototype._catchError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error");
    };
    return ServiceInfo;
}());
ServiceInfo = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServiceInfo);
exports.ServiceInfo = ServiceInfo;
//return [
//    { EmpId: 101, EmpName: 'Ben Stokess', EmpAddress: 'USA' },
//    { EmpId: 102, EmpName: 'Alen Bolt', EmpAddress: 'UK' },
//    { EmpId: 103, EmpName: 'David Smith', EmpAddress: 'Russia' },
//    { EmpId: 104, EmpName: 'Sandreas Van', EmpAddress: 'China' }]; 
//# sourceMappingURL=ServiceForms.js.map