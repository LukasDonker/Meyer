package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.Statusbar;
import org.eclnt.jsfserver.elements.impl.ROWTLCOCKPITBinding;
import org.eclnt.jsfserver.elements.impl.ROWTLCOCKPITBinding.CockpitItem;
import org.eclnt.jsfserver.pagebean.component.PageBeanComponent;

@CCGenClass (expressionBase="#{d.StartAmpelnUI}")

public class StartAmpelnUI
extends PageBeanComponent
implements Serializable
{

    /**
	 * 
	 */
	private static final long serialVersionUID = -1799536064807345033L;
	ROWTLCOCKPITBinding m_cockpit = new MyROWTLCOCKPITBinding();
    public ROWTLCOCKPITBinding getCockpit() { return m_cockpit; }


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

    public StartAmpelnUI()
    {
        for (int i=0; i<10; i++)
        {
            CockpitItem ci = new CockpitItem(i%3,"Item " + i,"This is comment " + i);
            m_cockpit.addCockpitItem(ci);
        }

    }

    @Override
    public String getRootExpressionUsedInPage() { return "#{d.StartAmpelnUI}"; }

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

    public class MyROWTLCOCKPITBinding
    extends ROWTLCOCKPITBinding
    {
        @Override
        public void onCockpitItemSelect(CockpitItem ci)
        {
            Statusbar.outputSuccess("Item selected: " + ci.getTitle());
        }
    }
}
