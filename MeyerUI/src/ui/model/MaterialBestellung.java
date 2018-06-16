package ui.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class MaterialBestellung extends ValueObject{
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
	private Long m_zusatzEinsatz;
	private boolean m_erledigts;
	private  Long m_kundengeraet;
	private List< Long> m_listTeil;
	
	public Long getKundengeraet() {
		return m_kundengeraet;
	}
	public void setKundengeraet( Long kundengeraet) {
		m_kundengeraet = kundengeraet;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListTeil() {
		return m_listTeil;
	}
	public void setListTeil(List<Long> listTeil) {
		m_listTeil = listTeil;
	}
	public Long getZusatzEinsatz() {
		return m_zusatzEinsatz;
	}
	public void setZusatzEinsatz(Long zusatzEinsatz) {
		m_zusatzEinsatz = zusatzEinsatz;
	}
	public boolean isErledigts() {
		return m_erledigts;
	}
	public void setErledigts(boolean m_erledigts) {
		this.m_erledigts = m_erledigts;
	}
	
	
}
