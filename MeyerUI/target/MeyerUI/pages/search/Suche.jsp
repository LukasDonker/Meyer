<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_search_Sucheg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:adaptivesplitarea id="g_3" height="100%" splitsize="1000" width="100%" >
<t:pane id="g_4" width="300" >
<t:row id="g_5" >
<t:fixgrid id="g_6" borderheight="0" headlinerowheight="33" height="100%" objectbinding="#{d.SucheUI.navigationTree}" sbvisibleamount="40" singleclickexecute="true" stylevariant="bootstrapTable" suppressheadline="true" width="100%" >
<t:gridheader id="g_7" rowheight="33" stylevariant="bootstrapTableBlue" >
<t:label id="g_8" background="#03519d" font="size:16;weight:bold" foreground="#ffffff" height="33" width="100%" />
</t:gridheader>
<t:gridcol id="g_9" font="size:16;weight:bold" text="Navigation" width="100%" >
<t:treenode id="g_10" font="weight:bold" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:pane>
<t:pane id="g_11" width="100%" >
<t:rowbodypane id="g_12" >
<t:row id="g_13" >
<t:foldablepane id="g_14" height="100%" text="Suchparameter" width="100%" >
<t:foldablepaneheaderrow id="g_15" >
<t:button id="g_16" actionListener="#{d.SucheUI.onSearch}" image="/awesomefont(f002,#FFFFFF,12)" stylevariant="successButton" text="Suchen" />
<t:coldistance id="g_17" />
<t:button id="g_18" stylevariant="dangerButton" text="Zurücksetzen" />
<t:coldistance id="g_19" />
<t:button id="g_20" image="/awesomefont(f0c7,#FFFFFF,12)" stylevariant="infoButton" text="Suche speichern" />
<t:coldistance id="g_21" />
</t:foldablepaneheaderrow>
<t:row id="g_22" >
<t:pane id="g_23" height="100%" width="100%" >
<t:row id="g_24" />
<t:rowdistance id="g_25" height="10" />
<t:row id="g_26" >
<t:label id="g_27" font="weight:bold" text="GZ" width="200" />
</t:row>
<t:row id="g_28" >
<t:field id="g_29" width="300" />
</t:row>
<t:rowdistance id="g_30" height="20" />
<t:row id="g_31" >
<t:label id="g_32" font="weight:bold" text="Typ" width="200" />
</t:row>
<t:row id="g_33" >
<t:pane id="g_34" >
<t:row id="g_35" >
<t:radiobutton id="g_36" group="1" refvalue="true" text="Einzelantrag" value="true" />
<t:radiobutton id="g_37" group="1" refvalue="true" text="Rahmenantrag" />
<t:radiobutton id="g_38" group="1" refvalue="true" text="alle" />
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_39" height="10" />
<t:rowadaptiveline id="g_40" breakindex="2" breakpixels="1000" rowdistance="10" >
<t:pane id="g_41" rowdistance="10" >
<t:rowadaptiveline id="g_42" breakindex="1" breakpixels="550" >
<t:label id="g_43" font="weight:bold" text="Federführendes Team" width="200" />
<t:combofield id="g_44" text="I-INF-1" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_45" breakindex="1" breakpixels="550" >
<t:label id="g_46" font="weight:bold" text="Bearbeiter" width="200" />
<t:autocomplete id="g_47" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_48" breakindex="1" breakpixels="550" >
<t:label id="g_49" font="weight:bold" text="Referent" width="200" />
<t:autocomplete id="g_50" width="300" />
</t:rowadaptiveline>
</t:pane>
<t:coldistance id="g_51" width="100" />
<t:pane id="g_52" rowdistance="10" >
<t:rowadaptiveline id="g_53" breakindex="1" breakpixels="550" >
<t:label id="g_54" font="weight:bold" text="Programm" width="200" />
<t:combofield id="g_55" text="#{d.SucheUI.programm}" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_56" breakindex="1" breakpixels="550" >
<t:label id="g_57" font="weight:bold" text="Antragsart" width="200" />
<t:combofield id="g_58" text="&lt;Auswahl&gt;" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_59" breakindex="1" breakpixels="550" >
<t:label id="g_60" font="weight:bold" text="Antragsform" width="200" />
<t:combofield id="g_61" text="&lt;Auswahl&gt;" width="300" />
</t:rowadaptiveline>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_62" height="10" />
<t:rowadaptiveline id="g_63" breakindex="2" breakpixels="1000" rowdistance="10" >
<t:pane id="g_64" >
<t:rowadaptiveline id="g_65" breakindex="1" breakpixels="550" >
<t:label id="g_66" font="weight:bold" text="Status von" width="200" />
<t:combofield id="g_67" text="#{d.SucheUI.vonbis}" width="300" />
</t:rowadaptiveline>
</t:pane>
<t:coldistance id="g_68" width="100" />
<t:pane id="g_69" >
<t:rowadaptiveline id="g_70" breakindex="1" breakpixels="550" >
<t:label id="g_71" font="weight:bold" text="Status bis" width="200" />
<t:combofield id="g_72" text="#{d.SucheUI.vonbis}" width="300" />
</t:rowadaptiveline>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_73" height="10" />
<t:row id="g_74" >
<t:label id="g_75" font="weight:bold" text="Entscheidung" width="200" />
</t:row>
<t:row id="g_76" >
<t:label id="g_77" text="von" width="30" />
<t:calendarfield id="g_78" width="100" />
<t:coldistance id="g_79" width="40" />
<t:label id="g_80" text="bis" width="30" />
<t:calendarfield id="g_81" width="100" />
</t:row>
<t:rowdistance id="g_82" height="10" />
</t:pane>
</t:row>
</t:foldablepane>
</t:row>
<t:rowdistance id="g_83" height="20" />
<t:row id="g_84" >
<t:foldablepane id="g_85" height="100%" opened="false" text="erweitert" width="100%" >
<t:rowdistance id="g_86" height="10" />
<t:rowadaptiveline id="g_87" breakindex="2" breakpixels="1000" rowdistance="10" >
<t:pane id="g_88" rowdistance="10" >
<t:rowadaptiveline id="g_89" breakindex="1" breakpixels="550" >
<t:label id="g_90" font="weight:bold" text="Titel" width="200" />
<t:field id="g_91" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_92" breakindex="1" breakpixels="550" >
<t:label id="g_93" font="weight:bold" text="Ausschreibung" width="200" />
<t:combofield id="g_94" text="&lt;Auswahl&gt;" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_95" breakindex="1" breakpixels="550" >
<t:label id="g_96" font="weight:bold" text="Fachgebiet" width="200" />
<t:combofield id="g_97" text="&lt;Auswahl&gt;" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_98" breakindex="1" breakpixels="550" >
<t:label id="g_99" font="weight:bold" text="Fachkollegium" width="200" />
<t:autocomplete id="g_100" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_101" breakindex="1" breakpixels="550" >
<t:label id="g_102" font="weight:bold" text="Fach" width="200" />
<t:autocomplete id="g_103" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_104" breakindex="1" breakpixels="550" >
<t:label id="g_105" font="weight:bold" text="Person" width="200" />
<t:field id="g_106" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_107" breakindex="2" breakpixels="550" >
<t:label id="g_108" font="weight:bold" text="Ort" width="250" />
<t:checkbox id="g_109" text="Alias" width="50" />
<t:field id="g_110" width="300" />
</t:rowadaptiveline>
</t:pane>
<t:coldistance id="g_111" width="100" />
<t:pane id="g_112" rowdistance="10" >
<t:rowadaptiveline id="g_113" breakindex="1" breakpixels="550" >
<t:label id="g_114" font="weight:bold" text="Frist" width="200" />
<t:calendarfield id="g_115" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_116" breakindex="1" breakpixels="550" >
<t:label id="g_117" font="weight:bold" text="Geräteklasse" width="200" />
<t:autocomplete id="g_118" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_119" breakindex="1" breakpixels="550" >
<t:label id="g_120" font="weight:bold" text="Zusatzkennzeichen" width="200" />
<t:combofield id="g_121" text="&lt;Auswahl&gt;" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_122" breakindex="1" breakpixels="550" >
<t:label id="g_123" font="weight:bold" text="Schlagwort" width="200" />
<t:field id="g_124" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_125" breakindex="1" breakpixels="550" >
<t:label id="g_126" font="weight:bold" text="Land" width="200" />
<t:combofield id="g_127" text="&lt;Auswahl&gt;" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_128" breakindex="1" breakpixels="550" >
<t:label id="g_129" font="weight:bold" text="Institution" width="200" />
<t:field id="g_130" width="300" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_131" breakindex="1" breakpixels="550" >
<t:label id="g_132" font="weight:bold" text="Bundesland" width="200" />
<t:combofield id="g_133" text="&lt;Auswahl&gt;" width="300" />
</t:rowadaptiveline>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_134" height="20" />
<t:row id="g_135" >
<t:label id="g_136" font="weight:bold" text="Sortierung" width="200" />
</t:row>
<t:row id="g_137" >
<t:combofield id="g_138" text="Status, Statusänderung, Ort, GZ" width="300" />
</t:row>
<t:rowdistance id="g_139" height="10" />
</t:foldablepane>
</t:row>
<t:row id="g_140" />
<t:rowdistance id="g_141" height="20" />
<t:row id="g_142" />
<t:rowdistance id="g_143" height="2%;20" />
<t:row id="g_144" >
<t:coldistance id="g_145" />
<t:button id="g_146" image="/awesomefont(f1fe,#FFFFFF,15)" stylevariant="dangerButton" text="Ergebnis auswerten" />
<t:coldistance id="g_147" width="100%" />
<t:button id="g_148" actionListener="#{d.SucheUI.antragSearch.onEditColumnDetails}" image="/awesomefont(f06e,#FFFFFF,15)" stylevariant="infoButton" text="Ansicht anpassen" />
<t:coldistance id="g_149" />
<t:button id="g_150" actionListener="#{d.SucheUI.antragSearch.onOpenGridFunctions}" image="/awesomefont(f0ad,#FFFFFF,15)" stylevariant="infoButton" text="... weitere Funktionen" />
<t:coldistance id="g_151" />
</t:row>
<t:rowdistance id="g_152" height="10" />
<t:row id="g_153" >
<t:fixgrid id="g_154" height="100%;300" objectbinding="#{d.SucheUI.antragSearch}" sbvisibleamount="200" width="100%" >
<t:gridcol id="g_155" text="GZ" width="150" >
<t:link id="g_156" font="weight:bold" text=".{gz}" />
</t:gridcol>
<t:gridcol id="g_157" text="Antragsteller" width="100" >
<t:label id="g_158" text=".{antragsteller}" />
</t:gridcol>
<t:gridcol id="g_159" text="Ort" width="100" >
<t:label id="g_160" text=".{ort}" />
</t:gridcol>
<t:gridcol id="g_161" text="Titel" width="100%;400" >
<t:label id="g_162" text=".{titel}" />
</t:gridcol>
<t:gridcol id="g_163" text="Art" width="100" >
<t:label id="g_164" text=".{art}" />
</t:gridcol>
<t:gridcol id="g_165" text="Status" width="150" >
<t:label id="g_166" text=".{status}" />
</t:gridcol>
<t:gridcol id="g_167" text="Änderung" width="100" >
<t:label id="g_168" text=".{aenderung}" />
</t:gridcol>
<t:gridcol id="g_169" text="Federf. Team" width="100" >
<t:label id="g_170" text=".{fdrTeam}" />
</t:gridcol>
<t:gridcol id="g_171" text="Bearbeiter" width="100" >
<t:label id="g_172" text=".{bearbeiter}" />
</t:gridcol>
<t:gridcol id="g_173" text="Referent" width="100" >
<t:label id="g_174" text=".{referent}" />
</t:gridcol>
<t:gridcol id="g_175" text="Programm" width="100" >
<t:label id="g_176" text=".{programm}" />
</t:gridcol>
<t:gridcol id="g_177" text="Antragsart" width="100" >
<t:label id="g_178" text=".{antragsart}" />
</t:gridcol>
<t:gridcol id="g_179" text="Antragsform" width="100" >
<t:label id="g_180" text=".{antragsform}" />
</t:gridcol>
<t:gridcol id="g_181" text="Antragstyp" width="100" >
<t:label id="g_182" text=".{antragstyp}" />
</t:gridcol>
<t:gridcol id="g_183" text="Fach" width="100" >
<t:label id="g_184" text=".{fach}" />
</t:gridcol>
<t:gridcol id="g_185" align="right" text="Antragsumme" width="100%" >
<t:label id="g_186" align="right" text=".{antragSumme}" width="100" />
</t:gridcol>
</t:fixgrid>
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
