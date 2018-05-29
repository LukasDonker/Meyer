package ui.ejb;

import javax.ejb.Remote;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;

@Stateless
@Remote(PersonenManager.class)
@TransactionManagement(TransactionManagementType.CONTAINER)
public class PersonenManagerEJB implements PersonenManager{

	
	
}
