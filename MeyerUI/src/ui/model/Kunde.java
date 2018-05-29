package ui.model;

import java.util.List;

import javax.persistence.Entity;

import model.common.ValueObject;
import model.ort.Anschrift;

@Entity
public class Kunde extends ValueObject {
	
	
	private Long Kundennummer;
	private Anschrift rechnungsempfänger;
	private List<Ansprechpartner> listAnsprechpartner;
	private String name;
	
	
	public Long getKundennummer() {
		return Kundennummer;
	}
	public void setKundennummer(Long kundennummer) {
		Kundennummer = kundennummer;
	}
	public Anschrift getRechnungsempfänger() {
		return rechnungsempfänger;
	}
	public void setRechnungsempfänger(Anschrift rechnungsempfänger) {
		this.rechnungsempfänger = rechnungsempfänger;
	}
	public List<Ansprechpartner> getListAnsprechpartner() {
		return listAnsprechpartner;
	}
	public void setListAnsprechpartner(List<Ansprechpartner> listAnsprechpartner) {
		this.listAnsprechpartner = listAnsprechpartner;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
