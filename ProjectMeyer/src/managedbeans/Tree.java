package managedbeans;




import java.io.Serializable;

import javax.faces.event.ActionEvent;

import org.eclnt.jsfserver.defaultscreens.Statusbar;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.jsfserver.pagebean.PageBean;


public class Tree extends PageBean implements Serializable
{
    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public class MyRow extends FIXGRIDTreeItem {
        private boolean endNode;
        public boolean isEndNode() { return endNode; }

        /**
         *
         */
        private static final long serialVersionUID = 1L;
        public MyRow(FIXGRIDTreeItem parent, String text, boolean isEndNode, String image, boolean realEndnode)
        {
            super(parent);
            setText(text);
            setImage(image);
            if(isEndNode){
                endNode = false;
            }else{
                endNode = true;

            }

            if(realEndnode){
                setStatus(STATUS_ENDNODE);
            }

        }

        @Override
        public void onRowExecute()
        {
            if (getStatusInt() == STATUS_CLOSED) setStatus(STATUS_OPENED);
            else if (getStatusInt() == STATUS_OPENED) setStatus(STATUS_CLOSED);
        }
        @Override
        public void onRowSelect()
        {
            Statusbar.outputMessage("SELECT on " + getText());
        }
    }

    public void onBeteiligteClick(ActionEvent event){
        // fill the tree

        m_tree.getRows().clear();
        getSitzungTree().getRootNode().removeAllChildNodes(true);
        getSitzungTree().getRootNode().removeNode();


        MyRow country;
        MyRow town;
        MyRow dorf;
        country = new MyRow(m_tree.getRootNode(),"Antragsteller",false, "", false);
        town    = new MyRow(country,"Albert Einstein",true, "/awesomefont(f19d,#000000,15)", false);
        dorf	= new MyRow(town, "Marie Curie", true, "/awesomefont(f19d,#000000,15)", true);
        town    = new MyRow(country,"Universität Beuel",true, "/awesomefont(f19c,#000000,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Sonst. Beteiligte",false, "", false);
        town    = new MyRow(country,"Alexander von Humboldt - Mitverantwortlich",true, "/awesomefont(f19d,#000000,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Gutachter",false, "", false);
        town    = new MyRow(country,"Robert Koch",true, "/awesomefont(f19d,#000000,15)", true);
        town    = new MyRow(country,"Albert Schweitzer",true, "/awesomefont(f19d,#000000,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Berichterstatter",false, "", false);
        town    = new MyRow(country,"Max Planck",true, "/awesomefont(f19d,#000000,15)", true);
        town    = new MyRow(country,"Ernest Rutherford",true, "/awesomefont(f19d,#000000,15)", true);
        country = new MyRow(m_tree.getRootNode() ,"Team",false, "", false);
        town    = new MyRow(country,"I-INF-1 - Federführend",true, "/awesomefont(f0c0,#000000,15)", false);
        dorf    = new MyRow(town, "Bender, Axel - Referent", true, "/awesomefont(f007,#000000,15)", true);
        dorf    = new MyRow(town, "Benicke, Oliver - Sachbearbeiter", true, "/awesomefont(f007,#000000,15)",true);
    }

    public void onSitzungenClick(ActionEvent event){
        m_tree.getRows().clear();
        getSitzungTree().getRootNode().removeAllChildNodes(true);
        getSitzungTree().getRootNode().removeNode();
        MyRow country;
        MyRow town;
        MyRow dorf;
        country = new MyRow(m_tree.getRootNode(),"Begutachtung",false, "", false);
        town    = new MyRow(country,"Was kostet das?",true, "/awesomefont(f073,#000000,15)", true);
        town    = new MyRow(country,"Lohnt sich das?",false, "/awesomefont(f073,#000000,15)", false);
        dorf	= new MyRow(town, "Wirklich?", true, "/awesomefont(f073,#000000,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Allgemein",false, "", false);
        town    = new MyRow(country,"Worum gehts hier?",true, "/awesomefont(f073,#000000,15)", true);
        town    = new MyRow(country,"Kann man das essen?",true, "/awesomefont(f073,#000000,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Entscheidung",false, "", false);
        town    = new MyRow(country,"Egal gibt es nicht!",true, "/awesomefont(f073,#000000,15)", true);
    }

