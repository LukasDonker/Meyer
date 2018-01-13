package view;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.workplace.IWorkpageContainer;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedPageBean;
import org.eclnt.workplace.WorkpageStartInfo;
import org.eclnt.workplace.WorkpageStarterFactory;

@CCGenClass (expressionBase="#{d.StartHistorieUI}")

public class StartHistorieUI
extends WorkpageDispatchedPageBean
implements Serializable
{
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

    private FIXGRIDListBinding<HistoryItem> m_historyListe = new FIXGRIDListBinding<>();

    SimpleDateFormat s_formatter = new SimpleDateFormat("dd.MM.YYYY - HH:mm");


    private IListener m_listener;

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public StartHistorieUI(IWorkpageDispatcher dispatcher) {
        super(dispatcher);

        for(int i = 0; i < 20; i++){
            WorkpageStartInfo fi = new WorkpageStartInfo();
            fi.setImage("/awesomefont(f016,#FFFFFF,12)");
            fi.setJspPage("/pages/AntragsContent.jsp");
            String gz = "EI " + Double.valueOf(Math.random() *10000).intValue() + "/" + i + "-" + i%3;
            fi.setText("Testantrag Prototyp " + i);
            fi.setSelectorTitle(gz);
            fi.setOpenMultipleInstances(false);
            m_historyListe.getItems().add(new HistoryItem(fi));
        }

        //        WorkplaceFavorites history = getWorkpageContainer().getHistory();
        //
        //        for (WorkpageStartInfo info : history.getFaovriteInfos()) {
        //            m_historyListe.getItems().add(new HistoryItem(info));
        //        }

    }

    @Override
    public String getPageName() { return "/pages/start/StartHistorie.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.StartHistorieUI}"; }

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
    public FIXGRIDListBinding<HistoryItem> getHistoryListe() {
        return m_historyListe;
    }

    public void setHistoryListe(FIXGRIDListBinding<HistoryItem> historyListe) {
        m_historyListe = historyListe;
    }


    public class HistoryItem extends FIXGRIDItem {
        /**
         *
         */
        private static final long serialVersionUID = -7181588541531992552L;
        public String m_gz, m_kurztitel, m_objekttyp, m_icon, m_letzterAufruf;
        public WorkpageStartInfo m_info;

        public HistoryItem(WorkpageStartInfo info) {
            m_info = info;
            m_gz = info.getSelectorTitle();
            m_kurztitel = info.getText();
            m_objekttyp = "Antrag";
            m_letzterAufruf = s_formatter.format(new Date());
            m_icon = "/awesomefont(f016,#000000,15)";
        }

        public void onOpen(javax.faces.event.ActionEvent event) {
            IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
            IWorkpageContainer wpc = getWorkpageContainer();
            WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, m_info);
        }

        public String getGz() {
            return m_gz;
        }

        public void setGz(String gz) {
            m_gz = gz;
        }

        public String getKurztitel() {
            return m_kurztitel;
        }

        public void setKurztitel(String kurztitel) {
            m_kurztitel = kurztitel;
        }

        public String getObjekttyp() {
            return m_objekttyp;
        }

        public void setObjekttyp(String objekttyp) {
            m_objekttyp = objekttyp;
        }

        public String getIcon() {
            return m_icon;
        }

        public void setIcon(String icon) {
            m_icon = icon;
        }

        public String getLetzterAufruf() {
            return m_letzterAufruf;
        }

        public void setLetzterAufruf(String letzterAufruf) {
            m_letzterAufruf = letzterAufruf;
        }

        public WorkpageStartInfo getInfo() {
            return m_info;
        }

        public void setInfo(WorkpageStartInfo info) {
            m_info = info;
        }

    }


}
