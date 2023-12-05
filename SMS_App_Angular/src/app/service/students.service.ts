import { Injectable } from '@angular/core';
import { Student } from '../../module/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public students:Student[] =[];
  constructor() { 
    let s1 = new Student(1,"Nivasan",5,87.5,["Java","Python"]);
    let s2 = new Student(2,"Jayes",1,90.5,["JavaScprit","C++","Python"]);
    let s3 = new Student(3,"Navin",4,77.5,["Java","Python"]);
    let s4 = new Student(4,"Mano",3,83.7,["Java","Python"]);
    let s5 = new Student(5,"Mani",2,97.5,["Java","Python"]);
    this.students.push(s1);
    this.students.push(s2);
    this.students.push(s3);
    this.students.push(s4);
    this.students.push(s5);
  } 

  findAllStudents(){
    return this.students;
  }

  addStudent(rollNo:number, name:string, attempts:number, percentage:number){
    let s = new Student(rollNo, name, attempts, percentage,["Java","Python"]);
    this.students.push(s);
  }
}
