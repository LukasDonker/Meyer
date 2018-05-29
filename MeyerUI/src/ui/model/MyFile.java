package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class MyFile extends ValueObject{
	
	private String m_fileName;
	private String m_hexCode;
	
	public String getFileName() {
		return m_fileName;
	}
	public void setFileName(String fileName) {
		m_fileName = fileName;
	}
	public String getHexCode() {
		return m_hexCode;
	}
	public void setHexCode(String hexCode) {
		m_hexCode = hexCode;
	}
}
