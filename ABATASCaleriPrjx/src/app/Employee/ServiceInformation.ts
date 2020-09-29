
import { Component, OnInit} from '@angular/core';
import { IEmployee } from './EmpInt';
import { ServiceInfo } from './ServiceForms';

@Component({
    selector: 'my-service',
    templateUrl: 'app/Employee/ServiceInformation.html',
    styleUrls: ['app/Employee/Employee.Count.css']
}) 

export class EmployeeService {

    employee: [];      
    errorMsg: string;
    constructor(public refVar: ServiceInfo) {
        
        
    }
 
    ngOnInit() {
        this.refVar.getMet().subscribe(empData => this.employee = empData,  
            resError => this.errorMsg = resError);       
    }
} 


