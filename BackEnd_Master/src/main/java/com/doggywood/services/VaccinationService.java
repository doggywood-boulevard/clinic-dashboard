package com.doggywood.services;

import java.util.List;

import com.doggywood.entities.Vaccination;

public interface VaccinationService {

	public Vaccination getVaccinationById(int id);
	public Vaccination getVaccinationByName(String name);
	public List<Vaccination> getAllVaccinations();
	public List<Vaccination> getVaccinationsByType(int type);
}
