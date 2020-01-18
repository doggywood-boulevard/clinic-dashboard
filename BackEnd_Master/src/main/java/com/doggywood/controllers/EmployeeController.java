package com.doggywood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.doggywood.entities.Employee;
import com.doggywood.services.EmployeeService;


@RestController
public class EmployeeController {


	@Autowired
	EmployeeService es;
	
	@RequestMapping(value = "/employees", method = RequestMethod.POST, consumes = "application/json")
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
	public Employee createEmployee(@RequestBody Employee employee) {
		return es.createEmployee(employee);
	}
	
	@GetMapping(value = "/employees/{id}")
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
	public Employee getEmployeeById(@PathVariable("id") int id) {
		return es.getEmployeeById(id);
	}

	@GetMapping(value = "/employees")
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
	public List<Employee> getAllEmployees() {
		return es.getAllEmployees();
	}

	@PutMapping(value = "/employees", consumes = "application/json")
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
	public Employee updatesEmployee(Employee change) {
		return es.updatesEmployee(change);
	}

	@DeleteMapping(value = "/employees/{id}")
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
	public boolean deleteEmployee(@PathVariable("id") int id) {
		try {
			es.deleteEmployee(es.getEmployeeById(id));
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	
}
