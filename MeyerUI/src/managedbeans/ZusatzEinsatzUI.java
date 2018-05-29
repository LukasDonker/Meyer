package managedbeans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.faces.event.ActionEvent;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.elements.events.BaseActionEventUpload;
import org.eclnt.jsfserver.elements.impl.FIXGRIDItem;
import org.eclnt.jsfserver.elements.impl.FIXGRIDListBinding;
import org.eclnt.jsfserver.elements.impl.IMAGESHAKERBinding;
import org.eclnt.jsfserver.util.AutoCompleteMgr;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDefaultLifecycleListener;
import org.eclnt.workplace.WorkpageDispatchedPageBean;

import model.common.AutoCompletionProvider;
import model.common.ConstantListHolder;
import model.common.HerstellerAutoFillCompleteProvider;
import model.common.TypModellAutoFillCompleteProvider;
import ui.model.Angebot;
import ui.model.AngebotPer;
import ui.model.Arbeiten;
import ui.model.Hersteller;
import ui.model.KundenGeraet;
import ui.model.MaterialBestellung;
import ui.model.MyFile;
import ui.model.Teil;
import ui.model.TypModell;
import ui.model.Volt;
import ui.model.ZusatzEinsatz;

@CCGenClass(expressionBase = "#{d.ZusatzEinsatzUI}")

public class ZusatzEinsatzUI extends WorkpageDispatchedPageBean implements Serializable {

	// ------------------------------------------------------------------------
	// inner classes
	// ------------------------------------------------------------------------

	/**
	 * 
	 */
	private static final long serialVersionUID = 2466562977006415050L;

	/* Listener to the user of the page bean. */
	public interface IListener {
	}

	// ------------------------------------------------------------------------
	// members
	// ------------------------------------------------------------------------
	private ZusatzEinsatz reference;

	private String m_kunde;
	private String m_taNummer;
	private Date m_date = new Date();
	private Date m_bisWann;
	private boolean m_express;
	private boolean m_kva;
	private int m_personenAnzahl;
	private int m_stundenSchaetzung;

	private String m_infos;

	private FIXGRIDListBinding<ArbeitenUI> m_arbeitenList = new FIXGRIDListBinding<>(true);

	private List<MaterialBestellungUI> m_listMaterialBestellung = new ArrayList<MaterialBestellungUI>();
	private List<AngebotUI> m_listAngebot = new ArrayList<AngebotUI>();
	private IMAGESHAKERBinding m_shaker = new IMAGESHAKERBinding();
	private List<MyFile> m_files = new ArrayList<MyFile>();

	private IListener m_listener;

	private HerstellerAutoFillCompleteProvider m_autoCompleteHersteller;

	public String getHerstellerACURL() {
		return m_autoCompleteHersteller.getURL();
	}
	
	private TypModellAutoFillCompleteProvider m_autoCompleteTypModell;

	public String getTypModellACURL() {
		return m_autoCompleteTypModell.getURL();
	}

	// ------------------------------------------------------------------------
	// constructors & initialization
	// ------------------------------------------------------------------------

	public ZusatzEinsatzUI(IWorkpageDispatcher dispatcher) {
		super(dispatcher);
		init();
	}

	public void init() {
		reference = new ZusatzEinsatz();

		// Später Zentral
		ConstantListHolder.initConstants();
		AutoCompletionProvider.init();

		m_listMaterialBestellung.add(new MaterialBestellungUI());
		m_listAngebot.add(new AngebotUI());

		m_autoCompleteHersteller = HerstellerAutoFillCompleteProvider.getInstance();
		m_autoCompleteTypModell = TypModellAutoFillCompleteProvider.getInstance();

		// initRefComponent("autocomplete");
		AutoCompleteMgr.add(m_autoCompleteHersteller);
		AutoCompleteMgr.add(m_autoCompleteTypModell);
;
		getWorkpage().addLifecycleListener(new WorkpageDefaultLifecycleListener() {
			/**
			* 
			*/
			private static final long serialVersionUID = 7505378877338095527L;

			public void reactOnDestroyed() {
				super.reactOnDestroyed();
				AutoCompleteMgr.remove(m_autoCompleteHersteller);
				AutoCompleteMgr.remove(m_autoCompleteTypModell);
			}
		});
	}

