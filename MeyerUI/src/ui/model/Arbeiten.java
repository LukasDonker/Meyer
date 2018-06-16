package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class Arbeiten extends ValueObject{

	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
	private Long m_techniker;
	private String m_arbeitsstunden;
	private String m_geraeteNummer;
	private String m_arbeitsbericht;
	
	private Long m_einsatzbericht;
	
	public Long getEinsatzbericht() {
		return m_einsatzbericht;
	}

	public void setEinsatzbericht(Long m_einsatzbericht) {
		this.m_einsatzbericht = m_einsatzbericht;
	}
	
	public Long getTechniker() {
		return m_techniker;
	}

	public void setTechniker(Long m_techniker) {
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
