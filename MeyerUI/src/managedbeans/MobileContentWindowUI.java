package managedbeans;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.workplace.IWorkpageContainer;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageStartInfo;
import org.eclnt.workplace.WorkpageStarterFactory;

@CCGenClass(expressionBase = "#{d.MobileContentWindowUI}")
public class MobileContentWindowUI extends ContentWindowUI {
	/**
	 *
	 */
	private static final long serialVersionUID = -7623738083764314454L;
	
	public MobileContentWindowUI(IWorkpageDispatcher dispatcher) {
		super(dispatcher);
		render();

	}

	public void render() {
//		IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
//		IWorkpageContainer wpc = wpd.getWorkpageContainer();
//
//		wpc.closeAllWorkpages();
//
//		WorkpageStartInfo wpsi = new WorkpageStartInfo();
//		wpsi.setJspPage("/pages/Auftragsbox.jsp");
//		wpsi.setText("Auftragskorb");
//		// wpsi.setImage("/awesomefont(f015,#FFFFFF,15)");
//		wpsi.setOpenMultipleInstances(false);
//		wpsi.setCloseSupported(false);
//		WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);
	}

	public String getPageName() {
		return "/MobileContentWindow.jsp";
	}

	public String getRootExpressionUsedInPage() {
		return "#{d.MobileContentWindowUI}";
	}

	public void onNeuServiceBericht(javax.faces.event.ActionEvent event) {
		IWorkpageDispatcher wpd = (IWorkpageDispatcher) getOwningDispatcher().getTopOwner();
		IWorkpageContainer wpc = getWorkpageContainer();
		WorkpageStartInfo wpsi = new WorkpageStartInfo();
		wpsi.setJspPage("/pages/AntragKerndaten.jsp");
		wpsi.setImage("/awesomefont(f016,#FFFFFF,12)");
		wpsi.setText("Neuer Servicebericht, Auftrag 1");
		wpsi.setSelectorTitle("Neuer Servicebericht");
		// wpsi.setWindowTitle("GZ 1234: Schwarzbrot - Verbreitung und
		// Vermarktung");
		wpsi.setOpenMultipleInstances(false);
		WorkpageStarterFactory.getWorkpageStarter().startWorkpage(wpd, wpc, wpsi);
	}

	// ------------------------------------------------------------------------
	// private usage
	// ------------------------------------------------------------------------

	public void onToggle(javax.faces.event.ActionEvent event) {
		render();
	}

}
