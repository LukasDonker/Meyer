package ui.model;

public enum GeraeteTyp {
	HERD("Herd"), BACKOFEN("Backofen"), MIKROWELLENHERD("Mikrowellenherd"), DAMPFKOCHTOPF("Dampfkochtopf"), DUNSTABZUG("Dunstabzug"), GESCHIRRSPUELER("Geschirrspüler"), KUEHLSCHRANK("Kühlschrank"), GEFRIERTRUHE("Gefriertruhe"), KUEHLGEFRIERKOMBINATION("Kühl-Gefrier-Kombination"), SALAMANDER("Salamander");
	
	GeraeteTyp(String value){
		m_bezeichnung = value;
	}
	
	private String m_bezeichnung;
	
	@Override
	public String toString() {
		return m_bezeichnung;
	}
}
