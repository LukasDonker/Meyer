<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_ZusatzEinsatzg_sv">
<t:rowtitlebar id="g_1" text="Materialbestellung" >
<t:coldistance id="g_2" />
<t:button id="g_3" stylevariant="successButton" text="Speichern" />
</t:rowtitlebar>
<t:rowbodypane id="g_4" padding="left:20;right:20;top:20;bottom:20" >
<t:row id="g_5" >
<t:label id="g_6" text="Kunde" width="150" />
<t:coldistance id="g_7" />
<t:field id="g_8" enabled="false" text="#{d.ZusatzEinsatzUI.kunde}" width="200" />
<t:coldistance id="g_9" width="100%" />
<t:calendarfield id="g_10" enabled="false" value="#{d.ZusatzEinsatzUI.date}" width="100" />
</t:row>
<t:rowdistance id="g_11" height="10" />
<t:row id="g_12" >
<t:label id="g_13" text="TA-Nummer" width="150" />
<t:coldistance id="g_14" />
<t:field id="g_15" enabled="false" text="#{d.ZusatzEinsatzUI.taNummer}" width="200" />
</t:row>
<t:rowdistance id="g_16" height="20" />
<t:row id="g_17" >
<t:label id="g_18" text="Bis wann" width="150" />
<t:coldistance id="g_19" />
<t:calendarfield id="g_20" flush="true" value="#{d.ZusatzEinsatzUI.bisWann}" width="100" />
<t:coldistance id="g_21" width="20" />
<t:label id="g_22" font="weight:bold" text="Express" />
<t:coldistance id="g_23" />
<t:toggle id="g_24" flush="true" selected="#{d.ZusatzEinsatzUI.express}" />
<t:coldistance id="g_25" width="35%;100" />
<t:label id="g_26" font="weight:bold" text="KVA" />
<t:coldistance id="g_27" />
<t:toggle id="g_28" flush="true" selected="#{d.ZusatzEinsatzUI.kva}" />
</t:row>
<t:rowdistance id="g_29" height="10" />
<t:row id="g_30" >
<t:label id="g_31" text="Personenanzahl" width="150" />
<t:coldistance id="g_32" />
<t:combofield id="g_33" flush="true" text="#{d.ZusatzEinsatzUI.personenAnzahl}" width="40" />
<t:coldistance id="g_34" width="50" />
<t:label id="g_35" text="Stundenschätzung pro Mitarbeiter" />
<t:coldistance id="g_36" />
<t:field id="g_37" flush="true" text="#{d.ZusatzEinsatzUI.stundenSchaetzung}" width="30" />
<t:coldistance id="g_38" />
<t:label id="g_39" text="sdt." />
</t:row>
<t:rowdistance id="g_40" height="20" />
<t:row id="g_41" >
<t:label id="g_42" font="weight:bold" text="Infos zum Kunden und für den nächsten Termin:" />
</t:row>
<t:row id="g_43" >
<t:textarea id="g_44" flush="true" flushtimer="2000" height="150" placeholder="Ansprechpartner, Telefonnummer, besondere Angaben ö.ä." text="#{d.ZusatzEinsatzUI.infos}" width="100%" />
</t:row>
<t:rowdistance id="g_45" height="25" />
<t:row id="g_46" >
<t:label id="g_47" font="weight:bold" text="Materialbestellungen:" />
<t:coldistance id="g_48" width="100%" />
<t:icon id="g_49" actionListener="#{d.ZusatzEinsatzUI.addNewMaterialBestellung}" image="/awesomefont(f067,#000000,12)" />
</t:row>
<t:rowline id="g_50" />
<t:repeat id="g_51" listbinding="#{d.ZusatzEinsatzUI.listMaterialBestellung}" >
<t:rowdistance id="g_52" height="5" />
<t:row id="g_53" >
<t:foldablepane id="g_54" text="Materialbestellung" width="100%" >
<t:foldablepaneheaderrow id="g_55" >
<t:icon id="g_56" actionListener=".{onRemove}" image="/awesomefont(f1f8,#FFFFFF,15)" />
</t:foldablepaneheaderrow>
<t:row id="g_57" >
<t:coldistance id="g_58" width="100%" />
<t:field id="g_59" text=".{meyernummer}" width="100" />
<t:button id="g_60" stylevariant="primaryButton" text="Mit Meyernummer hinzufügen" />
</t:row>
<t:row id="g_61" >
<t:autocomplete id="g_62" placeholder="Hersteller" value=".{hersteller}" valueid=".{herstellerValueId}" valuesurl="#{d.ZusatzEinsatzUI.herstellerACURL}" width="100" />
<t:autocomplete id="g_63" placeholder="Typ/Modell" value=".{typModell}" valueid=".{typValueId}" valuesurl="#{d.ZusatzEinsatzUI.typModellACURL}" width="100" />
<t:field id="g_64" placeholder="S/N" text=".{seriennummer}" width="100" />
<t:field id="g_65" placeholder="Baujahr" text=".{baujahr}" width="100" />
<t:field id="g_66" placeholder="Sonstiges" text=".{sonstiges}" width="200" />
</t:row>
<t:rowdistance id="g_67" height="5" />
<t:row id="g_68" >
<t:label id="g_69" font="weight:bold" text="Material" />
</t:row>
<t:row id="g_70" >
<t:fixgrid id="g_71" height="150" objectbinding=".{teile}" sbvisibleamount="4" width="100%" >
<t:gridcol id="g_72" text="Menge" width="50" >
<t:field id="g_73" text=".{anzahl}" width="100" />
</t:gridcol>
<t:gridcol id="g_74" text="Beschreibung" width="100%" >
<t:field id="g_75" text=".{beschreibung}" width="100" />
</t:gridcol>
<t:gridcol id="g_76" text="Bestellnummer" width="100" >
<t:field id="g_77" text=".{bestellnummer}" />
</t:gridcol>
<t:gridcol id="g_78" text="Hersteller/Zulieferer" width="150" >
<t:autocomplete id="g_79" value=".{hersteller}" valueid=".{herstellerValueId}" valuesurl="#{d.ZusatzEinsatzUI.herstellerACURL}" width="100" />
</t:gridcol>
<t:gridcol id="g_80" rendered="true" width="20" >
<t:awesomefonticon id="g_81" actionListener=".{onRemove}" fontfamily="FontAwesome" iconhexcode="f1f8" iconsize="18" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:foldablepane>
</t:row>
<t:rowdistance id="g_82" height="5" />
</t:repeat>
<t:rowdistance id="g_83" height="20" />
<t:row id="g_84" >
<t:label id="g_85" font="weight:bold" text="Angebote für Neugeräte:" />
<t:coldistance id="g_86" width="100%" />
<t:icon id="g_87" actionListener="#{d.ZusatzEinsatzUI.addNewAngebot}" image="/awesomefont(f067,#000000,12)" />
</t:row>
<t:repeat id="g_88" listbinding="#{d.ZusatzEinsatzUI.listAngebot}" >
<t:rowdistance id="g_89" height="5" />
<t:row id="g_90" >
<t:foldablepane id="g_91" text="Angebot für Neugerät" width="100%" >
<t:foldablepaneheaderrow id="g_92" >
<t:icon id="g_93" actionListener=".{onRemove}" image="/awesomefont(f1f8,#FFFFFF,15)" />
</t:foldablepaneheaderrow>
<t:rowadaptiveline id="g_94" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:label id="g_95" font="weight:bold" text="Angebot per" width="200" />
<t:radiobutton id="g_96" group="angebotper" refvalue="Mail" text="Mail" value=".{angebotPer}" width="100" />
<t:radiobutton id="g_97" group="angebotper" refvalue="Fax" text="Fax" value=".{angebotPer}" width="100" />
<t:radiobutton id="g_98" group="angebotper" refvalue="Post" text="Post" value=".{angebotPer}" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_99" height="10" />
<t:rowline id="g_100" />
<t:row id="g_101" >
<t:label id="g_102" font="size:14;weight:bold" text="Gerätebeschreibung" width="200" />
</t:row>
<t:rowdistance id="g_103" height="10" />
<t:rowadaptiveline id="g_104" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_105" font="weight:bold" text="Hersteller" width="200" />
<t:autocomplete id="g_106" placeholder="Hersteller" value=".{hersteller}" valueid=".{herstellerValueId}" valuesurl="#{d.ZusatzEinsatzUI.herstellerACURL}" width="300" />
</t:rowadaptiveline>
<t:rowdistance id="g_107" height="10" />
<t:rowadaptiveline id="g_108" breakindex="1" breakpixels="300" >
<t:label id="g_109" font="weight:bold" text="Typ" width="200" />
<t:autocomplete id="g_110" placeholder="Typ" value=".{typ}" valuesurl="#{d.ZusatzEinsatzUI.typModellACURL}" width="300" />
</t:rowadaptiveline>
<t:rowdistance id="g_111" height="10" />
<t:rowadaptiveline id="g_112" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_113" font="weight:bold" text="Höhe in mm" width="200" />
<t:field id="g_114" text=".{hoehe}" width="50" />
<t:label id="g_115" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_116" height="10" />
<t:rowadaptiveline id="g_117" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_118" font="weight:bold" text="Breite in mm" width="200" />
<t:field id="g_119" text=".{breite}" width="50" />
<t:label id="g_120" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_121" height="10" />
<t:rowadaptiveline id="g_122" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_123" font="weight:bold" text="Tiefe in mm" width="200" />
<t:field id="g_124" text=".{tiefe}" width="50" />
<t:label id="g_125" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_126" height="10" />
<t:rowadaptiveline id="g_127" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_128" font="weight:bold" text="Fußhöhe / Sockelhöhein mm" width="200" />
<t:field id="g_129" text=".{fusshoehe}" width="50" />
<t:label id="g_130" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_131" height="10" />
<t:rowline id="g_132" />
<t:row id="g_133" >
<t:pane id="g_134" height="100%" padding="right:10;top:10;bottom:10" width="50%" >
<t:row id="g_135" >
<t:label id="g_136" font="size:14;weight:bold" text="Besonderheiten" width="200" />
</t:row>
<t:row id="g_137" >
<t:textarea id="g_138" height="100%" text=".{besonderheiten}" width="100%" />
</t:row>
</t:pane>
<t:pane id="g_139" padding="left:10;right:10;top:10;bottom:10" width="50%" >
<t:row id="g_140" >
<t:label id="g_141" font="size:14;weight:bold" text="Merkmale" width="200" />
</t:row>
<t:rowadaptiveline id="g_142" breakindex="1" breakpixels="200" comment="Titel ENG" >
<t:label id="g_143" font="weight:bold" text="Elektro" width="200" />
<t:radiobutton id="g_144" group="elektro" refvalue="230 V" text="230 V" value=".{volt}" width="75" />
<t:radiobutton id="g_145" group="elektro" refvalue="400 V" text="400 V" value=".{volt}" width="75" />
</t:rowadaptiveline>
<t:rowdistance id="g_146" height="10" />
<t:rowadaptiveline id="g_147" breakindex="1" breakpixels="200" comment="Titel ENG" >
<t:label id="g_148" font="weight:bold" text="Gas" width="200" />
<t:toggle id="g_149" selected=".{gas}" />
</t:rowadaptiveline>
<t:rowdistance id="g_150" height="10" />
<t:rowadaptiveline id="g_151" breakindex="1" breakpixels="200" comment="Titel ENG" >
<t:label id="g_152" font="weight:bold" text="Reinigerdosierung" width="200" />
<t:toggle id="g_153" selected=".{reinigerDosierung}" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_154" height="10" />
<t:rowadaptiveline id="g_155" breakindex="1" breakpixels="200" comment="Titel ENG" >
<t:label id="g_156" font="weight:bold" text="Motorkippung" width="200" />
<t:toggle id="g_157" selected=".{motorkippung}" />
</t:rowadaptiveline>
<t:rowdistance id="g_158" height="10" />
<t:rowadaptiveline id="g_159" breakindex="1" breakpixels="200" comment="Titel ENG" >
<t:label id="g_160" font="weight:bold" text="Handkippung" width="200" />
<t:toggle id="g_161" selected=".{handkippung}" />
</t:rowadaptiveline>
<t:rowdistance id="g_162" height="10" />
<t:rowadaptiveline id="g_163" breakindex="1" breakpixels="200" comment="Titel ENG" >
<t:label id="g_164" font="weight:bold" text="Wasserenthärtung" width="200" />
<t:toggle id="g_165" selected=".{wasserenthaertung}" />
</t:rowadaptiveline>
<t:rowdistance id="g_166" height="10" />
<t:rowadaptiveline id="g_167" breakindex="1" breakpixels="200" comment="Titel ENG" >
<t:label id="g_168" font="weight:bold" text="Altgerätentsorgung" width="200" />
<t:toggle id="g_169" selected=".{altgeraeteentsorung}" />
</t:rowadaptiveline>
<t:rowdistance id="g_170" height="10" />
</t:pane>
</t:row>
</t:foldablepane>
</t:row>
<t:rowdistance id="g_171" rendered="5" />
</t:repeat>
<t:rowline id="g_172" />
<t:rowdistance id="g_173" height="25" />
<t:rowline id="g_174" />
<t:rowdistance id="g_175" height="10" />
<t:rowadaptiveline id="g_176" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_177" font="weight:bold" text="Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="150" />
<t:fixgrid id="g_178" objectbinding="#{d.ZusatzEinsatzUI.arbeitenList}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_179" text="Techniker" width="100" >
<t:field id="g_180" text=".{techniker}" />
</t:gridcol>
<t:gridcol id="g_181" text="Arbeitsstunden" width="100" >
<t:field id="g_182" regex="[01]+" text=".{arbeitsstunden}" />
</t:gridcol>
<t:gridcol id="g_183" text="Gerätenummer" width="100" />
<t:gridcol id="g_184" text="Arbeitsbericht" width="100%" />
<t:gridcol id="g_185" rendered="false" text="Löschen" width="100" >
<t:button id="g_186" actionListener=".{onRemove}" text="Löschen" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowdistance id="g_187" height="20" />
<t:rowdistance id="g_188" height="20" />
<t:rowline id="g_189" />
<t:row id="g_190" >
<t:label id="g_191" font="size:14;weight:bold" text="Bilder" width="200" />
</t:row>
<t:row id="g_192" >
<t:imageshaker id="g_193" height="300" imageheight="275" imagewidth="500" objectbinding="#{d.ZusatzEinsatzUI.shaker}" width="100%" />
</t:row>
<t:row id="g_194" >
<t:fileuploadbutton id="g_195" actionListener="#{d.ZusatzEinsatzUI.onFileNameAction}" font="weight:bold" text="Bilder für Dokumentation Hochladen" />
<t:coldistance id="g_196" width="100%" />
<t:button id="g_197" actionListener="#{d.ZusatzEinsatzUI.onDeletePicture}" stylevariant="dangerButton" text="Ausgewähltes Bild löschen" />
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
