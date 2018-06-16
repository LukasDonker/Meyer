package ui.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class Einsatzbericht extends ValueObject{
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private String m_servicenummer;
	private String m_tsnummer;
	private String m_tanummer;
	private Long m_kunde;
	private Long m_ansprechpartner;

	private Date m_termin;
	
	private double m_ueberstunden;

	private boolean m_notdienstpauschale;
	private boolean m_dinueberprueft;
	private boolean m_garantieAntrag;
	private Long m_zusatzEinsatz;
	
	private String m_unterschriftKunde;
	private String m_unterschriftTechniker;
	private String m_unterschriftNameKunde;
	private String m_unterschriftNameTechniker;
	
	private Long m_disponent;
	
	List<Long> m_listTechniker = new ArrayList<Long>();
	List<Long> m_listUnterschriften = new ArrayList<Long>();
	
	
	private List<Long> m_auszufuehrendeArbeitenList = new ArrayList<>();
	private List<Long> m_arbeitenList = new ArrayList<>();
	private List<Long> m_teileUndPauschalarbeitenList = new ArrayList<>();
	
	
	/*
	 * Getter und Setter
	 */
	public String getServicenummer() {
		return m_servicenummer;
	}
	public void setServicenummer(String servicenummer) {
		m_servicenummer = servicenummer;
	}
	public String getTsnummer() {
		return m_tsnummer;
	}
	public void setTsnummer(String tsnummer) {
		m_tsnummer = tsnummer;
	}
	public String getTanummer() {
		return m_tanummer;
	}
	public void setTanummer(String tanummer) {
		m_tanummer = tanummer;
	}
	public Long getKunde() {
		return m_kunde;
	}
	public void setKunde(Long kunde) {
		m_kunde = kunde;
	}
	public Long getAnsprechpartner() {
		return m_ansprechpartner;
	}
	public void setAnsprechpartner(Long ansprechpartner) {
		m_ansprechpartner = ansprechpartner;
	}
	public Date getTermin() {
		return m_termin;
	}
	public void setTermin(Date termin) {
		m_termin = termin;
	}
	public double getUeberstunden() {
		return m_ueberstunden;
	}
	public void setUeberstunden(double ueberstunden) {
		m_ueberstunden = ueberstunden;
	}
	public boolean isNotdienstpauschale() {
		return m_notdienstpauschale;
	}
	public void setNotdienstpauschale(boolean notdienstpauschale) {
		m_notdienstpauschale = notdienstpauschale;
	}
	public boolean isDinueberprueft() {
		return m_dinueberprueft;
	}
	public void setDinueberprueft(boolean dinueberprueft) {
		m_dinueberprueft = dinueberprueft;
	}
	public boolean isGarantieAntrag() {
		return m_garantieAntrag;
	}
	public void setGarantieAntrag(boolean garantieAntrag) {
		m_garantieAntrag = garantieAntrag;
	}
	public Long getZusatzEinsatz() {
		return m_zusatzEinsatz;
	}
	public void setZusatzEinsatz(Long materialbestellung) {
		m_zusatzEinsatz = materialbestellung;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListTechniker() {
		return m_listTechniker;
	}
	public void setListTechniker(List<Long> listTechniker) {
		m_listTechniker = listTechniker;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getAuszufuehrendeArbeitenList() {
		return m_auszufuehrendeArbeitenList;
	}
	public void setAuszufuehrendeArbeitenList(List<Long> auszufuehrendeArbeitenList) {
		m_auszufuehrendeArbeitenList = auszufuehrendeArbeitenList;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getArbeitenList() {
		return m_arbeitenList;
	}
	public void setArbeitenList(List<Long> arbeitenList) {
		m_arbeitenList = arbeitenList;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getTeileUndPauschalarbeitenList() {
		return m_teileUndPauschalarbeitenList;
	}
	public void setTeileUndPauschalarbeitenList(List<Long> teileUndPauschalarbeitenList) {
		m_teileUndPauschalarbeitenList = teileUndPauschalarbeitenList;
	}
	public Long getDisponent() {
		return m_disponent;
	}
	public void setDisponent(Long disponent) {
		m_disponent = disponent;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListUnterschriften() {
		return m_listUnterschriften;
	}
	public void setListUnterschriften(List<Long> listUnterschriften) {
		m_listUnterschriften = listUnterschriften;
	}
	public String getUnterschriftKunde() {
		return m_unterschriftKunde;
	}
	public void setUnterschriftKunde(String m_unterschriftKunde) {
		this.m_unterschriftKunde = m_unterschriftKunde;
	}
	public String getUnterschriftTechniker() {
		return m_unterschriftTechniker;
	}
	public void setUnterschriftTechniker(String m_unterschriftTechniker) {
		this.m_unterschriftTechniker = m_unterschriftTechniker;
	}
	public String getUnterschriftNameKunde() {
		return m_unterschriftNameKunde;
	}
	public void setUnterschriftNameKunde(String m_unterschriftNameKunde) {
		this.m_unterschriftNameKunde = m_unterschriftNameKunde;
	}
	public String getUnterschriftNameTechniker() {
		return m_unterschriftNameTechniker;
	}
	public void setUnterschriftNameTechniker(String m_unterschriftNameTechniker) {
		this.m_unterschriftNameTechniker = m_unterschriftNameTechniker;
	}
	
}
