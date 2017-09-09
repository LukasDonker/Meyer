package managedbeans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.session.SessionInfo;
import org.eclnt.jsfserver.util.AutoCompleteMgr;
import org.eclnt.jsfserver.util.DefaultAutoComplete2Provider;
import org.eclnt.workplace.IWorkpageContainer;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDefaultLifecycleListener;
import org.eclnt.workplace.WorkpageDispatchedBean;
import org.eclnt.workplace.WorkpageStartInfo;
import org.eclnt.workplace.WorkpageStarterFactory;

@CCGenClass(expressionBase = "#{d.ContentWindowUI}")

public class ContentWindowUI extends WorkpageDispatchedBean implements Serializable {
    String m_styleurl;
    public String getStyleurl() {return m_styleurl; }
    public void setStyleurl(String value) { this.m_styleurl = value; }

    String m_style = SessionInfo.getSessionInstance().getStyle();
    public String getStyle() { return m_style; }
    public void setStyle(String value) { this.m_style = value; }

    public void onStyleChange(javax.faces.event.ActionEvent event) {
        m_styleurl = "/MilleniumFalcon/ContentWindow.risc?ccstyle="+m_style;
    }

    String m_comboValue = "1";
    public String getComboValue() { return m_comboValue; }
    public void setComboValue(String value) { this.m_comboValue = value; }

    /**
     *
     */
    private static final long serialVersionUID = -7623738083764314454L;

    protected AutoFillCompleteProvider m_autofillListAC;
    protected String m_autofillValue;

    public ContentWindowUI(IWorkpageDispatcher dispatcher) {
        super(dispatcher);
        render();

    }

    public void render() {
        IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
        IWorkpageContainer wpc = getWorkpageContainer();

        wpc.closeAllWorkpages();

        if (m_comboValue.equals("3")) {
            WorkpageStartInfo wpsi = new WorkpageStartInfo();
            wpsi.setJspPage("/pages/extern/StartContent.jsp");
            wpsi.setText("Startseite");
            // wpsi.setImage("/awesomefont(f015,#FFFFFF,15)");
            wpsi.setOpenMultipleInstances(false);
            wpsi.setCloseSupported(false);
            WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);

            m_autofillListAC = new AutoFillCompleteProvider();
            AutoCompleteMgr.add(m_autofillListAC);
            // register clearing of "m_nameAC"
            getWorkpage().addLifecycleListener(new WorkpageDefaultLifecycleListener() {
                @Override
                public void reactOnDestroyed() {
                    super.reactOnDestroyed();
                    AutoCompleteMgr.remove(m_autofillListAC);
                }
            });
        } else {
            WorkpageStartInfo wpsi = new WorkpageStartInfo();
            wpsi.setJspPage("/pages/start/StartContent.jsp");
            wpsi.setText("Startseite");
            // wpsi.setImage("/awesomefont(f015,#FFFFFF,15)");
            wpsi.setOpenMultipleInstances(false);
            wpsi.setCloseSupported(false);
            WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);

            m_autofillListAC = new AutoFillCompleteProvider();
            AutoCompleteMgr.add(m_autofillListAC);
            // register clearing of "m_nameAC"
            getWorkpage().addLifecycleListener(new WorkpageDefaultLifecycleListener() {
                @Override
                public void reactOnDestroyed() {
                    super.reactOnDestroyed();
                    AutoCompleteMgr.remove(m_autofillListAC);
                }
            });
        }
    }

    public String getPageName() {
        return "/ContentWindow.jsp";
    }

    public String getRootExpressionUsedInPage() {
        return "#{d.ContentWindowUI}";
    }

    public void onSearch(javax.faces.event.ActionEvent event) {
        if (m_comboValue.equals("3")) {

        } else {
            IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
            IWorkpageContainer wpc = getWorkpageContainer();
            WorkpageStartInfo wpsi = new WorkpageStartInfo();
            wpsi.setJspPage("/pages/AntragsContent.jsp");
            wpsi.setImage("/awesomefont(f016,#FFFFFF,12)");
            wpsi.setText("EI 1234/1-1: Schwarzbrot - Verbreitung und Vermarktung");
            wpsi.setSelectorTitle("EI 1234/1-1");
            // wpsi.setWindowTitle("GZ 1234: Schwarzbrot - Verbreitung und
            // Vermarktung");
            wpsi.setOpenMultipleInstances(false);
            WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);
        }
    }

    public String getAutofillListACURL() {
        return m_autofillListAC.getURL();
    }

    public String getAutofill() {
        return m_autofillValue;
    }

    public void setAutofill(String value) {
        if (value == null || value.isEmpty()) {
            value = "GZ, Name, TAN, ID";
        }
        m_autofillValue = value;
    }

    // ------------------------------------------------------------------------
    // private usage
    // ------------------------------------------------------------------------

    public class AutoFillCompleteProvider extends DefaultAutoComplete2Provider {

        AutoCompleteItem[] lastValues = { new AutoCompleteItem("Schwarzbrot - Verbreitung und Vermarktung", "1", "Einzelantrag, EI 1234/1-1"), new AutoCompleteItem("Brady, Susan", "2", "Person, BR 4774"), new AutoCompleteItem("Schneppensiefen, Axel", "3", "Person, SCHN 1514"), new AutoCompleteItem("Rheinische Friedrich-Wilhelms-Universit\u00e4t Bonn", "4", "Universit\u00e4t, INST 217"), new AutoCompleteItem("Das Brot im Wandel der Kulturen", "5", "Einzelantrag, FZT 130/0"),
                new AutoCompleteItem("Westf\u00e4lische Wilhelms-Universit\u00e4t M\u00fcnster", "6", "Universit\u00e4t, INST 211"), new AutoCompleteItem("Industrie- und Handelskammer zu K\u00f6ln", "7", "Sonst. N-Forsch., INST 145743") };

        @Override
        public List<AutoCompleteItem> getProposals(String value) {
            List<AutoCompleteItem> result = new ArrayList<>();

            for (AutoCompleteItem item : lastValues) {
                if (item.getText().contains(value) || item.getId().contains(value) || item.getComment().contains(value)) {
                    result.add(item);
                }
            }
            return result;
        }

    }

    public void onToggle(javax.faces.event.ActionEvent event) {
        render();
    }

    public void onOpenSearch(javax.faces.event.ActionEvent event) {
        IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
        IWorkpageContainer wpc = getWorkpageContainer();
        WorkpageStartInfo wpsi = new WorkpageStartInfo();
        wpsi.setJspPage("/pages/search/Suche.jsp");
        wpsi.setImage("/awesomefont(f002,#FFFFFF,12)");
        wpsi.setText("Suche");
        wpsi.setSelectorTitle("Suche");
        wpsi.setOpenMultipleInstances(false);
        WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);
    }

}
