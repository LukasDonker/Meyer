package managedbeans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.faces.event.ActionEvent;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.defaultscreens.ModalPopup;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.elements.util.ValidValuesBinding;
import org.eclnt.jsfserver.managedbean.DefaultDispatchedPageBean;
import org.eclnt.jsfserver.managedbean.IDispatcher;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageByPageBean;

import ui.common.MySecurityManager;
import ui.ejb.BenutzerManager;
import ui.ejb.EinsatzberichtManager;
import ui.ejb.JNDIConnect;
import ui.ejb.KundenManager;
import ui.model.Ansprechpartner;
import ui.model.Arbeiten;
import ui.model.AuszufuehrendeArbeiten;
import ui.model.Einsatzbericht;
import ui.model.Mitarbeiter;
import ui.model.TeileUndPauschalarbeiten;
import ui.model.ZusatzEinsatz;

@CCGenClass(expressionBase = "#{d.AntragKerndatenUI}")
public class AntragKerndatenUI extends DefaultDispatchedPageBean implements Serializable {

	/**
	 *
	 */
	private static final long serialVersionUID = 994359358170038377L;

	/* Listener to the user of the page bean. */
	public interface IListener {
	}

	// ------------------------------------------------------------------------
	// members
	// ------------------------------------------------------------------------
	BenutzerManager m_benutzermanager = JNDIConnect.getInstance().getBenutzerManager();
	
	EinsatzberichtManager m_berichtmanager = JNDIConnect.getInstance().getEinsatzberichtManager();
	
	KundenManager m_kundenManager = JNDIConnect.getInstance().getKundenManager();
	MySecurityManager securityManager = MySecurityManager.getInstance();
	
	private Einsatzbericht reference;
	
	private String m_servicenummer;
	private String m_tsnummer;
	private String m_tanummer;
	private String m_kundennummer;
	private String m_ansprechpartner;
	private String m_techniker;
	private String m_disponent;

	private String m_einsatzort;
	private String m_ansprechpartnerDaten;
	
	private String m_unterschriftKunde;
	private String m_unterschriftTechniker;
	private String m_unterschriftNameKunde;
	private String m_unterschriftNameTechniker;

	private Date m_termin;

	private double m_ueberstunden;

	private Ansprechpartner m_ansprechpartnerObj;
	private Mitarbeiter m_disponentObj;
	
	private boolean m_notdienstpauschale = false;
	private boolean m_weitererEinsatz = false;
	private boolean m_dinueberprueft = false;
	private boolean m_garantieAntrag = false;

	private boolean m_editmode = false;
	private boolean m_newEinsatzbericht = false;

	private IListener m_listener;

	Map<String, Mitarbeiter> m_listTechniker = new HashMap<String, Mitarbeiter>();
	ValidValuesBinding cmb_techniker = new ValidValuesBinding();

	private FIXGRIDListBinding<AuszufuehrendeArbeitenUI> m_auszufuehrendeArbeitenList = new FIXGRIDListBinding<>(true);
	private FIXGRIDListBinding<ArbeitenUI> m_arbeitenList = new FIXGRIDListBinding<>(true);
	private FIXGRIDListBinding<TeileUndPauschalarbeitenUI> m_TundPaList = new FIXGRIDListBinding<>(true);

	// ------------------------------------------------------------------------
	// constructors & initialization
	// ------------------------------------------------------------------------

	public AntragKerndatenUI(IDispatcher dispatcher) {
		super(dispatcher);
		init();
	}

	public void init() {
		m_newEinsatzbericht = true;
		Einsatzbericht bericht = new Einsatzbericht();
		bericht.setDisponent(securityManager.getAngemeldeterBenutzer().getId());
		reference = m_berichtmanager.createEinsatzbericht(bericht);
		m_servicenummer = reference.getId()+"";
		m_tsnummer = reference.getId()+"";
		m_tanummer = reference.getId()+"";
	}

