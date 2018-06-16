package ui.ejb;

import java.util.List;

import javax.ejb.Remote;

import ui.model.Mitarbeiter;

@Remote
public interface BenutzerManager {

	public List<Mitarbeiter> findAllMitarbeiter();
		
	public Mitarbeiter findMitarbeiter(Long mitarbeiter);
	
	public Mitarbeiter findMitarbeiterByName(String name);
	
	public Mitarbeiter updateMitarbeiter(Mitarbeiter dispo);
	
	public void deleteMitarbeiter(Mitarbeiter dispo);
	
	public Mitarbeiter createMitarbeiter(Mitarbeiter mitarbeiter);
	
	public Mitarbeiter passwortAbfrage(String mitarbeiternummer, String Passwort);
	
	public Mitarbeiter neuesPasswortSetzen(String mitarbeiternummer, String Passwort, String neuesPasswort);
	
}
