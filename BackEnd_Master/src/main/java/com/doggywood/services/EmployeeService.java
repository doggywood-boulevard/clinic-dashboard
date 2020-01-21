package com.doggywood.services;

import java.util.List;

import com.doggywood.entities.Employee;


public interface EmployeeService {

	public Employee createEmployee(Employee employee);
	public Employee getEmployeeById(int id);
	public List<Employee> getAllEmployees();
	public Employee updatesEmployee(Employee change);
	public boolean deleteEmployee(Employee employee);
	Employee getEmployeeByEmail(String email);
	
}
