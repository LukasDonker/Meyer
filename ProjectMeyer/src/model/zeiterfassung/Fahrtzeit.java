package model.zeiterfassung;

import java.util.Date;

import model.ort.Einsatzort;

public class Fahrtzeit extends Zeit {

	private Date vonZeit;
	private Date bisZeit;
	private Einsatzort vonOrt;
	private Einsatzort bisOrt;
	private boolean vonZuhause;
	
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
	public Einsatzort getVonOrt() {
		return vonOrt;
	}
	public void setVonOrt(Einsatzort vonOrt) {
		this.vonOrt = vonOrt;
	}
	public Einsatzort getBisOrt() {
		return bisOrt;
	}
	public void setBisOrt(Einsatzort bisOrt) {
		this.bisOrt = bisOrt;
	}
	public boolean isVonZuhause() {
		return vonZuhause;
	}
	public void setVonZuhause(boolean vonZuhause) {
		this.vonZuhause = vonZuhause;
	}
}
