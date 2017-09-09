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
<t:autocomplete id="g_4" actionListener="#{d.ContentWindowUI.onSearch}" comment="Suche" height="30" placeholder="TSNummer, Kunde, Disponent, Gebiet, Techniker" textimage="/awesomefont(f002,#000000,14)" value="#{d.ContentWindowUI.autofill}" valuesurl="#{d.ContentWindowUI.autofillListACURL}" width="350" withfocusevent="true" />
<t:button id="g_5" actionListener="#{d.ContentWindowUI.onSearch}" font="weight:bold" height="30" stylevariant="primaryButton" text="Suchen" />
<t:coldistance id="g_6" width="10" />
<t:link id="g_7" actionListener="#{d.ContentWindowUI.onOpenSearch}" foreground="#ffffff" text="erweiterte Suche" />
<t:coldistance id="g_8" width="100%" />
<t:buttonpopup id="g_9" height="35" image="/images/LukasDonker.png" imageheight="35" imagewidth="35" width="35" >
<t:pane id="g_10" background="#616161" padding="left:5;right:5;top:5;bottom:5" width="200" >
<t:row id="g_11" >
<t:label id="g_12" font="weight:bold" foreground="#ffffff" text="Profil:" width="50" />
<t:combobox id="g_13" actionListener="#{d.ContentWindowUI.onToggle}" flush="true" placeholder="Profil" value="#{d.ContentWindowUI.comboValue}" width="100%" >
<t:comboboxitem id="g_14" text="Team II-ING-1" value="1" />
<t:comboboxitem id="g_15" text="Administration" value="2" />
<t:comboboxitem id="g_16" text="Extern" value="3" />
</t:combobox>
</t:row>
<t:rowdistance id="g_17" height="5" />
<t:row id="g_18" >
<t:button id="g_19" image="/awesomefont(f011,#FFFFFF,)12" stylevariant="dangerButton" text="Abmelden" width="100%" />
</t:row>
<t:rowdistance id="g_20" height="5" />
</t:pane>
</t:buttonpopup>
<t:coldistance id="g_21" width="10" />
<t:buttonpopup id="g_22" image="/awesomefont(f085,#FFFFFF,30)" tooltip="Administration" >
<t:pane id="g_23" background="#616161" padding="left:5;right:5;top:5;bottom:5" width="200" >
<t:row id="g_24" >
<t:label id="g_25" font="weight:bold" foreground="#ffffff" text="Style:" width="50" />
<t:combobox id="g_26" actionListener="#{d.ContentWindowUI.onStyleChange}" flush="true" placeholder="Style" value="#{d.ContentWindowUI.style}" width="100%" >
<t:comboboxitem id="g_27" text="CleanAndCrisp" value="cleanandcrisp" />
<t:comboboxitem id="g_28" text="DefaultRisc" value="defaultrisc" />
<t:comboboxitem id="g_29" text="legacy" value="legacy" />
<t:comboboxitem id="g_30" text="cleanlegacy" value="cleanlegacy" />
</t:combobox>
</t:row>
<t:row id="g_31" >
<t:coldistance id="g_32" width="100%" />
<t:hyperlink id="g_33" text="reload" tooltip="#{d.ContentWindowUI.styleurl}" url="#{d.ContentWindowUI.styleurl}" />
</t:row>
<t:rowdistance id="g_34" height="5" />
<t:row id="g_35" >
<t:button id="g_36" stylevariant="successButton" text="Einstellungen" width="100%" />
</t:row>
<t:rowdistance id="g_37" height="5" />
<t:row id="g_38" >
<t:button id="g_39" stylevariant="infoButton" text="Administration" width="100%" />
</t:row>
</t:pane>
</t:buttonpopup>
<t:coldistance id="g_40" width="10" />
<t:icon id="g_41" image="/awesomefont(f128,#FFFFFF,30)" tooltip="Hilfe" />
</t:row>
</t:pane>
</t:rowtitlebar>
<t:rowadaptiveline id="g_42" >
<t:adaptivetoolbar id="g_43" stylevariant="Navigation" width="100%" >
<t:coldistance id="g_44" />
<t:link id="g_45" actionListener="#{d.ContentWindowUI.onNeuServiceBericht}" font="weight:bold" foreground="#ffffff" text="Neuer Servicebericht" />
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
<t:row id="g_61" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
