package managedbeans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.eclnt.editor.annotations.CCGenClass;
import org.eclnt.jsfserver.pagebean.PageBean;

@CCGenClass(expressionBase = "#{d.TeileUndPauschalarbeitenDialogUI}")

public class TeileUndPauschalarbeitenDialogUI extends PageBean implements Serializable {
	List<String> m_buttonList = new ArrayList<String>();

	public List<String> getButtonList() {
		return m_buttonList;
	}

	// Button Reihe 1
	public String getButton1x1() {
		return m_buttonList.get(0);
	}

	public String getButton1x2() {
		return m_buttonList.get(1);
	}

	public String getButton1x3() {
		return m_buttonList.get(2);
	}

	public String getButton1x4() {
		return m_buttonList.get(3);
	}

	public String getButton1x5() {
		return m_buttonList.get(4);
	}

	// Reihe 2
	public String getButton2x1() {
		return m_buttonList.get(5);
	}

	public String getButton2x2() {
		return m_buttonList.get(6);
	}

	public String getButton2x3() {
		return m_buttonList.get(7);
	}

	public String getButton2x4() {
		return m_buttonList.get(8);
	}

	public String getButton2x5() {
		return m_buttonList.get(9);
	}

	// Reihe 3
	public String getButton3x1() {
		return m_buttonList.get(10);
	}

	public String getButton3x2() {
		return m_buttonList.get(11);
	}

	public String getButton3x3() {
		return m_buttonList.get(12);
	}

	public String getButton3x4() {
		return m_buttonList.get(13);
	}

	public String getButton3x5() {
		return m_buttonList.get(14);
	}

	// ------------------------------------------------------------------------
	// inner classes
	// ------------------------------------------------------------------------

	/* Listener to the user of the page bean. */
	public interface IListener {
	}

	// ------------------------------------------------------------------------
	// members
	// ------------------------------------------------------------------------

	private IListener m_listener;

	// ------------------------------------------------------------------------
	// constructors & initialization
	// ------------------------------------------------------------------------

	public TeileUndPauschalarbeitenDialogUI() {
		for (int i = 0; i < 15; i++) {
			m_buttonList.add("Teil " + (i + 1));
		}
	}

	public String getPageName() {
		return "/pages/dialog/TeileUndPauschalarbeitenDIalog.jsp";
	}

	public String getRootExpressionUsedInPage() {
		return "#{d.TeileUndPauschalarbeitenDialogUI}";
	}

	// ------------------------------------------------------------------------
	// public usage
	// ------------------------------------------------------------------------

	/*
	 * Initialization of the bean. Add any parameter that is required within your
	 * scenario.
	 */
	public void prepare(IListener listener) {
		m_listener = listener;
	}

	// ------------------------------------------------------------------------
	// private usage
	// ------------------------------------------------------------------------
}
