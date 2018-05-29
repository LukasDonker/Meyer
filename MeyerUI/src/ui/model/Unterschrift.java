package ui.model;

import javax.persistence.Entity;

import model.common.ValueObject;

@Entity
public class Unterschrift extends ValueObject{
	
	private String m_name;
	private String m_pixelValues;
	
	public String getName() {
		return m_name;
	}
	public void setName(String name) {
		m_name = name;
	}
	public String getPixelValues() {
		return m_pixelValues;
	}
	public void setPixelValues(String pixelValues) {
		m_pixelValues = pixelValues;
	}
}
