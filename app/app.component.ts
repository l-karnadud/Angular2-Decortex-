import {Component} from '@angular/core';
import {ContactComponent} from './contacts/contacts.component';
import {FoldersComponent} from './folders/folders.component'
import {ROUTER_DIRECTIVES} from '@angular/router';
//import {RouteConfig} from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [ContactComponent, FoldersComponent, ROUTER_DIRECTIVES]
})
/*
@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactComponent}
])
*/
export class AppComponent {
   // title: string;

    constructor() {
        //this.title = 'Decortex';
    }
}