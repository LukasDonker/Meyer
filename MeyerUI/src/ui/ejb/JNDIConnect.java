package ui.ejb;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Properties;

import javax.naming.InitialContext;
import javax.naming.NamingException;

public class JNDIConnect {
	private static JNDIConnect instance;

	Properties props;
	InitialContext ctx;

	public static JNDIConnect getInstance() {
		if (instance == null) {
			instance = new JNDIConnect();
		}
		return instance;
	}

	private JNDIConnect() {
		try {
			ctx = new InitialContext();
		} catch (NamingException e) {
			e.printStackTrace();
		}
		
//		props = new Properties();
//
//		props.put("java.naming.factory.initial", "org.jnp.interfaces.NamingContextFactory");
//		props.put("java.naming.factory.url.pkgs", "org.jboss.naming:org.jnp.interfaces");
//		props.put("java.naming.provider.url", "localhost");
//
//		try {
//			ctx = new InitialContext(props);
//		} catch (NamingException ex) {
//			ex.printStackTrace();
//		}
	}

	public BenutzerManager getBenutzerManager() {
		try {
			return (BenutzerManager) ctx.lookup("java:global/MeyerUI/BenutzerManagerEJB!ui.ejb.BenutzerManager");
		} catch (NamingException e) {
			e.printStackTrace();
			return null;
		}
	}

	public BestellungManager getBestellungManager() {
		try {
			return (BestellungManager) ctx.lookup("java:global/MeyerUI/BestellungManagerEJB!ui.ejb.BestellungManager");
		} catch (NamingException e) {
			e.printStackTrace();
			return null;
		}
	}

	public EinsatzberichtManager getEinsatzberichtManager() {
		try {
			return (EinsatzberichtManager) ctx.lookup("java:global/MeyerUI/EinsatzberichtManagerEJB!ui.ejb.EinsatzberichtManager");
		} catch (NamingException e) {
			e.printStackTrace();
			return null;
		}
	}

	public KundenManager getKundenManager() {
		try {
			return (KundenManager) ctx.lookup("java:global/MeyerUI/KundenManagerEJB!ui.ejb.KundenManager");
		} catch (NamingException e) {
			e.printStackTrace();
			return null;
		}
	}
}
