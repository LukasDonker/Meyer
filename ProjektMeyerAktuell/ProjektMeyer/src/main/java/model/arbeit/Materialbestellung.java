package model.arbeit;

import java.util.List;

import model.common.ValueObject;
import model.material.Teil;

public class Materialbestellung extends ValueObject {

	private Long bestellnummer;
	private boolean eilAuftrag;
	private List<Teil> listTeile;
	
	public Long getBestellnummer() {
		return bestellnummer;
	}
	public void setBestellnummer(Long bestellnummer) {
		this.bestellnummer = bestellnummer;
	}
	public boolean isEilAuftrag() {
		return eilAuftrag;
	}
	public void setEilAuftrag(boolean eilAuftrag) {
		this.eilAuftrag = eilAuftrag;
	}
	public List<Teil> getListTeile() {
		return listTeile;
	}
	public void setListTeile(List<Teil> listTeile) {
		this.listTeile = listTeile;
	}
	
}
