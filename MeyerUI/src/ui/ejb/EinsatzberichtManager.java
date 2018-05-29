package ui.ejb;

import java.util.List;

import javax.ejb.Remote;

import ui.model.Disponent;
import ui.model.Einsatzbericht;
import ui.model.Techniker;
import ui.model.ZusatzEinsatz;

@Remote
public interface EinsatzberichtManager {

	//CRUD Methoden Einsatzbericht
	public Einsatzbericht findEinsatzbericht(long id);
	
	public Einsatzbericht updateEinsatzbericht(Einsatzbericht value);
	
	public Einsatzbericht createEinsatzbericht(Einsatzbericht value);
	
	public void deleteEinsatzbericht(Einsatzbericht value);
	
	//NamedQueries Einsatzbericht
	public List<Einsatzbericht> findEinsatzberichtByDisponent(Disponent disp);
	
	public List<Einsatzbericht> findEinsatzberichtByTechniker(Techniker tech);
	
	//CRUD Methoden Zusatzeinsatz
	public ZusatzEinsatz findZusatzEinsatz(long id);
	
	public ZusatzEinsatz updateZusatzEinsatz(ZusatzEinsatz value);
	
	public ZusatzEinsatz createZusatzEinsatz(ZusatzEinsatz value);
	
	public void deleteZusatzEinsatz(ZusatzEinsatz value);
	
	//NamedQueries ZusatzEinsatz
	public List<ZusatzEinsatz> findZusatzEinsatzbyTechniker(Techniker tech);
	
	public List<ZusatzEinsatz> findZusatzEinsatzbyDisponent(Disponent disp);
	
	public ZusatzEinsatz findZusatzEInsatzbyEinsatzbericht(Einsatzbericht bericht);
	
}
