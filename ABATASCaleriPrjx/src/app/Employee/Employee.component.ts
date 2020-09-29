import { Component } from '@angular/core';

@Component({
    selector: 'my-emp',
    templateUrl: 'app/Employee/Employee.component.html',
    styles: ['table{border:double;}']
})


export class EmployeeComponent {
    empFirstName: string = 'Emp Van';
    empLastName: string = 'Emp Strike';
    empServiNum: number = 562;
    
}