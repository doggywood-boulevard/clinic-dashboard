package com.doggywood.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 

import com.doggywood.entities.Customer;
//import com.doggywood.entities.Pet;
import com.doggywood.repositories.CustomerRepository; 

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepository cr;
	
	@Override
	public Customer createCustomer(Customer customer) {
		return cr.save(customer);
	}
// GET CUSTOMER
	@Override
	public Customer getCustomerById(int id) {
		return cr.findById(id).get();
		} 
	@Override
	public Customer getCustomerByEmail(String email) {
		return cr.findByEmail(email).get(); 
	}
	@Override
	public Customer getCustomerByEmailAndPassword(String email, String password) {
		return cr.findByEmailAndPassword(email, password).get(); 
	} 
	
// GET ALL CUSTOMERS
	@Override
	public List<Customer> getAllCustomers() {
		return (List<Customer>)cr.findAll();
	}

	@Override
	public Customer updatesCustomer(Customer change) {
		return cr.save(change);
	}

	@Override
	public boolean deleteCustomer(Customer customer) {
		try {
			cr.delete(customer);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true; 
	}


}
