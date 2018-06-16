package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

import model.common.ValueObject;

@Entity
public class Ansprechpartner extends ValueObject {

	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}	
	
	private Long kunde;
	private String name;
	private String telefonnummer;
	private String eMailAdresse;
	private Long anschrift;
	
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
	public Long getKunde() {
		return kunde;
	}
	public void setKunde(Long kunde) {
		this.kunde = kunde;
	}
	
	public Long getAnschrift() {
		return anschrift;
	}
	public void setAnschrift(Long anschrift) {
		this.anschrift = anschrift;
	}

	@Transient
	public String getAnsprechpartnerDaten() {
		return "Tel.: "+ telefonnummer + "\n" + "Email: " +  eMailAdresse;
	}
}
