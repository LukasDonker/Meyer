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
<t:button id="g_5" font="weight:bold" height="30" stylevariant="defaultButton" text="Suchen" />
<t:coldistance id="g_6" width="10" />
<t:link id="g_7" foreground="#ffffff" text="erweiterte Suche" />
<t:coldistance id="g_8" width="100%" />
<t:button id="g_9" height="35" image="/images/LukasDonker.png" imageheight="35" imagewidth="35" width="35" />
<t:coldistance id="g_10" width="10" />
<t:icon id="g_11" background="FF" image="/awesomefont(f085,#FFFFFF,30)" />
<t:coldistance id="g_12" width="10" />
<t:icon id="g_13" image="/awesomefont(f128,#FFFFFF,30)" tooltip="Hilfe" />
</t:row>
</t:pane>
</t:rowtitlebar>
<t:rowadaptiveline id="g_14" >
<t:adaptivetoolbar id="g_15" stylevariant="Navigation" width="100%" >
<t:coldistance id="g_16" />
<t:link id="g_17" actionListener="#{d.DesktopContentWindowUI.onNeuServiceBericht}" font="weight:bold" foreground="#ffffff" text="Neuer Servicebericht" />
<t:coldistance id="g_18" />
<t:colline id="g_19" background="#000000" height="100%" width="2" />
<t:coldistance id="g_20" />
<t:link id="g_21" font="weight:bold" foreground="#ffffff" text="Neuer Auftrag" />
<t:coldistance id="g_22" />
<t:colline id="g_23" background="#000000" height="100%" width="2" />
<t:coldistance id="g_24" />
<t:link id="g_25" font="weight:bold" foreground="#ffffff" text="Neue Zeiterfassung" />
<t:coldistance id="g_26" />
<t:colline id="g_27" background="#000000" height="100%" width="2" />
<t:coldistance id="g_28" />
<t:link id="g_29" font="weight:bold" foreground="#ffffff" text="Neue Gerätebestellung / KVA" />
<t:coldistance id="g_30" />
<t:colline id="g_31" background="#000000" height="100%" width="2" />
<t:coldistance id="g_32" width="100%" />
<t:link id="g_33" font="weight:bold" foreground="#ffffff" text="Neuer Kunde" />
<t:coldistance id="g_34" />
</t:adaptivetoolbar>
</t:rowadaptiveline>
<t:rowbodypane id="g_35" >
<t:rowworkplace id="g_36" objectbinding="#{d.DesktopContentWindowUI.workpageContainer}" />
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
