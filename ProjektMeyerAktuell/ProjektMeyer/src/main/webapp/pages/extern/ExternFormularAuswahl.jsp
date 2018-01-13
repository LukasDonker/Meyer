<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_extern_ExternFormularAuswahlg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:foldablepane id="g_3" text="Neues Projekt" width="100%" >
<t:row id="g_4" >
<t:textpane id="g_5" text="Die elektronische Antragstellung wird für alle Förderinstrumente in den unten aufgelisteten Kategorien angeboten. Die Online-Formulare für Einzelanträge im Rahmen von Forschergruppen oder Antragspaketen können Sie über &#34;Antragsübersicht/Folgeantrag&#34; aufrufen." width="650" />
</t:row>
<t:rowdistance id="g_6" height="20" />
<t:row id="g_7" >
<t:textwithlinks id="g_8" text="Zu allen anderen Verfahren reichen Sie Ihren Antrag bitte postalisch ein. Nähere Informationen dazu finden Sie &lt;a href=&#34;http://www.dfg.de/foerderung/programme/index.jsp.&#34;&gt; hier. &lt;/a&gt;" width="450" />
</t:row>
<t:rowdistance id="g_9" height="20" />
<t:row id="g_10" >
<t:label id="g_11" text="Die elektronische Antragstellung erfolgt in drei Schritten:" />
</t:row>
<t:rowdistance id="g_12" height="20" />
<t:rowadaptiveline id="g_13" breakindex="1" breakpixels="500" >
<t:label id="g_14" font="weight:bold" text="1. Merkblätter und Leitfäden (linke Spalte):" valign="top" width="250" />
<t:coldistance id="g_15" />
<t:textpane id="g_16" text=" Bitte informieren Sie sich anhand der Merkblätter und Leitfäden, welche Voraussetzungen für die Antragstellung notwendig sind." width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_17" height="5" />
<t:rowline id="g_18" />
<t:rowadaptiveline id="g_19" breakindex="1" breakpixels="500" >
<t:label id="g_20" font="weight:bold" text="2. Vorlagen (rechte Spalte):" valign="top" width="250" />
<t:coldistance id="g_21" />
<t:textpane id="g_22" text="Bitte verwenden Sie die passende Vorlage zur Beschreibung des Vorhabens. Falls Sie die Vorlage nicht verwenden können, übernehmen Sie bitte auf jeden Fall die vorgegebene Gliederung." width="100%" />
</t:rowadaptiveline>
<t:rowdistance id="g_23" height="5" />
<t:rowline id="g_24" />
<t:rowadaptiveline id="g_25" breakindex="1" breakpixels="500" >
<t:textpane id="g_26" font="weight:bold" text="3. Elektronisches Antragsformular (Button &#34;Online Formular starten&#34;):" width="250" />
<t:coldistance id="g_27" />
<t:textpane id="g_28" text="Bitte füllen Sie das elektronische Antragsformular aus. Halten Sie hierfür bitte den Projekttitel und die Zusammenfassung - jeweils in Deutsch und Englisch - sowie die Anlagen bereit." width="100%" />
</t:rowadaptiveline>
</t:foldablepane>
</t:row>
<t:rowbodypane id="g_29" padding="left:20;right:20;top:20;bottom:20" >
<t:row id="g_30" >
<t:scrollpane id="g_31" width="100%" >
<t:row id="g_32" >
<t:foldablepane id="g_33" height="100%" opened="false" text="Einzelförderung" width="100%" >
<t:row id="g_34" >
<t:fixgrid id="g_35" background="#ffffff100%" borderheight="10" drawoddevenrows="false" objectbinding="#{d.ExternFormularAuswahlUI.einzelfoerderung}" rowheight="100%" stylevariant="bootstrapTable" suppressheadline="true" width="100%" >
<t:gridcol id="g_36" text="valuetest" width="100%" >
<t:pane id="g_37" >
<t:row id="g_38" >
<t:label id="g_39" font="size:14;weight:bold" text=".{name}" />
<t:coldistance id="g_40" width="100%" />
<t:button id="g_41" actionListener="#{d.ExternFormularAuswahlUI.onStartFormular}" image="/awesomefont(f061,#FFFFFF,15)" stylevariant="dangerButton" text="Online-Formular starten" />
</t:row>
<t:row id="g_42" >
<t:fixgrid id="g_43" drawoddevenrows="false" objectbinding=".{listeneintraege}" showemptyrows="false" stylevariant="verticalBorder" width="100%" >
<t:gridcol id="g_44" text="Merkblätter und Leitfäden" width="50%" >
<t:link id="g_45" foreground="#03519d" image="/awesomefont(f061,#03519d,15)" text=".{merkblatt}" />
</t:gridcol>
<t:gridcol id="g_46" text="Vorlagen" width="50%" >
<t:link id="g_47" foreground="#03519d" image="/awesomefont(f061,#03519d,15)" rendered=".{isVorlageRendered}" text=".{vorlage}" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:pane>
</t:gridcol>
</t:fixgrid>
</t:row>
</t:foldablepane>
</t:row>
<t:rowdistance id="g_48" height="20" />
<t:row id="g_49" >
<t:foldablepane id="g_50" opened="false" text="Exzellenzcluster" width="100%" />
</t:row>
<t:rowdistance id="g_51" height="20" />
<t:row id="g_52" >
<t:foldablepane id="g_53" opened="false" text="Graduiertenkollegs und Internationale Graduiertenkollegs" width="100%" />
</t:row>
<t:rowdistance id="g_54" height="20" />
<t:row id="g_55" >
<t:foldablepane id="g_56" opened="false" text="Internationales" width="100%" />
</t:row>
<t:rowdistance id="g_57" height="20" />
<t:row id="g_58" >
<t:foldablepane id="g_59" opened="false" text="Schwerpunktprogramme" width="100%" />
</t:row>
<t:rowdistance id="g_60" height="20" />
<t:row id="g_61" >
<t:foldablepane id="g_62" opened="false" text="Wissenschaftliche Geräte und Informationstechnik" width="100%" />
</t:row>
<t:rowdistance id="g_63" height="20" />
<t:row id="g_64" >
<t:foldablepane id="g_65" opened="false" text="Wissenschaftliche Literaturversorgungs- und Informationssysteme" width="100%" />
</t:row>
</t:scrollpane>
</t:row>
</t:rowbodypane>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
