package ui.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class ZusatzEinsatz extends ValueObject{

	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
	private Long m_vorgaenger;
	private Long m_nachfolger;
	
	private Long m_kunde;
	private String m_tanummer;
	
	private Date m_datum;
	private Date m_bisWann;
	private boolean m_express;
	private boolean m_kva;
	
	private int m_mitarbeiter;
	private int m_stundenProMitarbeiter;
	
	private String m_infos;
	
	private List<Long> m_listMaterialBestellung;
	private List<Long> m_listAngebot;
	private List<Long> m_listArbeiten;
	private List<Long> m_listImages;
	
	private Long m_techniker;
	private Long m_disponent;
	
	public Long getVorgaenger() {
		return m_vorgaenger;
	}
	public void setVorgaenger(Long m_vorgaenger) {
		this.m_vorgaenger = m_vorgaenger;
	}
	public Long getNachfolger() {
		return m_nachfolger;
	}
	public void setNachfolger(Long m_nachfolger) {
		this.m_nachfolger = m_nachfolger;
	}
	public Long getKunde() {
		return m_kunde;
	}
	public void setKunde(Long m_kunde) {
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
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListMaterialBestellung() {
		return m_listMaterialBestellung;
	}
	public void setListMaterialBestellung(List<Long> m_listMaterialBestellung) {
		this.m_listMaterialBestellung = m_listMaterialBestellung;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListAngebot() {
		return m_listAngebot;
	}
	public void setListAngebot(List<Long> m_listAngebot) {
		this.m_listAngebot = m_listAngebot;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListArbeiten() {
		return m_listArbeiten;
	}
	public void setListArbeiten(List<Long> m_listArbeiten) {
		this.m_listArbeiten = m_listArbeiten;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListImages() {
		return m_listImages;
	}
	
	@ElementCollection(targetClass=Long.class)
	public void setListImages(List<Long> m_listImages) {
		this.m_listImages = m_listImages;
	}
	public Long getTechniker() {
		return m_techniker;
	}
	public void setTechniker(Long m_techniker) {
		this.m_techniker = m_techniker;
	}
	public Long getDisponent() {
		return m_disponent;
	}
	public void setDisponent(Long m_disponent) {
		this.m_disponent = m_disponent;
	}
}