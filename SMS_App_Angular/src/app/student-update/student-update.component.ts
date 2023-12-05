import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../module/Student';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatButtonModule, MatFormFieldModule,
    MatInputModule, MatDialogModule
  ],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:Student) {

  }

  @Input()
  updatedStudent = new Student(0, '', 0, 0, []);

  // to send data from child to parent, we need to use @Output Decorator
  @Output()
  studentEmitter = new EventEmitter<Student>(); // 1st step
  performUpadte() {
    this.studentEmitter.emit(this.updatedStudent); // 2nd step
  }
}
