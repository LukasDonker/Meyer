package ui.model;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ConstantListHolder;
import model.common.ConstantValueObject;

@Entity
public class TypModell extends ConstantValueObject {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}

	private String m_bezeichnung;
	private Long m_hersteller;
	private GeraeteTyp m_geraeteTyp;

	public String getBezeichnung() {
		return m_bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		this.m_bezeichnung = bezeichnung;
	}

	public Long getHersteller() {
		return m_hersteller;
	}

	public void setHersteller(Long hersteller) {
		m_hersteller = hersteller;
	}
	
	public static Collection<TypModell> getValues() {
		return ConstantListHolder.getListTypModell().values();
	}
	
	public static TypModell getTypModellById(String id) {
		return ConstantListHolder.getListTypModell().get(Long.valueOf(id));
	}
}
