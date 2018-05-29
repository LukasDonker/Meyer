package ui.ejb;

import java.util.List;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;

import ui.model.Einsatzbericht;
import ui.model.MaterialBestellung;
import ui.model.Techniker;
import ui.model.Teil;
import ui.model.ZusatzEinsatz;

@Stateless
@Remote(BestellungManager.class)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class BestellungManagerEJB implements BestellungManager{

	@PersistenceUnit
	private EntityManager m_em;
	
	@Override
	public MaterialBestellung findMaterialBestellung(long id) {
		return m_em.find(MaterialBestellung.class, id);
	}

	@Override
	public MaterialBestellung updateMaterialBestellung(MaterialBestellung value) {
		m_em.merge(value);
		return value;
	}

	@Override
	public MaterialBestellung createMaterialBestellung(MaterialBestellung value) {
		m_em.persist(value);
		return value;
	}

	@Override
	public void deleteMaterialBestellung(MaterialBestellung value) {
		m_em.remove(value);
	}

	@Override
	public List<MaterialBestellung> findOffeneMaterialBestellung() {
		Query query = m_em.createQuery("FROM MaterialBestellung mb WHERE mb.erledigt = false");
		List<MaterialBestellung> result = (List<MaterialBestellung>) query.getResultList();
		return result;
	}

	@Override
	public List<MaterialBestellung> findMaterialBestellungByZusatzEinsatz(ZusatzEinsatz value) {
		Query query = m_em.createQuery("FROM MaterialBestellung mb WHERE mb.zusatzEinsatz = :zusatEinsatz");
		query.setParameter("zusatzEinsatz", value);
		List<MaterialBestellung> result = (List<MaterialBestellung>) query.getResultList();
		return result;
	}

	@Override
	public List<MaterialBestellung> findMaterialBestellungByEinsatzbericht(Einsatzbericht value) {
		Query query = m_em.createQuery("FROM MaterialBestellung mb WHERE mb.zusatzEinsatz.vorgaenger = :einsatzBericht");
		query.setParameter("einsatzBericht", value);
		List<MaterialBestellung> result = (List<MaterialBestellung>) query.getResultList();
		return result;
	}

	@Override
	public List<MaterialBestellung> findMaterialBestellungByTechniker(Techniker techniker) {
		Query query = m_em.createQuery("FROM MaterialBestellung mb WHERE mb.zusatzEinsatz.techniker = :techniker");
		query.setParameter("techniker", techniker);
		List<MaterialBestellung> result = (List<MaterialBestellung>) query.getResultList();
		return result;
	}

	@Override
	public Teil findTeil(long id) {
		return m_em.find(Teil.class, id);
	}

	@Override
	public Teil updateTeil(Teil teil) {
		m_em.merge(teil);
		return teil;
	}

	@Override
	public Teil createTeil(Teil teil) {
		m_em.persist(teil);
		return teil;
	}

	@Override
	public void deleteTeil(Teil teil) {
		m_em.remove(teil);
		
	}

}
