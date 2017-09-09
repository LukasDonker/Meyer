package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.ExternAntragsstellungListeUI}")

public class ExternAntragsstellungListeUI
extends PageBean
implements Serializable
{
    FIXGRIDListBinding<AntragslisteItem> m_antragsliste = new FIXGRIDListBinding<AntragslisteItem>();
    public FIXGRIDListBinding<AntragslisteItem> getAntragsliste() { return m_antragsliste; }
    public void setAntragsliste(FIXGRIDListBinding<AntragslisteItem> value) { this.m_antragsliste = value; }

    public class AntragslisteItem extends FIXGRIDItem
    {
        boolean m_isRenderUebersicht;
        public boolean getIsRenderUebersicht() { return m_isRenderUebersicht; }
        public void setIsRenderUebersicht(boolean value) { this.m_isRenderUebersicht = value; }

        String m_status;
        public String getStatus() { return m_status; }
        public void setStatus(String value) { this.m_status = value; }

        String m_programmantragsart;
        public String getProgrammantragsart() { return m_programmantragsart; }
        public void setProgrammantragsart(String value) { this.m_programmantragsart = value; }

        String m_gz;
        public String getGz() { return m_gz; }
        public void setGz(String value) { this.m_gz = value; }

        String m_kurztitel;
        public String getKurztitel() { return m_kurztitel; }
        public void setKurztitel(String value) { this.m_kurztitel = value; }

        public AntragslisteItem(String status, String porgrammantragsart, String gz, String kurztitel, boolean renderUebersicht){
            this.m_kurztitel = kurztitel;
            this.m_gz = gz;
            this.m_programmantragsart = porgrammantragsart;
            this.m_status = status;
            this.m_isRenderUebersicht = renderUebersicht;
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

    public ExternAntragsstellungListeUI()
    {
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "DFG-Forschungszentrum Rahmenantrag Einrichtungsantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 1", true));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "DFG-Forschungszentrum Rahmenantrag Einrichtungsantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 2", true));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Entscheidungsprozess", "Exzellenzcluster Exzellenzstrategie Initiative", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 3", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "Exzellenzcluster Exzellenzstrategie Initiative", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 4", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "Graduiertenkolleg Einzelantrag Einrichtungsantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 5", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "Graduiertenkolleg Einzelantrag Einrichtungsantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 6", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Entscheidungsprozess", "Klinische Forschergruppe Rahmenantrag Neuantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 7", true));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "Sachbeihilfe Einzelantrag Neuantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 8", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Entscheidungsprozess", "Sachbeihilfe Einzelantrag Neuantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 9", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "Sachbeihilfe Einzelantrag Neuantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 10", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Entscheidung", "Sachbeihilfe Einzelantrag Neuantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 11", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "Sachbeihilfe Einzelantrag Neuantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 12", false));
        this.m_antragsliste.getItems().add(new AntragslisteItem("Bearbeitung", "Sonderforschungsbereich Rahmenantrag Einrichtungsantrag", "GZ " + Double.valueOf(Math.random() *10000).intValue(), "Testantrag Prototyp 13", true));
    }

    @Override
    public String getPageName() { return "/pages/extern/ExternAntragsstellungListe.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.ExternAntragsstellungListeUI}"; }

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
