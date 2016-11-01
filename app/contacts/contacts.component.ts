import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES ,Routes} from '@angular/router';



@Component({
    selector: 'my-contacts',
    templateUrl: './app/contacts/contacts.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/contacts', component: ContactComponent}
])

export class ContactComponent {


    constructor(public router: Router) {

    }
}