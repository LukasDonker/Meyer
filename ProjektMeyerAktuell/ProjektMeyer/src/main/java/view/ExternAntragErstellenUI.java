package view;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedBean;

@CCGenClass(expressionBase = "#{d.ExternAntragErstellenUI}")

public class ExternAntragErstellenUI extends WorkpageDispatchedBean implements Serializable {
    int m_sizeTitelDE = 300;
    public int getSizeTitelDE() { return m_sizeTitelDE; }
    public void setSizeTitelDE(int value) { this.m_sizeTitelDE = value; }

    int m_sizeTitelEng = 300;
    public int getSizeTitelEng() { return m_sizeTitelEng; }
    public void setSizeTitelEng(int value) { this.m_sizeTitelEng = value; }

    String m_dauer;

    public String getDauer() {
        return m_dauer;
    }

    public void setDauer(String value) {
        this.m_dauer = value;
        if (m_dauer != null && !m_dauer.isEmpty()) {
            childitemDauer.setImage("/awesomefont(f00c,#298A08,15)");
            childitemDauer.setText("Pflichtfeld 'Dauer (Monate)' ist gefüllt");
            childitemDauer.setOK(true);
        } else {
            childitemDauer.setImage("/awesomefont(f071,#d9534f,15)");
            childitemDauer.setText("Pflichtfeld 'Dauer (Monate)' ist nicht gefüllt");
            childitemDauer.setOK(false);
        }

        if (childitemDauer.isOK() && childitemTitelDE.isOK() && childitemTitelENG.isOK()) {
            firstRootItem.setImage("/awesomefont(f00c,#298A08,15)");
        } else {
            firstRootItem.setImage("/awesomefont(f071,#d9534f,15)");
        }
    }

    String m_titelENG;

    public String getTitelENG() {
        return m_titelENG;
    }

    public void setTitelENG(String value) {
        this.m_titelENG = value;
        m_sizeTitelEng = 300 - m_titelENG.length();
        if (m_titelENG != null && !m_titelENG.isEmpty()) {
            childitemTitelENG.setImage("/awesomefont(f00c,#298A08,15)");
            childitemTitelENG.setText("Pflichtfeld 'Titel (Englisch)' ist gefüllt");
            childitemTitelENG.setOK(true);
        } else {
            childitemTitelENG.setImage("/awesomefont(f071,#d9534f,15)");
            childitemTitelENG.setText("Pflichtfeld 'Titel (Englisch)' ist nicht gefüllt");
            childitemTitelENG.setOK(false);
        }

        if (childitemDauer.isOK() && childitemTitelDE.isOK() && childitemTitelENG.isOK()) {
            firstRootItem.setImage("/awesomefont(f00c,#298A08,15)");
        } else {
            firstRootItem.setImage("/awesomefont(f071,#d9534f,15)");
        }
    }

    String m_titelDE;

    public String getTitelDE() {
        return m_titelDE;
    }

    public void setTitelDE(String value) {
        this.m_titelDE = value;
        m_sizeTitelDE = 300 - m_titelDE.length();
        if (m_titelDE != null && !m_titelDE.isEmpty()) {
            childitemTitelDE.setImage("/awesomefont(f00c,#298A08,15)");
            childitemTitelDE.setText("Pflichtfeld 'Titel (Deutsch)' ist gefüllt");
            childitemTitelDE.setOK(true);
        } else {
            childitemTitelDE.setImage("/awesomefont(f071,#d9534f,15)");
            childitemTitelDE.setText("Pflichtfeld 'Titel (Deutsch)' ist nicht gefüllt");
            childitemTitelDE.setOK(false);
        }

        if (childitemDauer.isOK() && childitemTitelDE.isOK() && childitemTitelENG.isOK()) {
            firstRootItem.setImage("/awesomefont(f00c,#298A08,15)");
        } else {
            firstRootItem.setImage("/awesomefont(f071,#d9534f,15)");
        }
    }

    NavigationTreeNode firstRootItem;
    NavigationTreeNode childitemTitelDE;
    NavigationTreeNode childitemTitelENG;
    NavigationTreeNode childitemDauer;

    FIXGRIDTreeBinding<NavigationTreeNode> m_navigationTree = new FIXGRIDTreeBinding<NavigationTreeNode>();

    public FIXGRIDTreeBinding<NavigationTreeNode> getNavigationTree() {
        return m_navigationTree;
    }

    public void setNavigationTree(FIXGRIDTreeBinding<NavigationTreeNode> value) {
        this.m_navigationTree = value;
    }

    public class NavigationTreeNode extends FIXGRIDTreeItem implements java.io.Serializable {

        private boolean m_OK;

