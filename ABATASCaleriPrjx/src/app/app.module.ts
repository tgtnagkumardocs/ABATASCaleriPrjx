import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { InfInterpolation } from './Employee/Employee.Interpolation';
import { InputVarClass } from './Employee/Employee.InputVar';
import { OutPtvars } from './Employee/Employee.OutPtVar';
import { EmployeeCount } from './Employee/Employee.Count';
import { EmpChk1 } from './Employee/Employee.Check1';
import { EmpChk2 } from './Employee/Employee.Check2';
import { TemplateForm } from './Employee/TemplateDrivenForm';
import { ReactForms } from './Employee/ReactiveForms';
import { EmployeeService } from './Employee/ServiceInformation';
import { ServiceInfo } from './Employee/ServiceForms';





@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, InfInterpolation, InputVarClass, EmployeeService,OutPtvars, EmployeeCount, EmpChk1, EmpChk2, ReactForms,TemplateForm],
    bootstrap: [AppComponent],
    providers: [ServiceInfo]
})
export class AppModule { }
