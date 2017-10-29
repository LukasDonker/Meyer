package managedbeans;

import java.io.Serializable;

import javax.faces.event.ActionEvent;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.ModalPopup;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.managedbean.DefaultDispatchedPageBean;
import org.eclnt.jsfserver.managedbean.IDispatcher;
import org.eclnt.jsfserver.pagebean.PageBean;

import model.arbeit.Termin;
import model.ort.Einsatzort;
import model.person.Ansprechpartner;
import model.person.Techniker;

@CCGenClass(expressionBase = "#{d.AntragKerndatenUI}")

public class AntragKerndatenUI extends DefaultDispatchedPageBean implements Serializable {

	/**
	 *
	 */
	private static final long serialVersionUID = 994359358170038377L;

	private boolean m_editmode;

	public boolean isEditmode() {
		return m_editmode;
	}

	public void setEditmode(boolean value) {
		m_editmode = value;
	}

	public boolean isViewMode() {
		return !m_editmode;
	}

	/* Listener to the user of the page bean. */
	public interface IListener {
	}

	// ------------------------------------------------------------------------
	// members
	// ------------------------------------------------------------------------

	private String m_servicenummer;
	private String m_tsnummer;

	private Einsatzort m_einsatzort;
	private Termin m_termin;
	private Ansprechpartner m_ansprechpartner;
	private Techniker m_techniker;

	private boolean m_notdienstpauschale;
	private boolean m_abgeschlossen;
	private boolean m_weitererEinsatz;

	private double m_teileUndPauschalSumme;

	private IListener m_listener;

	private FIXGRIDListBinding<Arbeiten> m_arbeitenList = new FIXGRIDListBinding<>(true);
	private FIXGRIDListBinding<Arbeitszeiten> m_arbeitszeitenList = new FIXGRIDListBinding<>(true);
	private FIXGRIDListBinding<TeileUndPauschalarbeiten> m_TundPa = new FIXGRIDListBinding<>(true);

	// ------------------------------------------------------------------------
	// constructors & initialization
	// ------------------------------------------------------------------------