    public void onAntragClick(ActionEvent event){
        m_tree.getRows().clear();
        getSitzungTree().getRootNode().removeAllChildNodes(true);
        getSitzungTree().getRootNode().removeNode();
        MyRow country;
        MyRow town;
        MyRow dorf;
        country = new MyRow(m_tree.getRootNode(),"PAK 123",false, "/awesomefont(f02c,#000000,15)", false);
        town    = new MyRow(country,"EI 1234/1",false, "/awesomefont(f02b,#000000,15)", false);
        dorf   = new MyRow(town, "EI 1234/1-1", true, "/awesomefont(f016,#000000,15)", true);
        town    = new MyRow(country,"SCHN 1514/22",true, "/awesomefont(f02b,#000000,15)", true);
        m_tree.selectAndFocusItem(dorf);

    }

    public void onStatusClick(ActionEvent event){
        m_tree.getRows().clear();
        getSitzungTree().getRootNode().removeAllChildNodes(true);
        getSitzungTree().getRootNode().removeNode();
        MyRow country;
        MyRow town;
        country = new MyRow(m_tree.getRootNode(),"in Erfassung",true, "/awesomefont(f00c,#298A08,15)", true);
        country = new MyRow(m_tree.getRootNode(),"formal geprüft",true, "/awesomefont(f00c,#298A08,15)", true);
        country = new MyRow(m_tree.getRootNode(),"in Begutachtung",true, "/awesomefont(f00c,#298A08,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Vorbegutachtung abgeschlossen",true, "/awesomefont(f00c,#298A08,15)", false);
        m_tree.selectAndFocusItem(country);
        town    = new MyRow(country,"Entscheidungsunterlagen erstellen",true, "/awesomefont(f12a,#ff9900,15)", true);
        town	= new MyRow(country, "Antragstypwechsel", true, "/awesomefont(f071,#d9534f,15)", true);
        town	= new MyRow(country, "in Begutachtung", true, "/awesomefont(f00c,#298A08,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Schlusszeichnung angestoßen",true, "/awesomefont(f071,#d9534f,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Rückfrage SZ",true, "/awesomefont(f071,#d9534f,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Schlusszeichnung entschieden" ,true, "/awesomefont(f071,#d9534f,15)", true);
        country = new MyRow(m_tree.getRootNode(),"im Gremium",true, "/awesomefont(f071,#d9534f,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Gremienentscheidung erfolgt",true, "/awesomefont(f071,#d9534f,15)", true);
        country = new MyRow(m_tree.getRootNode(),"Entschieden",true, "/awesomefont(f071,#d9534f,15)", true);

    }


    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------


    FIXGRIDTreeBinding<MyRow> m_tree = new FIXGRIDTreeBinding<>();


    // ------------------------------------------------------------------------
    // constructors
    // ------------------------------------------------------------------------

    public Tree()
    {
        m_tree.getRows().clear();
        getSitzungTree().getRootNode().removeAllChildNodes(true);
        getSitzungTree().getRootNode().removeNode();

        onBeteiligteClick(null);

    }

    // ------------------------------------------------------------------------
    // public usage
    // ------------------------------------------------------------------------

    public FIXGRIDTreeBinding<MyRow> getSitzungTree() { return m_tree; }


    public void onOpenAllNodes(ActionEvent ae)
    {
        // setStatusInFolderNodes(m_tree.getRootNode(),FIXGRIDTreeItem.STATUS_OPENED);
    }

    public void onCloseAllNodes(ActionEvent ae)
    {
        // setStatusInFolderNodes(m_tree.getRootNode(),FIXGRIDTreeItem.STATUS_CLOSED);
    }

    // ------------------------------------------------------------------------
    // private usage
    // ------------------------------------------------------------------------


    @Override
    public String getPageName() {
        return "/TreeBody.jsp";
    }

    @Override
    public String getRootExpressionUsedInPage() {
        return "#{d.Tree}";
    }


    //        public String getForeground()
    //        {
    //        //    if (getText().contains("1"))
    //                return "#008000";
    //            if (getText().startsWith("Top"))
    //                return "#000000";
    //            else
    //                return "#000080";
    //        }






}
