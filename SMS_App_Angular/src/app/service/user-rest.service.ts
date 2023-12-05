import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../module/User';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  readonly BASE_URL = 'http://localhost:8080/api/user';

  constructor(private http:HttpClient) { }

  findUser(username:string): Observable<User>{
    return this.http.get<User>(this.BASE_URL +"/"+username);
  }

}
