
import { Injectable } from '@angular/core';
import { IEmployee } from './EmpInt'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { _catch } from 'rxjs/operator/catch';
@Injectable()
export class ServiceInfo {

    constructor(private _http: Http) {
        
    }
    getMet() {        
        return this._http.get("https://localhost:44334/api/Emps")
            .map((response: Response) => response.json())
            .catch(this._catchError);        
    }
    _catchError(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }        
}

export class ServiceData {

    constructor(private _htp: Http) {
          
    }
    getInsert() {
        return this._htp.get("https://localhost:44334/api/Emps")
            .map((response: Response) => response.json())
            .catch(this._catchedError);
    }
    _catchedError(error: Response) {
        return Observable.throw(error || "server Error" );
    }
}







        //return [
        //    { EmpId: 101, EmpName: 'Ben Stokess', EmpAddress: 'USA' },
        //    { EmpId: 102, EmpName: 'Alen Bolt', EmpAddress: 'UK' },
        //    { EmpId: 103, EmpName: 'David Smith', EmpAddress: 'Russia' },
        //    { EmpId: 104, EmpName: 'Sandreas Van', EmpAddress: 'China' }];