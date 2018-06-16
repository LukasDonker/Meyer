package ui.ejb;

import java.util.List;

import javax.ejb.Remote;

import ui.model.Einsatzbericht;
import ui.model.MaterialBestellung;
import ui.model.Mitarbeiter;
import ui.model.Teil;
import ui.model.ZusatzEinsatz;

@Remote
public interface BestellungManager {

	//Crud Methoden MaterialBestellung
	public MaterialBestellung findMaterialBestellung(long id);
	
	public MaterialBestellung updateMaterialBestellung(MaterialBestellung value);
	
	public MaterialBestellung createMaterialBestellung(MaterialBestellung value);
	
	public void deleteMaterialBestellung(MaterialBestellung value);
	
	//NamedQueries MaterialBestellung
	public List<MaterialBestellung> findOffeneMaterialBestellung();
	
	public List<MaterialBestellung> findMaterialBestellungByZusatzEinsatz(ZusatzEinsatz value);
	
	public List<MaterialBestellung> findMaterialBestellungByEinsatzbericht(Einsatzbericht value);
	
	public List<MaterialBestellung> findMaterialBestellungByTechniker(Mitarbeiter techniker);
	
	//CRUD Teile
	public Teil findTeil(long id);
	
	public Teil updateTeil(Teil teil);
	
	public Teil createTeil(Teil teil);
	
	public void deleteTeil(Teil teil);
	
}
