package model.material;

import model.common.ValueObject;

public class Geraet extends ValueObject {

	private Long artikelnummer;
	private TypModell typModell;
	private Hersteller hersteller;
	private String seriennummer;
	private Integer baujahr;
	private Long meyernummer;
	
	public Long getArtikelnummer() {
		return artikelnummer;
	}
	public void setArtikelnummer(Long artikelnummer) {
		this.artikelnummer = artikelnummer;
	}
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
	public Long getMeyernummer() {
		return meyernummer;
	}
	public void setMeyernummer(Long meyernummer) {
		this.meyernummer = meyernummer;
	}
}
