package managedbeans;

import java.io.Serializable;

import org.eclnt.ccaddons.pbc.CCDiagramBox;
import org.eclnt.ccaddons.pbc.CCDiagramBoxTitleAndText;
import org.eclnt.ccaddons.pbc.CCGraphicalTree;
import org.eclnt.ccaddons.pbc.util.GraphicalTreeNode;
import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.Statusbar;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.jsfserver.pagebean.PageBean;
import org.eclnt.workplace.IWorkpageDispatcher;

import managedbeans.StartInboxUI.MyRow;

@CCGenClass (expressionBase="#{d.AntragStatusZweiUI}")

public class AntragStatusZweiUI
extends PageBean
implements Serializable
{
	
	
	public class MyRow extends FIXGRIDItem {
		protected String m_text;
        public String getText() { return m_text; }
        public void setText(String value) { m_text = value; }

        protected String m_image;
        public String getImage() { return m_image; }
        public void setImage(String value) { m_image = value; }
		
	        /**
			 * 
			 */
			private static final long serialVersionUID = 1L;
			public MyRow(String text, String image)
	        {
	              setText(text);
	              setImage(image);


	        }

	}
	
    public AntragStatusZweiUI(){
        super();
            
            	MyRow r = new MyRow("Es muss ein Entscheidungsvorschlag erstellt werden.", "/awesomefont(f00d,#d9534f,15)" );
                m_rows.getItems().add(r);
    
                MyRow s = new MyRow("Die Antragsdauer muss zwischen 12 und 48 Monaten liegen.", "/awesomefont(f00c,#298A08,15)" );
                m_rows.getItems().add(s);
                
    }
    
    
    
    protected FIXGRIDListBinding<MyRow> m_rows = new FIXGRIDListBinding<MyRow>();
    
    public FIXGRIDListBinding<MyRow> getRows() { return m_rows; }
    public void setRows(FIXGRIDListBinding<MyRow> value) { m_rows = value; }
    
    
    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------

    /**
     *
     */
    private static final long serialVersionUID = -4841714045057880547L;

    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------

    private IListener m_listener;
    CCGraphicalTree m_graphicalTree;
    GraphicalTreeNode m_topNode;

    /* Listener to the user of the page bean. */
    public interface IListener
    {
    }

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------


    @Override
    public String getPageName() { return "/pages/AntragStatusZwei.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.AntragStatusZweiUI}"; }

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
