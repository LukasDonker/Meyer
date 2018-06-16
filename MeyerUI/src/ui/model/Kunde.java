package ui.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class Kunde extends ValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
	
	private Long Kundennummer;
	private Long rechnungsempfänger;
	private List<Long> listAnsprechpartner;
	private String name;
	
	
	public Long getKundennummer() {
		return Kundennummer;
	}
	public void setKundennummer(Long kundennummer) {
		Kundennummer = kundennummer;
	}
	public Long getRechnungsempfänger() {
		return rechnungsempfänger;
	}
	public void setRechnungsempfänger(Long rechnungsempfänger) {
		this.rechnungsempfänger = rechnungsempfänger;
	}
	
	@ElementCollection(targetClass=Long.class)
	public List<Long> getListAnsprechpartner() {
		return listAnsprechpartner;
	}
	public void setListAnsprechpartner(List<Long> listAnsprechpartner) {
		this.listAnsprechpartner = listAnsprechpartner;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
