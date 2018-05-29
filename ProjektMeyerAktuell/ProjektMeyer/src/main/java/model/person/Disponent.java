package model.person;

import model.ort.Gebiet;

public class Disponent extends Mitarbeiter {

	private Gebiet gebiet;

	public Gebiet getGebiet() {
		return gebiet;
	}

	public void setGebiet(Gebiet gebiet) {
		this.gebiet = gebiet;
	}
	
}
