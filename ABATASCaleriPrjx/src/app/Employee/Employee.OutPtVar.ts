
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'OutPtView',
    templateUrl: 'app/Employee/Employee.OutPtVar.html'
})

export class OutPtvars {
    @Output() clickEmitref = new EventEmitter();

    GetChildDetails() {
        alert('child called.....!');
        this.clickEmitref.emit();
    }
}



