package model.common;

import java.util.ArrayList;
import java.util.List;

import org.eclnt.jsfserver.util.DefaultAutoComplete2Provider;

public class ArtikelAutoFillCompleteProvider extends DefaultAutoComplete2Provider {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5569944270162110134L;
	
	private static ArtikelAutoFillCompleteProvider s_instance = null;
	
	public static ArtikelAutoFillCompleteProvider getInstance() {
		if(s_instance == null) {
			s_instance = new ArtikelAutoFillCompleteProvider();
		}
		return s_instance;
	}
	
	private ArtikelAutoFillCompleteProvider() {
		// TODO Auto-generated constructor stub
	}

	@Override
    public List<AutoCompleteItem> getProposals(String value) {
        List<AutoCompleteItem> result = new ArrayList<>();

        for (AutoCompleteItem item : AutoCompletionProvider.getListArtikelAutoComplete()) {
            if (item.getText().toLowerCase().contains(value.toLowerCase()) || item.getId().toLowerCase().contains(value.toLowerCase())  || item.getComment().toLowerCase().contains(value.toLowerCase()) ) {
                result.add(item);
            }
        }
        return result;
    }

}
