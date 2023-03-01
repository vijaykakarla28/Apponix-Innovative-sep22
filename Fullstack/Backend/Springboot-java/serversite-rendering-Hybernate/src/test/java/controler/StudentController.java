package controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import model.Student;
import service.StudentService;

public class StudentController {
	
	@Autowired
	private StudentService service;


	@RequestMapping("/")
	public Student addstudent() {
		Student student = null;
		student.setName("Uday");
		return service.saveStudent(student);
	}

}
