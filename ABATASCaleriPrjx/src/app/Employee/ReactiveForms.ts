

import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
@Component({
    selector: 'my-React',
    templateUrl: 'app/Employee/ReactiveForms.html',
    styleUrls: ['app/Employee/Employee.Check1.css']

})
export class ReactForms { 
    myReactForm = new FormGroup({
        username: new FormControl(),
        mailid: new FormControl()
    });

    GetReactDetails() {
        alert('dsd');
        console.log(this.myReactForm.value);
    }
    
}


