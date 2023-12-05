package in.co.vwits.sms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import in.co.vwits.sms.model.Student;

// jpa repository gives lot of built-in methods for CRUD operation which we dont have to implement at all
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	// but we also have a freedom of writing our custom methods
	// we just have to declare the custom methods, we don't have to define them
	// but for custom method w e have to write JPQL on top of respective
	// this is done @Query Annotation
	@Query("SELECT DISTINCT s FROM Student AS s LEFT JOIN FETCH s.subjectsLearning")
	List<Student> findAllWithSubjects();
	
	@Query("FROM Student AS s LEFT JOIN FETCH s.subjectsLearning WHERE s.rollno = :rno")
	Student findOneWithSubjectsLearning(@Param(value = "rno") int rollno);
}
