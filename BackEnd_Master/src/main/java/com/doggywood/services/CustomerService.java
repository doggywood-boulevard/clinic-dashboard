package com.doggywood.services;

import java.util.List;

import com.doggywood.entities.Customer;


public interface CustomerService {

	public Customer createCustomer(Customer customer);
	public Customer getCustomerById(int id);
	public List<Customer> getAllCustomers();
	public Customer updatesCustomer(Customer change);
	public boolean deleteCustomer(Customer customer);
	
}
