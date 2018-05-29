package model.zeiterfassung;

import java.util.Date;

public class Arbeitszeit extends Zeit {

	private ZeitTyp zeitTyp;
	private Date vonZeit;
	private Date bisZeit;
	private String Auftragsbeschreibung;
	
	public ZeitTyp getZeitTyp() {
		return zeitTyp;
	}
	public void setZeitTyp(ZeitTyp zeitTyp) {
		this.zeitTyp = zeitTyp;
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
	public String getAuftragsbeschreibung() {
		return Auftragsbeschreibung;
	}
	public void setAuftragsbeschreibung(String auftragsbeschreibung) {
		Auftragsbeschreibung = auftragsbeschreibung;
	}
	
}