	public AntragKerndatenUI(IDispatcher dispatcher) {
		super(dispatcher);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String getPageName() {
		return "/pages/AntragKerndaten.jsp";
	}

	@Override
	public String getRootExpressionUsedInPage() {
		return "#{d.AntragKerndatenUI}";
	}

	// ------------------------------------------------------------------------
	// public usage
	// ------------------------------------------------------------------------

	/*
	 * Initialization of the bean. Add any parameter that is required within your
	 * scenario.
	 */

	public void onOpenUnterschrift(ActionEvent ae) {
		final UnterschriftDialogUI bean = new UnterschriftDialogUI(getOwningDispatcher());
		openModalPopup(bean, "Unterschrift", 400, 300, new ModalPopup.IModalPopupListener() {
			public void reactOnPopupClosedByUser() {
				closePopup(bean);
			}
		});
	}

	public void onAddArbeiten(ActionEvent ae) {
		// add the item
		Arbeiten row = new Arbeiten();
		m_arbeitenList.getItems().add(row);
		// select the item and focus the item
		m_arbeitenList.deselectCurrentSelection();
		m_arbeitenList.selectAndFocusItem(row);
	}

	public void onAddArbeitszeiten(ActionEvent ae) {
		// add the item
		Arbeitszeiten row = new Arbeitszeiten();
		m_arbeitszeitenList.getItems().add(row);
		// select the item and focus the item
		m_arbeitszeitenList.deselectCurrentSelection();
		m_arbeitszeitenList.selectAndFocusItem(row);
	}

	public void onAddTeileUndPauschalarbeiten(ActionEvent ae) {
		// add the item
		TeileUndPauschalarbeiten row = new TeileUndPauschalarbeiten();
		m_TundPa.getItems().add(row);
		// select the item and focus the item
		m_TundPa.deselectCurrentSelection();
		m_TundPa.selectAndFocusItem(row);
	}

	public void prepare(IListener listener) {
		m_listener = listener;
	}

	public void onEdit(javax.faces.event.ActionEvent event) {
		setEditmode(true);
	}

	public void onBack(javax.faces.event.ActionEvent event) {
		setEditmode(false);
	}

	// ------------------------------------------------------------------------
	// private usage
	// ------------------------------------------------------------------------

	public String getServicenummer() {
		return m_servicenummer;
	}

	public void setServicenummer(String servicenummer) {
		this.m_servicenummer = servicenummer;
	}

	public String getTsnummer() {
		return m_tsnummer;
	}

	public void setTsnummer(String tsnummer) {
		this.m_tsnummer = tsnummer;
	}

	public Einsatzort getEinsatzort() {
		return m_einsatzort;
	}

	public void setEinsatzort(Einsatzort einsatzort) {
		this.m_einsatzort = einsatzort;
	}

	public Termin getTermin() {
		return m_termin;
	}

	public void setTermin(Termin termin) {
		this.m_termin = termin;
	}

	public Ansprechpartner getAnsprechpartner() {
		return m_ansprechpartner;
	}

	public void setAnsprechpartner(Ansprechpartner ansprechpartner) {
		this.m_ansprechpartner = ansprechpartner;
	}

	public Techniker getTechniker() {
		return m_techniker;
	}

	public void setTechniker(Techniker techniker) {
		this.m_techniker = techniker;
	}

	public boolean isNotdienstpauschale() {
		return m_notdienstpauschale;
	}

	public void setNotdienstpauschale(boolean notdienstpauschale) {
		this.m_notdienstpauschale = notdienstpauschale;
	}

	public boolean isAbgeschlossen() {
		return m_abgeschlossen;
	}

	public void setAbgeschlossen(boolean abgeschlossen) {
		this.m_abgeschlossen = abgeschlossen;
	}

	public boolean isWeitererEinsatz() {
		return m_weitererEinsatz;
	}

	public void setWeitererEinsatz(boolean weitererEinsatz) {
		this.m_weitererEinsatz = weitererEinsatz;
	}

	public double getTeileUndPauschalSumme() {
		return m_teileUndPauschalSumme;
	}

	public void setTeileUndPauschalSumme(double teileUndPauschalSumme) {
		this.m_teileUndPauschalSumme = teileUndPauschalSumme;
	}

	public FIXGRIDListBinding<Arbeiten> getArbeitenList() {
		return m_arbeitenList;
	}

	public void setArbeitenList(FIXGRIDListBinding<Arbeiten> m_arbeitenList) {
		this.m_arbeitenList = m_arbeitenList;
	}

	public FIXGRIDListBinding<Arbeitszeiten> getArbeitszeitenList() {
		return m_arbeitszeitenList;
	}

	public void setArbeitszeitenList(FIXGRIDListBinding<Arbeitszeiten> m_arbeitszeitenList) {
		this.m_arbeitszeitenList = m_arbeitszeitenList;
	}

	public FIXGRIDListBinding<TeileUndPauschalarbeiten> getTundPa() {
		return m_TundPa;
	}

	public void setTundPa(FIXGRIDListBinding<TeileUndPauschalarbeiten> m_TundPa) {
		this.m_TundPa = m_TundPa;
	}

	// ------------------------------------------------------------------------
	// inner classes
	// ------------------------------------------------------------------------
	public class Arbeiten extends FIXGRIDItem {
		/**
		 * 
		 */
		private static final long serialVersionUID = -7021782494698531531L;
		String m_taetigkeiten;
		String m_stoerung;
		String m_techniker;

		public void onRemove(ActionEvent ae) {
			m_arbeitenList.getItems().remove(this);
		}

		@Override
		public void onRowExecute() {
			m_arbeitenList.getRowDataUI().onOpenRowDataPopup(null);
		}

		public String getTaetigkeiten() {
			return m_taetigkeiten;
		}

		public void setTaetigkeiten(String m_taetigkeiten) {
			this.m_taetigkeiten = m_taetigkeiten;
		}

		public String getStoerung() {
			return m_stoerung;
		}

		public void setStoerung(String m_stoerung) {
			this.m_stoerung = m_stoerung;
		}

		public String getTechniker() {
			return m_techniker;
		}

		public void setTechniker(String m_techniker) {
			this.m_techniker = m_techniker;
		}

	}

	public class Arbeitszeiten extends FIXGRIDItem {
		/**
		 * 
		 */
		private static final long serialVersionUID = -6393279696990675620L;
		String m_techniker;
		String m_arbeitsstunden;
		String m_von;
		String m_bis;
		String m_pauschalen;
		
		public void onRemove(ActionEvent ae) {
			m_arbeitszeitenList.getItems().remove(this);
		}

		@Override
		public void onRowExecute() {
			m_arbeitszeitenList.getRowDataUI().onOpenRowDataPopup(null);
		}

		public String getTechniker() {
			return m_techniker;
		}

		public void setTechniker(String m_techniker) {
			this.m_techniker = m_techniker;
		}

		public String getArbeitsstunden() {
			return m_arbeitsstunden;
		}

		public void setArbeitsstunden(String m_arbeitsstunden) {
			this.m_arbeitsstunden = m_arbeitsstunden;
		}

		public String getVon() {
			return m_von;
		}

		public void setVon(String m_von) {
			this.m_von = m_von;
		}

		public String getBis() {
			return m_bis;
		}

		public void setBis(String m_bis) {
			this.m_bis = m_bis;
		}

		public String getPauschalen() {
			return m_pauschalen;
		}

		public void setPauschalen(String m_pauschalen) {
			this.m_pauschalen = m_pauschalen;
		}

	}

	public class TeileUndPauschalarbeiten extends FIXGRIDItem {
		/**
		 * 
		 */
		private static final long serialVersionUID = 8404579904258741487L;
		int m_stueckzahl;
		String m_bezeichnung;
		Double m_preis;
		boolean m_b;
		boolean m_l;
		
		public void onRemove(ActionEvent ae) {
			m_TundPa.getItems().remove(this);
		}

		@Override
		public void onRowExecute() {
			m_TundPa.getRowDataUI().onOpenRowDataPopup(null);
		}

		public int getStueckzahl() {
			return m_stueckzahl;
		}

		public void setStueckzahl(int m_stueckzahl) {
			this.m_stueckzahl = m_stueckzahl;
		}

		public String getBezeichnung() {
			return m_bezeichnung;
		}

		public void setBezeichnung(String m_bezeichnung) {
			this.m_bezeichnung = m_bezeichnung;
		}

		public Double getPreis() {
			return m_preis;
		}

		public void setPreis(Double m_preis) {
			this.m_preis = m_preis;
		}

		public boolean isB() {
			return m_b;
		}

		public void setB(boolean m_b) {
			this.m_b = m_b;
		}

		public boolean isL() {
			return m_l;
		}

		public void setL(boolean m_l) {
			this.m_l = m_l;
		}

	}
}
