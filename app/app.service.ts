  import {Injectable} from '@angular/core';
  import {Http, Response} from '@angular/http';
  import {Observable} from 'rxjs/Rx';

 @Injectable()
 export class AppService{

      constructor(private http: Http) { }

      // Uses http.get() to load a single JSON file
      getFolders() {
          return this.http.get('http://localhost:3000/app/folder/1.json').map((res:Response) => res.json());
      }

  }