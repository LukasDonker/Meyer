package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedPageBean;

@CCGenClass(expressionBase = "#{d.StartInboxUI}")
public class StartInboxUI extends WorkpageDispatchedPageBean
implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = -801580090215642092L;

    public class MyRow extends FIXGRIDItem implements Serializable
    {
        /**
         *
         */
        private static final long serialVersionUID = 4971844395967293241L;
        protected String m_gz;
        public String getGZ() { return m_gz; }
        public void setGZ(String value) { m_gz = value; }

        protected String m_termin;
        public String getTermin() { return m_termin; }
        public void setTermin(String value) { m_termin = value; }

        protected String m_verantwortlich;
        public String getVerantwortlich() { return m_verantwortlich; }
        public void setVerantwortlich(String value) { m_verantwortlich = value; }

        protected String m_vorgang;
        public String getVorgang() { return m_vorgang; }
        public void setVorgang(String value) { m_vorgang = value; }

        protected String m_link;
        public String getLink() { return "/awesomefont(f04e,#000000,20)"; }


    }

    public StartInboxUI(IWorkpageDispatcher dispatcher)
    {
        super(dispatcher);


        for(int i = 0; i < 5; i++){
            MyRow r = new MyRow();
            String gz = "EI " + Double.valueOf(Math.random() *10000).intValue() + "/" + i + "-" + i%3;;
            r.setGZ(gz);
            r.setVorgang("Auftrag");
            r.setVerantwortlich("Brady, Susan (I-INF-1)");
            r.setTermin("27.11.2016");
            m_rows.getItems().add(r);
        }


    }

    protected FIXGRIDListBinding<MyRow> m_rows = new FIXGRIDListBinding<>();

    public FIXGRIDListBinding<MyRow> getRows() { return m_rows; }
    public void setRows(FIXGRIDListBinding<MyRow> value) { m_rows = value; }

    @Override
    public String getPageName() { return "/pages/start/StartInbox.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.StartInboxUI}"; }

    /* Listener to the user of the page bean. */
    public interface IListener
    {
    }

    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------

    private IListener m_listener;


    // ------------------------------------------------------------------------
    // public usage
    // ------------------------------------------------------------------------

    /* Initialization of the bean. Add any parameter that is required within your scenario. */
    public void prepare(IListener listener)
    {
        m_listener = listener;
    }

}



