package model.common;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import ui.model.Artikel;
import ui.model.Hersteller;
import ui.model.TypModell;

public class ConstantListHolder {
	

	private static HashMap<Long, Hersteller> m_listHersteller = new HashMap<Long, Hersteller>();
	private static HashMap<Long, Artikel> m_listArtikel = new HashMap<Long, Artikel>();
	private static HashMap<Long, TypModell> m_listTypModell = new HashMap<Long, TypModell>();
	
	public static boolean initConstants() {
		refreshConstants();
		return true;
	}

	public static boolean refreshConstants() {
		generateTestData();
		return true;
	}
	
	private static void generateTestData() {
		for(long i = 1 ; i<=50 ; i++) {
			Hersteller hersteller = new Hersteller();
			hersteller.setId(i);
			hersteller.setKey("TH"+i);
			if(i % 2 == 0) {
				hersteller.setBezeichnung("BOSCH " + i);
			} else if (i % 5 == 0) {
				hersteller.setBezeichnung("Siemens " + i);
			} else {
				hersteller.setBezeichnung("DanFoss " + i);
			}
			hersteller.setChangedate(new Date());
			hersteller.setCreatedate(new Date());
			hersteller.setChangeusr("GenerateTestData");
			
			m_listHersteller.put(hersteller.getId(), hersteller);
			List<TypModell> valueList = new ArrayList<TypModell>();
			for(long y = Integer.parseInt(i + "0"); y <= Integer.parseInt(i + "20") ; y++) {
				TypModell typModell = new TypModell();
				typModell.setHersteller(hersteller.getId());
				typModell.setId(y);
				typModell.setKey("TTM" + y);
				if(i % 2 == 0) {
					typModell.setBezeichnung("Filter " + y);
				} else if (i % 5 == 0) {
					typModell.setBezeichnung("Maschine " + y);
				} else {
					typModell.setBezeichnung("Motor " + y);
				}
				typModell.setChangedate(new Date());
				typModell.setCreatedate(new Date());
				typModell.setChangeusr("GenerateTestData");
				valueList.add(typModell);
				m_listTypModell.put(typModell.getId(), typModell);
			}
			
		}
		
		for(long x = 1; x <= 1000; x++) {
			Artikel artikel = new Artikel();
			artikel.setId(x);
			artikel.setKey("A"+x);
			if(x % 2 == 0 && x % 5 != 0) {
				artikel.setBezeichnung("Pauschalarbeit " + x);
			} else if (x % 5 == 0) {
				artikel.setBezeichnung("Ventil " + x);
			} else {
				artikel.setBezeichnung("Kleinteil " + x);
			}
			artikel.setChangedate(new Date());
			artikel.setCreatedate(new Date());
			artikel.setChangeusr("GenerateTestData");
			artikel.setSachnummer(Long.valueOf(Double.valueOf(Math.random() * 10000).longValue()));
			artikel.setSortNumber(Long.valueOf(Double.valueOf(Math.random() * 1000).longValue()));
			
			m_listArtikel.put(artikel.getId(), artikel);
		}
	}

	public static HashMap<Long, Hersteller> getListHersteller() {
		return m_listHersteller;
	}

	public static void setListHersteller(HashMap<Long, Hersteller> m_ListHersteller) {
		ConstantListHolder.m_listHersteller = m_ListHersteller;
	}

	public static HashMap<Long, Artikel> getListArtikel() {
		return m_listArtikel;
	}

	public static void setListArtikel(HashMap<Long, Artikel> m_ListArtikel) {
		ConstantListHolder.m_listArtikel = m_ListArtikel;
	}

	public static HashMap<Long, TypModell> getListTypModell() {
		return m_listTypModell;
	}

	public static void setListTypModell(HashMap<Long, TypModell> m_ListTypModell) {
		ConstantListHolder.m_listTypModell = m_ListTypModell;
	}
}
