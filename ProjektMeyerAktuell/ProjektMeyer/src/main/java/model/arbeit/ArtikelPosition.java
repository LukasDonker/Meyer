package model.arbeit;

import model.common.ValueObject;
import model.material.Artikel;

public class ArtikelPosition extends ValueObject {

	private Integer stueckzahl;
	private Artikel artikel;
	private boolean auto;
	private boolean ausBestellung;
	
	public Integer getStueckzahl() {
		return stueckzahl;
	}
	public void setStueckzahl(Integer stueckzahl) {
		this.stueckzahl = stueckzahl;
	}
	public Artikel getArtikel() {
		return artikel;
	}
	public void setArtikel(Artikel artikel) {
		this.artikel = artikel;
	}
	public boolean isAuto() {
		return auto;
	}
	public void setAuto(boolean auto) {
		this.auto = auto;
	}
	public boolean isAusBestellung() {
		return ausBestellung;
	}
	public void setAusBestellung(boolean ausBestellung) {
		this.ausBestellung = ausBestellung;
	}	
}
