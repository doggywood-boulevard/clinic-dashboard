package com.doggywood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.doggywood.entities.Vaccination;
import com.doggywood.services.VaccinationService;

@CrossOrigin(origins = "*")
@RestController
public class VaccinationController {

	@Autowired
	VaccinationService vs;
	
	@GetMapping(value = "/vaccinations")
	public List<Vaccination> getAllVaccinations() {
		return vs.getAllVaccinations();
	}
	
	@GetMapping(value = "/vaccinations/{id}")
	public Vaccination getVaccinationById(@PathVariable("id") int id) {
		return vs.getVaccinationById(id);
	}
}
