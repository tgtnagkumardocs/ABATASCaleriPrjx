
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-count',
    templateUrl: 'app/Employee/Employee.Count.html',
    styleUrls: ['app/Employee/Employee.Count.css']
})

export class EmployeeCount {

    @Input() All: number = 10;
    @Input() Male: number = 4;
    @Input() Female: number = 6;


    selectedRadioBtnValue: string = 'All';
    @Output() emitRef: EventEmitter<string> = new EventEmitter<string>();

    OnRadioBtnSelectionChanged() {
        this.emitRef.emit(this.selectedRadioBtnValue);
        console.log(this.selectedRadioBtnValue);
    }

  

    
}

