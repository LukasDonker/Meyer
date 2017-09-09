package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.AntragMittelUI}")

public class AntragMittelUI
extends PageBean
implements Serializable
{

    FIXGRIDTreeBinding<MittelTreeNode> m_mittelTree = new FIXGRIDTreeBinding<MittelTreeNode>();
    public FIXGRIDTreeBinding<MittelTreeNode> getMittelTree() { return m_mittelTree; }
    public void setMittelTree(FIXGRIDTreeBinding<MittelTreeNode> value) { this.m_mittelTree = value; }

    public class MittelTreeNode extends FIXGRIDTreeItem implements java.io.Serializable
    {
        String m_bezeichnung;
        public String getBezeichnung() { return m_bezeichnung; }
        public void setBezeichnung(String value) { this.m_bezeichnung = value; }

        String m_mittelart;
        public String getMittelart() { return m_mittelart; }
        public void setMittelart(String value) { this.m_mittelart = value; }

        String m_foerderabschnitt;
        public String getFoerderabschnitt() { return m_foerderabschnitt; }
        public void setFoerderabschnitt(String value) { this.m_foerderabschnitt = value; }

        String m_empfaenger;
        public String getEmpfaenger() { return m_empfaenger; }
        public void setEmpfaenger(String value) { this.m_empfaenger = value; }

        public MittelTreeNode(FIXGRIDTreeItem parentNode,String name, String summe, String dauer, boolean checkbox, String link) {
            super(parentNode);
            this.setText(name);
            m_summe = summe;
            m_dauer = dauer;
            m_checkbox = checkbox;
            m_link = link;
        }

        String m_summe;
        public String getSumme() { return m_summe; }
        public void setSumme(String value) { this.m_summe = value; }

        String m_dauer;
        public String getDauer() { return m_dauer; }
        public void setDauer(String value) { this.m_dauer = value; }

        boolean m_checkbox;
        public boolean getCheckbox() { return m_checkbox; }
        public void setCheckbox(boolean value) { this.m_checkbox = value; }

        String m_link;
        public String getLink() { return m_link; }
        public void setLink(String value) { this.m_link = value; }

    }

    /**
     *
     */
    private static final long serialVersionUID = 3949165031565420106L;

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

    public AntragMittelUI()
    {

        MittelTreeNode rootnode;
        MittelTreeNode childnode;
        MittelTreeNode childchildnode;

        rootnode = new MittelTreeNode(m_mittelTree.getRootNode(), "Förderabschnitt 1", "245.000,00 €", "36 Monate", false, "weight:bold");
        childnode = new MittelTreeNode(rootnode, "Marie Curie", "233.000,00 €", "", false, "weight:bold");
        childchildnode = new MittelTreeNode(childnode, "Doktorand/in und Vergleichbare", "189.900,00 €", "36 Monate", true, "");
        childchildnode.setStatus(MittelTreeNode.STATUS_ENDNODE);
        childchildnode.setBezeichnung("");
        childchildnode.setEmpfaenger("Marie Curie");
        childchildnode.setFoerderabschnitt("Förderabschnitt 1");
        childchildnode.setMittelart("Doktorand/in und Vergleichbare");
        childchildnode = new MittelTreeNode(childnode, "Hilfkräfte", "31.100,00 €", "", true, "");
        childchildnode.setStatus(MittelTreeNode.STATUS_ENDNODE);
        childchildnode.setBezeichnung("");
        childchildnode.setEmpfaenger("Marie Curie");
        childchildnode.setFoerderabschnitt("Förderabschnitt 1");
        childchildnode.setMittelart("Hilfkräfte");
        childchildnode = new MittelTreeNode(childnode, "Reisen", "12.000,00 €", "", true, "");
        childchildnode.setStatus(MittelTreeNode.STATUS_ENDNODE);
        childchildnode.setBezeichnung("");
        childchildnode.setEmpfaenger("Marie Curie");
        childchildnode.setFoerderabschnitt("Förderabschnitt 1");
        childchildnode.setMittelart("Reisen");
        childnode = new MittelTreeNode(rootnode, "Niels Bohr", "12.000,00 €", "", false, "weight:bold");
        childchildnode = new MittelTreeNode(childnode, "Reisen", "12.000,00 €", "", true, "");
        childchildnode.setStatus(MittelTreeNode.STATUS_ENDNODE);
        childchildnode.setBezeichnung("");
        childchildnode.setEmpfaenger("Niels Bohr");
        childchildnode.setFoerderabschnitt("Förderabschnitt 1");
        childchildnode.setMittelart("Reisen");

    }

    @Override
    public String getPageName() { return "/pages/AntragMittel.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.AntragMittelUI}"; }

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
