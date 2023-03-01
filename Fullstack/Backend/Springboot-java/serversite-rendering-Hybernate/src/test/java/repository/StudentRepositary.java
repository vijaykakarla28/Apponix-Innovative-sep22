package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Student;

public interface StudentRepositary extends JpaRepository<Student,Integer> {

	
}
