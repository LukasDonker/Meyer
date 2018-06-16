package ui.ejb;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ui.model.Anschrift;
import ui.model.Ansprechpartner;
import ui.model.Kunde;
import ui.model.KundenGeraet;

@Stateless
@Remote(KundenManager.class)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class KundenManagerEJB implements KundenManager{

//	private static KundenManager instance;
//
//	public static KundenManager getInstance() {
//		if (instance == null) {
//			instance = new KundenManagerEJB();
//		}
//		return instance;
//	}

	private KundenManagerEJB() {
	}
	
	@PersistenceContext(unitName="ExampleDS")
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

	@Override
	public Ansprechpartner findAnsprechpartner(long id) {
		return m_em.find(Ansprechpartner.class, id);
	}

	@Override
	public Ansprechpartner updateAnsprechpartner(Ansprechpartner value) {
		return m_em.merge(value);
	}

	@Override
	public Ansprechpartner createAnsprechpartner(Ansprechpartner value) {
		m_em.persist(value);
		return value;
	}

	@Override
	public void deleteAnsprechpartner(Ansprechpartner value) {
		m_em.remove(value);
	}

	@Override
	public Ansprechpartner findAnsprechpartnerByName(String value) {
		Query query = m_em.createQuery("FROM Ansprechpartner a WHERE a.name = :name");
		query.setParameter("name", value);
		
		return (Ansprechpartner) query.getResultList().get(0);
	}

	@Override
	public Anschrift findAnschrift(Long anschrift) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Anschrift updateAnschrift(Anschrift value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Anschrift createAnschrift(Anschrift value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAnschrift(Anschrift value) {
		// TODO Auto-generated method stub
		
	}

}
