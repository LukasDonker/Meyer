package model.material;

import java.util.List;

import model.person.Techniker;

public class Auto {

	private Techniker techniker;
	private List<Artikel> listArtikel;
	
	public Techniker getTechniker() {
		return techniker;
	}
	public void setTechniker(Techniker techniker) {
		this.techniker = techniker;
	}
	public List<Artikel> getListArtikel() {
		return listArtikel;
	}
	public void setListArtikel(List<Artikel> listArtikel) {
		this.listArtikel = listArtikel;
	}
}
