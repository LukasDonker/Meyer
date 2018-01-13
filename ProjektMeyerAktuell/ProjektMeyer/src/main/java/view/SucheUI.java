package view;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedPageBean;

@CCGenClass(expressionBase = "#{d.SucheUI}")

public class SucheUI extends WorkpageDispatchedPageBean implements Serializable {
    String m_programm = "<Auswahl>";
    public String getProgramm() { return m_programm; }
    public void setProgramm(String value) { this.m_programm = value; }

    String m_vonbis = "<Auswahl>";
    public String getVonbis() { return m_vonbis; }
    public void setVonbis(String value) { this.m_vonbis = value; }

    boolean m_selectionallowed = true;

    FIXGRIDTreeBinding<NavigationTreeNode> m_navigationTree = new FIXGRIDTreeBinding<>();

    public FIXGRIDTreeBinding<NavigationTreeNode> getNavigationTree() {
        return m_navigationTree;
    }

    public void setNavigationTree(FIXGRIDTreeBinding<NavigationTreeNode> value) {
        this.m_navigationTree = value;
    }

    public class NavigationTreeNode extends FIXGRIDTreeItem implements java.io.Serializable {
        @Override
        public void onRowSelect() {
            if(m_vonbis.equals("<Auswahl>") && m_programm.equals("<Auswahl>") && m_selectionallowed){
                m_vonbis = "in Schlusszeichnung";
                m_programm = "Sachbeihilfe";
                onMySearch(null);
            }else{
                m_vonbis = "<Auswahl>";
                m_programm = "<Auswahl>";
                m_antragSearch.getItems().clear();
                m_antragSearch.setColumnsequence("0;1;2;3;4;5;6");
            }
        }


        public NavigationTreeNode(FIXGRIDTreeItem parentNode, String text, String image, int status) {
            super(parentNode);
            this.setImage(image);
            this.setText(text);
            this.setStatus(status);
        }
    }

    FIXGRIDListBinding<AntragSearchItem> m_antragSearch = new FIXGRIDListBinding<>();

    public FIXGRIDListBinding<AntragSearchItem> getAntragSearch() {
        return m_antragSearch;
    }

    public void setAntragSearch(FIXGRIDListBinding<AntragSearchItem> value) {
        this.m_antragSearch = value;
    }

    public class AntragSearchItem extends FIXGRIDItem implements java.io.Serializable {
        String m_antragSumme;
        public String getAntragSumme() { return m_antragSumme; }
        public void setAntragSumme(String value) { this.m_antragSumme = value; }

        String m_fach;

        public String getFach() {
            return m_fach;
        }

        public void setFach(String value) {
            this.m_fach = value;
        }

        String m_antragstyp;

        public String getAntragstyp() {
            return m_antragstyp;
        }

        public void setAntragstyp(String value) {
            this.m_antragstyp = value;
        }

        String m_antragsform;

        public String getAntragsform() {
            return m_antragsform;
        }

        public void setAntragsform(String value) {
            this.m_antragsform = value;
        }

        String m_antragsart;

        public String getAntragsart() {
            return m_antragsart;
        }

        public void setAntragsart(String value) {
            this.m_antragsart = value;
        }

        String m_programm;

        public String getProgramm() {
            return m_programm;
        }

        public void setProgramm(String value) {
            this.m_programm = value;
        }

        String m_referent;

        public String getReferent() {
            return m_referent;
        }

        public void setReferent(String value) {
            this.m_referent = value;
        }

        String m_bearbeiter;

        public String getBearbeiter() {
            return m_bearbeiter;
        }

        public void setBearbeiter(String value) {
            this.m_bearbeiter = value;
        }

        String m_fdrTeam;

        public String getFdrTeam() {
            return m_fdrTeam;
        }

        public void setFdrTeam(String value) {
            this.m_fdrTeam = value;
        }

        String m_aenderung;

        public String getAenderung() {
            return m_aenderung;
        }

        public void setAenderung(String value) {
            this.m_aenderung = value;
        }

        String m_status;

        public String getStatus() {
            return m_status;
        }

        public void setStatus(String value) {
            this.m_status = value;
        }

        String m_art;

        public String getArt() {
            return m_art;
        }

        public void setArt(String value) {
            this.m_art = value;
        }

        String m_titel;

        public String getTitel() {
            return m_titel;
        }

        public void setTitel(String value) {
            this.m_titel = value;
        }

        String m_ort;

        public String getOrt() {
            return m_ort;
        }

        public void setOrt(String value) {
            this.m_ort = value;
        }

        String m_antragsteller;

        public String getAntragsteller() {
            return m_antragsteller;
        }

        public void setAntragsteller(String value) {
            this.m_antragsteller = value;
        }

