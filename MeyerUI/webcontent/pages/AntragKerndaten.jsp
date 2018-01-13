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
<t:label id="g_13" text="Servicenummer 1" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_14" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_15" font="weight:bold" text="TSNummer" width="200" />
<t:label id="g_16" text="TSNummer 1" />
</t:rowadaptiveline>
<t:rowdistance id="g_17" height="15" />
<t:rowadaptiveline id="g_18" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_19" >
<t:row id="g_20" >
<t:textwithlinks id="g_21" font="weight:bold" text="Einsatzort &lt;br&gt; &lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:textwithlinks id="g_22" text="Musterkunde &lt;br&gt; Musterstraße 123 &lt;br&gt; 11111 Musterstadt" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_23" width="50" />
<t:pane id="g_24" >
<t:row id="g_25" >
<t:textwithlinks id="g_26" font="weight:bold" text="Termin&lt;br&gt; &lt;br&gt;&lt;br&gt;" width="150" />
<t:textwithlinks id="g_27" text="11.07.2017 &lt;br&gt;09:00-11:00 Uhr&lt;br&gt;&lt;br&gt;" width="100%;100" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_28" height="10" />
<t:rowadaptiveline id="g_29" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_30" >
<t:row id="g_31" >
<t:textwithlinks id="g_32" font="weight:bold" text="Ansprechpartner &lt;br&gt; &lt;br&gt;&lt;br&gt;" width="200" />
<t:textwithlinks id="g_33" text="Max Mustermann &lt;br&gt; Tel: 0123 456789 &lt;br&gt;  Email: &lt;a href=&#34;#&#34;&gt;max.mustermann@kueche.de&lt;/a&gt;" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_34" width="50" />
<t:pane id="g_35" >
<t:row id="g_36" >
<t:textwithlinks id="g_37" font="weight:bold" text="Techniker&lt;br&gt; &lt;br&gt;&lt;br&gt;" width="150" />
<t:textwithlinks id="g_38" text="Techniker 1  &lt;br&gt;&lt;br&gt;&lt;br&gt;" width="100%;100" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_39" height="10" />
<t:rowadaptiveline id="g_40" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_41" font="weight:bold" text="Auszuführende Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_42" objectbinding="#{d.AntragKerndatenUI.arbeitenList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_43" text="Tätigkeiten" width="100%" >
<t:longtextfield id="g_44" text=".{taetigkeiten}" />
</t:gridcol>
<t:gridcol id="g_45" text="Störung" width="100" >
<t:field id="g_46" text=".{stoerung}" />
</t:gridcol>
<t:gridcol id="g_47" text="Techniker" width="100" >
<t:field id="g_48" text=".{techniker}" />
</t:gridcol>
<t:gridcol id="g_49" rendered="false" text="Löschen" width="100" >
<t:button id="g_50" actionListener=".{onRemove}" text="Löschen" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_51" >
<t:coldistance id="g_52" width="200" />
<t:button id="g_53" actionListener="#{d.AntragKerndatenUI.onAddArbeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Tätigkeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_54" height="15" />
<t:rowadaptiveline id="g_55" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_56" font="weight:bold" text="Gerät n. DIN 0701 überprüft" width="200" />
<t:toggle id="g_57" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_58" height="15" />
<t:rowadaptiveline id="g_59" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_60" font="weight:bold" text="Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_61" objectbinding="#{d.AntragKerndatenUI.arbeitszeitenList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_62" text="Techniker" width="100" >
<t:field id="g_63" text=".{techniker}" />
</t:gridcol>
<t:gridcol id="g_64" text="Arbeitsstunden" width="100" >
<t:field id="g_65" regex="[01]+" text=".{arbeitsstunden}" />
</t:gridcol>
<t:gridcol id="g_66" text="Von" width="100" >
<t:field id="g_67" width="100" />
</t:gridcol>
<t:gridcol id="g_68" text="Bis" width="100" >
<t:field id="g_69" text=".{bis}" width="100" />
</t:gridcol>
<t:gridcol id="g_70" text="Pauschalen" width="100" >
<t:field id="g_71" text=".{pauschalen}" />
</t:gridcol>
<t:gridcol id="g_72" text="Gerätenummer" width="100" />
<t:gridcol id="g_73" text="Arbeitsbericht" width="100%" />
<t:gridcol id="g_74" rendered="false" text="Löschen" width="100" >
<t:button id="g_75" actionListener=".{onRemove}" text="Löschen" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_76" >
<t:coldistance id="g_77" width="200" />
<t:button id="g_78" actionListener="#{d.AntragKerndatenUI.onAddArbeitszeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Arbeitszeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_79" height="15" />
<t:rowadaptiveline id="g_80" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_81" font="weight:bold" text="Fahrtpauschale" width="200" />
<t:toggle id="g_82" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_83" height="5" />
<t:rowadaptiveline id="g_84" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_85" font="weight:bold" text="Notdienstpauschale" width="200" />
<t:toggle id="g_86" selected="#{d.AntragKerndatenUI.notdienstpauschale}" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_87" height="15" />
<t:rowadaptiveline id="g_88" breakindex="1" breakpixels="300" >
<t:textwithlinks id="g_89" font="weight:bold" text="Teile und Pauschalarbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_90" objectbinding="#{d.AntragKerndatenUI.tundPa}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_91" text="Stückzahl" width="75" >
<t:field id="g_92" text=".{stueckzahl}" />
</t:gridcol>
<t:gridcol id="g_93" text="Bezeichnung" width="100%" >
<t:longtextfield id="g_94" text=".{bezeichnung}" />
</t:gridcol>
<t:gridcol id="g_95" text="B" width="20" >
<t:checkbox id="g_96" selected=".{b}" />
</t:gridcol>
<t:gridcol id="g_97" text="L" width="20" >
<t:checkbox id="g_98" selected=".{l}" />
</t:gridcol>
<t:gridcol id="g_99" rendered="false" text="Löschen" width="100" >
<t:button id="g_100" actionListener=".{onRemove}" text="Löschen" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_101" >
<t:coldistance id="g_102" width="200" />
<t:button id="g_103" actionListener="#{d.AntragKerndatenUI.onAddTeileUndPauschalarbeiten}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Teil hinzufügen" width="160" />
<t:coldistance id="g_104" width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_105" height="15" />
<t:rowadaptiveline id="g_106" >
<t:label id="g_107" font="weight:bold" text="Materialbestellungen" width="200" />
<t:button id="g_108" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="successButton" text="Materialbestellung hinzufügen" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_109" height="30" />
<t:rowadaptiveline id="g_110" breakindex="1" breakpixels="300" comment="Bewilligungsdauer" >
<t:label id="g_111" font="weight:bold" text="Abgeschlossen" width="200" />
<t:toggle id="g_112" selected="#{d.AntragKerndatenUI.abgeschlossen}" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_113" height="5" />
<t:rowadaptiveline id="g_114" breakindex="1" breakpixels="300" comment="Bewilligungssumme" >
<t:label id="g_115" font="weight:bold" text="Garantieantrag" width="200" />
<t:toggle id="g_116" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_117" height="5" />
<t:rowadaptiveline id="g_118" breakindex="1" breakpixels="300" comment="Bewilligungssumme" >
<t:label id="g_119" font="weight:bold" text="Weiterer Einsatz notwendig?" width="200" />
<t:toggle id="g_120" flush="true" selected="#{d.AntragKerndatenUI.weitererEinsatz}" />
<t:coldistance id="g_121" width="50" />
<t:pane id="g_122" rendered="#{d.AntragKerndatenUI.weitererEinsatz}" >
<t:row id="g_123" >
<t:label id="g_124" text="Personenanzahl" />
<t:coldistance id="g_125" />
<t:field id="g_126" width="30" />
<t:coldistance id="g_127" width="30" />
<t:label id="g_128" text="Stundenschätzung" />
<t:coldistance id="g_129" />
<t:field id="g_130" width="30" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_131" height="30" />
<t:rowadaptiveline id="g_132" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_133" font="weight:bold" text="Unterschrift Kunde" width="200" />
<t:button id="g_134" actionListener="#{d.AntragKerndatenUI.onOpenUnterschrift}" stylevariant="successButton" text="Unterschreiben" />
</t:rowadaptiveline>
<t:rowdistance id="g_135" height="15" />
<t:rowadaptiveline id="g_136" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_137" font="weight:bold" text="Unterschrift Techniker" width="200" />
<t:button id="g_138" actionListener="#{d.AntragKerndatenUI.onOpenUnterschrift}" stylevariant="successButton" text="Unterschreiben" />
</t:rowadaptiveline>
<t:rowdistance id="g_139" height="50" />
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
