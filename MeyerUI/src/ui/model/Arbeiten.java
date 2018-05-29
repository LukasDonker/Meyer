package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Arbeiten extends ValueObject{

	private Techniker m_techniker;
	private String m_arbeitsstunden;
	private String m_geraeteNummer;
	private String m_arbeitsbericht;
	
	public Techniker getTechniker() {
		return m_techniker;
	}

	public void setTechniker(Techniker m_techniker) {
		this.m_techniker = m_techniker;
	}

	public String getArbeitsstunden() {
		return m_arbeitsstunden;
	}

	public void setArbeitsstunden(String m_arbeitsstunden) {
		this.m_arbeitsstunden = m_arbeitsstunden;
	}

	public String getGeraeteNummer() {
		return m_geraeteNummer;
	}

	public void setGeraeteNummer(String m_geraeteNummer) {
		this.m_geraeteNummer = m_geraeteNummer;
	}

	public String getArbeitsbericht() {
		return m_arbeitsbericht;
	}

	public void setArbeitsbericht(String m_arbeitsbericht) {
		this.m_arbeitsbericht = m_arbeitsbericht;
	}
}
