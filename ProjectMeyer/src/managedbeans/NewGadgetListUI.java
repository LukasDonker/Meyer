package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.NewGadgetListUI}")

public class NewGadgetListUI
extends PageBean
implements Serializable
{
    public void onHinzufügen(javax.faces.event.ActionEvent event) {
        m_parent.onPopupClosed("Ant. Sachb. In Schlussz.");
    }


    private StartContentUI m_parent;

    FIXGRIDListBinding<FieldListItem> m_fieldList = new FIXGRIDListBinding<>();
    public FIXGRIDListBinding<FieldListItem> getFieldList() { return m_fieldList; }
    public void setFieldList(FIXGRIDListBinding<FieldListItem> value) { this.m_fieldList = value; }

    public class FieldListItem extends FIXGRIDItem implements java.io.Serializable
    {

        String m_fieldname;
        public String getFieldname() { return m_fieldname; }
        public void setFieldname(String value) { this.m_fieldname = value; }


        public FieldListItem(String name){
            m_fieldname = name;
        }

    }

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

    public NewGadgetListUI(StartContentUI parent)
    {
        m_parent = parent;
    }

    @Override
    public String getPageName() { return "/dialogs/NewGadgetList.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.NewGadgetListUI}"; }

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
    public void onAuswahl(javax.faces.event.ActionEvent event) {
        m_fieldList.getItems().add(new FieldListItem("GZ"));
        m_fieldList.getItems().add(new FieldListItem("Antragsteller"));
        m_fieldList.getItems().add(new FieldListItem("Antragsumme"));
        m_fieldList.getItems().add(new FieldListItem("Änderung"));
    }
}
