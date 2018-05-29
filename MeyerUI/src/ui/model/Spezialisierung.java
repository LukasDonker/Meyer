package ui.model;

import javax.persistence.Entity;

import model.common.ConstantValueObject;

@Entity
public class Spezialisierung extends ConstantValueObject {

	private String spezialisierungsname;

	public String getSpezialisierungsname() {
		return spezialisierungsname;
	}

	public void setSpezialisierungsname(String spezialisierungsname) {
		this.spezialisierungsname = spezialisierungsname;
	}
	
}
