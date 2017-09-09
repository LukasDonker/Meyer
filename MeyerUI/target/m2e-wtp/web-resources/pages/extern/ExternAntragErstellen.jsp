<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_extern_ExternAntragErstelleng_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_20" >
<t:foldablepane id="g_2" border="bottom:3;color:#03519d" opened="#{d.ExternAntragErstellenUI.titleOpened}" text="Antrag auf Sachbeihilfe" width="100%" >
<t:foldablepaneheaderrow id="g_3" >
<t:icon id="g_4" image="/awesomefont(f0c7,#FFFFFF,13)" />
<t:coldistance id="g_5" />
<t:icon id="g_6" image="/awesomefont(f00d,#FFFFFF,15)" />
<t:coldistance id="g_7" />
</t:foldablepaneheaderrow>
<t:row id="g_9" >
<t:textpane id="g_10" text="Die Sachbeihilfe ermöglicht allen Personen mit abgeschlossener wissenschaftlicher Ausbildung themenunabhängig die jederzeitige Durchführung eines einzelnen thematisch und zeitlich begrenzten Forschungsvorhabens." width="100%" />
</t:row>
<t:rowdistance id="g_15" height="20" />
<t:row id="g_11" >
<t:textwithlinks id="g_12" text="Informationen zur Antragsberechtigung, Form etc. finden Sie im &lt;a title=&#34;Neues Fenster: Programmmerkblatt Sachbeihilfe&#34; href=&#34;https://elan-entw.dfg.de/formulare/50_01/,DanaInfo=.awxyChkmGln+&#34; target=&#34;_blank&#34;&gt;Programmmerkblatt Sachbeihilfe&lt;/a&gt; und im &lt;a title=&#34;Neues Fenster: Leitfaden zur Antragsstellung (Projektanträge)&#34; href=&#34;https://elan-entw.dfg.de/formulare/54_01/,DanaInfo=.awxyChkmGln+&#34; target=&#34;_blank&#34;&gt;Leitfaden zur Antragsstellung (Projektanträge)&lt;/a&gt;." width="100%" />
</t:row>
<t:rowdistance id="g_16" height="20" />
<t:row id="g_13" >
<t:textpane id="g_14" text="Für Ihren Antrag sind mindestens die folgenden Unterlagen erforderlich. Bitte verwenden Sie die von uns zur Verfügung gestellten Dokumentvorlagen:" width="100%" />
</t:row>
<t:rowdistance id="g_19" height="10" />
<t:row id="g_17" >
<t:image id="g_27" image="/awesomefont(f111,#000000,10)" />
<t:coldistance id="g_28" />
<t:textwithlinks id="g_24" text="&lt;a title=&#34;Neues Fenster: Beschreibung Ihres Vorhabens&#34; href=&#34;https://elan-entw.dfg.de/formulare/,DanaInfo=.awxyChkmGln+53_01_elan&#34; target=&#34;_blank&#34;&gt;Beschreibung des Vorhabens&lt;/a&gt; (deutsch oder englisch)" width="100%" />
</t:row>
<t:rowdistance id="g_43" height="10" />
<t:row id="g_18" >
<t:image id="g_26" image="/awesomefont(f111,#000000,10)" />
<t:coldistance id="g_29" />
<t:textpane id="g_25" text="Pro Antragstellerin und Antragsteller: Lebenslauf mit Publikationen entsprechend den Regeln zu Publikationsverzeichnissen" width="100%" />
</t:row>
<t:rowdistance id="g_31" height="20" />
<t:row id="g_30" >
<t:textpane id="g_32" text="Sie können als Anlagen nur PDF-Dokumente (bitte ohne Zugriffsbeschränkungen hinsichtlich des Lesens, Kopierens und Druckens) hochladen." width="100%" />
</t:row>
<t:rowdistance id="g_34" />
<t:row id="g_33" >
<t:textpane id="g_35" text="Beim Ausfüllen des elektronischen Antragsformulars werden Sie auch gebeten, den Titel und die Zusammenfassung des Vorhabens in Deutsch und Englisch einzugeben." />
</t:row>
<t:rowdistance id="g_37" height="20" />
<t:row id="g_36" >
<t:textpane id="g_38" text="Falls Sie Fördermittel für mehrere antragstellende Personen einwerben möchten, müssen diese Personen in unserem elan-Portal registriert sein. Die jeweilige elan-E-Mail-Adresse wird im weiteren Verlauf benötigt." width="100%" />
</t:row>
<t:rowdistance id="g_39" height="20" />
<t:row id="g_69" >
<t:button id="g_72" actionListener="#{d.ExternAntragErstellenUI.onOkPressed}" image="/awesomefont(f00c,#FFFFFF,15)" stylevariant="primaryButton" text="OK" />
</t:row>
<t:rowdistance id="g_70" height="20" />
</t:foldablepane>
</t:row>
<t:row id="g_44" >
<t:adaptivesplitarea id="g_45" height="100%" splitsize="750" width="100%" >
<t:pane id="g_46" width="350" >
<t:row id="g_47" >
<t:fixgrid id="g_51" height="100%" objectbinding="#{d.ExternAntragErstellenUI.navigationTree}" sbvisibleamount="30" width="100%" >
<t:gridcol id="g_53" text="Navigation" width="100%" >
<t:treenode id="g_162" font="weight:bold" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:pane>
<t:pane id="g_61" padding="left:20;right:20;top:20;bottom:20" width="100%" >
<t:row id="g_63" >
<t:scrollpane id="g_64" height="100%" rowdistance="20" width="100%" >
<t:row id="g_66" >
<t:foldablepane id="g_67" text="Angaben zum Antrag" width="100%" >
<t:row id="g_83" >
<t:pane id="g_84" height="100%" width="100%" >
<t:rowadaptiveline id="g_149" breakindex="1" breakpixels="500" >
<t:coldistance id="g_150" width="150" />
<t:textwithlinks id="g_151" text="Falls Sie den Antrag im Rahmen einer Ausschreibung stellen möchten, wählen Sie diese bitte hier aus. Die Liste zeigt nur die aktuellen Ausschreibungen (s. auch &lt;a href=&#34;https://elan-entw.dfg.de/informationen_wissenschaft/,DanaInfo=.awxyChkmGln+&#34; target=&#34;_blank&#34;&gt;Ausschreibungen&lt;/a&gt;):" width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_93" height="10" />
<t:rowadaptiveline id="g_52" breakindex="1" breakpixels="500" >
<t:label id="g_89" font="size:14;weight:bold" text="Ausschreibung:" width="150" />
<t:combofield id="g_91" text="--- bitte auswählen ---" width="100%" />
</t:rowadaptiveline>
</t:pane>
</t:row>
<t:rowdistance id="g_95" height="20" />
<t:row id="g_96" >
<t:textpane id="g_98" text="Tragen Sie bitte den Titel Ihres Forschungsvorhabens in deutscher und englischer Sprache in die entsprechenden Felder ein (jeweils maximal 300 Zeichen, keine Sonderzeichen)." width="100%" />
</t:row>
<t:rowdistance id="g_100" height="20" />
<t:row id="g_102" >
<t:pane id="g_103" width="100%" >
<t:rowadaptiveline id="g_153" breakindex="1" breakpixels="500" >
<t:label id="g_22" font="size:14;weight:bold" text="Titel (Deutsch):" width="150" />
<t:textarea id="g_23" bgpaint="mandatory()" flush="true" flushtimer="100" height="150" text="#{d.ExternAntragErstellenUI.titelDE}" width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_110" height="10" />
<t:rowadaptiveline id="g_154" breakindex="1" breakpixels="500" >
<t:coldistance id="g_106" width="150" />
<t:label id="g_108" text="Noch " />
<t:label id="g_57" text="#{d.ExternAntragErstellenUI.sizeTitelDE}" />
<t:label id="g_58" text="/300 Zeichen" />
</t:rowadaptiveline>
</t:pane>
</t:row>
<t:rowdistance id="g_136" height="20" />
<t:row id="g_112" >
<t:pane id="g_113" width="100%" >
<t:rowadaptiveline id="g_155" breakindex="1" breakpixels="500" >
<t:label id="g_115" font="size:14;weight:bold" text="Titel (Englisch):" width="150" />
<t:textarea id="g_116" bgpaint="mandatory()" flush="true" flushtimer="100" height="150" text="#{d.ExternAntragErstellenUI.titelENG}" width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_117" height="10" />
<t:rowadaptiveline id="g_156" breakindex="1" breakpixels="500" >
<t:coldistance id="g_119" width="150" />
<t:label id="g_120" text="Noch" />
<t:label id="g_59" text="#{d.ExternAntragErstellenUI.sizeTitelEng}" />
<t:label id="g_60" text="/300 Zeichen" />
</t:rowadaptiveline>
</t:pane>
</t:row>
<t:rowdistance id="g_134" height="20" />
<t:row id="g_122" >
<t:pane id="g_123" width="100%" >
<t:rowadaptiveline id="g_157" breakindex="1" breakpixels="500" >
<t:coldistance id="g_125" width="150" />
<t:textpane id="g_127" text="Wenn es sich um einen überarbeiteten Antrag handelt, geben Sie bitte hier das Geschäftszeichen des vorherigen Antrags an." width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_50" height="10" />
<t:rowadaptiveline id="g_158" breakindex="1" breakpixels="500" >
<t:label id="g_130" font="size:14;weight:bold" text="Geschäftszeichen" width="150" />
<t:field id="g_132" width="100%" />
</t:rowadaptiveline>
</t:pane>
</t:row>
<t:rowdistance id="g_40" height="20" />
<t:row id="g_41" >
<t:pane id="g_42" width="100%" >
<t:rowadaptiveline id="g_159" breakindex="1" breakpixels="500" >
<t:coldistance id="g_139" width="150" />
<t:textpane id="g_140" text="Bitte geben Sie im Folgenden an, für welche Dauer Sie die Förderung beantragen. Beachten Sie dabei bitte die Höchstförderdauer pro Antrag im jeweiligen Programm." width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_49" height="10" />
<t:rowadaptiveline id="g_160" breakindex="1" breakpixels="500" >
<t:label id="g_143" font="size:14;weight:bold" text="Dauer (Monate)" tooltip="In der Sachbeihilfe können sie maximal 36 Monate beantragen." width="150" />
<t:field id="g_48" bgpaint="mandatory()" flush="true" flushtimer="100" text="#{d.ExternAntragErstellenUI.dauer}" tooltip="In der Sachbeihilfe können sie maximal 36 Monate beantragen." width="100%" />
</t:rowadaptiveline>
</t:pane>
</t:row>
<t:rowdistance id="g_54" height="20" />
</t:foldablepane>
</t:row>
<t:row id="g_145" >
<t:foldablepane id="g_147" opened="false" text="Antragstellende Personen" width="100%" />
</t:row>
<t:row id="g_74" >
<t:foldablepane id="g_75" opened="false" text="Andere antragsbeteiligte Personen" width="100%" />
</t:row>
<t:row id="g_76" >
<t:foldablepane id="g_77" opened="false" text="Beteiligte Institutionen" width="100%" />
</t:row>
<t:row id="g_78" >
<t:foldablepane id="g_79" opened="false" text="Abschließende Erklärungen" width="100%" />
</t:row>
<t:row id="g_80" >
<t:foldablepane id="g_81" opened="false" text="Anlagen hinzufügen" width="100%" />
</t:row>
</t:scrollpane>
</t:row>
</t:pane>
</t:adaptivesplitarea>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
