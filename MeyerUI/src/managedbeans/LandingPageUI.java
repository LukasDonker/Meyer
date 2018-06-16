package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.Statusbar;
import org.eclnt.jsfserver.elements.util.Trigger;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedBean;

import ui.common.MySecurityManager;
import ui.ejb.BenutzerManager;
import ui.ejb.JNDIConnect;
import ui.model.Mitarbeiter;

@CCGenClass(expressionBase = "#{d.LandingPageUI}")
public class LandingPageUI extends WorkpageDispatchedBean implements Serializable {

	String m_passwort;
	
	Trigger myTrigger = new Trigger();

	public Trigger getMyTrigger() {
		return myTrigger;
	}
	
	public void setMyTrigger(Trigger value) {
		myTrigger = value;
	}
	
	public String getPasswort() {
		return m_passwort;
	}

	public void setPasswort(String value) {
		this.m_passwort = value;
	}

	String m_benutzername;

	public String getBenutzername() {
		return m_benutzername;
	}

	public void setBenutzername(String value) {
		this.m_benutzername = value;
	}

	private static boolean first = true;

	BenutzerManager benutzerManager = JNDIConnect.getInstance().getBenutzerManager();

	/**
	 * 
	 */
	private static final long serialVersionUID = -4526755202677521963L;

	public LandingPageUI(IWorkpageDispatcher dispatcher) {
		super(dispatcher);
	}

	public void onAnmelden(javax.faces.event.ActionEvent event) {
		if (first) {
			Mitarbeiter admin = new Mitarbeiter();
			admin.setAdmin(true);
			admin.setName(m_benutzername);
			admin.setPasswort(m_passwort);
			admin.setDisponent(true);
			admin = benutzerManager.createMitarbeiter(admin);
			MySecurityManager securityManager = MySecurityManager.getInstance();
			securityManager.anmelden(admin);
			first = false;
			m_benutzername = admin.getId() +"";
			myTrigger.trigger();
		} else {
			Mitarbeiter mitarbeiter = benutzerManager.passwortAbfrage(m_benutzername, m_passwort);
			if (mitarbeiter != null) {
				MySecurityManager securityManager = MySecurityManager.getInstance();
				securityManager.anmelden(mitarbeiter);
				myTrigger.trigger();
			}
		}

		Statusbar.outputError("Benutzername oder Kennwort ist falsch!");

	}


	public String getPageName() {
		return "LandingPage.jsp";
	}


	public String getRootExpressionUsedInPage() {
		return "#{d.LandingPageUI}";
	}

}
