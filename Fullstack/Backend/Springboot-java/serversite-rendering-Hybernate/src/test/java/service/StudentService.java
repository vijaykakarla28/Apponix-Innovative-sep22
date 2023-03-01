package service;

import org.springframework.beans.factory.annotation.Autowired;

import model.Student;
import repository.StudentRepositary;

public class StudentService {
	
	@Autowired
	private StudentRepositary repository;

	public Student saveStudent(Student student) {
		// TODO Auto-generated method stub
		return repository.save(student);
	}

}
