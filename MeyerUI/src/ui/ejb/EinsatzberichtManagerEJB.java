package ui.ejb;

import java.util.List;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;

import ui.model.Disponent;
import ui.model.Einsatzbericht;
import ui.model.Techniker;
import ui.model.ZusatzEinsatz;

@Stateless
@Remote(EinsatzberichtManager.class)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class EinsatzberichtManagerEJB implements EinsatzberichtManager{

	@PersistenceUnit
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
	public List<Einsatzbericht> findEinsatzberichtByDisponent(Disponent disp) {
		Query query = m_em.createQuery("FROM Einsatzbericht e WHERE e.disponent = :dispo");
		query.setParameter("dispo", disp);
		
		return query.getResultList();
	}

	@Override
	public List<Einsatzbericht> findEinsatzberichtByTechniker(Techniker tech) {
		Query query = m_em.createQuery("FROM Einsatzbericht e WHERE :tech IN e.listTechniker");
		query.setParameter("tech", tech);
		
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
	public List<ZusatzEinsatz> findZusatzEinsatzbyTechniker(Techniker tech) {
		Query query = m_em.createQuery("FROM ZusatzEinsatz z WHERE z.techniker = :tech");
		query.setParameter("tech", tech);
		
		return query.getResultList();
	}

	@Override
	public List<ZusatzEinsatz> findZusatzEinsatzbyDisponent(Disponent disp) {
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

}
