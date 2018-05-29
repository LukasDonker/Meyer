package ui.model;

public enum AngebotPer {
	MAIL("Mail"), FAX("Fax"), POST("Post");
	
	private String m_bezeichnung;
	
	AngebotPer(String name) {
		m_bezeichnung = name;
	}
	
	@Override
	public String toString() {
		return m_bezeichnung;
	}
}