        public boolean isOK() {
            return m_OK;
        }

        public void setOK(boolean oK) {
            m_OK = oK;
        }

        public NavigationTreeNode(FIXGRIDTreeItem parentNode, String image, String nodeString, int status) {
            super(parentNode);
            this.setImage(image);
            this.setText(nodeString);
            this.setStatus(status);
        }
    }

    boolean m_titleOpened = true;

    public boolean getTitleOpened() {
        return m_titleOpened;
    }

    public void setTitleOpened(boolean value) {
        this.m_titleOpened = value;
    }

    public void onOkPressed(javax.faces.event.ActionEvent event) {
        setTitleOpened(!m_titleOpened);
    }

    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------

    /* Listener to the user of the page bean. */
    public interface IListener {
    }

    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------

    private IListener m_listener;

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public ExternAntragErstellenUI(IWorkpageDispatcher dispatcher) {
        super(dispatcher);
        NavigationTreeNode rootitem;
        NavigationTreeNode childitem;

        firstRootItem = new NavigationTreeNode(m_navigationTree.getRootNode(), "/awesomefont(f071,#d9534f,15)", "Angaben zum Antrag", NavigationTreeNode.STATUS_OPENED);
        childitemTitelDE = new NavigationTreeNode(firstRootItem, "/awesomefont(f071,#d9534f,15)", "Pflichtfeld 'Titel (Deutsch)' ist nicht gefüllt", NavigationTreeNode.STATUS_ENDNODE);
        childitemTitelENG = new NavigationTreeNode(firstRootItem, "/awesomefont(f071,#d9534f,15)", "Pflichtfeld 'Titel (Englisch)' ist nicht gefüllt", NavigationTreeNode.STATUS_ENDNODE);
        childitemDauer = new NavigationTreeNode(firstRootItem, "/awesomefont(f071,#d9534f,15)", "Pflichtfeld 'Dauer (Monate)' ist nicht gefüllt", NavigationTreeNode.STATUS_ENDNODE);

        rootitem = new NavigationTreeNode(m_navigationTree.getRootNode(), "/awesomefont(f071,#d9534f,15)", "Antragstellende Personen", NavigationTreeNode.STATUS_CLOSED);
        childitem = new NavigationTreeNode(rootitem, "/awesomefont(f071,#d9534f,15)", "Not yet implemented", NavigationTreeNode.STATUS_ENDNODE);

        rootitem = new NavigationTreeNode(m_navigationTree.getRootNode(), "/awesomefont(f071,#d9534f,15)", "Andere antragsbeteiligte Personen", NavigationTreeNode.STATUS_CLOSED);
        childitem = new NavigationTreeNode(rootitem, "/awesomefont(f071,#d9534f,15)", "Not yet implemented", NavigationTreeNode.STATUS_ENDNODE);

        rootitem = new NavigationTreeNode(m_navigationTree.getRootNode(), "/awesomefont(f071,#d9534f,15)", "Beteiligte Institutionen", NavigationTreeNode.STATUS_CLOSED);
        childitem = new NavigationTreeNode(rootitem, "/awesomefont(f071,#d9534f,15)", "Not yet implemented", NavigationTreeNode.STATUS_ENDNODE);

        rootitem = new NavigationTreeNode(m_navigationTree.getRootNode(), "/awesomefont(f071,#d9534f,15)", "Abschließende Erklärungen", NavigationTreeNode.STATUS_CLOSED);
        childitem = new NavigationTreeNode(rootitem, "/awesomefont(f071,#d9534f,15)", "Not yet implemented", NavigationTreeNode.STATUS_ENDNODE);

        rootitem = new NavigationTreeNode(m_navigationTree.getRootNode(), "/awesomefont(f071,#d9534f,15)", "Anlagen hinzufügen", NavigationTreeNode.STATUS_CLOSED);
        childitem = new NavigationTreeNode(rootitem, "/awesomefont(f071,#d9534f,15)", "Not yet implemented", NavigationTreeNode.STATUS_ENDNODE);

        m_navigationTree.selectAndFocusItem(firstRootItem);

    }

    public String getPageName() {
        return "/pages/extern/ExterAntragErstellen.jsp";
    }

    public String getRootExpressionUsedInPage() {
        return "#{d.ExternAntragErstellenUI}";
    }

    // ------------------------------------------------------------------------
    // public usage
    // ------------------------------------------------------------------------

    /*
     * Initialization of the bean. Add any parameter that is required within
     * your scenario.
     */
    public void prepare(IListener listener) {
        m_listener = listener;
    }

    // ------------------------------------------------------------------------
    // private usage
    // ------------------------------------------------------------------------
}
