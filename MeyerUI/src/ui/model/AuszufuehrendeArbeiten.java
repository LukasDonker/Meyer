package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class AuszufuehrendeArbeiten extends ValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private String m_taetigkeiten;
	private String m_geraetenummer;
	private Long m_techniker;
	
	private Long m_einsatzbericht;
	
	public Long getEinsatzbericht() {
		return m_einsatzbericht;
	}

	public void setEinsatzbericht(Long m_einsatzbericht) {
		this.m_einsatzbericht = m_einsatzbericht;
	}
	
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

	public Long getTechniker() {
		return m_techniker;
	}

	public void setTechniker(Long m_techniker) {
		this.m_techniker = m_techniker;
	}
	
}
