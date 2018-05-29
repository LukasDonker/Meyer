package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Angebot extends ValueObject{

	private ZusatzEinsatz m_zusatzEinsatz;
	
	private AngebotPer m_angebotPer = AngebotPer.MAIL;
	
	private Hersteller m_hersteller;
	private TypModell m_typModell;
	private Integer m_hoehe;
	private Integer m_breite;
	private Integer m_tiefe;
	private Integer m_fusshoehe;
	
	private String m_besonderheiten;
	private Volt m_volt = Volt.V230;
	private boolean m_gas;
	private boolean m_reinigerDosierung;
	private boolean m_motorkippung;
	private boolean m_handkippung;
	private boolean m_wasserenthaertung;
	private boolean m_altgeraeteentsorung;
	
	public ZusatzEinsatz getZusatzEinsatz() {
		return m_zusatzEinsatz;
	}
	public void setZusatzEinsatz(ZusatzEinsatz zusatzEinsatz) {
		m_zusatzEinsatz = zusatzEinsatz;
	}
	public AngebotPer getAngebotPer() {
		return m_angebotPer;
	}
	public void setAngebotPer(AngebotPer angebotPer) {
		m_angebotPer = angebotPer;
	}
	public Hersteller getHersteller() {
		return m_hersteller;
	}
	public void setHersteller(Hersteller hersteller) {
		m_hersteller = hersteller;
	}
	public TypModell getTypModell() {
		return m_typModell;
	}
	public void setTypModell(TypModell typModell) {
		m_typModell = typModell;
	}
	public int getHoehe() {
		return m_hoehe;
	}
	public void setHoehe(int hoehe) {
		m_hoehe = hoehe;
	}
	public int getBreite() {
		return m_breite;
	}
	public void setBreite(int breite) {
		m_breite = breite;
	}
	public int getTiefe() {
		return m_tiefe;
	}
	public void setTiefe(int tiefe) {
		m_tiefe = tiefe;
	}
	public int getFusshoehe() {
		return m_fusshoehe;
	}
	public void setFusshoehe(int fusshoehe) {
		m_fusshoehe = fusshoehe;
	}
	public String getBesonderheiten() {
		return m_besonderheiten;
	}
	public void setBesonderheiten(String besonderheiten) {
		m_besonderheiten = besonderheiten;
	}
	public Volt getVolt() {
		return m_volt;
	}
	public void setVolt(Volt volt) {
		m_volt = volt;
	}
	public boolean isGas() {
		return m_gas;
	}
	public void setGas(boolean gas) {
		m_gas = gas;
	}
	public boolean isReinigerDosierung() {
		return m_reinigerDosierung;
	}
	public void setReinigerDosierung(boolean reinigerDosierung) {
		m_reinigerDosierung = reinigerDosierung;
	}
	public boolean isMotorkippung() {
		return m_motorkippung;
	}
	public void setMotorkippung(boolean motorkippung) {
		m_motorkippung = motorkippung;
	}
	public boolean isHandkippung() {
		return m_handkippung;
	}
	public void setHandkippung(boolean handkippung) {
		m_handkippung = handkippung;
	}
	public boolean isWasserenthaertung() {
		return m_wasserenthaertung;
	}
	public void setWasserenthaertung(boolean wasserenthaertung) {
		m_wasserenthaertung = wasserenthaertung;
	}
	public boolean isAltgeraeteentsorung() {
		return m_altgeraeteentsorung;
	}
	public void setAltgeraeteentsorung(boolean altgeraeteentsorung) {
		m_altgeraeteentsorung = altgeraeteentsorung;
	}
}
