package ui.ejb;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceUnit;

import ui.model.Kunde;
import ui.model.KundenGeraet;

@Stateless
@Remote(KundenManager.class)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class KundenManagerEJB implements KundenManager{

	@PersistenceUnit
	private EntityManager m_em;
	
	@Override
	public Kunde findKunde(long id) {
		return m_em.find(Kunde.class, id); 
	}

	@Override
	public Kunde updateKunde(Kunde value) {
		return m_em.merge(value);
	}

	@Override
	public Kunde createKunde(Kunde value) {
		m_em.persist(value);
		return value;
	}

	@Override
	public void deleteKunde(Kunde value) {
		m_em.remove(value);
	}

	@Override
	public KundenGeraet findKundenGeraet(long id) {
		return m_em.find(KundenGeraet.class, id);
	}

	@Override
	public KundenGeraet updateKundenGeraet(KundenGeraet value) {
		return m_em.merge(value);
	}

	@Override
	public KundenGeraet createKundenGeraet(KundenGeraet value) {
		m_em.persist(value);
		return value;
	}

	@Override
	public void deleteKundenGeraet(KundenGeraet value) {
		m_em.remove(value);
	}

}
