<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AntragMittelg_sv">
<t:rowheader id="g_1" >
<t:adaptivetoolbar id="g_2" width="100%" >
<t:icon id="g_3" image="/awesomefont(f067,#000000,14)" />
<t:coldistance id="g_4" width="100%" />
<t:icon id="g_5" image="/awesomefont(f05a,#5bc0de,15)" />
</t:adaptivetoolbar>
</t:rowheader>
<t:rowbodypane id="g_6" background="#E9E9E9" >
<t:row id="g_7" >
<t:scrollpane id="g_8" background="#E9E9E9" height="100%" width="100%" >
<t:row id="g_9" >
<t:label id="g_10" text="Empfänger" width="200" />
<t:autocomplete id="g_11" width="100%" />
</t:row>
<t:rowdistance id="g_12" height="20" />
<t:row id="g_13" >
<t:coldistance id="g_14" width="100%" />
<t:icon id="g_15" actionListener="#{d.AntragMittelUI.mittelTree.onOpenGridFunctions}" image="/awesomefont(f0ad,#000000,15)" />
</t:row>
<t:rowdistance id="g_16" />
<t:row id="g_17" >
<t:fixgrid id="g_18" background="#E9E9E9" height="100%" objectbinding="#{d.AntragMittelUI.mittelTree}" sbvisibleamount="100" stylevariant="bootstrapTable" width="100%" >
<t:gridcol id="g_19" width="50%" >
<t:treenode id="g_20" font=".{link}" >
<t:icon id="g_21" actionListener="#{d.AntragMittelUI.mittelTree.rowDataUI.onOpenRowDataPopup}" image="/awesomefont(f06e,#000000,15)" rendered=".{checkbox}" />
</t:treenode>
</t:gridcol>
<t:gridcol id="g_22" rendered="false" text="Empfänger" width="200" >
<t:field id="g_23" text=".{empfaenger}" width="100" />
</t:gridcol>
<t:gridcol id="g_24" rendered="false" text="Förderabschnitt" width="200" >
<t:field id="g_25" text=".{foerderabschnitt}" width="100" />
</t:gridcol>
<t:gridcol id="g_26" rendered="false" text="Mittelart" width="200" >
<t:field id="g_27" text=".{mittelart}" width="100" />
</t:gridcol>
<t:gridcol id="g_28" rendered="false" text="Verwendung" width="200" >
<t:pane id="g_29" >
<t:row id="g_30" >
<t:checkbox id="g_31" text="Zweckgebunden" />
<t:coldistance id="g_32" />
<t:checkbox id="g_33" text="Gesperrt" />
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_34" rendered="false" text="Bezeichung" width="200" >
<t:longtextfield id="g_35" text=".{bezeichnung}" width="100" />
</t:gridcol>
<t:gridcol id="g_36" rendered="false" text="Geldgeber" width="100" >
<t:link id="g_37" text="DFG" />
</t:gridcol>
<t:gridcol id="g_38" text="Dauer" width="25%" >
<t:label id="g_39" font=".{link}" text=".{dauer}" />
</t:gridcol>
<t:gridcol id="g_40" align="right" text="Beantragt" width="25%" >
<t:label id="g_41" align="right" font=".{link}" text=".{summe}" />
</t:gridcol>
<t:gridcol id="g_45" align="right" text="Vorgeschlagen" width="25%" >
<t:label id="g_46" align="right" font=".{link}" text="0,00 €" />
</t:gridcol>
<t:gridcol id="g_42" rendered="false" width="100" >
<t:button id="g_43" image="/awesomefont(f0c7,#FFFFFF,14)" stylevariant="successButton" text="Speichern" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
