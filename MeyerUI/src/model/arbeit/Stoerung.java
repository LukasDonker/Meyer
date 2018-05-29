package model.arbeit;

import javax.persistence.Entity;

import model.common.ValueObject;
import ui.model.Geraet;

@Entity
public class Stoerung extends ValueObject {

	private Geraet geraet;
	private String bemerkungDisponent;
	private boolean behoben;
	private String bemerkungTechniker;
	private boolean funktionsPruefung;
	
	public Geraet getGeraet() {
		return geraet;
	}
	public void setGeraet(Geraet geraet) {
		this.geraet = geraet;
	}
	public String getBemerkungDisponent() {
		return bemerkungDisponent;
	}
	public void setBemerkungDisponent(String bemerkungDisponent) {
		this.bemerkungDisponent = bemerkungDisponent;
	}
	public boolean isBehoben() {
		return behoben;
	}
	public void setBehoben(boolean behoben) {
		this.behoben = behoben;
	}
	public String getBemerkungTechniker() {
		return bemerkungTechniker;
	}
	public void setBemerkungTechniker(String bemerkungTechniker) {
		this.bemerkungTechniker = bemerkungTechniker;
	}
	public boolean isFunktionsPruefung() {
		return funktionsPruefung;
	}
	public void setFunktionsPruefung(boolean funktionsPruefung) {
		this.funktionsPruefung = funktionsPruefung;
	}	
}
