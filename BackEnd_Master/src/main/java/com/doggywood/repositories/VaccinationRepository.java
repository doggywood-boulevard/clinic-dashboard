package com.doggywood.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.doggywood.entities.Vaccination;

@Repository
public interface VaccinationRepository extends CrudRepository<Vaccination, Integer> {

	Vaccination findByName(String name);
	List<Vaccination> findByPetType(int type);
}
