package com.doggywood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.CrossOrigin;
>>>>>>> d6ebe624ebb154d332fac8a41a792960faf03814
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.doggywood.entities.Pet;
import com.doggywood.services.PetService;

@RestController
public class PetController {

	@Autowired
	PetService ps;
	
	@RequestMapping(value = "/pets", method = RequestMethod.POST, consumes = "application/json")
<<<<<<< HEAD
=======
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
>>>>>>> d6ebe624ebb154d332fac8a41a792960faf03814
	public Pet createPet(@RequestBody Pet pet) {
		return ps.createPet(pet);
	}
	
	@GetMapping(value = "/pets/{id}")
<<<<<<< HEAD
=======
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
>>>>>>> d6ebe624ebb154d332fac8a41a792960faf03814
	public Pet getPetById(@PathVariable("id") int id) {
		return ps.getPetById(id);
	}

	@GetMapping(value = "/pets")
<<<<<<< HEAD
=======
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
>>>>>>> d6ebe624ebb154d332fac8a41a792960faf03814
	public List<Pet> getAllPets() {
		return ps.getAllPets();
	}

	@PutMapping(value = "/pets", consumes = "application/json")
<<<<<<< HEAD
=======
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
>>>>>>> d6ebe624ebb154d332fac8a41a792960faf03814
	public Pet updatesPet(Pet change) {
		return ps.updatesPet(change);
	}

	@DeleteMapping(value = "/pets", consumes = "application/json")
<<<<<<< HEAD
=======
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
>>>>>>> d6ebe624ebb154d332fac8a41a792960faf03814
	public boolean deletePet(Pet pet) {
		try {
			ps.deletePet(pet);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	
	//Come back to this to provide restfull route
	@GetMapping(value = "pets/customer/{cid}")
<<<<<<< HEAD
=======
//	@CrossOrigin(origins = "http://localhost:8080")
	@CrossOrigin(origins = "*")
>>>>>>> d6ebe624ebb154d332fac8a41a792960faf03814
	public List<Pet> getAllPetsByCustomer(int c_id) {
		return ps.getAllPetsByCustomer(c_id);
	}
	
	
	
	
	
	
	
}
