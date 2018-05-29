package model.arbeit;

import javax.persistence.Entity;

import model.common.ValueObject;
import ui.model.ZusatzEinsatz;

@Entity
public class WeitererEinsatz extends ValueObject {

	private ZusatzEinsatz materialbestellung;
	private boolean geraetLaueft;
	private boolean zweiMann;
	private Double zeitaufwand;
	private boolean kva;
	
	public ZusatzEinsatz getMaterialbestellung() {
		return materialbestellung;
	}
	public void setMaterialbestellung(ZusatzEinsatz materialbestellung) {
		this.materialbestellung = materialbestellung;
	}
	public boolean isGeraetLaueft() {
		return geraetLaueft;
	}
	public void setGeraetLaueft(boolean geraetLaueft) {
		this.geraetLaueft = geraetLaueft;
	}
	public boolean isZweiMann() {
		return zweiMann;
	}
	public void setZweiMann(boolean zweiMann) {
		this.zweiMann = zweiMann;
	}
	public Double getZeitaufwand() {
		return zeitaufwand;
	}
	public void setZeitaufwand(Double zeitaufwand) {
		this.zeitaufwand = zeitaufwand;
	}
	public boolean isKva() {
		return kva;
	}
	public void setKva(boolean kva) {
		this.kva = kva;
	}		
}
