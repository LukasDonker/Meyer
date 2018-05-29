package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.managedbean.IDispatcher;
import org.eclnt.workplace.WorkpageDispatchedBean;

@CCGenClass(expressionBase = "#{d.LandingPageUI}")
public class LandingPageUI extends WorkpageDispatchedBean implements Serializable{
    public void onAnmelden(javax.faces.event.ActionEvent event) {}

    String m_passwort;
    public String getPasswort() { return m_passwort; }
    public void setPasswort(String value) { this.m_passwort = value; }

    String m_benutzername;
    public String getBenutzername() { return m_benutzername; }
    public void setBenutzername(String value) { this.m_benutzername = value; }


	/**
	 * 
	 */
	private static final long serialVersionUID = -4526755202677521963L;

	public LandingPageUI(IDispatcher dispatcher) {
		super(dispatcher);
		//TODO if Keine Benutzer im System eingetragen dann erstelle NUtzer ADMIN 
		//TODO Benutzeranfrage
	}

}
