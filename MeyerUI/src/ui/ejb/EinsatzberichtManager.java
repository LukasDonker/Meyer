package ui.ejb;

import java.util.List;

import javax.ejb.Remote;

import ui.model.Angebot;
import ui.model.Arbeiten;
import ui.model.AuszufuehrendeArbeiten;
import ui.model.Einsatzbericht;
import ui.model.MaterialBestellung;
import ui.model.Mitarbeiter;
import ui.model.MyFile;
import ui.model.TeileUndPauschalarbeiten;
import ui.model.ZusatzEinsatz;

@Remote
public interface EinsatzberichtManager {

	//CRUD Methoden Einsatzbericht
	public Einsatzbericht findEinsatzbericht(long id);
	
	public Einsatzbericht updateEinsatzbericht(Einsatzbericht value);
	
	public Einsatzbericht createEinsatzbericht(Einsatzbericht value);
	
	public void deleteEinsatzbericht(Einsatzbericht value);
	
	//NamedQueries Einsatzbericht
	public List<Einsatzbericht> findEinsatzberichtByDisponent(Mitarbeiter disp);
	
	public List<Einsatzbericht> findEinsatzberichtByTechniker(Mitarbeiter tech);
	
	//CRUD Methoden Zusatzeinsatz
	public ZusatzEinsatz findZusatzEinsatz(long id);
	
	public ZusatzEinsatz updateZusatzEinsatz(ZusatzEinsatz value);
	
	public ZusatzEinsatz createZusatzEinsatz(ZusatzEinsatz value);
	
	public void deleteZusatzEinsatz(ZusatzEinsatz value);
	
	//NamedQueries ZusatzEinsatz
	public List<ZusatzEinsatz> findZusatzEinsatzbyTechniker(Mitarbeiter tech);
	
	public List<ZusatzEinsatz> findZusatzEinsatzbyDisponent(Mitarbeiter disp);
	
	public ZusatzEinsatz findZusatzEInsatzbyEinsatzbericht(Einsatzbericht bericht);
	
	
	//AuszufuehrendeArbeiten
	public AuszufuehrendeArbeiten findAuszufuehrendeArbeiten(long id);
	
	public AuszufuehrendeArbeiten updateAuszufuehrendeArbeiten(AuszufuehrendeArbeiten ausArbeiten);
	
	public AuszufuehrendeArbeiten createAuszufuehrendeArbeiten(AuszufuehrendeArbeiten ausArbeiten);
	
	public void deleteAuszufuehrendeArbeiten(AuszufuehrendeArbeiten value);
	
	//Arbeit
	public Arbeiten findArbeiten(long id);
	
	public Arbeiten updateArbeiten(Arbeiten value);
	
	public Arbeiten createArbeiten(Arbeiten value);
	
	public void deleteArbeiten(Arbeiten value);
	
	//TeileUndPauschalarbeiten
	public TeileUndPauschalarbeiten findTeileUndPauschalarbeiten(long id);
	
	public TeileUndPauschalarbeiten updateTeileUndPauschalarbeiten(TeileUndPauschalarbeiten value);
	
	public TeileUndPauschalarbeiten createTeileUndPauschalarbeiten(TeileUndPauschalarbeiten value);

	public void deleteTeileUndPauschalarbeiten(TeileUndPauschalarbeiten value);

	//MaterialBestellung
	public MaterialBestellung findMaterialBestellung(Long value);
	
	public MaterialBestellung updateMaterialBestellung(MaterialBestellung value);
	
	public MaterialBestellung createMaterialBestellung(MaterialBestellung value);
	
	public void deleteMaterialBestellung(MaterialBestellung value);

	
	//Angebot
	public Angebot findAngebot(Long angebot);
	
	public Angebot updateAngebot(Angebot value);
	
	public Angebot createAngebot(Angebot value);
	
	public void deleteAngebot(Angebot value);

	
	//MyFile
	public MyFile findMyFile(Long image);
	
	public MyFile updateMyFile(MyFile value);
	
	public MyFile createMyFile(MyFile value);
	
	public void deleteMyFile(MyFile value);
	

}
