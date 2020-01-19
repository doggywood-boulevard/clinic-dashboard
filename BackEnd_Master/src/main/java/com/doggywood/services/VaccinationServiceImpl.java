package com.doggywood.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doggywood.entities.Vaccination;
import com.doggywood.repositories.VaccinationRepository;

@Service
public class VaccinationServiceImpl implements VaccinationService {
	
	@Autowired
	VaccinationRepository vr;

	@Override
	public Vaccination getVaccinationById(int id) {
		return vr.findById(id).get();
	}

	@Override
	public Vaccination getVaccinationByName(String name) {
		return vr.findByName(name);
	}

	@Override
	public List<Vaccination> getAllVaccinations() {
		return (List<Vaccination>) vr.findAll();
	}

	@Override
	public List<Vaccination> getVaccinationsByType(int type) {
		return vr.findByPetType(type);
	}

}
