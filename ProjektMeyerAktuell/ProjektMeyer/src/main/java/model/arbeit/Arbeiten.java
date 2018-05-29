package model.arbeit;

import java.util.List;

import model.common.ValueObject;

public class Arbeiten extends ValueObject {

	private String bericht;
	private List<Stoerung> listStoerung;
	
	public String getBericht() {
		return bericht;
	}
	public void setBericht(String bericht) {
		this.bericht = bericht;
	}
	public List<Stoerung> getListStoerung() {
		return listStoerung;
	}
	public void setListStoerung(List<Stoerung> listStoerung) {
		this.listStoerung = listStoerung;
	}
	
}
