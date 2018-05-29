package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Geraet extends ValueObject {

	private TypModell typModell;
	private Hersteller hersteller;
	private String seriennummer;
	private Integer baujahr;
	
	public TypModell getTypModell() {
		return typModell;
	}
	public void setTypModell(TypModell typModell) {
		this.typModell = typModell;
	}
	public Hersteller getHersteller() {
		return hersteller;
	}
	public void setHersteller(Hersteller hersteller) {
		this.hersteller = hersteller;
	}
	public String getSeriennummer() {
		return seriennummer;
	}
	public void setSeriennummer(String seriennummer) {
		this.seriennummer = seriennummer;
	}
	public Integer getBaujahr() {
		return baujahr;
	}
	public void setBaujahr(Integer baujahr) {
		this.baujahr = baujahr;
	}
}
