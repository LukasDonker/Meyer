<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_MaterialBestellungKVAg_sv">
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
<t:pane id="g_12" >
<t:row id="g_13" >
<t:label id="g_14" font="weight:bold" text="Datum" width="200" />
<t:calendarfield id="g_15" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_16" width="50" />
<t:pane id="g_17" >
<t:row id="g_18" >
<t:textwithlinks id="g_19" font="weight:bold" text="Techniker" width="150" />
<t:field id="g_20" width="100%;200" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_21" height="10" />
<t:rowadaptiveline id="g_22" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_23" font="weight:bold" text="Kundennummer" width="200" />
<t:field id="g_24" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_25" height="10" />
<t:rowadaptiveline id="g_26" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_27" font="weight:bold" text="Ansprechpartner" width="200" />
<t:autocomplete id="g_28" placeholder="Ansprechpartner auswahl" width="600" />
</t:rowadaptiveline>
<t:rowdistance id="g_29" height="15" />
<t:rowadaptiveline id="g_30" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_31" >
<t:row id="g_32" >
<t:textwithlinks id="g_33" font="weight:bold" text="Ansprechpartner Daten &lt;br&gt;&lt;br&gt;" width="200" />
<t:textwithlinks id="g_34" height="50" text="Musterkunde  &lt;br&gt; Musterstraße 123 &lt;br&gt; 11111 Musterstadt" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_35" width="50" />
</t:rowadaptiveline>
<t:rowdistance id="g_36" height="10" />
<t:rowadaptiveline id="g_37" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:label id="g_38" font="weight:bold" text="Angebot per" width="200" />
<t:radiobutton id="g_39" group="angebotper" refvalue="Mail" text="Mail" width="100" />
<t:radiobutton id="g_40" group="angebotper" refvalue="Fax" text="Fax" width="100" />
<t:radiobutton id="g_41" group="angebotper" refvalue="Post" text="Post" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_42" height="10" />
<t:rowadaptiveline id="g_43" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:label id="g_44" font="weight:bold" text="Dringend" width="200" />
<t:toggle id="g_45" />
</t:rowadaptiveline>
<t:rowdistance id="g_46" height="10" />
<t:rowadaptiveline id="g_47" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:label id="g_48" font="weight:bold" text="KVA" width="200" />
<t:toggle id="g_49" />
</t:rowadaptiveline>
<t:rowdistance id="g_50" height="10" />
<t:rowline id="g_51" />
<t:row id="g_52" >
<t:label id="g_53" font="size:14;weight:bold" text="Gerätebeschreibung" width="200" />
</t:row>
<t:rowdistance id="g_54" height="10" />
<t:rowadaptiveline id="g_55" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_56" font="weight:bold" text="Hersteller" width="200" />
<t:autocomplete id="g_57" placeholder="Hersteller" width="300" />
</t:rowadaptiveline>
<t:rowdistance id="g_58" height="10" />
<t:rowadaptiveline id="g_59" breakindex="1" breakpixels="300" >
<t:label id="g_60" font="weight:bold" text="Typ" width="200" />
<t:autocomplete id="g_61" placeholder="Typ" width="300" />
</t:rowadaptiveline>
<t:rowdistance id="g_62" height="10" />
<t:rowadaptiveline id="g_63" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_64" font="weight:bold" text="Höhe in mm" width="200" />
<t:field id="g_65" width="50" />
<t:label id="g_66" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_67" height="10" />
<t:rowadaptiveline id="g_68" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_69" font="weight:bold" text="Höhe in mm" width="200" />
<t:field id="g_70" width="50" />
<t:label id="g_71" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_72" height="10" />
<t:rowadaptiveline id="g_73" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_74" font="weight:bold" text="Tiefe in mm" width="200" />
<t:field id="g_75" width="50" />
<t:label id="g_76" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_77" height="10" />
<t:rowadaptiveline id="g_78" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_79" font="weight:bold" text="Fußhöhe / Sockelhöhein mm" width="200" />
<t:field id="g_80" width="50" />
<t:label id="g_81" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_82" height="10" />
<t:rowline id="g_83" />
<t:row id="g_84" >
<t:pane id="g_85" height="100%" padding="right:10;top:10;bottom:10" width="50%" >
<t:row id="g_86" >
<t:label id="g_87" font="size:14;weight:bold" text="Besonderheiten" width="200" />
</t:row>
<t:row id="g_88" >
<t:textarea id="g_89" height="100%" width="100%" />
</t:row>
</t:pane>
<t:pane id="g_90" padding="left:10;right:10;top:10;bottom:10" width="50%" >
<t:row id="g_91" >
<t:label id="g_92" font="size:14;weight:bold" text="Merkmale" width="200" />
</t:row>
<t:rowadaptiveline id="g_93" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_94" font="weight:bold" text="Elektro" width="200" />
<t:radiobutton id="g_95" group="elektro" refvalue="230" text="230 V" width="75" />
<t:radiobutton id="g_96" group="elektro" refvalue="400" text="400 V" width="75" />
</t:rowadaptiveline>
<t:rowdistance id="g_97" height="10" />
<t:rowadaptiveline id="g_98" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_99" font="weight:bold" text="Gas" width="200" />
<t:toggle id="g_100" />
</t:rowadaptiveline>
<t:rowdistance id="g_101" height="10" />
<t:rowadaptiveline id="g_102" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_103" font="weight:bold" text="Reinigerdosierung" width="200" />
<t:toggle id="g_104" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_105" height="10" />
<t:rowadaptiveline id="g_106" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_107" font="weight:bold" text="Motorkippung" width="200" />
<t:toggle id="g_108" />
</t:rowadaptiveline>
<t:rowdistance id="g_109" height="10" />
<t:rowadaptiveline id="g_110" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_111" font="weight:bold" text="Handkippung" width="200" />
<t:toggle id="g_112" />
</t:rowadaptiveline>
<t:rowdistance id="g_113" height="10" />
<t:rowadaptiveline id="g_114" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_115" font="weight:bold" text="Wasserenthärtung" width="200" />
<t:toggle id="g_116" />
</t:rowadaptiveline>
<t:rowdistance id="g_117" height="10" />
<t:rowadaptiveline id="g_118" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_119" font="weight:bold" text="Altgerätentsorgung" width="200" />
<t:toggle id="g_120" />
</t:rowadaptiveline>
<t:rowdistance id="g_121" height="10" />
</t:pane>
</t:row>
<t:rowdistance id="g_122" height="10" />
<t:rowline id="g_123" />
<t:row id="g_124" >
<t:label id="g_125" font="size:14;weight:bold" text="Bilder" width="200" />
</t:row>
<t:row id="g_126" >
<t:fileuploadbutton id="g_127" font="weight:bold" text="Bilder für Dokumentation Hochladen" />
</t:row>
<t:row id="g_128" >
<t:imageshaker id="g_129" height="100%" objectbinding="#{xyz.xyz}" width="100%" />
</t:row>
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
