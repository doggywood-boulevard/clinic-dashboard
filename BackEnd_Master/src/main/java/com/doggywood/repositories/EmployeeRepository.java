package com.doggywood.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.doggywood.entities.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

}
