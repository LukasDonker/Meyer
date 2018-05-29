package ui.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class ZusatzEinsatz extends ValueObject{

	private Einsatzbericht m_vorgaenger;
	private Einsatzbericht m_nachfolger;
	
	private Kunde m_kunde;
	private String m_tanummer;
	
	private Date m_datum;
	private Date m_bisWann;
	private boolean m_express;
	private boolean m_kva;
	
	private int m_mitarbeiter;
	private int m_stundenProMitarbeiter;
	
	private String m_infos;
	
	private List<MaterialBestellung> m_listMaterialBestellung;
	private List<Angebot> m_listAngebot;
	
	private List<Arbeiten> m_listArbeiten;
	
	private List<MyFile> m_listImages;
	
	private Techniker m_techniker;
	private Disponent m_disponent;
	
	public Einsatzbericht getVorgaenger() {
		return m_vorgaenger;
	}
	public void setVorgaenger(Einsatzbericht m_vorgaenger) {
		this.m_vorgaenger = m_vorgaenger;
	}
	public Einsatzbericht getNachfolger() {
		return m_nachfolger;
	}
	public void setNachfolger(Einsatzbericht m_nachfolger) {
		this.m_nachfolger = m_nachfolger;
	}
	public Kunde getKunde() {
		return m_kunde;
	}
	public void setKunde(Kunde m_kunde) {
		this.m_kunde = m_kunde;
	}
	public String getTanummer() {
		return m_tanummer;
	}
	public void setTanummer(String m_tanummer) {
		this.m_tanummer = m_tanummer;
	}
	public Date getDatum() {
		return m_datum;
	}
	public void setDatum(Date m_datum) {
		this.m_datum = m_datum;
	}
	public Date getBisWann() {
		return m_bisWann;
	}
	public void setBisWann(Date m_bisWann) {
		this.m_bisWann = m_bisWann;
	}
	public boolean isExpress() {
		return m_express;
	}
	public void setExpress(boolean m_express) {
		this.m_express = m_express;
	}
	public boolean isKva() {
		return m_kva;
	}
	public void setKva(boolean m_kva) {
		this.m_kva = m_kva;
	}
	public int getMitarbeiter() {
		return m_mitarbeiter;
	}
	public void setMitarbeiter(int m_mitarbeiter) {
		this.m_mitarbeiter = m_mitarbeiter;
	}
	public int getStundenProMitarbeiter() {
		return m_stundenProMitarbeiter;
	}
	public void setStundenProMitarbeiter(int m_stundenProMitarbeiter) {
		this.m_stundenProMitarbeiter = m_stundenProMitarbeiter;
	}
	public String getInfos() {
		return m_infos;
	}
	public void setInfos(String m_infos) {
		this.m_infos = m_infos;
	}
	public List<MaterialBestellung> getListMaterialBestellung() {
		return m_listMaterialBestellung;
	}
	public void setListMaterialBestellung(List<MaterialBestellung> m_listMaterialBestellung) {
		this.m_listMaterialBestellung = m_listMaterialBestellung;
	}
	public List<Angebot> getListAngebot() {
		return m_listAngebot;
	}
	public void setListAngebot(List<Angebot> m_listAngebot) {
		this.m_listAngebot = m_listAngebot;
	}
	public List<Arbeiten> getListArbeiten() {
		return m_listArbeiten;
	}
	public void setListArbeiten(List<Arbeiten> m_listArbeiten) {
		this.m_listArbeiten = m_listArbeiten;
	}
	public List<MyFile> getListImages() {
		return m_listImages;
	}
	public void setListImages(List<MyFile> m_listImages) {
		this.m_listImages = m_listImages;
	}
	public Techniker getTechniker() {
		return m_techniker;
	}
	public void setTechniker(Techniker m_techniker) {
		this.m_techniker = m_techniker;
	}
	public Disponent getDisponent() {
		return m_disponent;
	}
	public void setDisponent(Disponent m_disponent) {
		this.m_disponent = m_disponent;
	}
}