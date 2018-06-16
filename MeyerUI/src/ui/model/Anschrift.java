package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class Anschrift extends ValueObject {

	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
	private String adresse;
	private Integer plz;
	private String ort;
	private String gebiet;
	
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
	public String getGebiet() {
		return gebiet;
	}
	public void setGebiet(String gebiet) {
		this.gebiet = gebiet;
	}
	
	@Override
	public String toString() {
		String result = adresse + "\n" + plz + " " + ort;
		return result;
	}
	
}
