package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.TILEDAREABinding;
import org.eclnt.workplace.IWorkpageContainer;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedBean;
import org.eclnt.workplace.WorkpageStartInfo;
import org.eclnt.workplace.WorkpageStarterFactory;

@CCGenClass (expressionBase="#{d.ExternStartContentUI}")

public class ExternStartContentUI
extends WorkpageDispatchedBean
implements Serializable
{


    /**
     *
     */
    private static final long serialVersionUID = -4515328566648399168L;
    TILEDAREABinding m_tiledAreaBinding = new TILEDAREABinding();

    ExternAntragsstellungListeUI m_antragsstellungListe = new ExternAntragsstellungListeUI();
    AuftragsboxUI m_bereitstellungsListe = new AuftragsboxUI();
    ExternEntwuerfeUI m_entwuerfe = new ExternEntwuerfeUI();

    // ------------------------------------------------------------------------
    // constructors & initialization
    // ------------------------------------------------------------------------

    public ExternStartContentUI(IWorkpageDispatcher workpageDispatcher)
    {
        super(workpageDispatcher);

        m_tiledAreaBinding.addTile("ANTRAGSLISTE", "Antragsübersicht / Folgeantrag", m_antragsstellungListe, "100%;500");
        m_tiledAreaBinding.addTile("BEREITSTELLUNGSLISTE", "Gutachterprozess - Bereitstellungen", m_bereitstellungsListe, "100%;200");
        m_tiledAreaBinding.addTile("ENTWUERFE", "Antragstellung - Entwürfe", m_entwuerfe, "100%;250");

    }

    public TILEDAREABinding getTiledAreaBinding() {
        return m_tiledAreaBinding;
    }
    // ------------------------------------------------------------------------

    public void onNewProject(javax.faces.event.ActionEvent event) {
        IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
        IWorkpageContainer wpc = getWorkpageContainer();
        WorkpageStartInfo wpsi = new WorkpageStartInfo();
        wpsi.setJspPage("/pages/extern/ExternFormularAuswahl.jsp");
        wpsi.setImage("/awesomefont(f067,#FFFFFF,15)");
        wpsi.setText("Neues Projekt / Antragskizze");
        wpsi.setSelectorTitle("Neues Projekt");
        wpsi.setOpenMultipleInstances(false);
        WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);

    }
}
