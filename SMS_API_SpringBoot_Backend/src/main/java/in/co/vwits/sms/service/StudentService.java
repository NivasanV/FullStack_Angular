package in.co.vwits.sms.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import in.co.vwits.model.exception.StudentNotFoundException;
import in.co.vwits.sms.model.Student;

public interface StudentService {

	/**
	 * DOCUMENTATION Comment find all the student details who score more than given
	 * percentage
	 * 
	 * @parameter percentage
	 * @return java.util.List<Student>
	 */
	List<Student> findAllStudentsScoredMoreThan(double percentage);

	List<Student> findAllStudentsScoredLessThan(double percentage, int attempts);

	long findTotalCountofStudentsStartsWith(String s);

	List<Student> findAllStudentsStartsWith(String s);

	List<Student> findAllStudentSortedByPercentage();

	List<String> findStudentNameWhoScoredMoreThanGivenPercentage(double percentage);

	List<Student> findAllStudentsLearningSpecificSubject(String subject);

	List<Student> findAllStudentsBornBeforeSpecificDate(LocalDate SpecificDate);

	long findStudentsCountBornAfterSpecificDate(LocalDate SpecificDate);

	List<Student> findAllStudentsBornBetweenSpecificDates(LocalDate startDate, LocalDate endDate);

	Map<Boolean, List<Student>> partioningStudentsBasedOnMarks(double mark);

	long findUniqueSubjects();

	// Find All
	List<Student> findAll();

	// Create
	void save(Student s);

	// Find
	Optional<Student> findByRollNo(int rollno) throws StudentNotFoundException;

	// delete
	void deleteStudent(int rollno);

	void updateMarkByRollNo(int rollno, double updateMark);

	void updateByRollNo(Student ss);
	
	public List<Student> findAllWithSubjects();
	
	public Optional<Student> findOneWithSubjectsLearning(int rollno);

}