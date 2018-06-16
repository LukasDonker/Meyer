package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class Teil extends ValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private int m_menge;
	private String m_beschreibung;
	private long m_bestellnummer;
	private Long m_hersteller;
	private Long m_materialBestellung;
	
	
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
	public Long getHersteller() {
		return m_hersteller;
	}
	public void setHersteller(Long hersteller) {
		m_hersteller = hersteller;
	}
	public Long getMaterialBestellung() {
		return m_materialBestellung;
	}
	public void setMaterialBestellung(Long materialBestellung) {
		m_materialBestellung = materialBestellung;
	}
}
