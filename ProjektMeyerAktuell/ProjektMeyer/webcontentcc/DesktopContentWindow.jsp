<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="DesktopContentWindowg_sv">
<t:rowtitlebar id="g_1" stylevariant="cleanandcrispbar" textwidth="0" >
<t:pane id="g_2" comment="test" width="100%" >
<t:row id="g_3" >
<t:autocomplete id="g_4" comment="Suche" height="30" placeholder="TSNummer, Kunde, Disponent, Gebiet, Techniker" textimage="/awesomefont(f002,#000000,14)" value="#{d.DesktopContentWindowUI.autofill}" valuesurl="#{d.DesktopContentWindowUI.autofillListACURL}" width="350" withfocusevent="true" />
<t:button id="g_5" font="weight:bold" height="30" stylevariant="primaryButton" text="Suchen" />
<t:coldistance id="g_6" width="10" />
<t:link id="g_7" foreground="#ffffff" text="erweiterte Suche" />
<t:coldistance id="g_8" width="100%" />
<t:button id="g_62" height="35" image="/images/LukasDonker.png" imageheight="35" imagewidth="35" width="35" />
<t:coldistance id="g_21" width="10" />
<t:icon id="g_64" image="/awesomefont(f085,#FFFFFF,30)" />
<t:coldistance id="g_40" width="10" />
<t:icon id="g_41" image="/awesomefont(f128,#FFFFFF,30)" tooltip="Hilfe" />
</t:row>
</t:pane>
</t:rowtitlebar>
<t:rowadaptiveline id="g_42" >
<t:adaptivetoolbar id="g_43" stylevariant="Navigation" width="100%" >
<t:coldistance id="g_44" />
<t:link id="g_45" actionListener="#{d.DesktopContentWindowUI.onNeuServiceBericht}" font="weight:bold" foreground="#ffffff" text="Neuer Servicebericht" />
<t:coldistance id="g_46" />
<t:colline id="g_47" background="#000000" height="100%" width="2" />
<t:coldistance id="g_48" />
<t:link id="g_49" font="weight:bold" foreground="#ffffff" text="Neuer Auftrag" />
<t:coldistance id="g_50" />
<t:colline id="g_51" background="#000000" height="100%" width="2" />
<t:coldistance id="g_52" />
<t:link id="g_53" font="weight:bold" foreground="#ffffff" text="Neue Zeiterfassung" />
<t:coldistance id="g_54" />
<t:colline id="g_55" background="#000000" height="100%" width="2" />
<t:coldistance id="g_56" width="100%" />
<t:link id="g_57" font="weight:bold" foreground="#ffffff" text="Neuer Kunde" />
<t:coldistance id="g_58" />
</t:adaptivetoolbar>
</t:rowadaptiveline>
<t:rowbodypane id="g_59" >
<t:rowworkplace id="g_60" objectbinding="#{d.DesktopContentWindowUI.workpageContainer}" />
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
