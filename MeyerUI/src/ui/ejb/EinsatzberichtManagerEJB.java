package ui.ejb;

import java.util.List;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ui.model.Angebot;
import ui.model.Arbeiten;
import ui.model.AuszufuehrendeArbeiten;
import ui.model.Einsatzbericht;
import ui.model.MaterialBestellung;
import ui.model.Mitarbeiter;
import ui.model.MyFile;
import ui.model.TeileUndPauschalarbeiten;
import ui.model.ZusatzEinsatz;

@Stateless
@Remote(EinsatzberichtManager.class)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class EinsatzberichtManagerEJB implements EinsatzberichtManager {

//	private static EinsatzberichtManager instance;
//
//	public static EinsatzberichtManager getInstance() {
//		if (instance == null) {
//			instance = new EinsatzberichtManagerEJB();
//		}
//		return instance;
//	}
//
//	private EinsatzberichtManagerEJB() {
//	}

	@PersistenceContext(unitName = "ExampleDS")
	private EntityManager m_em;

	@Override
	public Einsatzbericht findEinsatzbericht(long id) {
		return m_em.find(Einsatzbericht.class, id);
	}

	@Override
	public Einsatzbericht updateEinsatzbericht(Einsatzbericht value) {
		Einsatzbericht merged = m_em.merge(value);
		return merged;
	}

	@Override
	public Einsatzbericht createEinsatzbericht(Einsatzbericht value) {
		m_em.persist(value);
		return value;
	}

	@Override
	public void deleteEinsatzbericht(Einsatzbericht value) {
		m_em.remove(value);
	}

	@Override
	public List<Einsatzbericht> findEinsatzberichtByDisponent(Mitarbeiter disp) {
		Query query = m_em.createQuery("FROM Einsatzbericht e WHERE e.disponent = :dispo");
		query.setParameter("dispo", disp.getId());

		return query.getResultList();
	}

	@Override
	public List<Einsatzbericht> findEinsatzberichtByTechniker(Mitarbeiter tech) {
		Query query = m_em.createQuery("FROM Einsatzbericht e WHERE :tech IN e.listTechniker");
		query.setParameter("tech", tech.getId());

		return query.getResultList();
	}

	@Override
	public ZusatzEinsatz findZusatzEinsatz(long id) {
		return m_em.find(ZusatzEinsatz.class, id);
	}

	@Override
	public ZusatzEinsatz updateZusatzEinsatz(ZusatzEinsatz value) {
		ZusatzEinsatz result = m_em.merge(value);
		return result;
	}

	@Override
	public ZusatzEinsatz createZusatzEinsatz(ZusatzEinsatz value) {
		m_em.persist(value);
		return value;
	}

	@Override
	public void deleteZusatzEinsatz(ZusatzEinsatz value) {
		m_em.persist(value);
	}

	@Override
	public List<ZusatzEinsatz> findZusatzEinsatzbyTechniker(Mitarbeiter tech) {
		Query query = m_em.createQuery("FROM ZusatzEinsatz z WHERE z.techniker = :tech");
		query.setParameter("tech", tech);

		return query.getResultList();
	}

	@Override
	public List<ZusatzEinsatz> findZusatzEinsatzbyDisponent(Mitarbeiter disp) {
		Query query = m_em.createQuery("FROM ZusatzEinsatz z WHERE z.disponent = :disp");
		query.setParameter("disp", disp);

		return query.getResultList();
	}

	@Override
	public ZusatzEinsatz findZusatzEInsatzbyEinsatzbericht(Einsatzbericht bericht) {
		Query query = m_em.createQuery("FROM ZusatzEinsatz z WHERE z.vorgaenger = :bericht OR z.nachfolger = :bericht");
		query.setParameter("bericht", bericht);

		return (ZusatzEinsatz) query.getResultList().get(0);
	}

	@Override
	public AuszufuehrendeArbeiten findAuszufuehrendeArbeiten(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AuszufuehrendeArbeiten updateAuszufuehrendeArbeiten(AuszufuehrendeArbeiten ausArbeiten) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AuszufuehrendeArbeiten createAuszufuehrendeArbeiten(AuszufuehrendeArbeiten ausArbeiten) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAuszufuehrendeArbeiten(AuszufuehrendeArbeiten value) {
		// TODO Auto-generated method stub

	}

	@Override
	public Arbeiten findArbeiten(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Arbeiten updateArbeiten(Arbeiten value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Arbeiten createArbeiten(Arbeiten value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteArbeiten(Arbeiten value) {
		// TODO Auto-generated method stub

	}

	@Override
	public TeileUndPauschalarbeiten findTeileUndPauschalarbeiten(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TeileUndPauschalarbeiten updateTeileUndPauschalarbeiten(TeileUndPauschalarbeiten value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TeileUndPauschalarbeiten createTeileUndPauschalarbeiten(TeileUndPauschalarbeiten value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteTeileUndPauschalarbeiten(TeileUndPauschalarbeiten value) {
		// TODO Auto-generated method stub

	}

	@Override
	public MaterialBestellung findMaterialBestellung(Long value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MaterialBestellung updateMaterialBestellung(MaterialBestellung value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MaterialBestellung createMaterialBestellung(MaterialBestellung value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteMaterialBestellung(MaterialBestellung value) {
		// TODO Auto-generated method stub

	}

	@Override
	public Angebot findAngebot(Long angebot) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Angebot updateAngebot(Angebot value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Angebot createAngebot(Angebot value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAngebot(Angebot value) {
		// TODO Auto-generated method stub

	}

	@Override
	public MyFile findMyFile(Long image) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MyFile updateMyFile(MyFile value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MyFile createMyFile(MyFile value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteMyFile(MyFile value) {
		// TODO Auto-generated method stub

	}

}
