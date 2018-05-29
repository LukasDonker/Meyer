package ui.model;

import java.util.Collection;

import javax.persistence.Entity;

import model.common.ConstantListHolder;
import model.common.ConstantValueObject;

@Entity
public class TypModell extends ConstantValueObject {

	private String m_bezeichnung;
	private Hersteller m_hersteller;
	private GeraeteTyp m_geraeteTyp;

	public String getBezeichnung() {
		return m_bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		this.m_bezeichnung = bezeichnung;
	}

	public Hersteller getHersteller() {
		return m_hersteller;
	}

	public void setHersteller(Hersteller hersteller) {
		m_hersteller = hersteller;
	}
	
	public static Collection<TypModell> getValues() {
		return ConstantListHolder.getListTypModell().values();
	}
	
	public static TypModell getTypModellById(String id) {
		return ConstantListHolder.getListTypModell().get(Long.valueOf(id));
	}
}
