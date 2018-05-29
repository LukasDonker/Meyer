<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="dialogs_NewGadgetListg_sv">
<t:rowbodypane id="g_4" padding="left:20;right:20;top:20;bottom:20" >
<t:row id="g_2" >
<t:label id="g_3" font="weight:bold" text="Gespeicherte Suche:" width="150" />
<t:combobox id="g_6" actionListener="#{d.NewGadgetListUI.onAuswahl}" bgpaint="mandatory()" flush="true" placeholder="&lt;Auswahl&gt;" width="200" >
<t:comboboxitem id="g_47" text="Ant. Sachb. In Schlussz." value="1" valuecomment="Gespeicherte Suchen" />
<t:comboboxitem id="g_48" text="Doktoranden Köln" value="2" valuecomment="Gespeicherte Suchen" />
<t:comboboxitem id="g_49" text="Wiedervorlagen 1 Monat" value="3" valuecomment="Gespeicherte Suchen" />
<t:comboboxitem id="g_50" text="Offene Ant. Team II-ING-1" value="4" valuecomment="Freigegebene Suchen" />
<t:comboboxitem id="g_51" text="Gut. Maschinenbau" value="5" valuecomment="Freigegebene Suchen" />
<t:comboboxitem id="g_52" text="Gut. Med-Technik" value="6" valuecomment="Freigegebene Suchen" />
<t:comboboxitem id="g_53" text="ExStra ING-Beteiligung" value="7" valuecomment="Freigegebene Suchen" />
</t:combobox>
</t:row>
<t:rowdistance id="g_8" height="20" />
<t:row id="g_5" >
<t:pane id="g_12" rowalignmenty="top" >
<t:row id="g_15" >
<t:label id="g_7" font="weight:bold" text="Felder:" valign="top" width="150" />
</t:row>
</t:pane>
<t:pane id="g_11" width="200" >
<t:row id="g_9" >
<t:fixgrid id="g_10" borderheight="2" height="140" objectbinding="#{d.NewGadgetListUI.fieldList}" rowheight="30" sbvisibleamount="4" stylevariant="borderless" width="100%" >
<t:gridcol id="g_13" text="Feld" width="100%" >
<t:label id="g_21" text=".{fieldname}" />
</t:gridcol>
<t:gridcol id="g_25" text="Column" width="15" >
<t:pane id="g_26" height="100%" >
<t:row id="g_27" >
<t:icon id="g_28" height="15" image="/awesomefont(f062,#000000,12)" />
</t:row>
<t:row id="g_29" >
<t:icon id="g_30" height="15" image="/awesomefont(f063,#000000,12)" />
</t:row>
</t:pane>
</t:gridcol>
</t:fixgrid>
</t:row>
<t:row id="g_22" >
<t:icon id="g_23" image="/awesomefont(f067,#000000,14)" />
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_33" height="40" />
<t:row id="g_31" >
<t:label id="g_32" font="weight:bold" text="Aktualisierungsinterval:" width="150" />
<t:combobox id="g_35" value="2" width="200" >
<t:comboboxitem id="g_34" text="Alle 15 Minuten" value="1" />
<t:comboboxitem id="g_38" text="Jede Stunde" value="2" />
<t:comboboxitem id="g_36" text="Alle 4 Stunden" value="3" />
</t:combobox>
</t:row>
<t:rowdistance id="g_41" height="5" />
<t:row id="g_37" >
<t:coldistance id="g_40" width="150" />
<t:textpane id="g_39" font="posture:italic" text="Liste wird beim Programmstart automatisch aktualisiert" width="200" />
</t:row>
<t:rowdistance id="g_42" height="50" />
<t:row id="g_43" >
<t:button id="g_44" actionListener="#{d.NewGadgetListUI.onHinzufügen}" stylevariant="primaryButton" text="Hinzufügen" />
<t:coldistance id="g_46" width="20" />
<t:button id="g_45" actionListener="#{d.NewGadgetListUI.onHinzufügen}" stylevariant="dangerButton" text="Abbrechen" />
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
