package managedbeans;

import java.io.Serializable;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.ModalPopup;
import org.eclnt.jsfserver.elements.impl.TILEDAREABinding;
import org.eclnt.util.file.ClassloaderReader;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDispatchedPageBean;

@CCGenClass(expressionBase = "#{d.StartContentUI}")
public class StartContentUI extends WorkpageDispatchedPageBean implements Serializable {

	/**
	 *
	 */
	private static final long serialVersionUID = -4515328566648399168L;
	TILEDAREABinding m_tiledAreaBinding = new TILEDAREABinding();
	StartDiagrammUI m_diagrammPIE;
	StartDiagrammUI m_diagrammLINE;
	StartDiagrammUI m_diagrammBAR;
	AuftragsboxUI m_auftragskorb = new AuftragsboxUI();

	StartFavoritenUI m_favoriten = new StartFavoritenUI(getOwningDispatcher());
	StartHistorieUI m_historie = new StartHistorieUI(getOwningDispatcher());
	// ------------------------------------------------------------------------
	// constructors & initialization
	// ------------------------------------------------------------------------

	public StartContentUI(IWorkpageDispatcher workpageDispatcher) {
		super(workpageDispatcher);
		m_diagrammPIE = new StartDiagrammUI(new ClassloaderReader(getClass().getClassLoader())
				.readUTF8File("resources/ExamplePieChart.json", true));
		m_diagrammLINE = new StartDiagrammUI(new ClassloaderReader(getClass().getClassLoader())
				.readUTF8File("resources/ExampleLineChart.json", true));
		m_diagrammBAR = new StartDiagrammUI(new ClassloaderReader(getClass().getClassLoader())
				.readUTF8File("resources/ExampleBarChart.json", true));

		m_tiledAreaBinding.addTile("PIECHART", "Diagramm Beispiel 1", m_diagrammPIE, "100%;500");
		m_tiledAreaBinding.addTile("LINECHART", "Diagramm Beispiel 2", m_diagrammLINE, "100%;500");
		m_tiledAreaBinding.addTile("BARCHART", "Diagramm Beispiel 3", m_diagrammBAR, "100%;500");
		m_tiledAreaBinding.addTile("INBOX", "Auftragskorb", m_auftragskorb, "100%;500");
		// m_tiledAreaBinding.addTile("FAVORITES", "Favoriten", m_favoriten,
		// "100%;300");
		// m_tiledAreaBinding.addTile("HISTORY", "Historie", m_historie, "100%;300");

	}

	public TILEDAREABinding getTiledAreaBinding() {
		return m_tiledAreaBinding;
	}

	ModalPopup popup;

	@Override
	public String getPageName() {
		return "/pages/start/StartContent.jsp";
	}

	@Override
	public String getRootExpressionUsedInPage() {
		return "#{d.StartContentUI}";
	}

	public void onPopupClosed(String title) {
		popup.close();
		if (title == null) {
			// do Nothing
		} else if (title.equals("Ant. Sachb. In Schlussz.")) {
			StartListUI listUI = new StartListUI();
			m_tiledAreaBinding.addTile(title.toUpperCase(), title, listUI, "100%;500");
		} else {
			m_diagrammPIE = new StartDiagrammUI(new ClassloaderReader(getClass().getClassLoader())
					.readUTF8File("resources/ExamplePieChart.json", true));
			m_tiledAreaBinding.addTile(title.toUpperCase(), title, m_diagrammPIE, "100%;500");
		}

	}

}
