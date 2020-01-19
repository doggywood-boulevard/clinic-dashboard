package com.doggywood.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Vaccination {

	@Id
	@GeneratedValue
	@Column(name = "v_id")
	private int id;
	
	@Column(name = "v_name")
	private String name;
	
	@Column(name = "v_time")
	private int time;
	
	@Column(name = "p_type")
	private int petType;

	public Vaccination() {
		super();
	}

	public Vaccination(int id, String name, int time, int petType) {
		super();
		this.id = id;
		this.name = name;
		this.time = time;
		this.petType = petType;
	}

	public Vaccination(String name, int time, int petType) {
		super();
		this.name = name;
		this.time = time;
		this.petType = petType;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public int getPetType() {
		return petType;
	}

	public void setPetType(int petType) {
		this.petType = petType;
	}

	@Override
	public String toString() {
		return "Vaccination [id=" + id + ", name=" + name + ", time=" + time + ", petType=" + petType + "]";
	}
	
}
