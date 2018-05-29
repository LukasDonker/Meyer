package model.ort;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Anschrift extends ValueObject {

	private String adresse;
	private Integer plz;
	private String ort;
	private Gebiet gebiet;
	
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
	
	@Override
	public String toString() {
		String result = adresse + "\n" + plz + " " + ort;
		return result;
	}
	
}
