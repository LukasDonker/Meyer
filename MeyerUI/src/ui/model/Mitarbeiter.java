package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Mitarbeiter extends ValueObject {
	
	private Long mitarbeiternummer;
	private String name;
	private String vorname;
	private String passwort;
	private boolean admin;
	
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
	public Long getMitarbeiternummer() {
		return mitarbeiternummer;
	}
	public void setMitarbeiternummer(Long mitarbeiternummer) {
		this.mitarbeiternummer = mitarbeiternummer;
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
}
