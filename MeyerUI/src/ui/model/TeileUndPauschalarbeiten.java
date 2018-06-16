package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

import model.common.ValueObject;

@Entity
public class TeileUndPauschalarbeiten extends ValueObject{
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private int m_stueckzahl;
	private Long m_artikel;
	private boolean m_ausBestellung;
	private boolean m_ausLager;
	
	private Long m_einsatzbericht;
	
	public Long getEinsatzbericht() {
		return m_einsatzbericht;
	}

	public void setEinsatzbericht(Long m_einsatzbericht) {
		this.m_einsatzbericht = m_einsatzbericht;
	}

	public int getStueckzahl() {
		return m_stueckzahl;
	}

	public void setStueckzahl(int m_stueckzahl) {
		this.m_stueckzahl = m_stueckzahl;
	}

	@Transient
	public String getBezeichnung() {
		return Artikel.getArtikelById(m_artikel+"").getBezeichnung();
	}

	public boolean isB() {
		return m_ausBestellung;
	}

	public void setB(boolean m_b) {
		this.m_ausBestellung = m_b;
	}

	public boolean isL() {
		return m_ausLager;
	}

	public void setL(boolean m_l) {
		this.m_ausLager = m_l;
	}

	public Long getArtikel() {
		return m_artikel;
	}

	public void setArtikel(Long m_artikel) {
		this.m_artikel = m_artikel;
	}	
	
}
