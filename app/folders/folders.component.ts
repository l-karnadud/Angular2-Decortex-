import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES ,Routes} from '@angular/router';
import {AppService} from '../app.service';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {enableProdMode} from '@angular/core';
enableProdMode();

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



    public folders:any[];
    public folders_error:Boolean = false;
    

    /*
    constructor(public router: Router, private http: Http) {
        this.folders = [];
        this.http.get('http://localhost:3000/app/folder/1.json')
            .map(res => res.json())
            .subscribe(
                data => { this.folders = data},
                err => console.error(err),
                () => console.log('done')
            );
    }*/
    constructor(public router: Router, private http: Http, private _appservice: AppService){
         this.folders = ['Ничего','не','работает'];
        //  this._appservice.getFolders().subscribe(
        //     data => {this.folders = data},
        //     err => {this.folders_error = true}
        // );

    }
    // getData(){
    //     this._appservice.getFolders().subscribe(
    //         data => {this.folders = data},
    //         err => {this.folders_error = true}
    //     );
    // }


}