
import { Component } from '@angular/core'
@Component({
    selector: 'my-chk1',
    templateUrl: 'app/Employee/Employee.Check1.html',
    styleUrls: ['app/Employee/Employee.Check1.css']

})
export class EmpChk1{
    studentList: any[];
    constructor() {
        this.studentList = [
            { StudentCode: 'STD141JK',StudentAddress:'Japan'},
            { StudentCode: 'STD142JK', StudentAddress: 'UK' },
            { StudentCode: 'STD143JK', StudentAddress: 'UK' },
            { StudentCode: 'STD144JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD145JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD146JK', StudentAddress: 'Japan' }];
    }
    getAllStudents() {
        this.studentList = [
            { StudentCode: 'STD141JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD142JK', StudentAddress: 'UK' },
            { StudentCode: 'STD143JK', StudentAddress: 'UK' },
            { StudentCode: 'STD144JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD145JK', StudentAddress: 'Japan' },
            { StudentCode: 'STD146JK', StudentAddress: 'Japan' }];
    }    
    getTotalCount() {
        return this.studentList.length;
    }
    getJapanCount() {
        return this.studentList.filter(p => p.StudentAddress === 'Japan').length;

    }
    getUKCount() {
        return this.studentList.filter(p => p.StudentAddress === 'UK').length;
    }

    selectedFilterRadiovalue: string = 'Total';
    applyFilter(getsValue: string) {
        this.selectedFilterRadiovalue = getsValue;
    }
}