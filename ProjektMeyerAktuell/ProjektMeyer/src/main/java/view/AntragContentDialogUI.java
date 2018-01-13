package view;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import org.eclnt.ccaddons.pbc.CCFilteredPickList;
import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass(expressionBase = "#{d.AntragContentDialogUI}")
public class AntragContentDialogUI extends PageBean implements Serializable {
    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------

    /* Listener to the user of the page bean. */
    public interface IListener {
    }

    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------

    CCFilteredPickList m_picklist = new CCFilteredPickList();
    CCFilteredPickList m_picklistContent = new CCFilteredPickList();
    private IListener m_listener;

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public AntragContentDialogUI() {
        buildPicklistUebersicht();
        buildPicklistContent();
    }

    @Override
    public String getPageName() {
        return "/dialogs/AntragContentDialog.jsp";
    }

    @Override
    public String getRootExpressionUsedInPage() {
        return "#{d.AntragContentDialogUI}";
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
    public CCFilteredPickList getPicklist() {
        return m_picklist;
    }

    public CCFilteredPickList getPicklistContent() {
        return m_picklistContent;
    }

    private void buildPicklistUebersicht(){
        m_picklist.setLeftTitle("Gewählte Übersichtspunkte");
        m_picklist.setRightTitle("Verfügbare Übersichtspunkte");

        int i = 0;
        Set<Object> sel = new HashSet<Object>();

        //Selection
        Object ref = "Object " + i;
        m_picklist.addItem(ref, "GZ", "/awesomefont(f129,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklist.addItem(ref, "Kurztitel", "/awesomefont(f129,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklist.addItem(ref, "Antragstatus", "/awesomefont(f129,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklist.addItem(ref, "Federführung", "/awesomefont(f129,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklist.addItem(ref, "Antragsumme", "/awesomefont(f153,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklist.addItem(ref, "Bewilligungssumme", "/awesomefont(f153,#000000,20)");
        i++;
        sel.add(ref);

        //Rest
        ref = "Object " + i;
        m_picklist.addItem(ref, "Antragsteller", "/awesomefont(f0c1,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklist.addItem(ref, "Entscheidung", "/awesomefont(f129,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklist.addItem(ref, "Förderabschnitte", "/awesomefont(f03a,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklist.addItem(ref, "Antragstyp", "/awesomefont(f129,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklist.addItem(ref, "Ausschreibung", "/awesomefont(f129,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklist.addItem(ref, "Gutachter", "/awesomefont(f0c1,#000000,20)");
        i++;


        m_picklist.setSelection(sel);
        m_picklist.prepare(new CCFilteredPickList.IListener() {
            @Override
            public void reactOnUpdate() {
                //                outputSelection();
            }
        });
    }

    private void buildPicklistContent(){
        m_picklistContent.setLeftTitle("Gewählte Übersichtspunkte");
        m_picklistContent.setRightTitle("Verfügbare Übersichtspunkte");

        int i = 0;
        Set<Object> sel = new HashSet<Object>();

        //Selection
        Object ref = "Object " + i;
        m_picklistContent.addItem(ref, "Beziehungen", "/awesomefont(f0c0,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Kerndaten", "/awesomefont(f016,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Bemerkungen", "/awesomefont(f27b,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Mittel", "/awesomefont(f153,#000000,20)");
        i++;
        sel.add(ref);
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Status", "/awesomefont(f0ec,#000000,20)");
        i++;
        sel.add(ref);

        //Rest
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Klassifizierungen", "/awesomefont(f12a,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Abrechnung", "/awesomefont(f153,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Projektbezüge", "/awesomefont(f114,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Antragsbaum", "/awesomefont(f0c5,#000000,20)");
        i++;
        ref = "Object " + i;
        m_picklistContent.addItem(ref, "Abfragen", "/awesomefont(f0e4,#000000,20)");


        m_picklistContent.setSelection(sel);
        m_picklistContent.prepare(new CCFilteredPickList.IListener() {
            @Override
            public void reactOnUpdate() {
                //                outputSelection();
            }
        });
    }
}
