import {Component} from '@angular/core';
import {ContactComponent} from './contacts/contacts.component';
import {FoldersComponent} from './folders/folders.component'
//import {ROUTER_DIRECTIVES} from '@angular/router';
//import {RouteConfig} from '@angular/router';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

 @Routes([
 {path: '/contacts', component: ContactComponent},
     {path: '/folders', component: FoldersComponent}
 ])
export class AppComponent {
   // title: string;

    constructor(public router: Router) {


    }
}