	public void init(Einsatzbericht einsatzbericht) {
		m_newEinsatzbericht = false;

		reference = einsatzbericht;
		
		m_ansprechpartnerObj = m_kundenManager.findAnsprechpartner(einsatzbericht.getAnsprechpartner());
		m_disponentObj = m_benutzermanager.findMitarbeiter(einsatzbericht.getDisponent());
		
		m_servicenummer = einsatzbericht.getServicenummer();
		m_tsnummer = einsatzbericht.getTsnummer();
		m_tanummer = einsatzbericht.getTanummer();
		m_kundennummer = einsatzbericht.getKunde() + "";
		m_ansprechpartner = m_ansprechpartnerObj.getName();
		m_disponent = m_disponentObj.getName();

		m_techniker = null;
		int i = 0;
		for (Long technikerId : einsatzbericht.getListTechniker()) {
			Mitarbeiter techniker = m_benutzermanager.findMitarbeiter(technikerId);
			if (i == 0) {
				m_techniker = techniker.getName();
			} else {
				m_techniker = ", " + techniker.getName();
			}
			i++;
		}
		
		m_unterschriftKunde = einsatzbericht.getUnterschriftKunde();
		m_unterschriftTechniker = einsatzbericht.getUnterschriftTechniker();
		m_unterschriftNameKunde = einsatzbericht.getUnterschriftNameKunde();
		m_unterschriftNameTechniker = einsatzbericht.getUnterschriftNameTechniker();


		m_einsatzort = ermittleEinsatzort();
		m_ansprechpartnerDaten = m_ansprechpartnerObj.getAnsprechpartnerDaten();

		m_termin = einsatzbericht.getTermin();

		m_ueberstunden = einsatzbericht.getUeberstunden();

		m_weitererEinsatz = einsatzbericht.getZusatzEinsatz() != null;

		m_notdienstpauschale = einsatzbericht.isNotdienstpauschale();
		m_dinueberprueft = einsatzbericht.isDinueberprueft();
		m_garantieAntrag = einsatzbericht.isGarantieAntrag();

		for (Long value : einsatzbericht.getAuszufuehrendeArbeitenList()) {
			AuszufuehrendeArbeiten arbeit = m_berichtmanager.findAuszufuehrendeArbeiten(value);
			m_auszufuehrendeArbeitenList.getItems().add(new AuszufuehrendeArbeitenUI(arbeit));
		}

		for (Long value : einsatzbericht.getArbeitenList()) {
			Arbeiten arbeit = m_berichtmanager.findArbeiten(value);
			m_arbeitenList.getItems().add(new ArbeitenUI(arbeit));
		}

		for (Long value : einsatzbericht.getTeileUndPauschalarbeitenList()) {
			TeileUndPauschalarbeiten arbeit = m_berichtmanager.findTeileUndPauschalarbeiten(value);
			m_TundPaList.getItems().add(new TeileUndPauschalarbeitenUI(arbeit));
		}

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
	
	private String ermittleEinsatzort() {
		return m_kundenManager.findKunde(m_ansprechpartnerObj.getKunde()) + "\n" + m_kundenManager.findAnschrift(m_ansprechpartnerObj.getAnschrift()).toString();
	}
	
	public void onSave(ActionEvent ae) {
		aktualisiereReference();
		m_berichtmanager.createEinsatzbericht(reference);
	}

	private void aktualisiereReference() {
		Einsatzbericht einsatzbericht;
		if(reference == null && m_newEinsatzbericht) {
			einsatzbericht = new Einsatzbericht();
		} else {
			einsatzbericht = reference;
		}
		
		m_ansprechpartnerObj = m_kundenManager.findAnsprechpartner(einsatzbericht.getAnsprechpartner());
		
		einsatzbericht.setServicenummer(m_servicenummer);
		einsatzbericht.setTsnummer(m_tsnummer);
		einsatzbericht.setTanummer(m_tanummer);
		einsatzbericht.setDisponent(m_benutzermanager.findMitarbeiterByName(m_disponent).getId()); 
		einsatzbericht.setKunde(m_kundenManager.findKunde(Long.parseLong(m_kundennummer)).getId());
		einsatzbericht.setAnsprechpartner(m_kundenManager.findAnsprechpartnerByName(m_ansprechpartner).getId());
		m_einsatzort = ermittleEinsatzort();
		m_ansprechpartnerDaten = m_ansprechpartnerObj.getAnsprechpartnerDaten();
		
		einsatzbericht.getListTechniker().clear();
		for(Mitarbeiter value : m_listTechniker.values()) {
			einsatzbericht.getListTechniker().add(value.getId());
		}

		
		einsatzbericht.setUnterschriftKunde(m_unterschriftKunde);
		einsatzbericht.setUnterschriftTechniker(m_unterschriftTechniker);
		einsatzbericht.setUnterschriftNameKunde(m_unterschriftNameKunde);
		einsatzbericht.setUnterschriftNameTechniker(m_unterschriftNameTechniker);


		einsatzbericht.setTermin(m_termin);

		einsatzbericht.setUeberstunden(m_ueberstunden);

//		m_weitererEinsatz = einsatzbericht.getZusatzEinsatz() != null; Verkn�pfung

		einsatzbericht.setNotdienstpauschale(m_notdienstpauschale);
		einsatzbericht.setDinueberprueft(m_dinueberprueft);
		einsatzbericht.setGarantieAntrag(m_garantieAntrag);
		
		List<Long> auszufuehrendeArbeitenValueList = new ArrayList<Long>();
		for (AuszufuehrendeArbeitenUI value : m_auszufuehrendeArbeitenList.getItems()) {
			auszufuehrendeArbeitenValueList.add(value.getValue().getId());
		}
		einsatzbericht.setAuszufuehrendeArbeitenList(auszufuehrendeArbeitenValueList);
		
		List<Long> arbeitenValueList = new ArrayList<Long>();
		for (ArbeitenUI value : m_arbeitenList.getItems()) {
			arbeitenValueList.add(value.getValue().getId());
		}
		einsatzbericht.setArbeitenList(arbeitenValueList);

		
		List<Long> teileUndPauschalarbeitenValueList = new ArrayList<Long>();
		for (TeileUndPauschalarbeitenUI value : m_TundPaList.getItems()) {
			teileUndPauschalarbeitenValueList.add(value.getValue().getId());
		}
		einsatzbericht.setTeileUndPauschalarbeitenList(teileUndPauschalarbeitenValueList);		

		reference = einsatzbericht;
	}

	private ZusatzEinsatz createZusatzEinsatz() {
		aktualisiereReference();
		ZusatzEinsatz zusatzEinsatz = new ZusatzEinsatz();
		zusatzEinsatz.setDatum(new Date());
		zusatzEinsatz.setKunde(reference.getKunde());
		zusatzEinsatz.setDisponent(reference.getDisponent());
		zusatzEinsatz.setTanummer(reference.getTanummer());
		zusatzEinsatz.setListArbeiten(reference.getArbeitenList());
		zusatzEinsatz.setTechniker(reference.getListTechniker().get(0));
		
		return zusatzEinsatz;
	}
	
	public void aktualisiereTechniker() {
		cmb_techniker.clear();
		String[] values = m_techniker.split(", ");
		for (String value : values) {

			Mitarbeiter techniker = m_benutzermanager.findMitarbeiterByName(value);

			m_listTechniker.put(value.toLowerCase(), techniker);
			cmb_techniker.addValidValue(value.toLowerCase(), techniker.getName());
		}

		m_techniker = null;
		int i = 0;
		for (Mitarbeiter techniker : m_listTechniker.values()) {
			if (i == 0) {
				m_techniker = techniker.getName();
			} else {
				m_techniker = ", " + techniker.getName();
			}
			i++;
		}
	}

	public void onOpenTechnikerUnterschrift(ActionEvent ae) {
		final UnterschriftDialogUI bean = new UnterschriftDialogUI(getOwningDispatcher());
		bean.setKlartext(m_techniker);
		openModalPopup(bean, "Unterschrift", 400, 300, new ModalPopup.IModalPopupListener() {
			private static final long serialVersionUID = 6078992731974425347L;

			public void reactOnPopupClosedByUser() {
				m_unterschriftTechniker = bean.getPixelValues();
				m_unterschriftNameTechniker = bean.getKlartext();
				closePopup(bean);
			}
		});
	}
	
	public void onOpenZusatzEinsatz(ActionEvent ae) {
		ZusatzEinsatz zeinsatz = createZusatzEinsatz();
		zeinsatz = m_berichtmanager.createZusatzEinsatz(zeinsatz);
		reference.setZusatzEinsatz(zeinsatz.getId());
		
		 // create page bean
		ZusatzEinsatzUI zusatzEinsatz = new ZusatzEinsatzUI((IWorkpageDispatcher) getOwningDispatcher());
		zusatzEinsatz.init(m_berichtmanager.findZusatzEinsatz(reference.getZusatzEinsatz()));
        // open new workpage
        WorkpageByPageBean wp = new WorkpageByPageBean((IWorkpageDispatcher) getOwningDispatcher(),zusatzEinsatz,"ZusatzEinsatz " + m_tanummer,"ZusatzEinsatz, Einsatzbericht" + m_tanummer,null,true);
        ((IWorkpageDispatcher) getOwningDispatcher()).getWorkpageContainer().addWorkpage(wp);
	}
	
	public void onOpenKundeUnterschrift(ActionEvent ae) {
		final UnterschriftDialogUI bean = new UnterschriftDialogUI(getOwningDispatcher());
		openModalPopup(bean, "Unterschrift", 400, 300, new ModalPopup.IModalPopupListener() {
			private static final long serialVersionUID = -1907178006284852743L;

			public void reactOnPopupClosedByUser() {
				m_unterschriftKunde = bean.getPixelValues();
				m_unterschriftNameKunde = bean.getKlartext();
				closePopup(bean);
			}
		});
	}

	public void onAddArbeiten(ActionEvent ae) {
		// add the item
		AuszufuehrendeArbeitenUI row = new AuszufuehrendeArbeitenUI();
		m_auszufuehrendeArbeitenList.getItems().add(row);
		// select the item and focus the item
		m_auszufuehrendeArbeitenList.deselectCurrentSelection();
		m_auszufuehrendeArbeitenList.selectAndFocusItem(row);
	}

	public void onAddArbeitszeiten(ActionEvent ae) {
		// add the item
		ArbeitenUI row = new ArbeitenUI();
		m_arbeitenList.getItems().add(row);
		// select the item and focus the item
		m_arbeitenList.deselectCurrentSelection();
		m_arbeitenList.selectAndFocusItem(row);
	}

	public void onAddTeileUndPauschalarbeiten(ActionEvent ae) {
		// add the item
		TeileUndPauschalarbeitenUI row = new TeileUndPauschalarbeitenUI();
		m_TundPaList.getItems().add(row);
		// select the item and focus the item
		m_TundPaList.deselectCurrentSelection();
		m_TundPaList.selectAndFocusItem(row);
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

	public boolean isNewEinsatzbericht() {
		return m_newEinsatzbericht;
	}

	public void setNewEinsatzbericht(boolean value) {
		this.m_newEinsatzbericht = value;
	}

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

	public Date getTermin() {
		return m_termin;
	}

	public void setTermin(Date termin) {
		this.m_termin = termin;
	}

	public String getAnsprechpartner() {
		return m_ansprechpartner;
	}

	public void setAnsprechpartner(String value) {
		this.m_ansprechpartner = value;
	}

	public String getTechniker() {
		return m_techniker;
	}

	public void setTechniker(String techniker) {
		this.m_techniker = techniker;
		aktualisiereTechniker();
	}

	public boolean isNotdienstpauschale() {
		return m_notdienstpauschale;
	}

	public void setNotdienstpauschale(boolean notdienstpauschale) {
		this.m_notdienstpauschale = notdienstpauschale;
	}

	public boolean isDinUeberprueft() {
		return m_dinueberprueft;
	}

	public void setDinUeberprueft(boolean value) {
		this.m_dinueberprueft = value;
	}

	public boolean isWeitererEinsatz() {
		return m_weitererEinsatz;
	}

	public void setWeitererEinsatz(boolean weitererEinsatz) {
		this.m_weitererEinsatz = weitererEinsatz;
		if((reference.getZusatzEinsatz() == null || reference.getZusatzEinsatz()<=0L) && weitererEinsatz) {
			createZusatzEinsatz();
		}
		
	}

	public boolean isGarantieAntrag() {
		return m_garantieAntrag;
	}

	public void setGarantieAntrag(boolean value) {
		this.m_garantieAntrag = value;
	}

	public void setUeberstunden(double value) {
		this.m_ueberstunden = value;
	}

	public double getUeberstunden() {
		return m_ueberstunden;
	}

	public boolean isEditmode() {
		return m_editmode;
	}

	public void setEditmode(boolean value) {
		m_editmode = value;
	}

	public boolean isViewMode() {
		return !m_editmode;
	}

	public String getTanummer() {
		return m_tanummer;
	}

	public void setTanummer(String m_tanummer) {
		this.m_tanummer = m_tanummer;
	}

	public String getKundennummer() {
		return m_kundennummer;
	}

	public void setKundennummer(String m_kundennummer) {
		this.m_kundennummer = m_kundennummer;
	}

	public String getEinsatzort() {
		return m_einsatzort;
	}

	public String getAnsprechpartnerDaten() {
		return m_ansprechpartnerDaten;
	}

	public ValidValuesBinding getCmb_techniker() {
		return cmb_techniker;
	}

	public void setCmb_techniker(ValidValuesBinding cmb_techniker) {
		this.cmb_techniker = cmb_techniker;
	}
	
	public FIXGRIDListBinding<AuszufuehrendeArbeitenUI> getAuszufuehrendeArbeitenList() {
		return m_auszufuehrendeArbeitenList;
	}

	public void setAuszufuehrendeArbeitenList(FIXGRIDListBinding<AuszufuehrendeArbeitenUI> auszufuehrendeArbeitenList) {
		m_auszufuehrendeArbeitenList = auszufuehrendeArbeitenList;
	}

	public FIXGRIDListBinding<ArbeitenUI> getArbeitenList() {
		return m_arbeitenList;
	}

	public void setArbeitenList(FIXGRIDListBinding<ArbeitenUI> arbeitenList) {
		m_arbeitenList = arbeitenList;
	}

	public FIXGRIDListBinding<TeileUndPauschalarbeitenUI> getTundPaList() {
		return m_TundPaList;
	}

	public void setTundPaList(FIXGRIDListBinding<TeileUndPauschalarbeitenUI> tundPaList) {
		m_TundPaList = tundPaList;
	}

	public String getUnterschriftKunde() {
		return m_unterschriftKunde;
	}

	public void setUnterschriftKunde(String unterschriftKunde) {
		m_unterschriftKunde = unterschriftKunde;
	}

	public String getUnterschriftTechniker() {
		return m_unterschriftTechniker;
	}

	public void setUnterschriftTechniker(String unterschriftTechniker) {
		m_unterschriftTechniker = unterschriftTechniker;
	}

	public String getUnterschriftNameKunde() {
		return m_unterschriftNameKunde;
	}

	public void setUnterschriftNameKunde(String unterschriftNameKunde) {
		m_unterschriftNameKunde = unterschriftNameKunde;
	}

	public String getUnterschriftNameTechniker() {
		return m_unterschriftNameTechniker;
	}

	public void setUnterschriftNameTechniker(String unterschriftNameTechniker) {
		m_unterschriftNameTechniker = unterschriftNameTechniker;
	}



	public String getDisponent() {
		return m_disponent;
	}

	public void setDisponent(String m_disponent) {
		this.m_disponent = m_disponent;
	}



	// ------------------------------------------------------------------------
	// inner classes
	// ------------------------------------------------------------------------
	public class AuszufuehrendeArbeitenUI extends FIXGRIDItem {
		/**
		 * 
		 */
		private static final long serialVersionUID = -7021782494698531531L;
		AuszufuehrendeArbeiten myValues = null;

		public AuszufuehrendeArbeitenUI() {
			myValues = new AuszufuehrendeArbeiten();
		}

		public AuszufuehrendeArbeitenUI(AuszufuehrendeArbeiten auszufuehrendeArbeiten) {
			myValues = auszufuehrendeArbeiten;
		}

		public void onRemove(ActionEvent ae) {
			m_auszufuehrendeArbeitenList.getItems().remove(this);
		}

		@Override
		public void onRowExecute() {
			m_auszufuehrendeArbeitenList.getRowDataUI().onOpenRowDataPopup(null);
		}

		public String getTaetigkeiten() {
			return myValues.getTaetigkeiten();
		}

		public void setTaetigkeiten(String taetigkeiten) {
			myValues.setTaetigkeiten(taetigkeiten);
		}

		public String getGeraetenummer() {
			return myValues.getGeraetenummer();
		}

		public void setGeraetenummer(String geraetenummer) {
			myValues.setGeraetenummer(geraetenummer);
		}

		public String getTechniker() {
			return m_benutzermanager.findMitarbeiter(myValues.getTechniker()).getName();
		}

		public void setTechniker(String techniker) {
			myValues.setTechniker(m_listTechniker.get(techniker).getId());
		}
		
		public AuszufuehrendeArbeiten getValue() {
			return myValues;
		}

	}

	public class ArbeitenUI extends FIXGRIDItem {
		/**
		 * 
		 */
		private static final long serialVersionUID = -6393279696990675620L;
		Arbeiten myValues = null;

		public ArbeitenUI() {
			myValues = new Arbeiten();
		}

		public ArbeitenUI(Arbeiten arbeiten) {
			myValues = arbeiten;
		}

		public void onRemove(ActionEvent ae) {
			m_arbeitenList.getItems().remove(this);
		}

		@Override
		public void onRowExecute() {
			m_arbeitenList.getRowDataUI().onOpenRowDataPopup(null);
		}

		public String getTechniker() {
			return m_benutzermanager.findMitarbeiter(myValues.getTechniker()).getName();
		}

		public void setTechniker(String techniker) {
			myValues.setTechniker(m_listTechniker.get(techniker).getId());
		}

		public String getArbeitsstunden() {
			return myValues.getArbeitsstunden();
		}

		public void setArbeitsstunden(String arbeitsstunden) {
			myValues.setArbeitsstunden(arbeitsstunden);
		}

		public String getGeraeteNummer() {
			return myValues.getGeraeteNummer();
		}

		public void setGeraeteNummer(String geraeteNummer) {
			myValues.setGeraeteNummer(geraeteNummer);
		}

		public String getArbeitsbericht() {
			return myValues.getArbeitsbericht();
		}

		public void setArbeitsbericht(String arbeitsbericht) {
			myValues.setArbeitsbericht(arbeitsbericht);
		}
		
		public Arbeiten getValue() {
			return myValues;
		}

	}

	public class TeileUndPauschalarbeitenUI extends FIXGRIDItem {
		/**
		 * 
		 */
		private static final long serialVersionUID = 8404579904258741487L;
		TeileUndPauschalarbeiten myValues = null;

		public TeileUndPauschalarbeitenUI() {
			myValues = new TeileUndPauschalarbeiten();
		}

		public TeileUndPauschalarbeitenUI(TeileUndPauschalarbeiten myValues) {
			this.myValues = myValues;
		}

		public void onRemove(ActionEvent ae) {
			m_TundPaList.getItems().remove(this);
		}

		@Override
		public void onRowExecute() {
			m_TundPaList.getRowDataUI().onOpenRowDataPopup(null);
		}

		public int getStueckzahl() {
			return myValues.getStueckzahl();
		}

		public void setStueckzahl(int stueckzahl) {
			myValues.setStueckzahl(stueckzahl);
		}

		public String getBezeichnung() {
			return myValues.getBezeichnung();
		}

		public boolean isB() {
			return myValues.isB();
		}

		public void setB(boolean b) {
			myValues.setB(b);
		}

		public boolean isL() {
			return myValues.isL();
		}

		public void setL(boolean l) {
			myValues.setL(l);
		}

		public TeileUndPauschalarbeiten getValue() {
			return myValues;
		}
	}
}
