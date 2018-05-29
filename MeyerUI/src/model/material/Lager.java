package model.material;

import java.util.List;

import javax.persistence.Entity;

import ui.model.Artikel;

@Entity
public class Lager {

	private List<Artikel> listartikel;

	public List<Artikel> getListartikel() {
		return listartikel;
	}

	public void setListartikel(List<Artikel> listartikel) {
		this.listartikel = listartikel;
	}
	
}
