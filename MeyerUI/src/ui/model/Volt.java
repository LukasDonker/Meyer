package ui.model;

public enum Volt {
	V230("230 V"), V400("400 V");
	
	private String m_bezeichnung;
	
	Volt(String string){
		m_bezeichnung = string;
	}
	
	@Override
	public String toString() {
		return m_bezeichnung;
	}
}
