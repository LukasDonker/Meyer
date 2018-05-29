package model.zeiterfassung;

import java.util.Date;

import model.person.Techniker;

public class EinsatzZeit extends Zeit {
	
	private Double arbeitsstunden;
	private Double ueberstundenProzentSatz;
	private Techniker techniker;
	private boolean fahrtzeitpauschale;
	private Fahrtzeit fahrtzeit;
	private Date vonZeit;
	private Date bisZeit;
	
	public Double getArbeitsstunden() {
		return arbeitsstunden;
	}
	public void setArbeitsstunden(Double arbeitsstunden) {
		this.arbeitsstunden = arbeitsstunden;
	}
	public Double getUeberstundenProzentSatz() {
		return ueberstundenProzentSatz;
	}
	public void setUeberstundenProzentSatz(Double ueberstundenProzentSatz) {
		this.ueberstundenProzentSatz = ueberstundenProzentSatz;
	}
	public Techniker getTechniker() {
		return techniker;
	}
	public void setTechniker(Techniker techniker) {
		this.techniker = techniker;
	}
	public boolean isFahrtzeitpauschale() {
		return fahrtzeitpauschale;
	}
	public void setFahrtzeitpauschale(boolean fahrtzeitpauschale) {
		this.fahrtzeitpauschale = fahrtzeitpauschale;
	}
	public Fahrtzeit getFahrtzeit() {
		return fahrtzeit;
	}
	public void setFahrtzeit(Fahrtzeit fahrtzeit) {
		this.fahrtzeit = fahrtzeit;
	}
	public Date getVonZeit() {
		return vonZeit;
	}
	public void setVonZeit(Date vonZeit) {
		this.vonZeit = vonZeit;
	}
	public Date getBisZeit() {
		return bisZeit;
	}
	public void setBisZeit(Date bisZeit) {
		this.bisZeit = bisZeit;
	}

}
