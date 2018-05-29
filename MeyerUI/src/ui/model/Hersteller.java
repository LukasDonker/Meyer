package ui.model;

import java.util.Collection;

import javax.persistence.Entity;

import model.common.ConstantListHolder;
import model.common.ConstantValueObject;

@Entity
public class Hersteller extends ConstantValueObject {

	private String Bezeichnung;

	public String getBezeichnung() {
		return Bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		Bezeichnung = bezeichnung;
	}

	public static Collection<Hersteller> getValues() {
		return ConstantListHolder.getListHersteller().values();
	}
	
	public static Hersteller getHerstellerById(String id) {
		return ConstantListHolder.getListHersteller().get(Long.valueOf(id));
	}
	
}
