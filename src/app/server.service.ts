import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Lecturer from './models/Lecturer';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private url='http://localhost:8080/'

  constructor(private http:HttpClient) { 

  }

  saveLecturer(lecturer:Lecturer):void {
    this.http.post(`${this.url}add`,lecturer).pipe(
      catchError(this.handleError("save lecturer"))
    ).subscribe(console.log);
  }


  getLecturers():Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>(this.url).pipe(
      catchError(this.handleError<Lecturer[]>("getLecturers",[]))
    );
  }
  handleError<T>(arg0: string, arg1?: T) {
    return (error:any):Observable<T>=> {
      console.log('server error make sure your server is running');
      console.log(error);
      return of(arg1 as T);
    }
    
  }
  
}
