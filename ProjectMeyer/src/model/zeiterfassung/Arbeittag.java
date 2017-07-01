package model.zeiterfassung;

import java.util.List;

import model.common.ValueObject;
import model.person.Techniker;

public class Arbeittag extends ValueObject {

	private Techniker techniker;
	private List<Zeit> listZeiten;
	private String begruendungen;
	
	public Techniker getTechniker() {
		return techniker;
	}
	public void setTechniker(Techniker techniker) {
		this.techniker = techniker;
	}
	public List<Zeit> getListZeiten() {
		return listZeiten;
	}
	public void setListZeiten(List<Zeit> listZeiten) {
		this.listZeiten = listZeiten;
	}
	public String getBegruendungen() {
		return begruendungen;
	}
	public void setBegruendungen(String begruendungen) {
		this.begruendungen = begruendungen;
	}
}
