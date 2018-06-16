package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class KundenGeraet extends Geraet{
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
	private long m_meyerNummer;
	private Long m_kunde;
	private String m_bemerkungen;
	
	public long getMeyerNummer() {
		return m_meyerNummer;
	}
	public void setMeyerNummer(long m_meyerNummer) {
		this.m_meyerNummer = m_meyerNummer;
	}
	public Long getKunde() {
		return m_kunde;
	}
	public void setKunde(Long m_kunde) {
		this.m_kunde = m_kunde;
	}
	public String getBemerkungen() {
		return m_bemerkungen;
	}
	public void setBemerkungen(String m_bemerkungen) {
		this.m_bemerkungen = m_bemerkungen;
	}
}
