package com.doggywood.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class VaccRecord {

	@Id
	@GeneratedValue
	@Column(name = "r_id")
	private int id;

	@Column(name = "p_id")
	private int petId;

	@Column(name = "c_id")
	private int custId;

	@Column(name = "e_id")
	private int empId;

	@Column(name = "v_id")
	private int vaccId;

	@Column(name = "a_id")
	private int apptId;

	public VaccRecord() {
		super();
	}

	public VaccRecord(int id, int petId, int custId, int empId, int vaccId, int apptId) {
		super();
		this.id = id;
		this.petId = petId;
		this.custId = custId;
		this.empId = empId;
		this.vaccId = vaccId;
		this.apptId = apptId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPetId() {
		return petId;
	}

	public void setPetId(int petId) {
		this.petId = petId;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public int getVaccId() {
		return vaccId;
	}

	public void setVaccId(int vaccId) {
		this.vaccId = vaccId;
	}

	public int getApptId() {
		return apptId;
	}

	public void setApptId(int apptId) {
		this.apptId = apptId;
	}

	@Override
	public String toString() {
		return "VaccRecord [id=" + id + ", petId=" + petId + ", custId=" + custId + ", empId=" + empId + ", vaccId="
				+ vaccId + ", apptId=" + apptId + "]";
	}

}
