package model.arbeit;

import java.util.List;

import model.common.ValueObject;
import model.person.Ansprechpartner;
import model.person.Techniker;
import model.zeiterfassung.EinsatzZeit;

public class Einsatz extends ValueObject {

	private Long auftragNummer;
	private Arbeiten arbeiten;
	private Materialbestellung materialbestellung;
	private List<EinsatzZeit> listEinsatzzeit;
	private Ansprechpartner ansprechpartner;
	private List<ArtikelPosition> listArtikelPosition;
	private List<Techniker> listTechniker;
	private boolean weitererEinsatzerforderlich;
	private List<WeitererEinsatz> listWeitererEinsatz;
	private boolean notdienstPauschale;
	private boolean kundenbestaetigung;
	public Long getAuftragNummer() {
		return auftragNummer;
	}
	public void setAuftragNummer(Long auftragNummer) {
		this.auftragNummer = auftragNummer;
	}
	public Arbeiten getArbeiten() {
		return arbeiten;
	}
	public void setArbeiten(Arbeiten arbeiten) {
		this.arbeiten = arbeiten;
	}
	public Materialbestellung getMaterialbestellung() {
		return materialbestellung;
	}
	public void setMaterialbestellung(Materialbestellung materialbestellung) {
		this.materialbestellung = materialbestellung;
	}
	public List<EinsatzZeit> getListEinsatzzeit() {
		return listEinsatzzeit;
	}
	public void setListEinsatzzeit(List<EinsatzZeit> listEinsatzzeit) {
		this.listEinsatzzeit = listEinsatzzeit;
	}
	public Ansprechpartner getAnsprechpartner() {
		return ansprechpartner;
	}
	public void setAnsprechpartner(Ansprechpartner ansprechpartner) {
		this.ansprechpartner = ansprechpartner;
	}
	public List<ArtikelPosition> getListArtikelPosition() {
		return listArtikelPosition;
	}
	public void setListArtikelPosition(List<ArtikelPosition> listArtikelPosition) {
		this.listArtikelPosition = listArtikelPosition;
	}
	public List<Techniker> getListTechniker() {
		return listTechniker;
	}
	public void setListTechniker(List<Techniker> listTechniker) {
		this.listTechniker = listTechniker;
	}
	public boolean isWeitererEinsatzerforderlich() {
		return weitererEinsatzerforderlich;
	}
	public void setWeitererEinsatzerforderlich(boolean weitererEinsatzerforderlich) {
		this.weitererEinsatzerforderlich = weitererEinsatzerforderlich;
	}
	public List<WeitererEinsatz> getListWeitererEinsatz() {
		return listWeitererEinsatz;
	}
	public void setListWeitererEinsatz(List<WeitererEinsatz> listWeitererEinsatz) {
		this.listWeitererEinsatz = listWeitererEinsatz;
	}
	public boolean isNotdienstPauschale() {
		return notdienstPauschale;
	}
	public void setNotdienstPauschale(boolean notdienstPauschale) {
		this.notdienstPauschale = notdienstPauschale;
	}
	public boolean isKundenbestaetigung() {
		return kundenbestaetigung;
	}
	public void setKundenbestaetigung(boolean kundenbestaetigung) {
		this.kundenbestaetigung = kundenbestaetigung;
	}
	
}
