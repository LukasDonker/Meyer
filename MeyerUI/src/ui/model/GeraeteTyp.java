package ui.model;

public enum GeraeteTyp {
	HERD("Herd"), BACKOFEN("Backofen"), MIKROWELLENHERD("Mikrowellenherd"), DAMPFKOCHTOPF("Dampfkochtopf"), DUNSTABZUG("Dunstabzug"), GESCHIRRSPUELER("Geschirrsp�ler"), KUEHLSCHRANK("K�hlschrank"), GEFRIERTRUHE("Gefriertruhe"), KUEHLGEFRIERKOMBINATION("K�hl-Gefrier-Kombination"), SALAMANDER("Salamander");
	
	GeraeteTyp(String value){
		m_bezeichnung = value;
	}
	
	private String m_bezeichnung;
	
	@Override
	public String toString() {
		return m_bezeichnung;
	}
}
