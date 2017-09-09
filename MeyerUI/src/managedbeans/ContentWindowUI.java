/**
 * 
 */
package managedbeans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.eclnt.jsfserver.util.AutoCompleteMgr;
import org.eclnt.jsfserver.util.DefaultAutoComplete2Provider;
import org.eclnt.workplace.IWorkpageDispatcher;
import org.eclnt.workplace.WorkpageDefaultLifecycleListener;
import org.eclnt.workplace.WorkpageDispatchedBean;

/**
 * @author Lukas
 *
 */
public abstract class ContentWindowUI extends WorkpageDispatchedBean implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7574719098039805143L;
	
	protected AutoFillCompleteProvider m_autofillListAC;
	protected String m_autofillValue;
	
	public ContentWindowUI(IWorkpageDispatcher dispatcher) {
		super(dispatcher);
	
		m_autofillListAC = new AutoFillCompleteProvider();
		AutoCompleteMgr.add(m_autofillListAC);
		// register clearing of "m_nameAC"
		getWorkpage().addLifecycleListener(new WorkpageDefaultLifecycleListener() {
			/**
			 * 
			 */
			private static final long serialVersionUID = 4373569735763016647L;

			@Override
			public void reactOnDestroyed() {
				super.reactOnDestroyed();
				AutoCompleteMgr.remove(m_autofillListAC);
			}
		});
	}

	public String getAutofillListACURL() {
		return m_autofillListAC.getURL();
	}

	public String getAutofill() {
		return m_autofillValue;
	}

	public void setAutofill(String value) {
		if (value == null || value.isEmpty()) {
			value = "GZ, Name, TAN, ID";
		}
		m_autofillValue = value;
	}
	
	/*
	 * Inner Classes
	 */
	public class AutoFillCompleteProvider extends DefaultAutoComplete2Provider {

		/**
		 * 
		 */
		private static final long serialVersionUID = 2690846335772183328L;
		
		AutoCompleteItem[] lastValues = { new AutoCompleteItem("Kunde 1", "1", "Kunde, 123456"),
				new AutoCompleteItem("Köln", "2", "Gebiet, NRW-Köln"),
				new AutoCompleteItem("Techniker 1", "3", "Techniker, BM-MG-1234"),
				new AutoCompleteItem("Disponent 2", "4", "Disponent, Köln"),
				new AutoCompleteItem("Auftrag 3", "5", "Auftrag, Kunde 2") };

		@Override
		public List<AutoCompleteItem> getProposals(String value) {
			List<AutoCompleteItem> result = new ArrayList<>();

			for (AutoCompleteItem item : lastValues) {
				if (item.getText().contains(value) || item.getId().contains(value)
						|| item.getComment().contains(value)) {
					result.add(item);
				}
			}
			return result;
		}

	}
}
