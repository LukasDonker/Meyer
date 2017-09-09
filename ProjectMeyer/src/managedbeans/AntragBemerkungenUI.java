package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.AntragBemerkungenUI}")

public class AntragBemerkungenUI
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

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public AntragBemerkungenUI()
    {
    }

    @Override
    public String getPageName() { return "/pages/AntragBemerkungen.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.AntragBemerkungenUI}"; }

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
