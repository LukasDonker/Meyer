package model.ort;

import javax.persistence.Entity;

import model.common.ConstantValueObject;

@Entity
public class Gebiet extends ConstantValueObject {

	private String gebietsname;

	public String getGebietsname() {
		return gebietsname;
	}

	public void setGebietsname(String gebietsname) {
		this.gebietsname = gebietsname;
	}
	
}
