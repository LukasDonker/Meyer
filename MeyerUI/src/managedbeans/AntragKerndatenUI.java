package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.AntragKerndatenUI}")

public class AntragKerndatenUI
extends PageBean
implements Serializable
{
    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------

    /**
     *
     */
    private static final long serialVersionUID = 994359358170038377L;

    private boolean m_editmode;
    public boolean isEditmode(){
        return m_editmode;
    }
    public void setEditmode(boolean value){
        m_editmode = value;
    }

    public boolean isViewMode(){return !m_editmode;}

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

    public AntragKerndatenUI()
    {
    }

    @Override
    public String getPageName() { return "/pages/AntragKerndaten.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.AntragKerndatenUI}"; }

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

    public void onEdit(javax.faces.event.ActionEvent event) {
        setEditmode(true);
    }

    public void onBack(javax.faces.event.ActionEvent event) {
        setEditmode(false);
    }


}
