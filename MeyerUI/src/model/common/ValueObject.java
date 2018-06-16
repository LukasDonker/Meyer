package model.common;

import java.io.Serializable;
import java.util.Date;

public class ValueObject  implements Serializable{

	private Long id;
	private String changeusr;
	private String createusr;
	private Date changedate;
	private Date createdate;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getChangeusr() {
		return changeusr;
	}
	public void setChangeusr(String changeusr) {
		this.changeusr = changeusr;
	}
	public String getCreateusr() {
		return createusr;
	}
	public void setCreateusr(String createusr) {
		this.createusr = createusr;
	}
	public Date getChangedate() {
		return changedate;
	}
	public void setChangedate(Date changedate) {
		this.changedate = changedate;
	}
	public Date getCreatedate() {
		return createdate;
	}
	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}
	
}
