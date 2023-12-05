import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-spinner-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatProgressSpinnerModule],
  templateUrl: './spinner-dialog.component.html',
  styleUrl: './spinner-dialog.component.css'
})
export class SpinnerDialogComponent {
  constructor(){
    this.loadData();
  }

  showSpinner = false;

  // This is dummy method just to pretend as if we are fetching data from server
  loadData(){
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false;
    },2000)
  }
}
