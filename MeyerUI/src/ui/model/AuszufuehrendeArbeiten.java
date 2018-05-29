package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class AuszufuehrendeArbeiten extends ValueObject {

	private String m_taetigkeiten;
	private String m_geraetenummer;
	private Techniker m_techniker;
	
	public String getTaetigkeiten() {
		return m_taetigkeiten;
	}

	public void setTaetigkeiten(String m_taetigkeiten) {
		this.m_taetigkeiten = m_taetigkeiten;
	}

	public String getGeraetenummer() {
		return m_geraetenummer;
	}

	public void setGeraetenummer(String m_stoerung) {
		this.m_geraetenummer = m_stoerung;
	}

	public Techniker getTechniker() {
		return m_techniker;
	}

	public void setTechniker(Techniker m_techniker) {
		this.m_techniker = m_techniker;
	}
	
}
