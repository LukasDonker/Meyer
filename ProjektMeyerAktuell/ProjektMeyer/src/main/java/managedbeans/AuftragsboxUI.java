package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.AuftragsboxUI}")
public class AuftragsboxUI
extends PageBean
implements Serializable
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6158746680567204655L;
	private final int MOBILE_TABLESIZE = 10;
	private final int DESKTOP_TABLESIZE = 30;
	
    int m_tableSize;
    public int getTableSize() {return m_tableSize; }
    public void setTableSize(int value) { this.m_tableSize = value; }

    FIXGRIDTreeBinding<AuftragstreeNode> m_bereitstellungstree = new FIXGRIDTreeBinding<AuftragstreeNode>();
    public FIXGRIDTreeBinding<AuftragstreeNode> getBereitstellungstree() { return m_bereitstellungstree; }
    public void setBereitstellungstree(FIXGRIDTreeBinding<AuftragstreeNode> value) { this.m_bereitstellungstree = value; }

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

    public AuftragsboxUI()
    {
    	m_tableSize = DESKTOP_TABLESIZE;
    	
        AuftragstreeNode bereitstellung;
        String imageBereitstellung = "/awesomefont(f07c,#000000,15)";
        AuftragstreeNode dokument;
        String imagelöscher = "/awesomefont(f134,#000000,15)";
        String imageWartung = "/awesomefont(f0ad,#000000,15)";
        String imageInstallation = "/awesomefont(f07a,#000000,15)";

        bereitstellung = new AuftragstreeNode(m_bereitstellungstree.getRootNode(), "TS-Nummer 1", "Testauftrag 1", "26.06.2017", false, true, AuftragstreeNode.STATUS_CLOSED, imageBereitstellung, true, "Disponent: Dispo 1");
        dokument = new AuftragstreeNode(bereitstellung, "Geräteinstallation", "Bemerkung 1", "01.05.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageInstallation, true, "Techniker: Techniker 1");
        dokument = new AuftragstreeNode(bereitstellung, "Geräteinstallation", "Bemerkung 2", "02.05.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageInstallation, true, "Techniker: Techniker 1");
        dokument = new AuftragstreeNode(bereitstellung, "Wartung", "Bemerkung 3", "01.06.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageWartung, true, "Techniker: Techniker 2");
        dokument = new AuftragstreeNode(bereitstellung, "Wartung", "Bemerkung 4", "26.06.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageWartung, true, "Techniker: Techniker 1");

        bereitstellung = new AuftragstreeNode(m_bereitstellungstree.getRootNode(), "TS-Nummer 2", "Testauftrag 2", "13.07.2017", false, true, AuftragstreeNode.STATUS_CLOSED, imageBereitstellung, false, "Disponent: Dispo 1");
        dokument = new AuftragstreeNode(bereitstellung, "Notfall", "Bemerkung 1", "01.07.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imagelöscher, true, "Techniker: Techniker 1");
        dokument = new AuftragstreeNode(bereitstellung, "Notfall", "Bemerkung 2", "13.07.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imagelöscher, false, "Techniker: Techniker 1");

        bereitstellung = new AuftragstreeNode(m_bereitstellungstree.getRootNode(), "TS-Nummer 5", "Testauftrag 5", "26.07.2017", false, true, AuftragstreeNode.STATUS_CLOSED, imageBereitstellung, false, "Disponent: Dispo 1");
        dokument = new AuftragstreeNode(bereitstellung, "Notfall", "Bemerkung 1", "02.07.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imagelöscher, true, "Techniker: Techniker 2");
        dokument = new AuftragstreeNode(bereitstellung, "Wartung", "Bemerkung 2", "26.07.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageWartung, false, "Techniker: Techniker 2");

        bereitstellung = new AuftragstreeNode(m_bereitstellungstree.getRootNode(), "TS-Nummer 3", "Testauftrag 3", "01.07.2017", false, true, AuftragstreeNode.STATUS_CLOSED, imageBereitstellung, true, "Disponent: Dispo 2");
        dokument = new AuftragstreeNode(bereitstellung, "Notfall", "Bemerkung 1", "30.06.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imagelöscher, true, "Techniker: Techniker 5");
        dokument = new AuftragstreeNode(bereitstellung, "Wartung", "Bemerkung 2", "01.07.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageWartung, true, "Techniker: Techniker 4");

        bereitstellung = new AuftragstreeNode(m_bereitstellungstree.getRootNode(), "TS-Nummer 4", "Testauftrag 4", "23.07.2017", false, true, AuftragstreeNode.STATUS_CLOSED, imageBereitstellung, false, "Disponent: Dispo 2");
        dokument = new AuftragstreeNode(bereitstellung, "Wartung", "Bemerkung 1", "01.02.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageWartung, true, "Techniker: Techniker 5");
        dokument = new AuftragstreeNode(bereitstellung, "Wartung", "Bemerkung 2", "17.07.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageWartung, false, "Techniker: Techniker 6");
        dokument = new AuftragstreeNode(bereitstellung, "Wartung", "Bemerkung 3", "23.07.2017", true, true, AuftragstreeNode.STATUS_ENDNODE, imageWartung, false, "Techniker: Techniker 5");

    }

    @Override
    public String getPageName() { return "/pages/Auftragsbox.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.AuftragsboxUI}"; }

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
    public class AuftragstreeNode extends FIXGRIDTreeItem implements java.io.Serializable
    {
        String m_mitarbeiter;
        public String getMitarbeiter() { return m_mitarbeiter; }
        public void setMitarbeiter(String value) { this.m_mitarbeiter = value; }

        String m_imageerledigt;
        public String getImageerledigt() { return m_imageerledigt; }
        public void setImageerledigt(String value) { this.m_imageerledigt = value; }

        public AuftragstreeNode(FIXGRIDTreeItem parentNode, String gz, String text, String date, boolean open, boolean download,int status, String image, boolean erledigt, String mitarbeiter) {
            super(parentNode);
            m_kurztext = text;
            m_text = gz;
            m_date = date;
            m_open = open;
            m_download = download;
            m_mitarbeiter = mitarbeiter;
            this.setStatus(status);
            this.setImage(image);
            if(erledigt){
            	m_imageerledigt = "/awesomefont(f05a,#5bc0de,15)";
            }else{
            	m_imageerledigt = "/awesomefont(f00c,#298A08,15)";
            }
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
}
