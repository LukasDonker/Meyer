package model.person;

import model.ort.Gebiet;

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
