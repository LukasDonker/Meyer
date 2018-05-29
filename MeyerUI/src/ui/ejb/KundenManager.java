package ui.ejb;

import javax.ejb.Remote;

import ui.model.Kunde;
import ui.model.KundenGeraet;

@Remote
public interface KundenManager {

	//CRUD Methoden Kunde
	public Kunde findKunde(long id);
	
	public Kunde updateKunde(Kunde value);
	
	public Kunde createKunde(Kunde value);
	
	public void deleteKunde(Kunde value);
	
	
	//NamedQueries Kunde
	
	
	//CRUD Methoden KundenGeraet
	public KundenGeraet findKundenGeraet(long id);
	
	public KundenGeraet updateKundenGeraet(KundenGeraet value);
	
	public KundenGeraet createKundenGeraet(KundenGeraet value);
	
	public void deleteKundenGeraet(KundenGeraet value);
	
}
