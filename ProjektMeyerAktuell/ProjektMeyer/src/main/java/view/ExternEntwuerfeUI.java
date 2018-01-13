package view;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.ExternEntwuerfeUI}")

public class ExternEntwuerfeUI
extends PageBean
implements Serializable
{
    int m_tableSize;
    public int getTableSize() {m_tableSize = m_entwuerfe.getItems().size();
    return m_tableSize; }
    public void setTableSize(int value) { this.m_tableSize = value; }


    FIXGRIDListBinding<EntwuerfeItem> m_entwuerfe = new FIXGRIDListBinding<EntwuerfeItem>();
    public FIXGRIDListBinding<EntwuerfeItem> getEntwuerfe() { return m_entwuerfe; }
    public void setEntwuerfe(FIXGRIDListBinding<EntwuerfeItem> value) { this.m_entwuerfe = value; }

    public class EntwuerfeItem extends FIXGRIDItem
    {
        String m_image;
        public String getImage() { return m_image; }
        public void setImage(String value) { this.m_image = value; }

        boolean m_verlaengerungpossible;
        public boolean getVerlaengerungpossible() { return m_verlaengerungpossible; }
        public void setVerlaengerungpossible(boolean value) { this.m_verlaengerungpossible = value; }

        String m_speicherungdate;
        public String getSpeicherungdate() { return m_speicherungdate; }
        public void setSpeicherungdate(String value) { this.m_speicherungdate = value; }

        String m_unterbrechungdate;
        public String getUnterbrechungdate() { return m_unterbrechungdate; }
        public void setUnterbrechungdate(String value) { this.m_unterbrechungdate = value; }

        String m_name;
        public String getName() { return m_name; }
        public void setName(String value) { this.m_name = value; }

        public EntwuerfeItem(String name, String unterbrechungdate, String speicherungdate, boolean verlaengerungpossible){
            m_image = "/awesomefont(f016,#000000,14)";
            this.m_name = name;
            this.m_unterbrechungdate = unterbrechungdate;
            this.m_speicherungdate = speicherungdate;
            this.m_verlaengerungpossible = verlaengerungpossible;
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

    public ExternEntwuerfeUI()
    {
        m_entwuerfe.getItems().add(new EntwuerfeItem("Antrag: Antragsentwurf 1", "05.02.2017 - 10:20", "05.03.2017", false));
        m_entwuerfe.getItems().add(new EntwuerfeItem("Antrag: Antragsentwurf 2", "07.02.2017 - 13:45", "07.03.2017", false));
        m_entwuerfe.getItems().add(new EntwuerfeItem("Antrag: Antragsentwurf 3", "01.02.2017 - 09:11", "01.03.2017", true));
        m_entwuerfe.getItems().add(new EntwuerfeItem("Antrag: Antragsentwurf 4", "21.01.2017 - 17:59", "21.02.2017", false));
        m_entwuerfe.getItems().add(new EntwuerfeItem("Antrag: Antragsentwurf 5", "16.01.2017 - 06:48", "16.02.2017", true));
    }

    @Override
    public String getPageName() { return "/pages/extern/ExternEntwuerfe.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.ExternEntwuerfeUI}"; }

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
