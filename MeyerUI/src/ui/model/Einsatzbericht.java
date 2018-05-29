package ui.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Einsatzbericht extends ValueObject{

	private String m_servicenummer;
	private String m_tsnummer;
	private String m_tanummer;
	private Kunde m_kunde;
	private Ansprechpartner m_ansprechpartner;

	private Date m_termin;
	
	private double m_ueberstunden;

	private boolean m_notdienstpauschale;
	private boolean m_dinueberprueft;
	private boolean m_garantieAntrag;
	private ZusatzEinsatz m_zusatzEinsatz;
	
	private String m_unterschriftKunde;
	private String m_unterschriftTechniker;
	private String m_unterschriftNameKunde;
	private String m_unterschriftNameTechniker;
	
	private Disponent m_disponent;
	
	List<Techniker> m_listTechniker = new ArrayList<Techniker>();
	List<Unterschrift> m_listUnterschriften = new ArrayList<Unterschrift>();
	
	private List<AuszufuehrendeArbeiten> m_auszufuehrendeArbeitenList = new ArrayList<>();
	private List<Arbeiten> m_arbeitenList = new ArrayList<Arbeiten>();
	private List<TeileUndPauschalarbeiten> m_teileUndPauschalarbeitenList = new ArrayList<TeileUndPauschalarbeiten>();
	
	
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
	public Kunde getKunde() {
		return m_kunde;
	}
	public void setKunde(Kunde kunde) {
		m_kunde = kunde;
	}
	public Ansprechpartner getAnsprechpartner() {
		return m_ansprechpartner;
	}
	public void setAnsprechpartner(Ansprechpartner ansprechpartner) {
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
	public ZusatzEinsatz getZusatzEinsatz() {
		return m_zusatzEinsatz;
	}
	public void setZusatzEinsatz(ZusatzEinsatz materialbestellung) {
		m_zusatzEinsatz = materialbestellung;
	}
	public List<Techniker> getListTechniker() {
		return m_listTechniker;
	}
	public void setListTechniker(List<Techniker> listTechniker) {
		m_listTechniker = listTechniker;
	}
	public List<AuszufuehrendeArbeiten> getAuszufuehrendeArbeitenList() {
		return m_auszufuehrendeArbeitenList;
	}
	public void setAuszufuehrendeArbeitenList(List<AuszufuehrendeArbeiten> auszufuehrendeArbeitenList) {
		m_auszufuehrendeArbeitenList = auszufuehrendeArbeitenList;
	}
	public List<Arbeiten> getArbeitenList() {
		return m_arbeitenList;
	}
	public void setArbeitenList(List<Arbeiten> arbeitenList) {
		m_arbeitenList = arbeitenList;
	}
	public List<TeileUndPauschalarbeiten> getTeileUndPauschalarbeitenList() {
		return m_teileUndPauschalarbeitenList;
	}
	public void setTeileUndPauschalarbeitenList(List<TeileUndPauschalarbeiten> teileUndPauschalarbeitenList) {
		m_teileUndPauschalarbeitenList = teileUndPauschalarbeitenList;
	}
	public Disponent getDisponent() {
		return m_disponent;
	}
	public void setDisponent(Disponent disponent) {
		m_disponent = disponent;
	}
	public List<Unterschrift> getListUnterschriften() {
		return m_listUnterschriften;
	}
	public void setListUnterschriften(List<Unterschrift> listUnterschriften) {
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
