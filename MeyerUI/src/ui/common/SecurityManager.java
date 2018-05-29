package ui.common;

import java.util.HashMap;

import org.eclnt.workplace.WorkpageDispatcher;

import managedbeans.Dispatcher;
import ui.model.Mitarbeiter;

public class SecurityManager {
	
	private static HashMap<WorkpageDispatcher, SecurityManager> sessionList = new HashMap<WorkpageDispatcher, SecurityManager>();
	
	public static SecurityManager getInstance() {
		SecurityManager dispatcher = sessionList.get(Dispatcher.findSessionTopWorkpageDispatcher());
		if(dispatcher == null) {
			dispatcher = new SecurityManager();
		}
		return dispatcher;
	}
	
	private Mitarbeiter angemeldeterBenutzer;
	private WorkpageDispatcher session;
	private boolean angemeldet = false;
	
	private SecurityManager() {
		session = Dispatcher.findSessionTopWorkpageDispatcher();
		sessionList.put(session, this);
	}
	
	public Mitarbeiter anmelden(String name, String passwort) {
		//TODO Mitarbeiter anmelden;
		angemeldet = true;
		return angemeldeterBenutzer;
	}
	
	public Mitarbeiter getAngemeldeterBenutzer() {
		return angemeldeterBenutzer;
	}
	
	public Mitarbeiter setNewPasswort(String nummer, String altesPasswort, String neuesPasswort) {
		//TODO
		return angemeldeterBenutzer;
	}
	
	public void logOff() {
		boolean angemeldet = false;
		sessionList.remove(session);
	}
	
	public boolean isAngemeldet() {
		return angemeldet;
	}
	
}
