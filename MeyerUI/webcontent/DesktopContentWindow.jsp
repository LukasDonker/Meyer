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
<t:icon id="g_9" background="FF" image="/awesomefont(f085,#FFFFFF,30)" />
</t:row>
</t:pane>
</t:rowtitlebar>
<t:rowadaptiveline id="g_10" >
<t:adaptivetoolbar id="g_11" stylevariant="Navigation" width="100%" >
<t:coldistance id="g_12" />
<t:link id="g_13" actionListener="#{d.DesktopContentWindowUI.onNeuServiceBericht}" font="weight:bold" foreground="#ffffff" text="Neuer Servicebericht" />
<t:coldistance id="g_14" />
<t:colline id="g_15" background="#000000" height="100%" width="2" />
<t:coldistance id="g_16" />
<t:link id="g_17" font="weight:bold" foreground="#ffffff" text="Neuer Auftrag" />
<t:coldistance id="g_18" />
<t:colline id="g_19" background="#000000" height="100%" rendered="false" width="2" />
<t:coldistance id="g_20" rendered="false" />
<t:link id="g_21" font="weight:bold" foreground="#ffffff" rendered="false" text="Neue Zeiterfassung" />
<t:coldistance id="g_22" rendered="false" />
<t:colline id="g_23" background="#000000" height="100%" width="2" />
<t:coldistance id="g_24" />
<t:link id="g_25" font="weight:bold" foreground="#ffffff" text="Neue Gerätebestellung / KVA" />
<t:coldistance id="g_26" />
<t:colline id="g_27" background="#000000" height="100%" width="2" />
<t:coldistance id="g_28" width="100%" />
<t:link id="g_29" font="weight:bold" foreground="#ffffff" rendered="false" text="Neuer Kunde" />
<t:coldistance id="g_30" />
</t:adaptivetoolbar>
</t:rowadaptiveline>
<t:rowbodypane id="g_31" >
<t:rowworkplace id="g_32" objectbinding="#{d.DesktopContentWindowUI.workpageContainer}" />
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
