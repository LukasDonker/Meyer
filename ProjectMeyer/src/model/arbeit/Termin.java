package model.arbeit;

import java.util.Date;

import model.common.ValueObject;

public class Termin extends ValueObject {

	private Date vonZeit;
	private Date bisZeit;
	private boolean terminFix;
	
	public Date getVonZeit() {
		return vonZeit;
	}
	public void setVonZeit(Date vonZeit) {
		this.vonZeit = vonZeit;
	}
	public Date getBisZeit() {
		return bisZeit;
	}
	public void setBisZeit(Date bisZeit) {
		this.bisZeit = bisZeit;
	}
	public boolean isTerminFix() {
		return terminFix;
	}
	public void setTerminFix(boolean terminFix) {
		this.terminFix = terminFix;
	}
	
}
