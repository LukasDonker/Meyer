package model.ort;

import model.common.ValueObject;
import ui.model.Anschrift;
import ui.model.Kunde;


public class Einsatzort extends ValueObject {

	private String bezeichnung;
	private String telefonnummer;
	private Anschrift anschrift;
	private Kunde kunde;
	private String eMailAdresse;
	
	public String getBezeichnung() {
		return bezeichnung;
	}
	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}
	public String getTelefonnummer() {
		return telefonnummer;
	}
	public void setTelefonnummer(String telefonnummer) {
		this.telefonnummer = telefonnummer;
	}
	public Anschrift getAnschrift() {
		return anschrift;
	}
	public void setAnschrift(Anschrift anschrift) {
		this.anschrift = anschrift;
	}
	public Kunde getKunde() {
		return kunde;
	}
	public void setKunde(Kunde kunde) {
		this.kunde = kunde;
	}
	public String geteMailAdresse() {
		return eMailAdresse;
	}
	public void seteMailAdresse(String eMailAdresse) {
		this.eMailAdresse = eMailAdresse;
	}
	
}
