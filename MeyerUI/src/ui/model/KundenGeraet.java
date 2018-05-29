package ui.model;

import javax.persistence.Entity;

@Entity
public class KundenGeraet extends Geraet{
	
	private long m_meyerNummer;
	private Kunde m_kunde;
	private String m_bemerkungen;
	
	public long getMeyerNummer() {
		return m_meyerNummer;
	}
	public void setMeyerNummer(long m_meyerNummer) {
		this.m_meyerNummer = m_meyerNummer;
	}
	public Kunde getKunde() {
		return m_kunde;
	}
	public void setKunde(Kunde m_kunde) {
		this.m_kunde = m_kunde;
	}
	public String getBemerkungen() {
		return m_bemerkungen;
	}
	public void setBemerkungen(String m_bemerkungen) {
		this.m_bemerkungen = m_bemerkungen;
	}
}
