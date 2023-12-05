import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../module/Student';
import { StudentsService } from '../service/students.service';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialog } from "@angular/material/dialog";
import { StudentRestService } from '../service/student-rest.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    CommonModule, StudentUpdateComponent,
    MatButtonModule, MatRadioModule
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  public students: Student[] = [];
  message: string = '';
  colorClass: string = '';

  selectedStudent!: Student;
  isUpdate: boolean = false;

  constructor(private service: StudentRestService, private dialog: MatDialog) {
    this.showStudents();
  }

  showStudents() {
    this.service.findAllStudents().subscribe(
      res => {
        this.students = res;
        console.log(res);
      }
    );
  }

  deleteStudentByRollNo(rollno: number) {
    this.service.deleteByRollNo(rollno).subscribe(
      success => {
        this.showStudents();
        console.log("Student Deleted with Rollno: " + rollno);
      }
    );
  }

  sortByPercent() {
    this.students.sort((a, b) => b.percentage - a.percentage);
  }

  sortByAttempts() {
    this.students.sort((a, b) => a.numberOfAttempts - b.numberOfAttempts);
  }

  sortByNoOfSubjects() {
    this.students.sort((a, b) => a.subjectsLearning.length - b.subjectsLearning.length)
  }

  deleteStudent(rollno: number) {
    if (confirm("Delete the Student with Roll No:" + rollno)) {
      this.students = this.students.filter(s => s.rollno != rollno);
      this.message = 'Record Delete :)';
      this.colorClass = 'success';
    }
    else {
      this.message = 'Deletion Cancled !';
      this.colorClass = 'error';
    }
  }

  updateStudent(s: Student) {
    console.log(s);
    let dref = this.dialog.open(StudentUpdateComponent, { data: s })
    dref.afterClosed().subscribe(res => {
      //this.selectedStudent = s;
      this.service.updateStudent(res).subscribe(
        success => console.log("updated")
      );
      this.isUpdate = true;
    })
  }

  doUpdate(updatedStudent: Student) {
    // map is built-in function of javascript that transform every element of array
    // which is exactly similar to lambda function and return new array
    let modifiedStudents = this.students.map(s => {
      if (s.rollno == updatedStudent.rollno) {
        // following line is make use of spread operator
        // spread operator is added in ES6
        // using follwoing line we are changing the value of attemps field
        return { ...s, numberOfAttempts: updatedStudent.numberOfAttempts }
      }
      else {
        return s;
      }
    });

    this.students = modifiedStudents;
    // this.isUpdate = false;
  }

}
