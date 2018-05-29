package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.managedbean.DefaultDispatchedPageBean;
import org.eclnt.jsfserver.managedbean.IDispatcher;

@CCGenClass(expressionBase = "#{d.AntragKerndatenUI}")
public class AdminUI extends DefaultDispatchedPageBean implements Serializable{
    String m_neuesPasswort;
    public String getNeuesPasswort() { return m_neuesPasswort; }
    public void setNeuesPasswort(String value) { this.m_neuesPasswort = value; }

    String m_passwort;
    public String getPasswort() { return m_passwort; }
    public void setPasswort(String value) { this.m_passwort = value; }

    String m_benutzername;
    public String getBenutzername() { return m_benutzername; }
    public void setBenutzername(String value) { this.m_benutzername = value; }

    boolean m_admin;
    public boolean getAdmin() { return m_admin; }
    public void setAdmin(boolean value) { this.m_admin = value; }


	/**
	 * 
	 */
	private static final long serialVersionUID = -8688723632864146416L;

	public AdminUI(IDispatcher dispatcher) {
		super(dispatcher);
		
	}

	@Override
	public String getPageName() {
		return "/pages/Admin.jsp";
	}

	@Override
	public String getRootExpressionUsedInPage() {
		return "#{d.AdminUI}";
	}

}
