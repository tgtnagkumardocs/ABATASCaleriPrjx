import { Component, Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
@Component({
    selector: '',
    templateUrl:''
})

export class ServiveInf {
    getD(): any[] {
        return [{ ID:123,Name:'Jhon'}, {ID:124,Name:'Smith'}]
    }

}