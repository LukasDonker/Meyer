package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;
import model.ort.Anschrift;

@Entity
public class Ansprechpartner extends ValueObject {

	private Kunde kunde;
	private String name;
	private String telefonnummer;
	private String eMailAdresse;
	private Anschrift anschrift;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTelefonnummer() {
		return telefonnummer;
	}
	public void setTelefonnummer(String telefonnummer) {
		this.telefonnummer = telefonnummer;
	}
	public String geteMailAdresse() {
		return eMailAdresse;
	}
	public void seteMailAdresse(String eMailAdresse) {
		this.eMailAdresse = eMailAdresse;
	}
	public Kunde getKunde() {
		return kunde;
	}
	public void setKunde(Kunde kunde) {
		this.kunde = kunde;
	}
	
	public Anschrift getAnschrift() {
		return anschrift;
	}
	public void setAnschrift(Anschrift anschrift) {
		this.anschrift = anschrift;
	}
	
	public String getEinsatzort() {
		return kunde.getName() + "\n" + anschrift.toString();
	}
	
	public String getAnsprechpartnerDaten() {
		return "Tel.: "+ telefonnummer + "\n" + "Email: " +  eMailAdresse;
	}
}
