package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.NewGadgetDialogUI}")
public class NewGadgetDialogUI
extends PageBean
implements Serializable
{

    private NewGadgetHandlerUI m_newGadgetHandlerUI;

    FIXGRIDListBinding<GadgetListItem> m_gadgetList = new FIXGRIDListBinding<>();
    public FIXGRIDListBinding<GadgetListItem> getGadgetList() { return m_gadgetList; }
    public void setGadgetList(FIXGRIDListBinding<GadgetListItem> value) { this.m_gadgetList = value; }

    public class GadgetListItem extends FIXGRIDItem implements java.io.Serializable
    {
        String m_author;
        public String getAuthor() { return m_author; }
        public void setAuthor(String value) { this.m_author = value; }

        String m_titel;
        public String getTitel() { return m_titel; }
        public void setTitel(String value) { this.m_titel = value; }

        String m_beschreibung;
        public String getBeschreibung() { return m_beschreibung; }
        public void setBeschreibung(String value) { this.m_beschreibung = value; }

        String m_image;
        public String getImage() { return m_image; }
        public void setImage(String value) { this.m_image = value; }

        public GadgetListItem(String titel, String author, String image, String beschreibung){
            m_titel = titel;
            m_author = author;
            m_image = image;
            m_beschreibung = beschreibung;
        }

    }

    FIXGRIDListBinding<CategoryListItem> m_categoryList = new FIXGRIDListBinding<>();
    public FIXGRIDListBinding<CategoryListItem> getCategoryList() { return m_categoryList; }
    public void setCategoryList(FIXGRIDListBinding<CategoryListItem> value) { this.m_categoryList = value; }

    public class CategoryListItem extends FIXGRIDItem implements java.io.Serializable
    {
        String m_font;
        public String getFont() { return m_font; }
        public void setFont(String value) { this.m_font = value; }

        String m_anzahl;
        public String getAnzahl() { return m_anzahl; }
        public void setAnzahl(String value) { this.m_anzahl = value; }

        String m_name;
        public String getName() { return m_name; }
        public void setName(String value) { this.m_name = value; }

        public CategoryListItem(String name, String anzahl, String font){
            m_name = name;
            m_anzahl = anzahl;
            m_font = font;
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

    public NewGadgetDialogUI(NewGadgetHandlerUI newGadgetHandlerUI)
    {
        m_newGadgetHandlerUI = newGadgetHandlerUI;
        m_categoryList.getItems().add(new CategoryListItem("Alle", "4", ""));
        m_categoryList.getItems().add(new CategoryListItem("Graphen", "3", "weight:bold"));
        m_categoryList.getItems().add(new CategoryListItem("Listen", "1", ""));
        m_categoryList.getItems().add(new CategoryListItem("Vorgangswarteschlangen", "0", ""));
        m_categoryList.getItems().add(new CategoryListItem("Weitere", "0", ""));
        m_categoryList.selectItem(1);

        onShowAll(null);

    }

    @Override
    public String getPageName() { return "/dialogs/NewGadgetDialog.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.NewGadgetDialogUI}"; }

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
    public void onShowAll(javax.faces.event.ActionEvent event) {
        if(m_categoryList.getSelectedItem().getName().equals("Graphen")){
            m_gadgetList.getItems().clear();
            m_gadgetList.getItems().add(new GadgetListItem("Bar Chart", "von CSC-DFG","/images/BarChartImage.PNG", "Bar Chart Beschreibung"));
            m_gadgetList.getItems().add(new GadgetListItem("Line Chart", "von CSC-DFG","/images/LineChartImage.PNG", "Line Chart Beschreibung"));
            m_gadgetList.getItems().add(new GadgetListItem("Pie Chart", "von CSC-DFG","/images/PieChartImage.PNG", "Pie Chart Beschreibung"));
        }else if(m_categoryList.getSelectedItem().getName().equals("Listen")){
            m_gadgetList.getItems().clear();
            m_gadgetList.getItems().add(new GadgetListItem("Liste aus einer Suche", "von CSC-DFG","/images/ListScreen.PNG", "Fügen sie eine Liste aus ihren gespeicherten oder freigegebenen Suchen ein."));

        }else if(m_categoryList.getSelectedItem().getName().equals("Alle")){
            m_gadgetList.getItems().clear();
            m_gadgetList.getItems().add(new GadgetListItem("Bar Chart", "von CSC-DFG","/images/BarChartImage.PNG", "Bar Chart Beschreibung"));
            m_gadgetList.getItems().add(new GadgetListItem("Line Chart", "von CSC-DFG","/images/LineChartImage.PNG", "Line Chart Beschreibung"));
            m_gadgetList.getItems().add(new GadgetListItem("Pie Chart", "von CSC-DFG","/images/PieChartImage.PNG", "Pie Chart Beschreibung"));
            m_gadgetList.getItems().add(new GadgetListItem("Liste aus einer Suche", "von CSC-DFG","/images/ListScreen.PNG", "Fügen sie eine Liste aus ihren gespeicherten oder freigegebenen Suchen ein."));

        }else{
            m_gadgetList.getItems().clear();
        }
    }

    public void onNew(javax.faces.event.ActionEvent event) {
        if(m_gadgetList.getItems().get(0).getTitel().equals("Liste aus einer Suche")){
            m_newGadgetHandlerUI.onChangeToList(event);
        }else{
            m_newGadgetHandlerUI.onChange(event);
        }
    }

}
