package ui.model;

import javax.persistence.Entity;

import model.ort.Gebiet;

@Entity
public class Techniker extends Mitarbeiter {
	
	private Spezialisierung spezialisierung;
	private Gebiet gebiet;
	
	public Spezialisierung getSpezialisierung() {
		return spezialisierung;
	}
	public void setSpezialisierung(Spezialisierung spezialisierung) {
		this.spezialisierung = spezialisierung;
	}
	public Gebiet getGebiet() {
		return gebiet;
	}
	public void setGebiet(Gebiet gebiet) {
		this.gebiet = gebiet;
	}
	
}