	public void init(ZusatzEinsatz zusatzEinsatz) {
		reference = zusatzEinsatz;

		m_listMaterialBestellung.clear();
		m_listAngebot.clear();

		m_kunde = zusatzEinsatz.getKunde().getKundennummer() + "";
		m_taNummer = zusatzEinsatz.getTanummer();
		m_date = zusatzEinsatz.getDatum();
		m_bisWann = zusatzEinsatz.getBisWann();
		m_express = zusatzEinsatz.isExpress();
		m_kva = zusatzEinsatz.isKva();
		m_personenAnzahl = zusatzEinsatz.getMitarbeiter();
		m_stundenSchaetzung = zusatzEinsatz.getStundenProMitarbeiter();

		m_infos = zusatzEinsatz.getInfos();

		for (Arbeiten arbeit : zusatzEinsatz.getListArbeiten()) {
			m_arbeitenList.getItems().add(new ArbeitenUI(arbeit));
		}
		for (MaterialBestellung bestellung : zusatzEinsatz.getListMaterialBestellung()) {
			m_listMaterialBestellung.add(new MaterialBestellungUI(bestellung));
		}
		for (Angebot angebot : zusatzEinsatz.getListAngebot()) {
			m_listAngebot.add(new AngebotUI(angebot));
		}
		for (MyFile image : zusatzEinsatz.getListImages()) {
			m_files.add(image);
		}

		if (m_listMaterialBestellung.size() == 0) {
			m_listMaterialBestellung.add(new MaterialBestellungUI());
		}
		if (m_listAngebot.size() == 0) {
			m_listAngebot.add(new AngebotUI());
		}

	}

	public String getPageName() {
		return "/pages/ZusatzEinsatz.jsp";
	}

