package managedbeans;

import java.io.Serializable;
import java.util.List;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeBinding;
import org.eclnt.jsfserver.elements.impl.FIXGRIDTreeItem;
import org.eclnt.jsfserver.pagebean.PageBean;

import ui.ejb.BenutzerManager;
import ui.ejb.BestellungManager;
import ui.ejb.EinsatzberichtManager;
import ui.ejb.JNDIConnect;
import ui.ejb.KundenManager;
import ui.model.Einsatzbericht;
import ui.model.Mitarbeiter;

@CCGenClass(expressionBase = "#{d.AuftragsboxUI}")
public class AuftragsboxUI extends PageBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6158746680567204655L;
	private final int DESKTOP_TABLESIZE = 30;

	private KundenManager m_kundenManager = JNDIConnect.getInstance().getKundenManager();
	
	private EinsatzberichtManager m_berichtManager = JNDIConnect.getInstance().getEinsatzberichtManager();

	private BestellungManager m_bestellungManager = JNDIConnect.getInstance().getBestellungManager();

	private BenutzerManager m_benutzerManager = JNDIConnect.getInstance().getBenutzerManager();

	int m_tableSize;

	public int getTableSize() {
		return m_tableSize;
	}

	public void setTableSize(int value) {
		this.m_tableSize = value;
	}

	FIXGRIDTreeBinding<MitarbeiterreeNode> m_bereitstellungstree = new FIXGRIDTreeBinding<MitarbeiterreeNode>();

	public FIXGRIDTreeBinding<MitarbeiterreeNode> getBereitstellungstree() {
		return m_bereitstellungstree;
	}

	public void setBereitstellungstree(FIXGRIDTreeBinding<MitarbeiterreeNode> value) {
		this.m_bereitstellungstree = value;
	}

	// ------------------------------------------------------------------------
	// inner classes
	// ------------------------------------------------------------------------

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

	public AuftragsboxUI() {
		m_tableSize = DESKTOP_TABLESIZE;

		MitarbeiterreeNode bereitstellung;
		String imageBereitstellung = "/awesomefont(f07c,#000000,15)";
		MitarbeiterreeNode dokument;
		String imagelöscher = "/awesomefont(f134,#000000,15)";
		String imageWartung = "/awesomefont(f0ad,#000000,15)";
		String imageInstallation = "/awesomefont(f07a,#000000,15)";

		for (Mitarbeiter value : m_benutzerManager.findAllMitarbeiter()) {
			if (value.isDisponent()) {
				bereitstellung = new MitarbeiterreeNode(m_bereitstellungstree.getRootNode(), value.getName(),
						value.getVorname(), "", false, false, MitarbeiterreeNode.STATUS_CLOSED,
						imageBereitstellung, false, "");

				List<Einsatzbericht> berichte = m_berichtManager.findEinsatzberichtByDisponent(value);
				for(Einsatzbericht bericht : berichte) {
					dokument = new MitarbeiterreeNode(bereitstellung, bericht.getServicenummer(),m_kundenManager.findKunde(bericht.getKunde()).getName(), bericht.getCreatedate()+"", true, true,
							MitarbeiterreeNode.STATUS_ENDNODE, imageInstallation, true, m_benutzerManager.findMitarbeiter(bericht.getListTechniker().get(0)).getName());
				}

			}
		}

	}

	@Override
	public String getPageName() {
		return "/pages/Auftragsbox.jsp";
	}

	@Override
	public String getRootExpressionUsedInPage() {
		return "#{d.AuftragsboxUI}";
	}

	// ------------------------------------------------------------------------
	// public usage
	// ------------------------------------------------------------------------

	/*
	 * Initialization of the bean. Add any parameter that is required within your
	 * scenario.
	 */
	public void prepare(IListener listener) {
		m_listener = listener;
	}

	// ------------------------------------------------------------------------
	// private usage
	// ------------------------------------------------------------------------
	public class MitarbeiterreeNode extends FIXGRIDTreeItem implements java.io.Serializable {
		String m_mitarbeiter;

		public String getMitarbeiter() {
			return m_mitarbeiter;
		}

		public void setMitarbeiter(String value) {
			this.m_mitarbeiter = value;
		}

		String m_imageerledigt;

		public String getImageerledigt() {
			return m_imageerledigt;
		}

		public void setImageerledigt(String value) {
			this.m_imageerledigt = value;
		}

		public MitarbeiterreeNode(FIXGRIDTreeItem parentNode, String gz, String text, String date, boolean open,
				boolean download, int status, String image, boolean erledigt, String mitarbeiter) {
			super(parentNode);
			m_kurztext = text;
			m_text = gz;
			m_date = date;
			m_open = open;
			m_download = download;
			m_mitarbeiter = mitarbeiter;
			this.setStatus(status);
			this.setImage(image);
			if (erledigt) {
				m_imageerledigt = "/awesomefont(f05a,#5bc0de,15)";
			} else {
				m_imageerledigt = "/awesomefont(f00c,#298A08,15)";
			}
		}

		String m_kurztext;

		public String getKurztext() {
			return m_kurztext;
		}

		public void setKurztext(String value) {
			this.m_kurztext = value;
		}

		String m_text;

		@Override
		public String getText() {
			return m_text;
		}

		@Override
		public void setText(String value) {
			this.m_text = value;
		}

		String m_date;

		public String getDate() {
			return m_date;
		}

		public void setDate(String value) {
			this.m_date = value;
		}

		boolean m_open;

		public boolean getOpen() {
			return m_open;
		}

		public void setOpen(boolean value) {
			this.m_open = value;
		}

		boolean m_download;

		public boolean getDownload() {
			return m_download;
		}

		public void setDownload(boolean value) {
			this.m_download = value;
		}

	}
}
