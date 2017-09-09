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

public class AntragBeziehungenUI
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

    public AntragBeziehungenUI()
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
        topBox.setTitle("EI 1234/1-1");
        topBox.setText("Schwarzbrot - Verbreitung und Vermarktung");
        topBox.setImage("/awesomefont(f016,#000000,15)");
        topBox.setImageWidth(16);
        m_topNode = new GraphicalTreeNode(topBox);
        m_topNode.setCollapsed(false);

        //Beteiligungen
        CCDiagramBoxTitleAndText beteiligungenBox = new CCDiagramBoxTitleAndText();
        beteiligungenBox.setTitle("Beteiligungen");
        beteiligungenBox.setText("8 Objekte");
        beteiligungenBox.setImage("/awesomefont(f2ba,#000000,15)");
        beteiligungenBox.setImageWidth(16);
        GraphicalTreeNode beteiligungenNode = new GraphicalTreeNode(beteiligungenBox);
        beteiligungenNode.setCollapsed(true);
        m_topNode.addChildNode(beteiligungenNode);

        //Beteiligungen Unterpunkte
        //Antragssteller
        CCDiagramBoxTitleAndText antragsstellerBox = new CCDiagramBoxTitleAndText();
        antragsstellerBox.setTitle("Antragsteller");
        antragsstellerBox.setText("2 Objekte");
        antragsstellerBox.setImage("/awesomefont(f067,#000000,15)");
        antragsstellerBox.setImageWidth(16);
        GraphicalTreeNode antragsstellerNode = new GraphicalTreeNode(antragsstellerBox);
        beteiligungenNode.addChildNode(antragsstellerNode);

        //Antragsstellende Person
        CCDiagramBoxTitleAndText antragsstellerPersonBox = new CCDiagramBoxTitleAndText();
        antragsstellerPersonBox.setTitle("Albert Einstein");
        antragsstellerPersonBox.setText("Antragsteller");
        antragsstellerPersonBox.setImage("/awesomefont(f19d,#000000,15)");
        antragsstellerPersonBox.setImageWidth(16);
        GraphicalTreeNode antragsstellerPersonNode = new GraphicalTreeNode(antragsstellerPersonBox);
        antragsstellerNode.addChildNode(antragsstellerPersonNode);

        //Mitantragsstellung
        CCDiagramBoxTitleAndText mitAntragsstellerPersonBox = new CCDiagramBoxTitleAndText();
        mitAntragsstellerPersonBox.setTitle("Marie Curie");
        mitAntragsstellerPersonBox.setText("Mitantragsteller");
        mitAntragsstellerPersonBox.setImage("/awesomefont(f19d,#000000,15)");
        mitAntragsstellerPersonBox.setImageWidth(16);
        GraphicalTreeNode mitAntragsstellerPersonNode = new GraphicalTreeNode(mitAntragsstellerPersonBox);
        antragsstellerPersonNode.addChildNode(mitAntragsstellerPersonNode);

        //Antragsstellende Institution
        CCDiagramBoxTitleAndText antragsstellerInsBox = new CCDiagramBoxTitleAndText();
        antragsstellerInsBox.setTitle("Universität Beuel");
        antragsstellerInsBox.setText("Antragstellende Institution");
        antragsstellerInsBox.setImage("/awesomefont(f19c,#000000,15)");
        antragsstellerInsBox.setImageWidth(16);
        GraphicalTreeNode antragsstellerInsNode = new GraphicalTreeNode(antragsstellerInsBox);
        antragsstellerNode.addChildNode(antragsstellerInsNode);

        //Sonstige Beteiligte
        CCDiagramBoxTitleAndText sonstBeteiligteBox = new CCDiagramBoxTitleAndText();
        sonstBeteiligteBox.setTitle("Sonst. Beteiligte");
        sonstBeteiligteBox.setText("1 Objekt");
        sonstBeteiligteBox.setImage("/awesomefont(f067,#000000,15)");
        sonstBeteiligteBox.setImageWidth(16);
        GraphicalTreeNode sonstBeteiligteNode = new GraphicalTreeNode(sonstBeteiligteBox);
        beteiligungenNode.addChildNode(sonstBeteiligteNode);

        //Sonstige Beteiligte Person
        CCDiagramBoxTitleAndText sonstBeteiligtePersonBox = new CCDiagramBoxTitleAndText();
        sonstBeteiligtePersonBox.setTitle("Niels Bohr");
        sonstBeteiligtePersonBox.setText("Kooperationspartner");
        sonstBeteiligtePersonBox.setImage("/awesomefont(f19d,#000000,15)");
        sonstBeteiligtePersonBox.setImageWidth(16);
        GraphicalTreeNode sonstBeteiligtePersonNode = new GraphicalTreeNode(sonstBeteiligtePersonBox);
        sonstBeteiligteNode.addChildNode(sonstBeteiligtePersonNode);

        //Gutachter
        CCDiagramBoxTitleAndText gutachterBox = new CCDiagramBoxTitleAndText();
        gutachterBox.setTitle("Gutachter");
        gutachterBox.setText("2 Objekte");
        gutachterBox.setImage("/awesomefont(f067,#000000,15)");
        gutachterBox.setImageWidth(16);
        GraphicalTreeNode gutachterNode = new GraphicalTreeNode(gutachterBox);
        beteiligungenNode.addChildNode(gutachterNode);

        //Gutachter Person 1
        CCDiagramBoxTitleAndText gutachterPerson1Box = new CCDiagramBoxTitleAndText();
        gutachterPerson1Box.setTitle("Robert Koch");
        gutachterPerson1Box.setText("Gutachter");
        gutachterPerson1Box.setImage("/awesomefont(f19d,#000000,15)");
        gutachterPerson1Box.setImageWidth(16);
        GraphicalTreeNode gutachterPerson1Node = new GraphicalTreeNode(gutachterPerson1Box);
        gutachterNode.addChildNode(gutachterPerson1Node);

        //Gutachter Person 1
        CCDiagramBoxTitleAndText gutachterPerson2Box = new CCDiagramBoxTitleAndText();
        gutachterPerson2Box.setTitle("Albert Schweitzer");
        gutachterPerson2Box.setText("Fachkollegiat");
        gutachterPerson2Box.setImage("/awesomefont(f19d,#000000,15)");
        gutachterPerson2Box.setImageWidth(16);
        GraphicalTreeNode gutachterPerson2Node = new GraphicalTreeNode(gutachterPerson2Box);
        gutachterNode.addChildNode(gutachterPerson2Node);

        //Berichterstatter
        CCDiagramBoxTitleAndText berichterstatterBox = new CCDiagramBoxTitleAndText();
        berichterstatterBox.setTitle("Berichterstatter");
        berichterstatterBox.setText("2 Objekte");
        berichterstatterBox.setImage("/awesomefont(f067,#000000,15)");
        berichterstatterBox.setImageWidth(16);
        GraphicalTreeNode berichterstatterNode = new GraphicalTreeNode(berichterstatterBox);
        beteiligungenNode.addChildNode(berichterstatterNode);

        //Gutachter Person 1
        CCDiagramBoxTitleAndText berichterstatterPerson1Box = new CCDiagramBoxTitleAndText();
        berichterstatterPerson1Box.setTitle("Max Planck");
        berichterstatterPerson1Box.setText("Berichterstatter Senat");
        berichterstatterPerson1Box.setImage("/awesomefont(f19d,#000000,15)");
        berichterstatterPerson1Box.setImageWidth(16);
        GraphicalTreeNode berichterstatterPerson1Node = new GraphicalTreeNode(berichterstatterPerson1Box);
        berichterstatterNode.addChildNode(berichterstatterPerson1Node);

        //Gutachter Person 1
        CCDiagramBoxTitleAndText berichterstatterPerson2Box = new CCDiagramBoxTitleAndText();
        berichterstatterPerson2Box.setTitle("Ernest Rutherford");
        berichterstatterPerson2Box.setText("Berichterstatter Senat");
        berichterstatterPerson2Box.setImage("/awesomefont(f19d,#000000,15)");
        berichterstatterPerson2Box.setImageWidth(16);
        GraphicalTreeNode berichterstatterPerson2Node = new GraphicalTreeNode(berichterstatterPerson2Box);
        berichterstatterNode.addChildNode(berichterstatterPerson2Node);

        CCDiagramBoxTitleAndText sitzungenBox = new CCDiagramBoxTitleAndText();
        sitzungenBox.setTitle("Sitzungen");
        sitzungenBox.setText("3 Objekte");
        sitzungenBox.setImage("/awesomefont(f073,#000000,15)");
        sitzungenBox.setImageWidth(16);
        GraphicalTreeNode sitzungenNode = new GraphicalTreeNode(sitzungenBox);
        sitzungenNode.setCollapsed(true);
        m_topNode.addChildNode(sitzungenNode);

        CCDiagramBoxTitleAndText bereitstellungenBox = new CCDiagramBoxTitleAndText();
        bereitstellungenBox.setTitle("Bereitstellungen" );
        bereitstellungenBox.setText("4 Objekte");
        bereitstellungenBox.setImage("/awesomefont(f1ea,#000000,15)");
        bereitstellungenBox.setImageWidth(16);
        GraphicalTreeNode bereitstellungenNode = new GraphicalTreeNode(bereitstellungenBox);
        bereitstellungenNode.setCollapsed(true);
        m_topNode.addChildNode(bereitstellungenNode);

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
