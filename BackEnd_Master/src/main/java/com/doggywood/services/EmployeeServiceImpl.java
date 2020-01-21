package com.doggywood.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doggywood.entities.Employee;
import com.doggywood.repositories.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository er;
	
	@Override
	public Employee createEmployee(Employee employee) {
		return er.save(employee);
	}

	@Override
	public Employee getEmployeeById(int id) {
		return er.findById(id).get();
		}

	@Override
	public Employee getEmployeeByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Employee> getAllEmployees() {
		return (List<Employee>)er.findAll();
	}

	@Override
	public Employee updatesEmployee(Employee change) {
		return er.save(change);
	}

	@Override
	public boolean deleteEmployee(Employee employee) {
		try {
			er.delete(employee);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true; 
	}
}
