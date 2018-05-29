package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Teil extends ValueObject {

	private int m_menge;
	private String m_beschreibung;
	private long m_bestellnummer;
	private Hersteller m_hersteller;
	private MaterialBestellung m_materialBestellung;
	
	
	public int getMenge() {
		return m_menge;
	}
	public void setMenge(int menge) {
		m_menge = menge;
	}
	public String getBeschreibung() {
		return m_beschreibung;
	}
	public void setBeschreibung(String beschreibung) {
		m_beschreibung = beschreibung;
	}
	public long getBestellnummer() {
		return m_bestellnummer;
	}
	public void setBestellnummer(long bestellnummer) {
		m_bestellnummer = bestellnummer;
	}
	public Hersteller getHersteller() {
		return m_hersteller;
	}
	public void setHersteller(Hersteller hersteller) {
		m_hersteller = hersteller;
	}
	public MaterialBestellung getMaterialBestellung() {
		return m_materialBestellung;
	}
	public void setMaterialBestellung(MaterialBestellung materialBestellung) {
		m_materialBestellung = materialBestellung;
	}
}
