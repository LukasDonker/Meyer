package model.common;

import java.util.ArrayList;
import java.util.List;

import org.eclnt.jsfserver.util.DefaultAutoComplete2Provider;

public class TypModellAutoFillCompleteProvider extends DefaultAutoComplete2Provider {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 496038230611413561L;
	
	private static TypModellAutoFillCompleteProvider s_instance = null;
	
	public static TypModellAutoFillCompleteProvider getInstance() {
		if(s_instance == null) {
			s_instance = new TypModellAutoFillCompleteProvider();
		}
		return s_instance;
	}
	
	private TypModellAutoFillCompleteProvider() {
		// TODO Auto-generated constructor stub
	}
	

	@Override
    public List<AutoCompleteItem> getProposals(String value) {
        List<AutoCompleteItem> result = new ArrayList<>();

        for (AutoCompleteItem item : AutoCompletionProvider.getListTypModell()) {
            if (item.getText().toLowerCase().contains(value.toLowerCase())  || item.getId().toLowerCase().contains(value.toLowerCase())  || item.getComment().toLowerCase().contains(value.toLowerCase())) {
                result.add(item);
            }
        }
        return result;
    }

}
