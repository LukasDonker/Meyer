package model.arbeit;

import java.util.List;

import javax.persistence.Entity;

import model.common.ValueObject;
import model.ort.Einsatzort;
import ui.model.Disponent;

@Entity
public class Auftrag extends ValueObject {

	private Long tsNummer;
	private Einsatzort einsatzort;
	private String kundenVorgabeNummer;
	private boolean abgeschlossen;
	private Disponent disponent;
	private boolean garantieAntrag;
	private List<WeitererEinsatz> listeWeitereEinsätze;
	
	public Long getTsNummer() {
		return tsNummer;
	}
	public void setTsNummer(Long tsNummer) {
		this.tsNummer = tsNummer;
	}
	public Einsatzort getEinsatzort() {
		return einsatzort;
	}
	public void setEinsatzort(Einsatzort einsatzort) {
		this.einsatzort = einsatzort;
	}
	public String getKundenVorgabeNummer() {
		return kundenVorgabeNummer;
	}
	public void setKundenVorgabeNummer(String kundenVorgabeNummer) {
		this.kundenVorgabeNummer = kundenVorgabeNummer;
	}
	public boolean isAbgeschlossen() {
		return abgeschlossen;
	}
	public void setAbgeschlossen(boolean abgeschlossen) {
		this.abgeschlossen = abgeschlossen;
	}
	public Disponent getDisponent() {
		return disponent;
	}
	public void setDisponent(Disponent disponent) {
		this.disponent = disponent;
	}
	public boolean isGarantieAntrag() {
		return garantieAntrag;
	}

	public List<WeitererEinsatz> getListeWeitereEinsätze() {
		return listeWeitereEinsätze;
	}
	public void setListeWeitereEinsätze(List<WeitererEinsatz> listeWeitereEinsätze) {
		this.listeWeitereEinsätze = listeWeitereEinsätze;
	}
	
}
