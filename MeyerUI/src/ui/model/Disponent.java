package ui.model;

import javax.persistence.Entity;

import model.ort.Gebiet;

@Entity
public class Disponent extends Mitarbeiter {

	private Gebiet gebiet;

	public Gebiet getGebiet() {
		return gebiet;
	}

	public void setGebiet(Gebiet gebiet) {
		this.gebiet = gebiet;
	}
	
}
