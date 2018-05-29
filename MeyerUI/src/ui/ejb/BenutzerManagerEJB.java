package ui.ejb;

import java.util.List;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import ui.model.Mitarbeiter;

@Stateless
@Remote(PersonenManager.class)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class BenutzerManagerEJB implements BenutzerManager{

	@PersistenceUnit
	private EntityManager m_em;
	
	@Override
	public List<Mitarbeiter> findAllMitarbeiter() {
		Query query = m_em.createQuery("FROM Mitarbeiter");
		return (List<Mitarbeiter>) query.getResultList();
	}

	@Override
	public Mitarbeiter findMitarbeiter(Long mitarbeiternummer) {
		return m_em.find(Mitarbeiter.class, mitarbeiternummer);
	}

	@Override
	public Mitarbeiter findMitarbeiterByName(String name) {
		Query query = m_em.createQuery("FROM Mitarbeiter WHERE name like :name");
		query.setParameter("name", name);
		return (Mitarbeiter) query.getResultList().get(0);
	}

	@Override
	public Mitarbeiter updateMitarbeiter(Mitarbeiter mitarbeiter) {
		Mitarbeiter result = m_em.merge(mitarbeiter);
		return result;
	}

	@Override
	public void deleteMitarbeiter(Mitarbeiter mitarbeiter) {
		m_em.remove(mitarbeiter);
		
	}

	@Override
	public Mitarbeiter createMitarbeiter(Mitarbeiter mitarbeiter) {
		m_em.persist(mitarbeiter);
		return mitarbeiter;
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

	
	
}
