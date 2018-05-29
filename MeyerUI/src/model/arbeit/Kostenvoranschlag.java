package model.arbeit;

import java.sql.Blob;
import java.util.Date;

import javax.persistence.Entity;

import model.common.ValueObject;
import ui.model.Ansprechpartner;
import ui.model.Geraet;
import ui.model.Techniker;

@Entity
public class Kostenvoranschlag extends ValueObject {

	private Blob foto;
	private Ansprechpartner ansprechpartner;
	private Techniker techniker;
	private Date datum;
	private Geraet geraet;
	private Integer hoehe;
	private Integer breite;
	private Integer tiefe;
	private Integer fusshoehe;
	private String besonderheiten;
	
	//Merkmale
	private String elekto;
	private boolean gas;
	private boolean reinigerdosierung;
	private boolean motorkippung;
	private boolean handkippung;
	private boolean wasserenthaertung;
	private boolean altgeraetentsorung;
	private double zeitaufwand;
	
	public Blob getFoto() {
		return foto;
	}
	public void setFoto(Blob foto) {
		this.foto = foto;
	}
	public Ansprechpartner getAnsprechpartner() {
		return ansprechpartner;
	}
	public void setAnsprechpartner(Ansprechpartner ansprechpartner) {
		this.ansprechpartner = ansprechpartner;
	}
	public Techniker getTechniker() {
		return techniker;
	}
	public void setTechniker(Techniker techniker) {
		this.techniker = techniker;
	}
	public Date getDatum() {
		return datum;
	}
	public void setDatum(Date datum) {
		this.datum = datum;
	}
	public Geraet getGeraet() {
		return geraet;
	}
	public void setGeraet(Geraet geraet) {
		this.geraet = geraet;
	}
	public Integer getHoehe() {
		return hoehe;
	}
	public void setHoehe(Integer hoehe) {
		this.hoehe = hoehe;
	}
	public Integer getBreite() {
		return breite;
	}
	public void setBreite(Integer breite) {
		this.breite = breite;
	}
	public Integer getTiefe() {
		return tiefe;
	}
	public void setTiefe(Integer tiefe) {
		this.tiefe = tiefe;
	}
	public Integer getFusshoehe() {
		return fusshoehe;
	}
	public void setFusshoehe(Integer fusshoehe) {
		this.fusshoehe = fusshoehe;
	}
	public String getBesonderheiten() {
		return besonderheiten;
	}
	public void setBesonderheiten(String besonderheiten) {
		this.besonderheiten = besonderheiten;
	}
	public String getElekto() {
		return elekto;
	}
	public void setElekto(String elekto) {
		this.elekto = elekto;
	}
	public boolean isGas() {
		return gas;
	}
	public void setGas(boolean gas) {
		this.gas = gas;
	}
	public boolean isReinigerdosierung() {
		return reinigerdosierung;
	}
	public void setReinigerdosierung(boolean reinigerdosierung) {
		this.reinigerdosierung = reinigerdosierung;
	}
	public boolean isMotorkippung() {
		return motorkippung;
	}
	public void setMotorkippung(boolean motorkippung) {
		this.motorkippung = motorkippung;
	}
	public boolean isHandkippung() {
		return handkippung;
	}
	public void setHandkippung(boolean handkippung) {
		this.handkippung = handkippung;
	}
	public boolean isWasserenthaertung() {
		return wasserenthaertung;
	}
	public void setWasserenthaertung(boolean wasserenthaertung) {
		this.wasserenthaertung = wasserenthaertung;
	}
	public boolean isAltgeraetentsorung() {
		return altgeraetentsorung;
	}
	public void setAltgeraetentsorung(boolean altgeraetentsorung) {
		this.altgeraetentsorung = altgeraetentsorung;
	}
	public double getZeitaufwand() {
		return zeitaufwand;
	}
	public void setZeitaufwand(double zeitaufwand) {
		this.zeitaufwand = zeitaufwand;
	}
	
}
