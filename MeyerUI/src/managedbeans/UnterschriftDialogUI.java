package managedbeans;

import java.io.Serializable;
import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.managedbean.IDispatcher;
import org.eclnt.jsfserver.pagebean.PageBean;

import javax.faces.event.ActionEvent;

@CCGenClass (expressionBase="#{d.UnterschriftDialogUI}")

public class UnterschriftDialogUI
    extends PageBean 
    implements Serializable
{
    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------
    
    /* Listener to the user of the page bean. */
    public interface IListener
    {
    }
    
    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------
    
    private IListener m_listener;
    
    private String m_klartext;
    private String m_pixelValues;
    
    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public UnterschriftDialogUI()
    {
    }

    public UnterschriftDialogUI(IDispatcher owningDispatcher) {
		// TODO Auto-generated constructor stub
	}

	public String getPageName() { return "/pages/dialog/UnterschriftDialog.jsp"; }
    public String getRootExpressionUsedInPage() { return "#{d.UnterschriftDialogUI}"; }

    // ------------------------------------------------------------------------
    // public usage
    // ------------------------------------------------------------------------

    /* Initialization of the bean. Add any parameter that is required within your scenario. */
    public void prepare(IListener listener)
    {
        m_listener = listener;
    }

	public String getKlartext() {
		return m_klartext;
	}

	public void setKlartext(String klartext) {
		m_klartext = klartext;
	}

	public String getPixelValues() {
		return m_pixelValues;
	}

	public void setPixelValues(String pixelValues) {
		m_pixelValues = pixelValues;
	}

    // ------------------------------------------------------------------------
    // private usage
    // ------------------------------------------------------------------------
}
