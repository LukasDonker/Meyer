package model.common;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.eclnt.jsfserver.util.IAutoCompleteProvider2.AutoCompleteItem;

import ui.model.Artikel;
import ui.model.Hersteller;
import ui.model.TypModell;

public class AutoCompletionProvider {

	public static List<AutoCompleteItem> m_listHerstellerAutoComplete = new ArrayList<AutoCompleteItem>();
	public static List<AutoCompleteItem> m_ListTypModell = new ArrayList<AutoCompleteItem>();
	public static List<AutoCompleteItem> m_listArtikelAutoComplete = new ArrayList<AutoCompleteItem>();
	public static List<AutoCompleteItem> m_listAnsprechpartnerAutoComplete = new ArrayList<AutoCompleteItem>();

	public static void init() {
		fullRefresh();
	}
	
	public static void fullRefresh() {
		
		m_listHerstellerAutoComplete.clear();
		m_ListTypModell.clear();
		m_listArtikelAutoComplete.clear();
		m_listAnsprechpartnerAutoComplete.clear();
		
		for(Hersteller hersteller : Hersteller.getValues()) {
			AutoCompleteItem item = new AutoCompleteItem(hersteller.getBezeichnung(), hersteller.getId()+"", hersteller.getKey());
			m_listHerstellerAutoComplete.add(item);
		}
		
		for(TypModell typModell : TypModell.getValues()) {
			AutoCompleteItem item = new AutoCompleteItem(typModell.getBezeichnung(), typModell.getId()+"", typModell.getHersteller().getBezeichnung());
			m_ListTypModell.add(item);
		}
		
		for(Artikel artikel : Artikel.getValues()) {
			AutoCompleteItem item = new AutoCompleteItem(artikel.getBezeichnung(), artikel.getId()+"", artikel.getKey());
			m_listArtikelAutoComplete.add(item);
		}
	}

	static List<AutoCompleteItem> getListHerstellerAutoComplete() {
		return m_listHerstellerAutoComplete;
	}

	static List<AutoCompleteItem> getListArtikelAutoComplete() {
		return m_listArtikelAutoComplete;
	}

	static List<AutoCompleteItem> getListAnsprechpartnerAutoComplete() {
		return m_listAnsprechpartnerAutoComplete;
	}

	static List<AutoCompleteItem> getListTypModell() {
		return m_ListTypModell;
	}        
}
