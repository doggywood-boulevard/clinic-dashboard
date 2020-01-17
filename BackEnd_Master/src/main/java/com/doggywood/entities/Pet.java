package com.doggywood.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Pet {

	@Id
	@GeneratedValue
	@Column(name = "P_ID")
	private int id;
	
	@Column(name = "cId")
	private int cId;
	
	@Column(name = "P_NAME")
	private String petName;
	
	@Column(name = "DOB")
	private String birthDate;
	
	@Column(name = "P_WEIGHT")
	private int weight;
	
	@Column(name = "P_TYPE")
	private int type;
	
	@Column(name = "P_BREED")
	private String breed;
	
	@Column(name = "P_DESCRIPTION")
	private String Description;

	public Pet(int id, int cId, String petName, String birthDate, int weight, int type, String breed,
			String description) {
		super();
		this.id = id;
		this.cId = cId;
		this.petName = petName;
		this.birthDate = birthDate;
		this.weight = weight;
		this.type = type;
		this.breed = breed;
		Description = description;
	}

	public Pet(int cId, String petName, String birthDate, int weight, int type, String breed, String description) {
		super();
		this.cId = cId;
		this.petName = petName;
		this.birthDate = birthDate;
		this.weight = weight;
		this.type = type;
		this.breed = breed;
		Description = description;
	}

	public Pet() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getcId() {
		return cId;
	}

	public void setcId(int cId) {
		this.cId = cId;
	}

	public String getPetName() {
		return petName;
	}

	public void setPetName(String petName) {
		this.petName = petName;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	@Override
	public String toString() {
		return "Pet [id=" + id + ", cId=" + cId + ", petName=" + petName + ", birthDate=" + birthDate + ", weight="
				+ weight + ", type=" + type + ", breed=" + breed + ", Description=" + Description + "]";
	}
	
	
	
}
