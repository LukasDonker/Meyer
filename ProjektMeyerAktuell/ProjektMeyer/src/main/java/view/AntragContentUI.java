package view;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.ModalPopup;
import org.eclnt.jsfserver.elements.impl.TILEDAREABinding;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass(expressionBase = "#{d.AntragContentUI}")

public class AntragContentUI extends PageBean implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 3921729826888304096L;

    TILEDAREABinding m_tiledAreaBinding = new TILEDAREABinding();


    //TiledArea
    AntragKerndatenUI m_kerndaten_UI = new AntragKerndatenUI();
    AntragBeziehungenUI m_beziehungen_UI = new AntragBeziehungenUI();
    // AntragUebersichtUI m_uebersicht_UI = new AntragUebersichtUI();
    AntragMittelUI m_mittel_UI = new AntragMittelUI();
    AntragBemerkungenUI m_bemerkungen_UI = new AntragBemerkungenUI();
    //    AntragStatusUI m_status_UI = new AntragStatusUI();
    AntragStatusZweiUI m_statusZwei_UI = new AntragStatusZweiUI();

    //Tree
    Tree m_tree = new Tree();

    public Tree getTree(){
        return m_tree;
    }


    /* Listener to the user of the page bean. */
    public interface IListener {
    }

    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------

    private IListener m_listener;

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public AntragContentUI() {
        // add tiles
        // m_tiledAreaBinding.addTile("UEBERSICHT","Übersicht",m_uebersicht_UI,
        // "600");
        m_tiledAreaBinding.addTile("KERNDATEN", "Kerndaten", m_kerndaten_UI, "100%;500");
        m_tiledAreaBinding.addTile("MITTEL", "Mittel", m_mittel_UI, "100%;400");
        m_tiledAreaBinding.addTile("BEZIEHUNGEN", "Beziehungen", m_beziehungen_UI, "100%;600");
        m_tiledAreaBinding.addTile("BEMERKUNGEN", "Bemerkungen", m_bemerkungen_UI, "100%;400");
        //        m_tiledAreaBinding.addTile("STATUS", "Status", m_status_UI, "100%;200");
        m_tiledAreaBinding.addTile("REGELN", "Prüfung", m_statusZwei_UI, "100%;200");
    }

    @Override
    public String getPageName() {
        return "/ContentWindow.jsp";
    }

    @Override
    public String getRootExpressionUsedInPage() {
        return "#{d.AntragContentUI}";
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

    public TILEDAREABinding getTiledAreaBinding() {
        return m_tiledAreaBinding;
    }

    public void onOpenConfiguration(javax.faces.event.ActionEvent event) {
        final AntragContentDialogUI bean = new AntragContentDialogUI();
        ModalPopup popup = openModalPopup(bean,"Antragsansicht Konfiguration",800,850,new ModalPopup.IModalPopupListener(){
            @Override
            public void reactOnPopupClosedByUser()
            {
                closePopup(bean);
            }
        });
        popup.setLeftTopReferenceCentered();
    }
}