        String m_gz;

        public String getGz() {
            return m_gz;
        }

        public void setGz(String value) {
            this.m_gz = value;
        }

        public AntragSearchItem(String fach, String antragstyp, String antragsform, String antragsart, String programm, String referent, String bearbeiter, String fdrTeam, String aenderung, String status, String art, String titel, String ort, String antragsteller, String gz, String summe) {
            super();
            m_fach = fach;
            m_antragstyp = antragstyp;
            m_antragsform = antragsform;
            m_antragsart = antragsart;
            m_programm = programm;
            m_referent = referent;
            m_bearbeiter = bearbeiter;
            m_fdrTeam = fdrTeam;
            m_aenderung = aenderung;
            m_status = status;
            m_art = art;
            m_titel = titel;
            m_ort = ort;
            m_antragsteller = antragsteller;
            m_gz = gz;
            m_antragSumme = summe;
        }

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

    public SucheUI(IWorkpageDispatcher workpageDispatcher) {
        super(workpageDispatcher);
        NavigationTreeNode masterNode;
        NavigationTreeNode childNode;
        NavigationTreeNode focusNode;

        masterNode = new NavigationTreeNode(m_navigationTree.getRootNode(), "Suchen", "/awesomefont(f002,#000000,12)", NavigationTreeNode.STATUS_OPENED);
        focusNode = new NavigationTreeNode(masterNode, "Antrag", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Projekt", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Person", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Institution", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Sitzung", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Gremium", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Bereitstellung", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Verteiler", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Versendung", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Dokument", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Wiedervorlage", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Vorgang", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Telefon", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Gerät", null, NavigationTreeNode.STATUS_ENDNODE);

        masterNode = new NavigationTreeNode(m_navigationTree.getRootNode(), "Gespeicherte Suchen", "/awesomefont(f002,#000000,12)", NavigationTreeNode.STATUS_OPENED);
        childNode = new NavigationTreeNode(masterNode, "Ant. Sachb. In Schlussz.", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Doktoranden Köln", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Wiedervorlagen 1 Monat", null, NavigationTreeNode.STATUS_ENDNODE);

        masterNode = new NavigationTreeNode(m_navigationTree.getRootNode(), "Freigegebene Suchen", "/awesomefont(f002,#000000,12)", NavigationTreeNode.STATUS_OPENED);
        childNode = new NavigationTreeNode(masterNode, "Offene Ant. Team II-ING-1", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Gut. Maschinenbau", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "Gut. Med-Technik", null, NavigationTreeNode.STATUS_ENDNODE);
        childNode = new NavigationTreeNode(masterNode, "ExStra ING-Beteiligung", null, NavigationTreeNode.STATUS_ENDNODE);

        m_selectionallowed = false;

        m_navigationTree.selectAndFocusItem(focusNode);

        m_antragSearch.setColumnsequence("0;1;2;3;4;5;6");

        m_selectionallowed = true;
    }

    @Override
    public String getPageName() {
        return "/pages/search/Suche.jsp";
    }

    @Override
    public String getRootExpressionUsedInPage() {
        return "#{d.SucheUI}";
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
    public void onSearch(javax.faces.event.ActionEvent event) {
        m_antragSearch.getItems().clear();
        for (int i = 1; i <= 200; i++) {
            String gz = "EI " + Double.valueOf(Math.random() * 10000).intValue() + "/" + i + "-" + i%3;
            m_antragSearch.getItems().add(new AntragSearchItem("Fach " + i, "SBH-EIN-NEU", "Neuantrag", "Einrichtung", "Sachbeihilfe", "Referent " + i, "Bearbeiter " + 1, "CSC-0", "14.02.2017", "in Erfassung", "Einzelantrag", "Testantrag für Suche " + i, "Bonn", "Albert Einstein", gz, Double.valueOf(Math.random() * 1000).intValue() + ".000,00 €"));
        }
    }

    public void onMySearch(javax.faces.event.ActionEvent event) {
        m_antragSearch.getItems().clear();
        for (int i = 1; i <= 20; i++) {
            String gz = "EI " + Double.valueOf(Math.random() * 10000).intValue() + "/" + i + "-" + i%3;
            m_antragSearch.getItems().add(new AntragSearchItem("Fach " + i, "SBH-EIN-NEU", "Neuantrag", "Einrichtung", "Sachbeihilfe", "Referent " + i, "Bearbeiter " + 1, "CSC-0", "14.02.2017", "in Schlusszeichnung", "Einzelantrag", "Testantrag für Suche " + i, "Bonn", "Albert Einstein", gz, Double.valueOf(Math.random() * 1000).intValue() + ".000,00 €"));
        }
        m_antragSearch.setColumnsequence("0;1;15;6");
    }

}
