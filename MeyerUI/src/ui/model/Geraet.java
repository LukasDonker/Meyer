package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class Geraet extends ValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private Long typModell;
	private Long hersteller;
	private String seriennummer;
	private Integer baujahr;
	
	public Long getTypModell() {
		return typModell;
	}
	public void setTypModell(Long typModell) {
		this.typModell = typModell;
	}
	public Long getHersteller() {
		return hersteller;
	}
	public void setHersteller(Long hersteller) {
		this.hersteller = hersteller;
	}
	public String getSeriennummer() {
		return seriennummer;
	}
	public void setSeriennummer(String seriennummer) {
		this.seriennummer = seriennummer;
	}
	public Integer getBaujahr() {
		return baujahr;
	}
	public void setBaujahr(Integer baujahr) {
		this.baujahr = baujahr;
	}
}
