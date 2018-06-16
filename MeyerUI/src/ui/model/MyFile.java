package ui.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import model.common.ValueObject;

@Entity
public class MyFile extends ValueObject{
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false, nullable = false)
	@Override
	public Long getId() {
		return super.getId();
	}
	
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
