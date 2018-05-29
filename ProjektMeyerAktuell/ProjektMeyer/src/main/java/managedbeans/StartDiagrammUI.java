package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.StartDiagrammUI}")

public class StartDiagrammUI
extends PageBean
implements Serializable
{
    String m_config;

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

    public StartDiagrammUI(String json)
    {
        m_config = json;
    }

    public String getConfig() { return m_config; }
    public void setConfig(String value) { this.m_config = value; }

    @Override
    public String getPageName() { return "/pages/start/StartDiagramm.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.StartDiagrammUI}"; }

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
