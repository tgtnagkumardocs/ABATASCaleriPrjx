

import { Component } from '@angular/core'
@Component({
    selector: 'my-form',
    templateUrl: 'app/Employee/TemplateDrivenForm.html',
    styleUrls: ['app/Employee/Employee.Check1.css']

})
export class TemplateForm {

    UserName: string = 'Plunket';
    Mail: string = 'Admin@1254';

   
    GetFormData(data: any) {
        console.log(data.value);       
    }
}


