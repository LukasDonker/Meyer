package view;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.NewGadgetHandlerUI}")

public class NewGadgetHandlerUI
extends PageBean
implements Serializable
{

    PageBean m_content;
    public PageBean getContent() { return m_content; }
    public void setContent(PageBean value) { this.m_content = value; }

    private StartContentUI m_parent;

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

    public NewGadgetHandlerUI(StartContentUI home)
    {
        m_parent = home;
        m_content = new NewGadgetDialogUI(this);
    }

    @Override
    public String getPageName() { return "/dialogs/NewGadgetHandler.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.NewGadgetHandlerUI}"; }

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
    public void onChange(javax.faces.event.ActionEvent event) {
        m_content = new NewGadgetDialogFromSearchUI(m_parent);
    }

    public void onChangeToList(javax.faces.event.ActionEvent event) {
        m_content = new NewGadgetListUI(m_parent);
    }


}
