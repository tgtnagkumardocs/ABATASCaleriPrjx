
import { Component } from '@angular/core';
@Component({
    selector: 'my-Intr',
    templateUrl: 'app/Employee/Employee.Interpolation.html',
    styleUrls: ['app/Employee/Employee.Interpolation.css']
})
export class InfInterpolation {    
   
    selectedEmpCountRadioButton: string = 'All';
        employee: any[];
        constructor() {
                this.employee = [
                    { Code: '101', Name: 'Ben Stokes', Address: 'USA',Salary: 120000, Dateofbirth:'05/22/2012',Gender:'Male'},
                    { Code: '102', Name: 'Alen Bolt', Address: 'UK', Salary: 728000, Dateofbirth: '02/10/2012', Gender: 'Female' },
                    { Code: '103', Name: 'David Smith', Address: 'Russia', Salary: 100000, Dateofbirth: '07/05/2012', Gender: 'Male' },
                    { Code: '104', Name: 'Sandreas Van', Address: 'China', Salary: 196000, Dateofbirth: '11/21/2012', Gender: 'Female' },
                    { Code: '105', Name: 'Will Forcy', Address: 'Japan', Salary: 960000, Dateofbirth: '10/29/2012', Gender: 'Male' },
                    { Code: '106', Name: 'Kendy Tron', Address: 'UK', Salary: 820000, Dateofbirth: '10/20/2012', Gender: 'Male' },
                    { Code: '107', Name: 'Malo Wade', Address: 'Italy', Salary: 590000, Dateofbirth: '05/09/2012', Gender: 'Male' },
                    { Code: '108', Name: 'Watt Gary', Address: 'Japan', Salary: 150000, Dateofbirth: '10/21/2012', Gender: 'Female' },
                    { Code: '109', Name: 'David Kelly', Address: 'Peru', Salary: 710000, Dateofbirth: '05/25/2012', Gender: 'Male' },
                    { Code: '110', Name: 'David wally', Address: 'Peru', Salary: 560000, Dateofbirth: '05/06/2012', Gender: 'Male' }];
        }
        getTotalEmployees(): void {
            this.employee = [
                { Code: '101', Name: 'Ben Stokes', Address: 'USA', Salary: 120000, Dateofbirth: '05/22/2012', Gender: 'Male' },
                { Code: '102', Name: 'Alen Bolt', Address: 'UK', Salary: 728000, Dateofbirth: '02/10/2012', Gender: 'Female' },
                { Code: '103', Name: 'David Smith', Address: 'Russia', Salary: 100000, Dateofbirth: '07/05/2012', Gender: 'Male' },
                { Code: '104', Name: 'Sandreas Van', Address: 'China', Salary: 196000, Dateofbirth: '11/21/2012', Gender: 'Female' },
                { Code: '105', Name: 'Will Forcy', Address: 'Japan', Salary: 960000, Dateofbirth: '10/29/2012', Gender: 'Male' },
                { Code: '106', Name: 'Kendy Tron', Address: 'UK', Salary: 820000, Dateofbirth: '10/20/2012', Gender: 'Male' },
                { Code: '107', Name: 'Malo Wade', Address: 'Italy', Salary: 590000, Dateofbirth: '05/09/2012', Gender: 'Male' },
                { Code: '108', Name: 'Watt Gary', Address: 'Japan', Salary: 150000, Dateofbirth: '10/21/2012', Gender: 'Female' },
                { Code: '110', Name: 'David wally', Address: 'Peru', Salary: 560000, Dateofbirth: '05/06/2012', Gender: 'Male' }];

    }
    OnEmpCountRadioBtnChaged(getSelectedRadioBtnVal: string) {
        this.selectedEmpCountRadioButton = getSelectedRadioBtnVal;
    }
    getAllEmployeesCount() {
        return this.employee.length;
    }

    getMaleEmployeesCount() {
        return this.employee.filter(d => d.Gender === 'Male').length;
    }
    getFemaleEmployeesCount() {
        return this.employee.filter(d => d.Gender === 'Female').length;
    }
       
}



 