package ui.model;

import java.util.List;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class MaterialBestellung extends ValueObject{
	
	private ZusatzEinsatz m_zusatzEinsatz;
	private boolean m_erledigts;
	private KundenGeraet m_kundengeraet;
	private List<Teil> m_listTeil;
	
	public KundenGeraet getKundengeraet() {
		return m_kundengeraet;
	}
	public void setKundengeraet(KundenGeraet kundengeraet) {
		m_kundengeraet = kundengeraet;
	}
	public List<Teil> getListTeil() {
		return m_listTeil;
	}
	public void setListTeil(List<Teil> listTeil) {
		m_listTeil = listTeil;
	}
	public ZusatzEinsatz getZusatzEinsatz() {
		return m_zusatzEinsatz;
	}
	public void setZusatzEinsatz(ZusatzEinsatz zusatzEinsatz) {
		m_zusatzEinsatz = zusatzEinsatz;
	}
	public boolean isErledigts() {
		return m_erledigts;
	}
	public void setErledigts(boolean m_erledigts) {
		this.m_erledigts = m_erledigts;
	}
	
	
}
