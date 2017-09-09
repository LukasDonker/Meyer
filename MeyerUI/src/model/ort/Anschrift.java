package model.ort;

import model.common.ValueObject;

public class Anschrift extends ValueObject {

	private String name;
	private String adresse;
	private Integer plz;
	private String ort;
	private Gebiet gebiet;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Integer getPlz() {
		return plz;
	}
	public void setPlz(Integer plz) {
		this.plz = plz;
	}
	public String getOrt() {
		return ort;
	}
	public void setOrt(String ort) {
		this.ort = ort;
	}
	public Gebiet getGebiet() {
		return gebiet;
	}
	public void setGebiet(Gebiet gebiet) {
		this.gebiet = gebiet;
	}
	
}
