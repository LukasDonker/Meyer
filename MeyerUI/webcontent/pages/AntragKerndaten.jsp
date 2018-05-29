<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AntragKerndateng_sv">
<t:rowheader id="g_1" >
<t:adaptivetoolbar id="g_2" width="100%" >
<t:button id="g_3" image="/awesomefont(f0c7,#FFFFFF,15)" stylevariant="successButton" text="Speichern" />
<t:coldistance id="g_4" />
<t:button id="g_5" image="/awesomefont(f00d,#FFFFFF,15)" stylevariant="dangerButton" text="Abbrechen" />
<t:coldistance id="g_6" width="100%" />
<t:button id="g_7" image="/awesomefont(f019,#FFFFFF,15)" stylevariant="infoButton" text="PDF Download" />
</t:adaptivetoolbar>
</t:rowheader>
<t:rowbodypane id="g_8" background="#E9E9E9" padding="left:20;top:20" >
<t:row id="g_9" >
<t:scrollpane id="g_10" height="100%" padding="right:5" width="100%" >
<t:rowadaptiveline id="g_11" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_12" font="weight:bold" text="Servicenummer" width="200" />
<t:field id="g_13" enabled="false" placeholder="Servicenummer" text="#{d.AntragKerndatenUI.servicenummer}" width="200" />
<t:coldistance id="g_14" width="50" />
<t:label id="g_15" font="weight:bold" text="Disponent" width="150" />
<t:field id="g_16" enabled="false" placeholder="Servicenummer" text="#{d.AntragKerndatenUI.disponent}" width="200" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_17" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_18" font="weight:bold" text="TSNummer" width="200" />
<t:field id="g_19" enabled="#{d.AntragKerndatenUI.newEinsatzbericht}" placeholder="TSNummer" text="#{d.AntragKerndatenUI.tsnummer}" width="200" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_20" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_21" font="weight:bold" text="TANummer" width="200" />
<t:field id="g_22" enabled="#{d.AntragKerndatenUI.newEinsatzbericht}" placeholder="TANummer" text="#{d.AntragKerndatenUI.tanummer}" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_23" height="15" />
<t:rowadaptiveline id="g_24" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_25" font="weight:bold" text="Kundennummer" width="200" />
<t:field id="g_26" enabled="#{d.AntragKerndatenUI.newEinsatzbericht}" placeholder="Kundennummer" text="#{d.AntragKerndatenUI.kundennummer}" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_27" height="10" />
<t:rowadaptiveline id="g_28" breakindex="1" breakpixels="300" comment="GZ" rendered="#{d.AntragKerndatenUI.newEinsatzbericht}" >
<t:label id="g_29" font="weight:bold" text="Ansprechpartner" width="200" />
<t:autocomplete id="g_30" placeholder="Ansprechpartner auswahl" value="#{d.AntragKerndatenUI.ansprechpartner}" width="600" />
</t:rowadaptiveline>
<t:rowdistance id="g_31" height="15" />
<t:rowadaptiveline id="g_32" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_33" >
<t:row id="g_34" >
<t:textwithlinks id="g_35" font="weight:bold" text="Einsatzort&lt;br&gt;&lt;br&gt;" width="200" />
<t:textarea id="g_36" enabled="false" height="50" helpid="#{d.AntragKerndatenUI.oldEinsatzbericht}" placeholder="Wird durch Ansprechpartner gefüllt." text="#{d.AntragKerndatenUI.einsatzort}" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_37" width="50" />
<t:pane id="g_38" >
<t:row id="g_39" >
<t:textwithlinks id="g_40" font="weight:bold" text="Termin" width="150" />
<t:calendarfield id="g_41" enabled="#{d.AntragKerndatenUI.newEinsatzbericht}" exacttime="true" flush="true" format="datetime" formatmask="short" timezone="Europe/Paris" value="#{d.AntragKerndatenUI.termin}" width="100%;150" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_42" height="10" />
<t:rowadaptiveline id="g_43" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_44" >
<t:row id="g_45" >
<t:textwithlinks id="g_46" font="weight:bold" text="Ansprechpartner &lt;br&gt;&lt;br&gt;" width="200" />
<t:textarea id="g_47" enabled="false" height="50" placeholder="Wird durch Ansprechpartner gefüllt." text="#{d.AntragKerndatenUI.ansprechpartnerDaten}" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_48" width="50" />
<t:pane id="g_49" >
<t:row id="g_50" >
<t:textwithlinks id="g_51" font="weight:bold" text="Techniker" width="150" />
<t:field id="g_52" enabled="#{d.AntragKerndatenUI.newEinsatzbericht}" flush="true" flushtimer="1000" placeholder="Techniker 1, Techniker 2" text="#{d.AntragKerndatenUI.techniker}" width="100%;200" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_53" height="10" />
<t:rowadaptiveline id="g_54" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_55" font="weight:bold" text="Auszuführende Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_56" objectbinding="#{d.AntragKerndatenUI.auszufuehrendeArbeitenList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_57" text="Tätigkeiten" width="100%" >
<t:longtextfield id="g_58" placeholder="Tätigkeiten" text=".{taetigkeiten}" width="100%" />
</t:gridcol>
<t:gridcol id="g_59" text="Gerätenummer" width="100" >
<t:field id="g_60" placeholder="Störung" text=".{geraetenummer}" />
</t:gridcol>
<t:gridcol id="g_61" text="Techniker" width="100" >
<t:combobox id="g_62" placeholder="Techniker" validvaluesbinding="#{d.AntragKerndatenUI.cmb_techniker}" value=".{techniker}" />
</t:gridcol>
<t:gridcol id="g_63" rendered="true" width="20" >
<t:awesomefonticon id="g_64" actionListener=".{onRemove}" fontfamily="FontAwesome" iconhexcode="f1f8" iconsize="18" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_65" >
<t:coldistance id="g_66" width="200" />
<t:button id="g_67" actionListener="#{d.AntragKerndatenUI.onAddArbeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Tätigkeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_68" height="15" />
<t:rowline id="g_69" />
<t:rowdistance id="g_70" height="20" />
<t:rowadaptiveline id="g_71" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_72" font="weight:bold" text="Gerät n. DIN 0701 überprüft" width="200" />
<t:toggle id="g_73" flush="true" selected="#{d.AntragKerndatenUI.dinUeberprueft}" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_74" height="15" />
<t:rowadaptiveline id="g_75" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_76" font="weight:bold" text="Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_77" objectbinding="#{d.AntragKerndatenUI.arbeitenList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_78" text="Techniker" width="100" >
<t:combobox id="g_79" placeholder="Techniker" validvaluesbinding="#{d.AntragKerndatenUI.cmb_techniker}" value=".{techniker}" />
</t:gridcol>
<t:gridcol id="g_80" text="Arbeitsstunden" width="100" >
<t:field id="g_81" placeholder="Arbeitsstunden" regex="[01]+" text=".{arbeitsstunden}" />
</t:gridcol>
<t:gridcol id="g_82" text="Gerätenummer" width="100" >
<t:field id="g_83" placeholder="Gerätenummer" width="100" />
</t:gridcol>
<t:gridcol id="g_84" text="Arbeitsbericht" width="100%" >
<t:longtextfield id="g_85" placeholder="Arbeitsbericht" width="100%" />
</t:gridcol>
<t:gridcol id="g_86" width="20" >
<t:awesomefonticon id="g_87" actionListener=".{onRemove}" fontfamily="FontAwesome" iconhexcode="f1f8" iconsize="18" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_88" >
<t:coldistance id="g_89" width="200" />
<t:button id="g_90" actionListener="#{d.AntragKerndatenUI.onAddArbeitszeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Arbeitszeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_91" height="15" />
<t:rowadaptiveline id="g_92" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_93" font="weight:bold" text="Überstunden" width="200" />
<t:radiobutton id="g_94" group="ueberstunden" refvalue="0" text="0%" value="#{d.AntragKerndatenUI.ueberstunden}" width="50" />
<t:radiobutton id="g_95" group="ueberstunden" refvalue="0.25" text="25%" value="#{d.AntragKerndatenUI.ueberstunden}" width="50" />
<t:radiobutton id="g_96" group="ueberstunden" refvalue="0.5" text="50%" value="#{d.AntragKerndatenUI.ueberstunden}" width="50" />
<t:radiobutton id="g_97" group="ueberstunden" refvalue="1" text="100%" value="#{d.AntragKerndatenUI.ueberstunden}" width="50" />
</t:rowadaptiveline>
<t:rowdistance id="g_98" height="5" />
<t:rowdistance id="g_99" height="5" />
<t:rowadaptiveline id="g_100" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_101" font="weight:bold" text="Notdienstpauschale" width="200" />
<t:toggle id="g_102" selected="#{d.AntragKerndatenUI.notdienstpauschale}" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_103" height="15" />
<t:rowadaptiveline id="g_104" breakindex="1" breakpixels="300" >
<t:textwithlinks id="g_105" font="weight:bold" text="Teile und Pauschalarbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_106" objectbinding="#{d.AntragKerndatenUI.tundPaList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_107" text="Stückzahl" width="75" >
<t:field id="g_108" text=".{stueckzahl}" />
</t:gridcol>
<t:gridcol id="g_109" text="Bezeichnung" width="100%" >
<t:longtextfield id="g_110" enabled="false" text=".{bezeichnung}" />
</t:gridcol>
<t:gridcol id="g_111" text="B" width="20" >
<t:checkbox id="g_112" selected=".{b}" />
</t:gridcol>
<t:gridcol id="g_113" text="L" width="20" >
<t:checkbox id="g_114" selected=".{l}" />
</t:gridcol>
<t:gridcol id="g_115" width="20" >
<t:awesomefonticon id="g_116" actionListener=".{onRemove}" fontfamily="FontAwesome" iconhexcode="f1f8" iconsize="18" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_117" >
<t:coldistance id="g_118" width="200" />
<t:button id="g_119" actionListener="#{d.AntragKerndatenUI.onAddTeileUndPauschalarbeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Teil hinzufügen" width="160" />
<t:coldistance id="g_120" width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_121" height="15" />
<t:rowdistance id="g_122" height="30" />
<t:rowadaptiveline id="g_123" >
<t:label id="g_124" font="weight:bold" text="Weitere Arbeiten Erforderlich" width="200" />
<t:toggle id="g_125" flush="true" selected="#{d.AntragKerndatenUI.weitererEinsatz}" />
<t:coldistance id="g_126" />
<t:button id="g_127" actionListener="#{d.AntragKerndatenUI.onOpenZusatzEinsatz}" enabled="#{d.AntragKerndatenUI.weitererEinsatz}" stylevariant="infoButton" text="Materialbestellung öffnen" />
</t:rowadaptiveline>
<t:rowdistance id="g_128" height="5" />
<t:rowadaptiveline id="g_129" breakindex="1" breakpixels="300" >
<t:label id="g_130" font="weight:bold" text="Garantieantrag" width="200" />
<t:toggle id="g_131" flush="true" selected="#{d.AntragKerndatenUI.garantieAntrag}" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_132" height="5" />
<t:rowdistance id="g_133" height="30" />
<t:rowadaptiveline id="g_134" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_135" font="weight:bold" text="Unterschrift Kunde" width="200" />
<t:button id="g_136" actionListener="#{d.AntragKerndatenUI.onOpenKundeUnterschrift}" stylevariant="successButton" text="Unterschreiben" />
<t:coldistance id="g_137" width="100%" />
<t:touchsignature id="g_138" enabled="false" height="130" pixelvalues="#{d.AntragKerndatenUI.unterschriftKunde}" width="350" />
</t:rowadaptiveline>
<t:row id="g_139" >
<t:coldistance id="g_140" width="100%" />
<t:label id="g_141" text="#{d.AntragKerndatenUI.unterschriftNameKunde}" width="350" />
</t:row>
<t:rowdistance id="g_142" height="15" />
<t:rowadaptiveline id="g_143" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_144" font="weight:bold" text="Unterschrift Techniker" width="200" />
<t:button id="g_145" actionListener="#{d.AntragKerndatenUI.onOpenTechnikerUnterschrift}" stylevariant="successButton" text="Unterschreiben" />
<t:coldistance id="g_146" width="100%" />
<t:touchsignature id="g_147" enabled="false" height="130" pixelvalues="#{d.AntragKerndatenUI.unterschriftTechniker}" width="350" />
</t:rowadaptiveline>
<t:row id="g_148" >
<t:coldistance id="g_149" width="100%" />
<t:label id="g_150" text="#{d.AntragKerndatenUI.unterschriftNameTechniker}" width="350" />
</t:row>
<t:rowdistance id="g_151" height="50" />
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
