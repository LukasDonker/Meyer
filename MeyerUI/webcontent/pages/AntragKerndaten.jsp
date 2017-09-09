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
<t:rowbodypane id="g_8" background="#E9E9E9" >
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
<t:textwithlinks id="g_41" font="weight:bold" text="Arbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_42" objectbinding="#{tobedfined}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_43" text="Tätigkeiten" width="100%" >
<t:longtextfield id="g_44" />
</t:gridcol>
<t:gridcol id="g_45" text="Störung" width="100" >
<t:label id="g_46" />
</t:gridcol>
<t:gridcol id="g_47" text="Techniker" width="100" >
<t:label id="g_48" text="label" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_49" >
<t:coldistance id="g_50" width="200" />
<t:button id="g_51" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Tätigkeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_52" height="15" />
<t:rowadaptiveline id="g_53" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:textwithlinks id="g_54" font="weight:bold" text="Arbeitszeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_55" objectbinding="#{tobedfined}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_56" text="Techniker" width="100" >
<t:label id="g_57" text="label" />
</t:gridcol>
<t:gridcol id="g_58" text="Arbeitsstunden" width="100" >
<t:longtextfield id="g_59" />
</t:gridcol>
<t:gridcol id="g_60" text="Von" width="100" />
<t:gridcol id="g_61" text="Bis" width="100" />
<t:gridcol id="g_62" text="Pauschalen" width="100%" >
<t:label id="g_63" />
</t:gridcol>
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_64" >
<t:coldistance id="g_65" width="200" />
<t:button id="g_66" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Arbeitszeit hinzufügen" width="160" />
</t:rowadaptiveline>
<t:rowdistance id="g_67" />
<t:rowadaptiveline id="g_68" breakindex="1" breakpixels="300" comment="Finanzierungsart" >
<t:label id="g_69" font="weight:bold" text="Notdienstpauschale" width="200" />
<t:toggle id="g_70" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_71" height="15" />
<t:rowadaptiveline id="g_72" breakindex="1" breakpixels="300" >
<t:textwithlinks id="g_73" font="weight:bold" text="Teile und Pauschalarbeiten&lt;br&gt;&lt;br&gt;&lt;br&gt;" width="200" />
<t:fixgrid id="g_74" objectbinding="#{tobedfined}" sbvisibleamount="2" width="100%" >
<t:gridcol id="g_75" text="Stückzahl" width="75" >
<t:label id="g_76" text="label" />
</t:gridcol>
<t:gridcol id="g_77" text="Bezeichnung" width="100%" >
<t:longtextfield id="g_78" />
</t:gridcol>
<t:gridcol id="g_79" text="Preis" width="100" />
<t:gridcol id="g_80" text="B" width="20" />
<t:gridcol id="g_81" text="L" width="20" />
</t:fixgrid>
</t:rowadaptiveline>
<t:rowadaptiveline id="g_82" >
<t:coldistance id="g_83" width="200" />
<t:button id="g_84" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="infoButton" text="Teil hinzufügen" width="160" />
<t:coldistance id="g_85" width="100%" />
<t:label id="g_86" font="weight:bold" text="Summe" width="50" />
<t:field id="g_87" align="right" enabled="false" text="0,00" textimage="/awesomefont(f153,#000000,15)" width="102" />
<t:coldistance id="g_88" width="42" />
</t:rowadaptiveline>
<t:rowdistance id="g_89" height="15" />
<t:rowadaptiveline id="g_90" >
<t:label id="g_91" font="weight:bold" text="Materialbestellungen" width="200" />
<t:button id="g_92" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="successButton" text="Materialbestellung hinzufügen" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_93" height="30" />
<t:rowadaptiveline id="g_94" breakindex="1" breakpixels="300" comment="Bewilligungsdauer" >
<t:label id="g_95" font="weight:bold" text="Abgeschlossen" width="200" />
<t:toggle id="g_96" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_97" height="5" />
<t:rowadaptiveline id="g_98" breakindex="1" breakpixels="300" comment="Bewilligungssumme" >
<t:label id="g_99" font="weight:bold" text="Weiterer Einsatz nötig?" width="200" />
<t:toggle id="g_100" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_101" height="5" />
<t:rowdistance id="g_102" height="30" />
<t:rowadaptiveline id="g_103" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_104" font="weight:bold" text="Unterschrift Kunde" width="200" />
<t:button id="g_105" stylevariant="successButton" text="Unterschreiben" />
</t:rowadaptiveline>
<t:rowdistance id="g_106" height="15" />
<t:rowadaptiveline id="g_107" breakindex="1" breakpixels="300" comment="Druckwerk" >
<t:textwithlinks id="g_108" font="weight:bold" text="Unterschrift Techniker" width="200" />
<t:button id="g_109" stylevariant="successButton" text="Unterschreiben" />
</t:rowadaptiveline>
<t:rowdistance id="g_110" height="50" />
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