	public String getRootExpressionUsedInPage() {
		return "#{d.ZusatzEinsatzUI}";
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

	public void onFileNameAction(ActionEvent ae) {
		if (ae instanceof BaseActionEventUpload) {
			BaseActionEventUpload bae = (BaseActionEventUpload) ae;
			MyFile file = new MyFile();
			file.setHexCode(bae.getHexByteString());
			file.setFileName(bae.getClientFileName());
			m_files.add(file);
			aktualisiereImageShaker();
		}
	}

	public void onDeletePicture(ActionEvent event) {
		m_files.remove(m_shaker.getSelectedIndex());
		aktualisiereImageShaker();
	}

	public void addNewMaterialBestellung(ActionEvent event) {
		m_listMaterialBestellung.add(new MaterialBestellungUI());
	}

	public void addNewAngebot(ActionEvent event) {
		m_listAngebot.add(new AngebotUI());
	}

	// ------------------------------------------------------------------------
	// private usage
	// ------------------------------------------------------------------------

	private void aktualisiereImageShaker() {
		m_shaker.clearImages();
		for (MyFile file : m_files) {
			m_shaker.addImage("/hex(" + file.getHexCode() + ")", file.getFileName());
		}
	}

	public Date getBisWann() {
		return m_bisWann;
	}

	public void setBisWann(Date bisWann) {
		m_bisWann = bisWann;
	}

	public boolean isExpress() {
		return m_express;
	}

	public void setExpress(boolean express) {
		m_express = express;
	}

	public boolean isKva() {
		return m_kva;
	}

	public void setKva(boolean kva) {
		m_kva = kva;
	}

	public int getPersonenAnzahl() {
		return m_personenAnzahl;
	}

	public void setPersonenAnzahl(int personenAnzahl) {
		m_personenAnzahl = personenAnzahl;
	}

	public int getStundenSchaetzung() {
		return m_stundenSchaetzung;
	}

	public void setStundenSchaetzung(int stundenSchaetzung) {
		m_stundenSchaetzung = stundenSchaetzung;
	}

	public String getInfos() {
		return m_infos;
	}

	public void setInfos(String infos) {
		m_infos = infos;
	}

	public List<MaterialBestellungUI> getListMaterialBestellung() {
		return m_listMaterialBestellung;
	}

	public List<AngebotUI> getListAngebot() {
		return m_listAngebot;
	}

	public IMAGESHAKERBinding getShaker() {
		return m_shaker;
	}

	public void setShaker(IMAGESHAKERBinding shaker) {
		m_shaker = shaker;
	}

	public String getKunde() {
		return m_kunde;
	}

	public String getTaNummer() {
		return m_taNummer;
	}

	public Date getDate() {
		return m_date;
	}

	public FIXGRIDListBinding<ArbeitenUI> getArbeitenList() {
		return m_arbeitenList;
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

		public String getTechniker() {
			return myValues.getTechniker().getName();
		}

		public String getArbeitsstunden() {
			return myValues.getArbeitsstunden();
		}

		public String getGeraeteNummer() {
			return myValues.getGeraeteNummer();
		}

		public String getArbeitsbericht() {
			return myValues.getArbeitsbericht();
		}

	}

	public class MaterialBestellungUI {
		private MaterialBestellung myValue;

		private FIXGRIDListBinding<TeileUI> m_teile = new FIXGRIDListBinding<>(true);

		public MaterialBestellungUI(MaterialBestellung bestellung) {
			myValue = bestellung;
			for(Teil teil : myValue.getListTeil()) {
				m_teile.getItems().add(new TeileUI(teil));
			}
		}

		public MaterialBestellungUI() {
			myValue = new MaterialBestellung();
			myValue.setKundengeraet(new KundenGeraet());
			myValue.getKundengeraet().setKunde(reference.getKunde());
			m_teile.getItems().add(new TeileUI());
		}

		public void onRemove(ActionEvent ae) {
			m_listMaterialBestellung.remove(this);
		}

		public Long getMeyernummer() {
			return myValue.getKundengeraet().getMeyerNummer(); // TODO Find Kundengerät anhand von Meyernummer
		}

		public void setMeyernummer(Long meyernummer) {
			myValue.getKundengeraet().setMeyerNummer(meyernummer);
		}

		public String getHersteller() {
			return myValue.getKundengeraet().getHersteller() != null
					? myValue.getKundengeraet().getHersteller().getBezeichnung()
					: null;
		}
		
		public void setHersteller(String value) {/*Ignore*/}
		
		public String getHerstellerValueId() {
			return myValue.getKundengeraet().getHersteller() != null
					? myValue.getKundengeraet().getHersteller().getId() + ""
					: null;
		}

		public void setHerstellerValueId(String string) {
			myValue.getKundengeraet().setHersteller(Hersteller.getHerstellerById(string));
		}

		public String getTypModell() {
			return myValue.getKundengeraet().getTypModell() != null
					? myValue.getKundengeraet().getTypModell().getBezeichnung()
					: null;
		}

		public void setTypModell(String value) {/*Ignore*/}
		
		public String getTypValueId() {
			return myValue.getKundengeraet().getTypModell() != null
					? myValue.getKundengeraet().getTypModell().getId() + ""
					: null;
		}

		public void setTypValueId(String string) {
			myValue.getKundengeraet().setTypModell(TypModell.getTypModellById(string));
		}

		public String getSeriennummer() {
			return myValue.getKundengeraet().getSeriennummer();
		}

		public void setSeriennummer(String seriennummer) {
			myValue.getKundengeraet().setSeriennummer(seriennummer);
		}

		public Integer getBaujahr() {
			return myValue.getKundengeraet().getBaujahr();
		}

		public void setBaujahr(Integer baujahr) {
			myValue.getKundengeraet().setBaujahr(baujahr);
		}

		public String getSonstiges() {
			return myValue.getKundengeraet().getBemerkungen();
		}

		public void setSonstiges(String sonstiges) {
			myValue.getKundengeraet().setBemerkungen(sonstiges);
		}

		public FIXGRIDListBinding<TeileUI> getTeile() {
			return m_teile;
		}

		public void setTeile(FIXGRIDListBinding<TeileUI> teile) {
			m_teile = teile;
		}
		
		public MaterialBestellung getValue() {
			myValue.getListTeil().clear();
			for(TeileUI teil : m_teile.getItems()) {
				myValue.getListTeil().add(teil.getValue());
			}
			return myValue;
		}

		public class TeileUI extends FIXGRIDItem {
			/**
			 * 
			 */
			private static final long serialVersionUID = 2850850963478674115L;
			private Teil myValue;
			

			public TeileUI() {
				myValue = new Teil();
			}

			public TeileUI(Teil value) {
				myValue = value;
			}

			public void onRemove(ActionEvent ae) {
				m_teile.getItems().remove(this);
			}

			public int getAnzahl() {
				return myValue.getMenge();
			}

			public void setAnzahl(int anzahl) {
				myValue.setMenge(anzahl);
			}

			public String getBeschreibung() {
				return myValue.getBeschreibung();
			}

			public void setBeschreibung(String beschreibung) {
				myValue.setBeschreibung(beschreibung);
			}

			public Long getBestellnummer() {
				return myValue.getBestellnummer();
			}

			public void setBestellnummer(Long bestellnummer) {
				myValue.setBestellnummer(bestellnummer);
			}

			public String getHersteller() {
				return myValue.getHersteller() != null ? myValue.getHersteller().getBezeichnung() : null;
			}
			
			public void setHersteller(String value) {/*Ignore*/}

			public String getHerstellerValueId() {
				return myValue.getHersteller() != null ? myValue.getHersteller().getId() + "" : null;
			}

			public void setHerstellerValueId(String string) {
				myValue.setHersteller(Hersteller.getHerstellerById(string));
			}
			
			public Teil getValue() {
				return myValue;
			}

		}

	}

	public class AngebotUI {
		private Angebot myValue;

		public AngebotUI(Angebot angebot) {
			myValue = angebot;
		}

		public AngebotUI() {
			myValue = new Angebot();
		}

		public void onRemove(ActionEvent ae) {
			m_listAngebot.remove(this);
		}

		public AngebotPer getAngebotPer() {
			return myValue.getAngebotPer();
		}

		public void setAngebotPer(AngebotPer angebotPer) {
			myValue.setAngebotPer(angebotPer);
		}

		public String getHersteller() {
			return myValue.getHersteller() != null ? myValue.getHersteller().getBezeichnung() : null;
		}
		
		public void setHersteller(String value) {/*Ignore*/}

		public String getHerstellerValueId() {
			return myValue.getHersteller() != null ? myValue.getHersteller().getId() + "" : null;
		}

		public void setHerstellerValueId(String string) {
			myValue.setHersteller(Hersteller.getHerstellerById(string));
		}

		public String getTyp() {
			return myValue.getTypModell() != null ? myValue.getTypModell().getBezeichnung() : null;
		}

		public void setTyp(String value) {/*Ignore*/}
		
		public String getTypValueId() {
			return myValue.getTypModell() != null ? myValue.getTypModell().getId() + "" : null;
		}

		public void setTypValueId(String string) {
			myValue.setTypModell(TypModell.getTypModellById(string));
		}

		public Integer getHoehe() {
			return myValue.getHoehe();
		}

		public void setHoehe(Integer hoehe) {
			myValue.setHoehe(hoehe);
		}

		public Integer getBreite() {
			return myValue.getBreite();
		}

		public void setBreite(Integer breite) {
			myValue.setBreite(breite);
		}

		public Integer getTiefe() {
			return myValue.getTiefe();
		}

		public void setTiefe(Integer tiefe) {
			myValue.setTiefe(tiefe);
		}

		public Integer getFusshoehe() {
			return myValue.getFusshoehe();
		}

		public void setFusshoehe(Integer fusshoehe) {
			myValue.setFusshoehe(fusshoehe);
		}

		public String getBesonderheiten() {
			return myValue.getBesonderheiten();
		}

		public void setBesonderheiten(String besonderheiten) {
			myValue.setBesonderheiten(besonderheiten);
		}

		public Volt getVolt() {
			return myValue.getVolt();
		}

		public void setVolt(Volt volt) {
			myValue.setVolt(volt);
		}

		public boolean isGas() {
			return myValue.isGas();
		}

		public void setGas(boolean gas) {
			myValue.setGas(gas);
		}

		public boolean isReinigerDosierung() {
			return myValue.isReinigerDosierung();
		}

		public void setReinigerDosierung(boolean reinigerDosierung) {
			myValue.setReinigerDosierung(reinigerDosierung);
		}

		public boolean isMotorkippung() {
			return myValue.isMotorkippung();
		}

		public void setMotorkippung(boolean motorkippung) {
			myValue.setMotorkippung(motorkippung);
		}

		public boolean isHandkippung() {
			return myValue.isHandkippung();
		}

		public void setHandkippung(boolean handkippung) {
			myValue.setHandkippung(handkippung);
		}

		public boolean isWasserenthaertung() {
			return myValue.isWasserenthaertung();
		}

		public void setWasserenthaertung(boolean wasserenthaertung) {
			myValue.setWasserenthaertung(wasserenthaertung);
		}

		public boolean isAltgeraeteentsorung() {
			return myValue.isAltgeraeteentsorung();
		}

		public void setAltgeraeteentsorung(boolean altgeraeteentsorung) {
			myValue.setAltgeraeteentsorung(altgeraeteentsorung);
		}

		public Angebot getValue() {
			return myValue;
		}

	}

}
