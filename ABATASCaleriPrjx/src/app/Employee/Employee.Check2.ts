


import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'my-chk2',
    templateUrl: 'app/Employee/Employee.Check2.html',
    styleUrls: ['app/Employee/Employee.Count.css']

})
export class EmpChk2 {

    @Input() Total: number = 10;
    @Input() Japan: number = 12;
    @Input() UK: number = 15;
    Password: string = "Admin@123";
    Address: string = "USA";


    selectedRadioValue: string = 'Total';
    @Output() emitRef: EventEmitter<string> = new EventEmitter<string>();

    onChangeRadio() {
        this.emitRef.emit(this.selectedRadioValue);
        console.log(this.selectedRadioValue);
    }

    GetData(data: any) {
        console.log(data.value);
        alert("");
    }

}