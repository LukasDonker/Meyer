package model.person;

import model.common.ValueObject;
import model.ort.Anschrift;

public class Kunde extends ValueObject {
	
	private Anschrift anschrift;
	private Long Kundennummer;
	private String eMailAdresse;
	private String telefonnummer;
	private Anschrift Rechnungsempf�nger;
	
	public Anschrift getAnschrift() {
		return anschrift;
	}
	public void setAnschrift(Anschrift anschrift) {
		this.anschrift = anschrift;
	}
	public Long getKundennummer() {
		return Kundennummer;
	}
	public void setKundennummer(Long kundennummer) {
		Kundennummer = kundennummer;
	}
	public String geteMailAdresse() {
		return eMailAdresse;
	}
	public void seteMailAdresse(String eMailAdresse) {
		this.eMailAdresse = eMailAdresse;
	}
	public String getTelefonnummer() {
		return telefonnummer;
	}
	public void setTelefonnummer(String telefonnummer) {
		this.telefonnummer = telefonnummer;
	}
	public Anschrift getRechnungsempf�nger() {
		return Rechnungsempf�nger;
	}
	public void setRechnungsempf�nger(Anschrift rechnungsempf�nger) {
		Rechnungsempf�nger = rechnungsempf�nger;
	}
	
}
