import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { SpinnerDialogComponent } from '../spinner-dialog/spinner-dialog.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private user: UserService, private r: Router,private d:MatDialog) {
    user.isValidSession();
  }

  performLogin() {
    this.user.performLogin(this.username, this.password).subscribe(
      res => {
        if (this.username == res.username && this.password == res.password) {
          this.user.isUserLoggedIn = true;
          this.message = 'Login Successful';
          this.user.createsessionAndStoreValue(res.username, true)
          // show students view to user
          this.r.navigate(['students']); // this is programatic navigation
        }
        else {
          this.user.isUserLoggedIn = false;
          this.message = 'Login Failed';
          this.user.createsessionAndStoreValue('guest', false)
        }
      }
    );
  }

  openDialog(){
    this.d.open(SpinnerDialogComponent);
  }
}
