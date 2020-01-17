package com.doggywood.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.doggywood.entities.Pet;

@Repository
public interface PetRepository extends CrudRepository<Pet, Integer> {

	
	
}
