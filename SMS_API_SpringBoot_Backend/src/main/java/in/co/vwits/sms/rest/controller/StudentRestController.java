package in.co.vwits.sms.rest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.co.vwits.sms.model.Student;
import in.co.vwits.sms.service.StudentService;

@RestController
@RequestMapping(value = "/api/student")
public class StudentRestController {
	
	@Autowired
	private StudentService service;
	
	@GetMapping()
	public List<Student> findAll(){
		return service.findAllWithSubjects();
	}
	
	@GetMapping("/{rollno}")
	public Optional<Student> findByRollNo(@PathVariable int rollno) {
		return service.findOneWithSubjectsLearning(rollno);
	}
	
	@PostMapping
	public ResponseEntity<Student> createNewStudent(@RequestBody Student s) {
		this.service.save(s);
		ResponseEntity<Student> entity = new ResponseEntity<Student>(s,HttpStatus.CREATED);
		return entity;
	}
	
	@DeleteMapping("/{rollno}")
	public void deleteStudentByRollNO(@PathVariable int rollno) {
		this.service.deleteStudent(rollno);
	}
	
	@PutMapping("/{rollno}")
	public Student updateStudentByRollNo(@RequestBody Student s) {
		this.service.updateByRollNo(s);
		return s;
	}
	
}
