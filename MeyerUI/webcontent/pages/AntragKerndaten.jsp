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
<t:field id="g_13" enabled="false" text="Servicenummer 1" width="200" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_14" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_15" font="weight:bold" text="TSNummer" width="200" />
<t:field id="g_16" enabled="false" text="TSNummer 1" width="200" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_17" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_18" font="weight:bold" text="TANummer" width="200" />
<t:field id="g_19" enabled="false" text="TANummer 1" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_20" height="15" />
<t:rowadaptiveline id="g_21" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_22" >
<t:row id="g_23" >
<t:textwithlinks id="g_24" font="weight:bold" text="Einsatzort &lt;br&gt;&lt;br&gt;" width="200" />
<t:textwithlinks id="g_25" height="50" text="Musterkunde  &lt;br&gt; Musterstraße 123 &lt;br&gt; 11111 Musterstadt" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_26" width="50" />
<t:pane id="g_27" >
<t:row id="g_28" >
<t:textwithlinks id="g_29" font="weight:bold" text="Termin" width="150" />
<t:calendarfield id="g_30" enabled="false" exacttime="true" flush="true" format="datetime" formatmask="short" timezone="Europe/Paris" value="1519462694850" width="100%;150" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_31" height="10" />
<t:rowadaptiveline id="g_32" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_33" >
<t:row id="g_34" >
<t:textwithlinks id="g_35" font="weight:bold" text="Ansprechpartner &lt;br&gt;" width="200" />
<t:textwithlinks id="g_36" text="Max Mustermann &lt;br&gt; Tel: 0123 456789 &lt;br&gt;  Email: &lt;a href=&#34;#&#34;&gt;max.mustermann@kueche.de&lt;/a&gt;" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_37" width="50" />
<t:pane id="g_38" >
<t:row id="g_39" >
<t:textwithlinks id="g_40" font="weight:bold" text="Techniker" width="150" />
<t:field id="g_41" enabled="false" text="Techniker 1, Techniker 2" width="100%;200" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_42" height="10" />
<t:rowadaptiveline id="g_43" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_44" font="weight:bold" text="Auszuführende Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_45" objectbinding="#{d.AntragKerndatenUI.arbeitenList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_46" text="Tätigkeiten" width="100%" >
<t:longtextfield id="g_47" text=".{taetigkeiten}" />
</t:gridcol>
<t:gridcol id="g_48" text="Störung" width="100" >
<t:field id="g_49" text=".{stoerung}" />
</t:gridcol>
<t:gridcol id="g_50" text="Techniker" width="100" >
<t:field id="g_51" text=".{techniker}" />
</t:gridcol>
<t:gridcol id="g_52" rendered="false" text="Löschen" width="100" >
<t:button id="g_53" actionListener=".{onRemove}" text="Löschen" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_54" >
<t:coldistance id="g_55" width="200" />
<t:button id="g_56" actionListener="#{d.AntragKerndatenUI.onAddArbeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Tätigkeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_57" height="15" />
<t:rowadaptiveline id="g_58" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_59" font="weight:bold" text="Gerät n. DIN 0701 überprüft" width="200" />
<t:toggle id="g_60" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_61" height="15" />
<t:rowadaptiveline id="g_62" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_63" font="weight:bold" text="Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_64" objectbinding="#{d.AntragKerndatenUI.arbeitszeitenList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_65" text="Techniker" width="100" >
<t:field id="g_66" text=".{techniker}" />
</t:gridcol>
<t:gridcol id="g_67" text="Arbeitsstunden" width="100" >
<t:field id="g_68" regex="[01]+" text=".{arbeitsstunden}" />
</t:gridcol>
<t:gridcol id="g_69" text="Von" width="100" >
<t:field id="g_70" width="100" />
</t:gridcol>
<t:gridcol id="g_71" text="Bis" width="100" >
<t:field id="g_72" text=".{bis}" width="100" />
</t:gridcol>
<t:gridcol id="g_73" text="Pauschalen" width="100" >
<t:field id="g_74" text=".{pauschalen}" />
</t:gridcol>
<t:gridcol id="g_75" text="Gerätenummer" width="100" />
<t:gridcol id="g_76" text="Arbeitsbericht" width="100%" />
<t:gridcol id="g_77" rendered="false" text="Löschen" width="100" >
<t:button id="g_78" actionListener=".{onRemove}" text="Löschen" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_79" >
<t:coldistance id="g_80" width="200" />
<t:button id="g_81" actionListener="#{d.AntragKerndatenUI.onAddArbeitszeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Arbeitszeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_82" height="15" />
<t:rowadaptiveline id="g_83" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_84" font="weight:bold" text="Überstunden" width="200" />
<t:radiobutton id="g_150" group="ueberstunden" refvalue="0" text="0%" width="50" />
<t:radiobutton id="g_85" group="ueberstunden" refvalue="0.25" text="25%" width="50" />
<t:radiobutton id="g_86" group="ueberstunden" refvalue="0.5" text="50%" width="50" />
<t:radiobutton id="g_87" group="ueberstunden" refvalue="1" text="100%" width="50" />
</t:rowadaptiveline>
<t:rowdistance id="g_88" height="5" />
<t:rowadaptiveline id="g_89" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_90" font="weight:bold" text="Fahrtpauschale" width="200" />
<t:toggle id="g_91" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_92" height="5" />
<t:rowadaptiveline id="g_93" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_94" font="weight:bold" text="Notdienstpauschale" width="200" />
<t:toggle id="g_95" selected="#{d.AntragKerndatenUI.notdienstpauschale}" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_96" height="15" />
<t:rowadaptiveline id="g_97" breakindex="1" breakpixels="300" >
<t:textwithlinks id="g_98" font="weight:bold" text="Teile und Pauschalarbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_99" objectbinding="#{d.AntragKerndatenUI.tundPa}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_100" text="Stückzahl" width="75" >
<t:field id="g_101" text=".{stueckzahl}" />
</t:gridcol>
<t:gridcol id="g_102" text="Bezeichnung" width="100%" >
<t:longtextfield id="g_103" text=".{bezeichnung}" />
</t:gridcol>
<t:gridcol id="g_104" text="B" width="20" >
<t:checkbox id="g_105" selected=".{b}" />
</t:gridcol>
<t:gridcol id="g_106" text="L" width="20" >
<t:checkbox id="g_107" selected=".{l}" />
</t:gridcol>
<t:gridcol id="g_108" rendered="false" text="Löschen" width="100" >
<t:button id="g_109" actionListener=".{onRemove}" text="Löschen" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_110" >
<t:coldistance id="g_111" width="200" />
<t:button id="g_112" actionListener="#{d.AntragKerndatenUI.onAddTeileUndPauschalarbeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Teil hinzufügen" width="160" />
<t:coldistance id="g_113" width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_114" height="15" />
<t:rowadaptiveline id="g_115" >
<t:label id="g_116" font="weight:bold" text="Materialbestellungen" width="200" />
<t:button id="g_117" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="successButton" text="Materialbestellung hinzufügen" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_118" height="30" />
<t:rowadaptiveline id="g_119" breakindex="1" breakpixels="300" comment="Bewilligungsdauer" >
<t:label id="g_120" font="weight:bold" text="Abgeschlossen" width="200" />
<t:toggle id="g_121" selected="#{d.AntragKerndatenUI.abgeschlossen}" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_122" height="5" />
<t:rowadaptiveline id="g_123" breakindex="1" breakpixels="300" comment="Bewilligungssumme" >
<t:label id="g_124" font="weight:bold" text="Garantieantrag" width="200" />
<t:toggle id="g_125" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_126" height="5" />
<t:rowadaptiveline id="g_127" breakindex="1" breakpixels="300" comment="Bewilligungssumme" >
<t:label id="g_128" font="weight:bold" text="Weiterer Einsatz notwendig?" width="200" />
<t:toggle id="g_129" flush="true" selected="#{d.AntragKerndatenUI.weitererEinsatz}" />
<t:coldistance id="g_130" width="50" />
<t:pane id="g_131" flusharea="true" rendered="#{d.AntragKerndatenUI.weitererEinsatz}" >
<t:row id="g_132" >
<t:label id="g_133" text="Personenanzahl" />
<t:coldistance id="g_134" />
<t:field id="g_135" width="30" />
<t:coldistance id="g_136" width="30" />
<t:label id="g_137" text="Stundenschätzung" />
<t:coldistance id="g_138" />
<t:field id="g_139" width="30" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_140" height="30" />
<t:rowadaptiveline id="g_141" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_142" font="weight:bold" text="Unterschrift Kunde" width="200" />
<t:button id="g_143" actionListener="#{d.AntragKerndatenUI.onOpenUnterschrift}" stylevariant="successButton" text="Unterschreiben" />
</t:rowadaptiveline>
<t:rowdistance id="g_144" height="15" />
<t:rowadaptiveline id="g_145" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_146" font="weight:bold" text="Unterschrift Techniker" width="200" />
<t:button id="g_147" actionListener="#{d.AntragKerndatenUI.onOpenUnterschrift}" stylevariant="successButton" text="Unterschreiben" />
</t:rowadaptiveline>
<t:rowdistance id="g_148" height="50" />
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
