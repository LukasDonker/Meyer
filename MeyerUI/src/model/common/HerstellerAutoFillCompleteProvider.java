package model.common;

import java.util.ArrayList;
import java.util.List;

import org.eclnt.jsfserver.util.DefaultAutoComplete2Provider;
import org.eclnt.jsfserver.util.IAutoCompleteProvider2.AutoCompleteItem;

public class HerstellerAutoFillCompleteProvider extends DefaultAutoComplete2Provider {

	/**
	 * 
	 */
	private static final long serialVersionUID = 326952531006481437L;
	
	private static HerstellerAutoFillCompleteProvider s_instance = null;
	
	public static HerstellerAutoFillCompleteProvider getInstance() {
		if(s_instance == null) {
			s_instance = new HerstellerAutoFillCompleteProvider();
		}
		return s_instance;
	}
	
	private HerstellerAutoFillCompleteProvider() {
		// TODO Auto-generated constructor stub
	}
	

	@Override
    public List<AutoCompleteItem> getProposals(String value) {
        List<AutoCompleteItem> result = new ArrayList<>();

        for (AutoCompleteItem item : AutoCompletionProvider.getListHerstellerAutoComplete()) {
            if (item.getText().toLowerCase().contains(value.toLowerCase())  || item.getId().toLowerCase().contains(value.toLowerCase())  || item.getComment().toLowerCase().contains(value.toLowerCase())) {
                result.add(item);
            }
        }
        return result;
    }

}

