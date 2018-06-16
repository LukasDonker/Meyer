package ui.model;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

import model.common.ConstantListHolder;
import model.common.ConstantValueObject;

@Entity
public class Hersteller extends ConstantValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private String Bezeichnung;

	public String getBezeichnung() {
		return Bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		Bezeichnung = bezeichnung;
	}

	@Transient
	public static Collection<Hersteller> getValues() {
		return ConstantListHolder.getListHersteller().values();
	}
	
	@Transient
	public static Hersteller getHerstellerById(String id) {
		return ConstantListHolder.getListHersteller().get(Long.valueOf(id));
	}
	
}
