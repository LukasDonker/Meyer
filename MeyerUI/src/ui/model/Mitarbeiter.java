package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class Mitarbeiter extends ValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
	private String spezialisierung;
	private String gebiet;
	private String name;
	private String vorname;
	private String passwort;
	private boolean admin;
	private boolean disponent;
	
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getVorname() {
		return vorname;
	}
	public void setVorname(String vorname) {
		this.vorname = vorname;
	}
	public String getPasswort() {
		return passwort;
	}
	public void setPasswort(String value) {
		passwort = value;
	}
	
	public String getSpezialisierung() {
		return spezialisierung;
	}
	public void setSpezialisierung(String spezialisierung) {
		this.spezialisierung = spezialisierung;
	}
	public String getGebiet() {
		return gebiet;
	}
	public void setGebiet(String gebiet) {
		this.gebiet = gebiet;
	}
	public boolean isDisponent() {
		return disponent;
	}
	public void setDisponent(boolean disponent) {
		this.disponent = disponent;
	}
	
}
