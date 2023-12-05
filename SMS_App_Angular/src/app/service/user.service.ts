import { Injectable } from '@angular/core';
import { Student } from '../../module/Student';
import { StudentsService } from './students.service';
import { UserRestService } from './user-rest.service';
import { User } from '../../module/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: boolean = false;
  public students: Student[] = [];
  db_user: User = new User("", "");

  constructor(private s: StudentsService, private userRest: UserRestService) { 
    this.isValidSession();

  }

  performLogin(username: string, password: string) {
    return this.userRest.findUser(username);
  }

  performRegister(rollNo: number, name: string, attempts: number, percentage: number) {
    this.s.addStudent(rollNo, name, attempts, percentage);
  }

  // following methods are maintaing the session of the user
  public createsessionAndStoreValue(username: string, isUserLoggedIn: boolean){
    sessionStorage.setItem('isUserLoggedIn', isUserLoggedIn+'');
    sessionStorage.setItem('username', username);
  }

  public isValidSession(){
    let username = sessionStorage.getItem('username')
    console.log(username);
    if(username=='guest' || username==null){
      this.isUserLoggedIn = false;
    }
    else{
      this.isUserLoggedIn = true;
    }
  }

  public logout(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isUserLoggedIn')
  }

}
