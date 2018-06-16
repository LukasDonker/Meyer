package ui.model;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ConstantListHolder;
import model.common.ConstantValueObject;

/**
 * Artikel und Pauschalarbeiten
 * @author Lukas
 *
 */
@Entity
public class Artikel extends ConstantValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private String bezeichung;
	private Long sachnummer;
	private Long sortNumber;
	
	public String getBezeichnung() {
		return bezeichung;
	}
	public void setBezeichnung(String bezeichung) {
		this.bezeichung = bezeichung;
	}
	public Long getSachnummer() {
		return sachnummer;
	}
	public void setSachnummer(Long sachnummer) {
		this.sachnummer = sachnummer;
	}
	public Long getSortNumber() {
		return sortNumber;
	}
	public void setSortNumber(Long sortNumber) {
		this.sortNumber = sortNumber;
	}
	
	public static Collection<Artikel> getValues() {
		return ConstantListHolder.getListArtikel().values();
	}
	
	public static Artikel getArtikelById(String id) {
		return ConstantListHolder.getListArtikel().get(Long.valueOf(id));
	}
}
