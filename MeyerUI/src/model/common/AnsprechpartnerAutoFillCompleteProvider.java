package model.common;

import java.util.ArrayList;
import java.util.List;

import org.eclnt.jsfserver.util.DefaultAutoComplete2Provider;

public class AnsprechpartnerAutoFillCompleteProvider extends DefaultAutoComplete2Provider {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1528774312374139479L;
	
	
	private static AnsprechpartnerAutoFillCompleteProvider s_instance = null;
	
	public static AnsprechpartnerAutoFillCompleteProvider getInstance() {
		if(s_instance == null) {
			s_instance = new AnsprechpartnerAutoFillCompleteProvider();
		}
		return s_instance;
	}
	
	private AnsprechpartnerAutoFillCompleteProvider() {
		// TODO Auto-generated constructor stub
	}

	@Override
    public List<AutoCompleteItem> getProposals(String value) {
        List<AutoCompleteItem> result = new ArrayList<>();

        for (AutoCompleteItem item : AutoCompletionProvider.getListAnsprechpartnerAutoComplete()) {
            if (item.getText().toLowerCase().contains(value.toLowerCase())  || item.getId().toLowerCase().contains(value.toLowerCase())  || item.getComment().toLowerCase().contains(value.toLowerCase())) {
                result.add(item);
            }
        }
        return result;
    }
}
