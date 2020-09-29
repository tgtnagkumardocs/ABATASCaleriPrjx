

import { Component, Input } from '@angular/core';
@Component({
    selector: 'InputView',
    templateUrl:'app/Employee/Employee.InputVar.html'
})

export class InputVarClass {
    @Input() InputSection : any;
}



