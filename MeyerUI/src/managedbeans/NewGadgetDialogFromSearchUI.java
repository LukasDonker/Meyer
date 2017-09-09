package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass (expressionBase="#{d.NewGadgetDialogFromSearchUI}")

public class NewGadgetDialogFromSearchUI
extends PageBean
implements Serializable
{

    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------

    FIXGRIDListBinding<GadgetListItem> m_gadgetList = new FIXGRIDListBinding<>();
    public FIXGRIDListBinding<GadgetListItem> getGadgetList() { return m_gadgetList; }
    public void setGadgetList(FIXGRIDListBinding<GadgetListItem> value) { this.m_gadgetList = value; }

    public class GadgetListItem extends FIXGRIDItem implements java.io.Serializable
    {
        String m_chartTitle = "";
        public String getChartTitle() { return m_chartTitle; }
        public void setChartTitle(String value) { this.m_chartTitle = value; }

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

        public void onAddNewChart(javax.faces.event.ActionEvent event) {
            onAddNew(m_chartTitle);
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

    private StartContentUI m_parent;

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

    public NewGadgetDialogFromSearchUI(StartContentUI parent)
    {
        m_parent = parent;
        m_categoryList.getItems().add(new CategoryListItem("Alle", "7", "weight:bold"));
        m_categoryList.getItems().add(new CategoryListItem("Eigene Suchen", "3", ""));
        m_categoryList.getItems().add(new CategoryListItem("Freigegebene Suchen", "4", ""));
        m_categoryList.getItems().add(new CategoryListItem("Vorlagen", "0", ""));
        m_categoryList.selectItem(0);

        onShowAll(null);

    }

    @Override
    public String getPageName() { return "/dialogs/NewGadgetDialogFromSearch.jsp"; }
    @Override
    public String getRootExpressionUsedInPage() { return "#{d.NewGadgetDialogFromSearchUI}"; }

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
        m_gadgetList.getItems().clear();
        m_gadgetList.getItems().add(new GadgetListItem("Ant. Sachb. In Schlussz.", "von Lukas Donker","", "Eigene Suchbeschreibung"));
        m_gadgetList.getItems().add(new GadgetListItem("Doktoranden Köln", "von Lukas Donker","", "Eigene Suchbeschreibung"));
        m_gadgetList.getItems().add(new GadgetListItem("Wiedervorlagen 1 Monat", "von Lukas Donker","", "Eigene Suchbeschreibung"));
        m_gadgetList.getItems().add(new GadgetListItem("Offene Ant. Team II-ING-1", "von I-INF-1","", "Suchbeschreibung für freigegebene Suche"));
        m_gadgetList.getItems().add(new GadgetListItem("Gut. Maschinenbau", "von I-INF-1","", "Suchbeschreibung für freigegebene Suche"));
        m_gadgetList.getItems().add(new GadgetListItem("Gut. Med-Technik", "von I-INF-1","", "Suchbeschreibung für freigegebene Suche"));
        m_gadgetList.getItems().add(new GadgetListItem("ExStra ING-Beteiligung", "von I-INF-1","", "Suchbeschreibung für freigegebene Suche"));
    }

    public void onAddNew(String charttitle) {
        m_parent.onPopupClosed(charttitle);
    }
}
