package view;

import java.util.ArrayList;
import java.util.List;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.workplace.IWorkpageContainer;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedBean;
import org.eclnt.workplace.WorkpageStartInfo;
import org.eclnt.workplace.WorkpageStarterFactory;

@CCGenClass (expressionBase="#{d.ExternFormularAuswahlUI}")

public class ExternFormularAuswahlUI
extends WorkpageDispatchedBean
{
    public void onStartFormular(javax.faces.event.ActionEvent event) {
        IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
        IWorkpageContainer wpc = getWorkpageContainer();
        wpc.closeWorkpage(this.getWorkpage());
        WorkpageStartInfo wpsi = new WorkpageStartInfo();
        wpsi.setJspPage("/pages/extern/ExternAntragErstellen.jsp");
        wpsi.setImage("/awesomefont(f067,#FFFFFF,15)");
        wpsi.setText("Neues Projekt / Antragskizze");
        wpsi.setSelectorTitle("Neues Projekt");
        wpsi.setOpenMultipleInstances(false);
        WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);
    }


    FIXGRIDListBinding<EinzelfoerderungItem> m_einzelfoerderung = new FIXGRIDListBinding<EinzelfoerderungItem>();
    public FIXGRIDListBinding<EinzelfoerderungItem> getEinzelfoerderung() { return m_einzelfoerderung; }
    public void setEinzelfoerderung(FIXGRIDListBinding<EinzelfoerderungItem> value) { this.m_einzelfoerderung = value; }

    public class EinzelfoerderungItem extends FIXGRIDItem implements java.io.Serializable
    {
        FIXGRIDListBinding<ListeneintraegeItem> m_listeneintraege = new FIXGRIDListBinding<ListeneintraegeItem>();
        public FIXGRIDListBinding<ListeneintraegeItem> getListeneintraege() { return m_listeneintraege; }
        public void setListeneintraege(FIXGRIDListBinding<ListeneintraegeItem> value) { this.m_listeneintraege = value; }

        String m_name;

        public String getName() {
            return m_name;
        }
        public void setName(String name) {
            m_name = name;
        }
        public EinzelfoerderungItem(String name, List<ListeneintraegeItem> valueList){
            m_name = name;
            m_listeneintraege.getItems().addAll(valueList);
        }
    }

    public class ListeneintraegeItem extends FIXGRIDItem implements java.io.Serializable
    {
        boolean m_isVorlageRendered;
        public boolean getIsVorlageRendered() { return m_isVorlageRendered; }
        public void setIsVorlageRendered(boolean value) { this.m_isVorlageRendered = value; }

        private String m_merkblatt;
        private String m_vorlage;

        public String getMerkblatt() {
            return m_merkblatt;
        }



        public void setMerkblatt(String merkblatt) {
            m_merkblatt = merkblatt;
        }



        public String getVorlage() {
            return m_vorlage;
        }



        public void setVorlage(String vorlage) {
            m_vorlage = vorlage;
        }

        public ListeneintraegeItem(String merkblatt, String vorlage){
            m_merkblatt = merkblatt;
            m_vorlage = vorlage;

            if(m_vorlage != null && !m_vorlage.isEmpty()){
                m_isVorlageRendered = true;
            }
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

    public ExternFormularAuswahlUI(IWorkpageDispatcher dispatcher)
    {
        super(dispatcher);

        ListeneintraegeItem litem1 = new ListeneintraegeItem("Programmmerkblatt Sachbeihilfe", "Beschreibung des Vorhabens");
        ListeneintraegeItem litem2 = new ListeneintraegeItem("Leitfaden für die Antragsstellung (Projektanträge)", null);
        List<ListeneintraegeItem> litemList = new ArrayList<ExternFormularAuswahlUI.ListeneintraegeItem>();
        litemList.add(litem1);
        litemList.add(litem2);

        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Antrag auf eine Sachbeihilfe", litemList));
        litemList.clear();
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Initiative für eine Sachbeihilfe", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Programmmerkblatt Forschungsstipendien", "Beschreibung des Vorhabens ");
        litemList.add(litem1);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Antrag auf ein Forschungsstipendium", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Merkblatt Heisenberg-Programm", "Beschreibung des Vorhabens");
        litem2 = new ListeneintraegeItem("Leitfaden für die Antragstellung (Heisenberg-Programm)", null);
        litemList.add(litem1);
        litemList.add(litem2);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Antrag auf ein Heisenberg-Stipendium", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Merkblatt Heisenberg-Programm", "Beschreibung des Vorhabens");
        litem2 = new ListeneintraegeItem("Leitfaden für die Antragstellung (Heisenberg-Programm)", null);
        litemList.add(litem1);
        litemList.add(litem2);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Antrag auf eine Heisenberg-Professur", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Programmmerkblatt Emmy Noether-Programm", "Beschreibung des Vorhabens");
        litem2 = new ListeneintraegeItem("Leitfaden für die Antragstellung (Projektanträge)", "Vertrag mit der aufnehmenden Einrichtung / Arbeitgebererklärung");
        litemList.add(litem1);
        litemList.add(litem2);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Antrag im Emmy Noether-Programm", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Programmmerkblatt Klinische Studien", "Antragskizze ");
        litem2 = new ListeneintraegeItem("Leitfaden zur Einreichung von Skizzen für Klinische Studien", null);
        litemList.add(litem1);
        litemList.add(litem2);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Skizze/Initiative für eine Klinische Studie", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Programmmerkblatt Reinhart Koselleck-Projekte", "Beschreibung des Vorhabens");
        litem2 = new ListeneintraegeItem("Leitfaden für die Antragsstellung (Projektanträge)", null);
        litemList.add(litem1);
        litemList.add(litem2);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Antrag auf ein Reinhart Koselleck-Projekt", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Merkblatt Wissenschaftliche Netzwerke mit Leitfaden für die Antragstellung", "Beschreibung des Vorhabens");
        litemList.add(litem1);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Antrag auf Förderung eines Wissenschaftlichen Netzwerkes", litemList));

        litemList.clear();
        litem1 = new ListeneintraegeItem("Ideenwettbewerb 'Internationales Forschungsmarketing'", "Ausführliche Darstellung des Konzepts");
        litemList.add(litem1);
        m_einzelfoerderung.getItems().add(new EinzelfoerderungItem("Preise/Ideenwettbewerb Int. Forschungsmarketing", litemList));

    }


    public String getPageName() { return "/pages/extern/ExternFormularAuswahl.jsp"; }

    public String getRootExpressionUsedInPage() { return "#{d.ExternFormularAuswahlUI}"; }

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
