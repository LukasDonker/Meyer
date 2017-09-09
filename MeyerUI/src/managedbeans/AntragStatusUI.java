package managedbeans;

import java.io.Serializable;

import org.eclnt.ccaddons.pbc.CCDiagramBox;
import org.eclnt.ccaddons.pbc.CCDiagramBoxTitleAndText;
import org.eclnt.ccaddons.pbc.CCGraphicalTree;
import org.eclnt.ccaddons.pbc.util.GraphicalTreeNode;
import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.Statusbar;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.AntragBeziehungenUI}")

public class AntragStatusUI
extends PageBean
implements Serializable
{
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

    public AntragStatusUI()
    {
        buildUpTree();
    }

    @Override
    public String getPageName() { return "/pages/AntragBeziehungen.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.AntragBeziehungenUI}"; }

    // ------------------------------------------------------------------------
    // public usage
    // ------------------------------------------------------------------------

    /* Initialization of the bean. Add any parameter that is required within your scenario. */
    public void prepare(IListener listener)
    {
        m_listener = listener;
    }

    public CCGraphicalTree getGraphicalTree() { return m_graphicalTree; }


    // ------------------------------------------------------------------------
    // private usage
    // ------------------------------------------------------------------------

    private void buildUpTree()
    {
        CCDiagramBoxTitleAndText topBox = new CCDiagramBoxTitleAndText();
        topBox.setTitle("Erstellt");
        topBox.setText("01.01.2017");
        //        topBox.setImage("/awesomefont(f016,#000000,15)");
        topBox.setImageWidth(16);
        m_topNode = new GraphicalTreeNode(topBox);
        //        m_topNode.setCollapsed(false);

        //In Erfassung
        CCDiagramBoxTitleAndText inErfassungBox = new CCDiagramBoxTitleAndText();
        inErfassungBox.setTitle("In Erfassung:");
        inErfassungBox.setText("16.01.2017");
        //        inErfassungBox.setImage("/awesomefont(f2ba,#000000,15)");
        inErfassungBox.setImageWidth(16);
        GraphicalTreeNode inErfassungNode = new GraphicalTreeNode(inErfassungBox);
        m_topNode.addChildNode(inErfassungNode);

        //Formal geprüft
        CCDiagramBoxTitleAndText formalgepBox = new CCDiagramBoxTitleAndText();
        formalgepBox.setTitle("Formal geprüft:");
        formalgepBox.setText("24.01.2017");
        //                depBox.setImage("/images/icons/person.png");
        formalgepBox.setImageWidth(16);
        GraphicalTreeNode formalgepNode = new GraphicalTreeNode(formalgepBox);
        inErfassungNode.addChildNode(formalgepNode);

        //In Begutachtung
        CCDiagramBoxTitleAndText inBegutachtungBox = new CCDiagramBoxTitleAndText();
        inBegutachtungBox.setTitle("In Begutachtung");
        inBegutachtungBox.setText("01.03.2017");
        //        inBegutachtungBox.setImage("/awesomefont(f19d,#000000,15)");
        inBegutachtungBox.setImageWidth(16);
        GraphicalTreeNode inBegutachtungNode = new GraphicalTreeNode(inBegutachtungBox);
        formalgepNode.addChildNode(inBegutachtungNode);

        //Vorbegutachtung abgeschlossen
        CCDiagramBoxTitleAndText vorabgeBox = new CCDiagramBoxTitleAndText();
        vorabgeBox.setTitle("Vorbegutachtung abgeschlossen");
        vorabgeBox.setText("15.03.2017");
        //        vorabgeBox.setImage("/awesomefont(f19d,#000000,15)");
        vorabgeBox.setImageWidth(16);
        GraphicalTreeNode vorabgeNode = new GraphicalTreeNode(vorabgeBox);
        inBegutachtungNode.addChildNode(vorabgeNode);

        //Entscheidungsunterlagen erstellen
        CCDiagramBoxTitleAndText entschErstellenBox = new CCDiagramBoxTitleAndText();
        entschErstellenBox.setTitle("Entscheidungsunterlagen erstellen");
        entschErstellenBox.setText("-- -- --");
        entschErstellenBox.setImage("/awesomefont(f074,#000000,15)");
        entschErstellenBox.setImageWidth(16);
        GraphicalTreeNode entschErstellenNode = new GraphicalTreeNode(entschErstellenBox);
        vorabgeNode.addChildNode(entschErstellenNode);

        //Regeln
        CCDiagramBoxTitleAndText nextSepsBox = new CCDiagramBoxTitleAndText();
        nextSepsBox.setTitle("Regel 41");
        nextSepsBox.setText("Unterlagen erstellen");
        nextSepsBox.setImage("/awesomefont(f00c,#298A08,15)");
        nextSepsBox.setImageWidth(16);
        GraphicalTreeNode nextSepsNode = new GraphicalTreeNode(nextSepsBox);
        vorabgeNode.addChildNode(nextSepsNode);

        CCDiagramBoxTitleAndText nextSeps2Box = new CCDiagramBoxTitleAndText();
        nextSeps2Box.setTitle("Regel 42");
        nextSeps2Box.setText("Sitzung ausführen");
        nextSeps2Box.setImage("/awesomefont(f00d,#FF0000,15)");
        nextSeps2Box.setImageWidth(16);
        GraphicalTreeNode nextSeps2Node = new GraphicalTreeNode(nextSeps2Box);
        vorabgeNode.addChildNode(nextSeps2Node);


        m_graphicalTree = new CCGraphicalTree();
        m_graphicalTree.setTopNode(m_topNode);
        // listen to selection events
        m_graphicalTree.addListener(new CCGraphicalTree.IListener()
        {
            @Override
            public void reactOnSelection(GraphicalTreeNode node, CCDiagramBox nodePageBean)
            {
                if (nodePageBean instanceof CCDiagramBoxTitleAndText)
                    Statusbar.outputSuccess("Selection of node: " + ((CCDiagramBoxTitleAndText)nodePageBean).getTitle());
            }
        });
    }
}
