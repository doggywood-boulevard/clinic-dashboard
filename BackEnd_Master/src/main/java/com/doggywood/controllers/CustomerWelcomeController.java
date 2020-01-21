package com.doggywood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.doggywood.entities.CustomerWelcomeBean;
import com.doggywood.entities.Pet;
import com.doggywood.entities.Customer; 
import com.doggywood.services.CustomerService;


@CrossOrigin(origins = "*")
@RestController
public class CustomerWelcomeController {
	
	@Autowired
	CustomerService cs;

	// CUSTOMER LANDING
	@GetMapping(value = "/customer-welcome")
	public String  customerWelcome() {
		return ("Welcome to Doggywood");
	}
// CUSTOMER BEAN LANDING 
	@GetMapping(value = "/customer-welcome-bean")
	public CustomerWelcomeBean customerWelcomBean() {
		return new CustomerWelcomeBean("Welcome to Doggywood");
	}
//	 CUSTOMER BEAN LANDING - get info
//customer-welcome/value-variable/
	@GetMapping(value = "/customer-welcome/{email}")
	public CustomerWelcomeBean customerWelcomeBean(@PathVariable String email) {
		return new CustomerWelcomeBean(String.format("Welcome to Doggywood, %s!", email));
	}

//customer-welcom/value-variable/
	@GetMapping(value = "/customer-welcome/profile/{email}")
	public Customer customerProfile(@PathVariable String email) {
		return cs.getCustomerByEmail(email);// .toString();
	}
 
	 
	@PostMapping(value = "/customer-welcome/register")
	public boolean registerCustomer(@RequestBody Customer customer) {
		if (cs.getCustomerByEmailAndPassword(customer.getEmail(), customer.getPassword()) != null) {
			return true;
		} else {
			return false;
		} 
	};
	 /// TEMPORARY PASSWORD THRU PARAMS    this testing through params....
	@GetMapping(value = "/customer-login/")//{email}/{password}
//	public Customer loginCustomer(@RequestParam String email, @RequestParam String password ) {
	public String loginCustomer(@RequestParam String email, @RequestParam String password ) {
			if (email != null && password != null) {
				return cs.getCustomerByEmailAndPassword(email, password).toString();
//				return cs.getCustomerByEmailAndPassword(email, password);
			}
			return null;
	};
 

}
