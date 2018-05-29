package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class TeileUndPauschalarbeiten extends ValueObject{

	private int m_stueckzahl;
	private Artikel m_artikel;
	private boolean m_ausBestellung;
	private boolean m_ausLager;
	
	public int getStueckzahl() {
		return m_stueckzahl;
	}

	public void setStueckzahl(int m_stueckzahl) {
		this.m_stueckzahl = m_stueckzahl;
	}

	public String getBezeichnung() {
		return m_artikel.getBezeichnung();
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

	public Artikel getArtikel() {
		return m_artikel;
	}

	public void setArtikel(Artikel m_artikel) {
		this.m_artikel = m_artikel;
	}	
	
}
