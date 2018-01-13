<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AntragsContentg_sv">
<t:rowbodypane id="g_1" border="left:0;right:0;top:0;bottom:0" >
<t:row id="g_2" >
<t:adaptivesplitarea id="g_3" dividersize="15" height="100%" width="100%" >
<t:pane id="g_4" height="100%" width="300" >
<t:rowpagebeaninclude id="g_5" pagebeanbinding="#{d.AntragContentUI.tree}" />
</t:pane>
<t:pane id="g_6" height="100%" width="100%" >
<t:row id="g_7" >
<t:foldablepane id="g_8" border="bottom:3;color:#03519d" stylevariant="CCTILEDAREA_FOLDABLEPANE" text="Übersicht" width="100%" >
<t:foldablepaneheaderrow id="g_9" >
<t:icon id="g_10" image="/awesomefont(f004,#d9534f,15)" />
<t:coldistance id="g_11" />
<t:icon id="g_12" actionListener="#{d.AntragContentUI.onOpenConfiguration}" image="/awesomefont(f013,#FFFFFF,20)" />
<t:coldistance id="g_13" />
<t:adaptivetoolbar id="g_14" stylevariant="Navigation" >
<t:button id="g_15" stylevariant="dangerButton" text="Formschreiben" width="100%" />
<t:coldistance id="g_16" />
<t:button id="g_17" stylevariant="dangerButton" text="Entscheidungsdokumente" width="100%" />
<t:coldistance id="g_18" />
<t:button id="g_19" image="/awesomefont(f1fe,#FFFFFF,15)" stylevariant="dangerButton" text="Auswertung" width="100%" />
<t:coldistance id="g_20" />
<t:button id="g_21" image="/awesomefont(f0ea,#FFFFFF,15)" stylevariant="warningButton" text="Dokument zuordnen" width="100%" />
<t:coldistance id="g_22" />
<t:button id="g_23" image="/awesomefont(f0ec,#FFFFFF,15)" stylevariant="primaryButton" text="Statuswechsel" width="100%" />
<t:coldistance id="g_24" />
<t:button id="g_25" stylevariant="successButton" text="Kenntnisnahme" width="100%" />
<t:coldistance id="g_26" />
<t:button id="g_27" stylevariant="successButton" text="Mitzeichnung" width="100%" />
<t:coldistance id="g_28" />
<t:button id="g_29" stylevariant="successButton" text="Auftrag" width="100%" />
<t:coldistance id="g_30" />
<t:button id="g_31" stylevariant="successButton" text="Gelegenheit zur Stellungnahme" width="100%" />
<t:coldistance id="g_32" />
<t:button id="g_33" stylevariant="successButton" text="Schlusszeichnung" width="100%" />
<t:coldistance id="g_34" />
<t:button id="g_35" stylevariant="successButton" text="anderweitige Erledigung" width="100%" />
<t:coldistance id="g_36" />
<t:button id="g_37" stylevariant="successButton" text="Einrichtungswechsel" width="100%" />
<t:coldistance id="g_38" />
<t:button id="g_39" image="/awesomefont(f2b6,#FFFFFF,15)" stylevariant="infoButton" text="Vorgangsdokumente zuordne" width="100%" />
</t:adaptivetoolbar>
<t:coldistance id="g_40" />
</t:foldablepaneheaderrow>
<t:row id="g_41" >
<t:pane id="g_42" >
<t:row id="g_43" >
<t:label id="g_44" font="weight:bold" text="GZ" width="200" />
<t:label id="g_45" text="EI 1234/1-1" />
</t:row>
<t:row id="g_46" >
<t:label id="g_47" font="weight:bold" text="Kurztitel" width="200" />
<t:label id="g_48" text="Schwarzbrot - Verbreitung und Vermarktung" />
</t:row>
<t:row id="g_49" >
<t:label id="g_50" font="weight:bold" text="Antragstatus" width="200" />
<t:label id="g_51" text="Vorbegutachtung abgeschlossen (15.03.2017)" />
</t:row>
</t:pane>
<t:coldistance id="g_52" width="50%" />
<t:pane id="g_53" >
<t:row id="g_54" >
<t:label id="g_55" font="weight:bold" text="Federführung" width="200" />
<t:label id="g_56" text="I-INF-1  (Bender, Axel / Benicke, Oliver)" />
</t:row>
<t:row id="g_57" >
<t:label id="g_58" font="weight:bold" text="Antragsumme" width="200" />
<t:label id="g_59" text="245.000,00 €" />
</t:row>
<t:row id="g_60" >
<t:label id="g_61" font="weight:bold" text="Bewilligungssumme" width="200" />
<t:label id="g_62" text="0,00 €" />
</t:row>
</t:pane>
</t:row>
</t:foldablepane>
</t:row>
<t:row id="g_63" >
<t:pane id="g_64" rendered="false" stylevariant="Navigation" >
<t:row id="g_65" >
<t:button id="g_66" stylevariant="NavigationButton" text="Übersicht" />
<t:button id="g_67" stylevariant="NavigationButton" text="Dokumente" />
<t:button id="g_68" stylevariant="NavigationButton" text="Wiedervorlage" />
<t:coldistance id="g_69" width="100%" />
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_70" height="3" />
<t:rowbodypane id="g_71" >
<t:row id="g_72" >
<t:tiledarea id="g_73" objectbinding="#{d.AntragContentUI.tiledAreaBinding}" persistid="demotiledarea" />
</t:row>
</t:rowbodypane>
</t:pane>
</t:adaptivesplitarea>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
