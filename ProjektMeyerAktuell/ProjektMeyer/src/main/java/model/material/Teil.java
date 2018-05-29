package model.material;

import java.sql.Blob;

import model.common.ValueObject;

public class Teil extends ValueObject {

	private Long artikelnummer;
	private String bezeichnung;
	private TypModell typmodell;
	private Hersteller hersteller;
	private String seriennummeR;
	private Integer baujahr;
	private Double preis;
	private Blob picture;
	
	public Long getArtikelnummer() {
		return artikelnummer;
	}
	public void setArtikelnummer(Long artikelnummer) {
		this.artikelnummer = artikelnummer;
	}
	public String getBezeichnung() {
		return bezeichnung;
	}
	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}
	public TypModell getTypmodell() {
		return typmodell;
	}
	public void setTypmodell(TypModell typmodell) {
		this.typmodell = typmodell;
	}
	public Hersteller getHersteller() {
		return hersteller;
	}
	public void setHersteller(Hersteller hersteller) {
		this.hersteller = hersteller;
	}
	public String getSeriennummeR() {
		return seriennummeR;
	}
	public void setSeriennummeR(String seriennummeR) {
		this.seriennummeR = seriennummeR;
	}
	public Integer getBaujahr() {
		return baujahr;
	}
	public void setBaujahr(Integer baujahr) {
		this.baujahr = baujahr;
	}
	public Double getPreis() {
		return preis;
	}
	public void setPreis(Double preis) {
		this.preis = preis;
	}
	public Blob getPicture() {
		return picture;
	}
	public void setPicture(Blob picture) {
		this.picture = picture;
	}
	
}
