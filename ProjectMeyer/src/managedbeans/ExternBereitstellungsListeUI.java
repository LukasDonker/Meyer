package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.ExternBereitstellungsListeUI}")

public class ExternBereitstellungsListeUI
extends PageBean
implements Serializable
{
    int m_tableSize;
    public int getTableSize() {m_tableSize = m_bereitstellungstree.getRows().size();
    return m_tableSize; }
    public void setTableSize(int value) { this.m_tableSize = value; }

    FIXGRIDTreeBinding<BereitstellungstreeNode> m_bereitstellungstree = new FIXGRIDTreeBinding<BereitstellungstreeNode>();
    public FIXGRIDTreeBinding<BereitstellungstreeNode> getBereitstellungstree() { return m_bereitstellungstree; }
    public void setBereitstellungstree(FIXGRIDTreeBinding<BereitstellungstreeNode> value) { this.m_bereitstellungstree = value; }

    public class BereitstellungstreeNode extends FIXGRIDTreeItem implements java.io.Serializable
    {
        public BereitstellungstreeNode(FIXGRIDTreeItem parentNode, String gz, String text, String date, boolean open, boolean download,int status, String image) {
            super(parentNode);
            m_kurztext = text;
            m_text = gz;
            m_date = date;
            m_open = open;
            m_download = download;
            this.setStatus(status);
            this.setImage(image);
        }

        String m_kurztext;
        public String getKurztext() { return m_kurztext; }
        public void setKurztext(String value) { this.m_kurztext = value; }

        String m_text;
        @Override
        public String getText() { return m_text; }
        @Override
        public void setText(String value) { this.m_text = value; }

        String m_date;
        public String getDate() { return m_date; }
        public void setDate(String value) { this.m_date = value; }

        boolean m_open;
        public boolean getOpen() { return m_open; }
        public void setOpen(boolean value) { this.m_open = value; }

        boolean m_download;
        public boolean getDownload() { return m_download; }
        public void setDownload(boolean value) { this.m_download = value; }

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

    public ExternBereitstellungsListeUI()
    {
        BereitstellungstreeNode bereitstellung;
        String imageBereitstellung = "/awesomefont(f1ea,#000000,15)";
        BereitstellungstreeNode dokument;
        String imageDokument = "/awesomefont(f0f6,#000000,15)";

        bereitstellung = new BereitstellungstreeNode(m_bereitstellungstree.getRootNode(), "eBer-17-9", "Testbereitstellung 1", "06.02.2017", false, true, BereitstellungstreeNode.STATUS_CLOSED, imageBereitstellung);
        dokument = new BereitstellungstreeNode(bereitstellung, "Antrag INST 211/ 792-1", "Bemerkung 1", "06.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Abschlussbericht", "Bemerkung 2", "06.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Angebot", "Bemerkung 3", "06.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Lebenslauf", "Bemerkung 4", "06.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);

        bereitstellung = new BereitstellungstreeNode(m_bereitstellungstree.getRootNode(), "eBer-17-2", "Testbereitstellung 2", "07.02.2017", false, true, BereitstellungstreeNode.STATUS_CLOSED, imageBereitstellung);
        dokument = new BereitstellungstreeNode(bereitstellung, "Brief", "Bemerkung 1", "07.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Lebenslauf", "Bemerkung 2", "07.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);

        bereitstellung = new BereitstellungstreeNode(m_bereitstellungstree.getRootNode(), "eBer-17-1", "Testbereitstellung 3", "08.02.2017", false, true, BereitstellungstreeNode.STATUS_CLOSED, imageBereitstellung);
        dokument = new BereitstellungstreeNode(bereitstellung, "Angebot", "Bemerkung 1", "08.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Vergleichsangebot", "Bemerkung 2", "08.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);

        bereitstellung = new BereitstellungstreeNode(m_bereitstellungstree.getRootNode(), "eBer-16-6846", "Testbereitstellung 4", "09.02.2017", false, true, BereitstellungstreeNode.STATUS_CLOSED, imageBereitstellung);
        dokument = new BereitstellungstreeNode(bereitstellung, "Abschlussbericht", "Bemerkung 1", "09.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Gutachten", "Bemerkung 2", "09.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);

        bereitstellung = new BereitstellungstreeNode(m_bereitstellungstree.getRootNode(), "eBer-16-6846", "Testbereitstellung 5", "10.02.2017", false, true, BereitstellungstreeNode.STATUS_CLOSED, imageBereitstellung);
        dokument = new BereitstellungstreeNode(bereitstellung, "Anschreiben", "Bemerkung 1", "10.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Lebenslauf 1", "Bemerkung 2", "10.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);
        dokument = new BereitstellungstreeNode(bereitstellung, "Lebenslauf 2", "Bemerkung 3", "10.02.2017", true, true, BereitstellungstreeNode.STATUS_ENDNODE, imageDokument);

    }

    @Override
    public String getPageName() { return "/pages/extern/ExternBereitstellungsliste.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.ExternBereitstellungsListeUI}"; }

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
