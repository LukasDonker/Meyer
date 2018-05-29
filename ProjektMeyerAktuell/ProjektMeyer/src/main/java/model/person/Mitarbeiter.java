package model.person;

import model.common.ValueObject;

public class Mitarbeiter extends ValueObject {
	
	private Long mitarbeiternummer;
	private String name;
	private String vorname;
	
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
	
}
