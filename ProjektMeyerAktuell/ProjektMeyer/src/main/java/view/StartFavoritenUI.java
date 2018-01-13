package view;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.workplace.IWorkpageContainer;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedPageBean;
import org.eclnt.workplace.WorkpageStartInfo;
import org.eclnt.workplace.WorkpageStarterFactory;

@CCGenClass(expressionBase = "#{d.StartFavoritenUI}")

public class StartFavoritenUI extends WorkpageDispatchedPageBean implements Serializable {
    // ------------------------------------------------------------------------
    // inner classes
    // ------------------------------------------------------------------------

    /* Listener to the user of the page bean. */
    public interface IListener {
    }

    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------
    private FIXGRIDListBinding<FavoritesItem> m_favoritesListe = new FIXGRIDListBinding<>();

    SimpleDateFormat s_formatter = new SimpleDateFormat("dd.MM.YYYY - hh:mm");

    private IListener m_listener;

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public StartFavoritenUI(IWorkpageDispatcher dispatcher) {
        super(dispatcher);
        if (m_favoritesListe.getRows().size() == 0) {
            WorkpageStartInfo fi = new WorkpageStartInfo();
            fi.setImage("/awesomefont(f016,#FFFFFF,12)");
            fi.setJspPage("/pages/AntragsContent.jsp");
            fi.setText("EI 1234/1-1: Schwarzbrot - Verbreitung und Vermarktung");
            fi.setSelectorTitle("EI 1234/1-1");
            fi.setOpenMultipleInstances(false);
            m_favoritesListe.getItems().add(new FavoritesItem(fi));

            fi = new WorkpageStartInfo();
            fi.setImage("/awesomefont(f19d,#FFFFFF,12)");
            fi.setJspPage("/pages/AntragsContent.jsp");
            fi.setText("Brady, Susan");
            fi.setSelectorTitle("BR 4774");
            fi.setOpenMultipleInstances(false);
            m_favoritesListe.getItems().add(new FavoritesItem(fi));

            fi = new WorkpageStartInfo();
            fi.setImage("/awesomefont(f19c,#FFFFFF,12)");
            fi.setJspPage("/pages/AntragsContent.jsp");
            fi.setText("Westf\u00e4lische Wilhelms-Universit\u00e4t M\u00fcnster");
            fi.setSelectorTitle("INST 211");
            fi.setOpenMultipleInstances(false);
            m_favoritesListe.getItems().add(new FavoritesItem(fi));

            fi = new WorkpageStartInfo();
            fi.setImage("/awesomefont(f016,#FFFFFF,12)");
            fi.setJspPage("/pages/AntragsContent.jsp");
            fi.setText("Das Brot im Wandel der Kulturen");
            fi.setSelectorTitle("FZT 130/0");
            fi.setOpenMultipleInstances(false);
            m_favoritesListe.getItems().add(new FavoritesItem(fi));

        }
    }

    @Override
    public String getPageName() {
        return "/pages/start/StartFavoriten.jsp";
    }

    @Override
    public String getRootExpressionUsedInPage() {
        return "#{d.StartFavoritenUI}";
    }

    // ------------------------------------------------------------------------
    // public usage
    // ------------------------------------------------------------------------

    public FIXGRIDListBinding<FavoritesItem> getFavoritesListe() {
        return m_favoritesListe;
    }

    public void setFavoritesListe(FIXGRIDListBinding<FavoritesItem> favoritesListe) {
        m_favoritesListe = favoritesListe;
    }


    /*
     * Initialization of the bean. Add any parameter that is required within
     * your scenario.
     */
    public void prepare(IListener listener) {
        m_listener = listener;
    }

    public class FavoritesItem extends FIXGRIDItem {
        /**
         *
         */
        private static final long serialVersionUID = -7181588541531992552L;
        public String m_gz, m_kurztitel, m_objekttyp, m_icon, m_letzterAufruf, m_kommentar;
        public WorkpageStartInfo m_info;

        public FavoritesItem(WorkpageStartInfo info) {
            m_info = info;
            m_gz = info.getSelectorTitle();
            if(m_gz.equals("EI 1234/1-1")){
                m_kurztitel = "Schwarzbrot - Verbreitung und Vermarktung";
            }else{
                m_kurztitel = info.getText();
            }
            m_objekttyp = "Antrag";
            m_letzterAufruf = s_formatter.format(new Date());
            m_icon = info.getImage().replace(",#FFFFFF,12)", ",#000000,15)");
            m_kommentar = "Der Prototyp Antrag";
        }

        public void onDelete(javax.faces.event.ActionEvent event) {
            m_favoritesListe.getItems().remove(this);
        }

        public void onOpen(javax.faces.event.ActionEvent event) {
            IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
            IWorkpageContainer wpc = getWorkpageContainer();
            WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, m_info);
        }

        public String getGz() {
            return m_gz;
        }

        public void setGz(String gz) {
            m_gz = gz;
        }

        public String getKurztitel() {
            return m_kurztitel;
        }

        public void setKurztitel(String kurztitel) {
            m_kurztitel = kurztitel;
        }

        public String getObjekttyp() {
            return m_objekttyp;
        }

        public void setObjekttyp(String objekttyp) {
            m_objekttyp = objekttyp;
        }

        public String getIcon() {
            return m_icon;
        }

        public void setIcon(String icon) {
            m_icon = icon;
        }

        public String getLetzterAufruf() {
            return m_letzterAufruf;
        }

        public void setLetzterAufruf(String letzterAufruf) {
            m_letzterAufruf = letzterAufruf;
        }

        public String getKommentar() {
            return m_kommentar;
        }

        public void setKommentar(String kommentar) {
            m_kommentar = kommentar;
        }

    }
}
