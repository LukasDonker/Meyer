package ui.model;

import java.util.List;

import javax.persistence.Entity;

import model.common.ValueObject;
import model.ort.Anschrift;

@Entity
public class Kunde extends ValueObject {
	
	
	private Long Kundennummer;
	private Anschrift rechnungsempf�nger;
	private List<Ansprechpartner> listAnsprechpartner;
	private String name;
	
	
	public Long getKundennummer() {
		return Kundennummer;
	}
	public void setKundennummer(Long kundennummer) {
		Kundennummer = kundennummer;
	}
	public Anschrift getRechnungsempf�nger() {
		return rechnungsempf�nger;
	}
	public void setRechnungsempf�nger(Anschrift rechnungsempf�nger) {
		this.rechnungsempf�nger = rechnungsempf�nger;
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
