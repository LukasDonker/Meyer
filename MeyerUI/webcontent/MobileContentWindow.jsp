<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="MobileContentWindowg_sv">
<t:rowtitlebar id="g_1" stylevariant="cleanandcrispbar" textwidth="0" >
<t:pane id="g_2" comment="test" width="100%" >
<t:rowadaptiveline id="g_3" breakindex="1" breakpixels="400" >
<t:adaptivetoolbar id="g_4" stylevariant="Navigation" width="50" >
<t:button id="g_5" actionListener="#{d.MobileContentWindowUI.onNeuServiceBericht}" font="weight:bold" foreground="#ffffff" stylevariant="primaryButton" text="Neuer Servicebericht" width="150" />
<t:coldistance id="g_6" />
<t:button id="g_7" font="weight:bold" foreground="#ffffff" stylevariant="primaryButton" text="Neuer Auftrag" width="150" />
<t:coldistance id="g_8" />
<t:button id="g_9" font="weight:bold" foreground="#ffffff" stylevariant="primaryButton" text="Neue Zeiterfassung" width="150" />
<t:coldistance id="g_10" />
<t:button id="g_11" height="35" image="/images/LukasDonker.png" imageheight="35" imagewidth="35" stylevariant="primaryButton" width="35" />
<t:coldistance id="g_12" width="10" />
<t:icon id="g_13" background="linear-gradient(to bottom, #006bff,#2e6dff)" height="35" image="/awesomefont(f085,#FFFFFF,30)" width="35" />
<t:coldistance id="g_14" width="10" />
<t:icon id="g_15" background="linear-gradient(to bottom, #006bff,#2e6dff)" height="35" image="/awesomefont(f128,#FFFFFF,30)" tooltip="Hilfe" width="35" />
</t:adaptivetoolbar>
<t:coldistance id="g_16" width="100%" />
<t:autocomplete id="g_17" comment="Suche" height="30" placeholder="TSNummer, Kunde, Disponent, Gebiet, Techniker" textimage="/awesomefont(f002,#000000,14)" value="#{d.MobileContentWindowUI.autofill}" valuesurl="#{d.MobileContentWindowUI.autofillListACURL}" width="350" withfocusevent="true" />
<t:button id="g_18" font="weight:bold" foreground="#ffffff" height="30" text="Suchen" />
</t:rowadaptiveline>
</t:pane>
</t:rowtitlebar>
<t:rowbodypane id="g_19" >
<t:rowworkplace id="g_20" objectbinding="#{d.MobileContentWindowUI.workpageContainer}" />
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
