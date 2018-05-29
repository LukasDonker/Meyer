package model.material;

import model.common.ConstantValueObject;

/**
 * Artikel und Pauschalarbeiten
 * @author Lukas
 *
 */
public class Artikel extends ConstantValueObject {

	private String bezeichung;
	private Long sachnummer;
	private Double preis;
	private boolean pauschalarbeit;
	private Long lagerbestand;
	private boolean nachbestellung;
	private String aufbewarhungsOrt; //Auto oder Lager
	
	public String getBezeichung() {
		return bezeichung;
	}
	public void setBezeichung(String bezeichung) {
		this.bezeichung = bezeichung;
	}
	public Long getSachnummer() {
		return sachnummer;
	}
	public void setSachnummer(Long sachnummer) {
		this.sachnummer = sachnummer;
	}
	public Double getPreis() {
		return preis;
	}
	public void setPreis(Double preis) {
		this.preis = preis;
	}
	public boolean isPauschalarbeit() {
		return pauschalarbeit;
	}
	public void setPauschalarbeit(boolean pauschalarbeit) {
		this.pauschalarbeit = pauschalarbeit;
	}
	public Long getLagerbestand() {
		return lagerbestand;
	}
	public void setLagerbestand(Long lagerbestand) {
		this.lagerbestand = lagerbestand;
	}
	public boolean isNachbestellung() {
		return nachbestellung;
	}
	public void setNachbestellung(boolean nachbestellung) {
		this.nachbestellung = nachbestellung;
	}
	public String getAufbewarhungsOrt() {
		return aufbewarhungsOrt;
	}
	public void setAufbewarhungsOrt(String aufbewarhungsOrt) {
		this.aufbewarhungsOrt = aufbewarhungsOrt;
	}
}
