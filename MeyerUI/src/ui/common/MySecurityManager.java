package ui.common;

import java.util.HashMap;

import org.eclnt.workplace.WorkpageDispatcher;

import managedbeans.Dispatcher;
import ui.model.Mitarbeiter;

public class MySecurityManager {
	
	private static HashMap<WorkpageDispatcher, MySecurityManager> sessionList = new HashMap<WorkpageDispatcher, MySecurityManager>();
	
	public static MySecurityManager getInstance() {
		MySecurityManager dispatcher = sessionList.get(Dispatcher.findSessionTopWorkpageDispatcher());
		if(dispatcher == null) {
			dispatcher = new MySecurityManager();
		}
		return dispatcher;
	}
	
	private Mitarbeiter angemeldeterBenutzer;
	private WorkpageDispatcher session;
	private boolean angemeldet = false;
	
	private MySecurityManager() {
		session = Dispatcher.findSessionTopWorkpageDispatcher();
		sessionList.put(session, this);
	}
	
	public Mitarbeiter anmelden(Mitarbeiter mitarbeiter) {
		angemeldeterBenutzer = mitarbeiter;
		angemeldet = true;
		return angemeldeterBenutzer;
	}
	
	public Mitarbeiter getAngemeldeterBenutzer() {
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
