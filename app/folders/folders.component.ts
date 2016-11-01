import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES ,Routes} from '@angular/router';



@Component({
    selector: 'my-folders',
    templateUrl: './app/folders/folders.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/folders', component: FoldersComponent}
])

export class FoldersComponent {


    constructor(public router: Router) {

    }
}