package managedbeans;

import java.io.Serializable;
import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedPageBean;

import javax.faces.event.ActionEvent;

@CCGenClass (expressionBase="#{d.landingpageUI}")

public class LandingPageUI
    extends WorkpageDispatchedPageBean 
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

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public LandingPageUI(IWorkpageDispatcher workpageDispatcher)
    {
        super(workpageDispatcher);        
    }

    public String getPageName() { return "/webcontent/landingpage.jsp"; }
    public String getRootExpressionUsedInPage() { return "#{d.landingpageUI}"; }

    // ------------------------------------------------------------------------
    // public usage
    // ------------------------------------------------------------------------

    /* Initialization of the bean. Add any parameter that is required within your scenario. */
    public void prepare(IListener listener)
    {
        m_listener = listener;
    }

    // ------------------------------------------------------------------------
    // private usage
    // ------------------------------------------------------------------------
}
