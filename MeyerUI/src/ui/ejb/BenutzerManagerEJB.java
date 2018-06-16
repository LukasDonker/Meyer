package ui.ejb;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ui.model.Mitarbeiter;

@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class BenutzerManagerEJB implements BenutzerManager{

//	private static BenutzerManager instance;
//	
//	public static BenutzerManager getInstance() {
//		if(instance == null) {
//			instance = new BenutzerManagerEJB();
//		}
//		return instance;
//	}
//
//	private BenutzerManagerEJB() {}
//	
	
	@PersistenceContext(unitName="ExampleDS")
	private EntityManager m_em;
	
	@Override
	public List<Mitarbeiter> findAllMitarbeiter() {
		List<Mitarbeiter> result = new ArrayList<Mitarbeiter>();
		Query query = m_em.createQuery("FROM Mitarbeiter");
		result.addAll((List<Mitarbeiter>) query.getResultList());
		return result;
	}
	

	@Override
	public Mitarbeiter passwortAbfrage(String mitarbeiternummer, String passwort) {
		Long number = Long.parseLong(mitarbeiternummer);
		Mitarbeiter mitarbeiter = m_em.find(Mitarbeiter.class, number);
		if(mitarbeiter != null && mitarbeiter.getPasswort().equals(passwort)) {
			return mitarbeiter;
		}
		return null;
	}

	@Override
	public Mitarbeiter neuesPasswortSetzen(String mitarbeiternummer, String passwort, String neuesPasswort) {
		Mitarbeiter mitarbeiter = passwortAbfrage(mitarbeiternummer, passwort);
		if(mitarbeiter != null) {
			mitarbeiter.setPasswort(neuesPasswort);
			return updateMitarbeiter(mitarbeiter);
		}
		return null;
	}



	@Override
	public Mitarbeiter findMitarbeiter(Long mitarbeiter) {
		return m_em.find(Mitarbeiter.class, mitarbeiter);
	}

	@Override
	public Mitarbeiter findMitarbeiterByName(String name) {
		Query query = m_em.createQuery("FROM Disponent WHERE techniker.name = :name");
		query.setParameter("name", name);
		return (Mitarbeiter) query.getResultList().get(0);
	}

	@Override
	public Mitarbeiter updateMitarbeiter(Mitarbeiter dispo) {
		return m_em.merge(dispo);
	}

	@Override
	public void deleteMitarbeiter(Mitarbeiter dispo) {
		m_em.remove(dispo);
	}

	@Override
	public Mitarbeiter createMitarbeiter(Mitarbeiter mitarbeiter) {
		m_em.persist(mitarbeiter);
		return mitarbeiter; 
	}

	
	
	
}
