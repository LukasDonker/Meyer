<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="dialogs_NewGadgetDialogg_sv">
<t:rowbodypane id="g_4" >
<t:row id="g_2" >
<t:adaptivesplitarea id="g_3" height="100%" splitsize="500" width="100%" >
<t:pane id="g_6" height="100%" padding="left:10;right:10;top:10;bottom:10" width="220" >
<t:row id="g_9" >
<t:label id="g_10" font="size:14;weight:bold" text="Suche" />
</t:row>
<t:row id="g_7" >
<t:field id="g_8" textimage="/awesomefont(f002,#000000,12)" width="200" />
</t:row>
<t:rowdistance id="g_11" height="30" />
<t:row id="g_12" >
<t:label id="g_14" font="size:14;weight:bold" foreground="#3f3f3f" text="Kategorien" />
</t:row>
<t:row id="g_13" >
<t:fixgrid id="g_18" cellselection="true" enabled="true" flusharea="false" flushcolumnupdates="false" focusable="true" height="100%" multiselect="false" objectbinding="#{d.NewGadgetDialogUI.categoryList}" reselectable="true" sbvisibleamount="30" selectonrowfocus="true" singleclickexecute="true" stylevariant="borderless" width="100%" >
<t:gridcol id="g_15" text="Kategorien" width="100%" >
<t:link id="g_28" actionListener="#{d.NewGadgetDialogUI.onShowAll}" font=".{font}" text=".{name}" />
</t:gridcol>
<t:gridcol id="g_16" text="Anzahl" width="25" >
<t:label id="g_29" align="center" background="#d8d8d8" font="weight:bold" foreground="#03519d" text=".{anzahl}" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:pane>
<t:pane id="g_19" padding="left:10;right:10;top:10;bottom:10" width="100%" >
<t:row id="g_1" >
<t:pane id="g_61" background="#bfbfbf" padding="left:20;right:20;top:5;bottom:5" width="100%" >
<t:row id="g_62" >
<t:pane id="g_68" >
<t:row id="g_69" >
<t:image id="g_70" background="#bfbfbf" image="/awesomefont(f05a,#5bc0de,74)" />
</t:row>
</t:pane>
<t:coldistance id="g_74" width="20" />
<t:pane id="g_71" width="100%" >
<t:row id="g_72" >
<t:label id="g_5" font="size:14;weight:bold" text="Graphen auswählen" />
</t:row>
<t:row id="g_63" >
<t:textpane id="g_59" text="Bitte wählen sie einen Graphen aus, um..." width="100%" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_64" height="20" />
<t:row id="g_52" >
<t:fixgrid id="g_33" borderheight="1" height="100%" objectbinding="#{d.NewGadgetDialogUI.gadgetList}" rowheight="80" sbvisibleamount="10" stylevariant="borderless" width="100%" >
<t:gridcol id="g_26" text="Image" width="101" >
<t:image id="g_31" height="100" image=".{image}" imagewidth="100%" width="100" />
</t:gridcol>
<t:gridcol id="g_65" text="Column" width="20" >
<t:label id="g_35" />
</t:gridcol>
<t:gridcol id="g_20" text="Beschreibung" width="100%" >
<t:pane id="g_42" height="100%" padding="top:5;bottom:5" width="100%" >
<t:row id="g_45" >
<t:label id="g_46" font="weight:bold" text=".{titel}" />
</t:row>
<t:row id="g_47" >
<t:label id="g_48" font="size:10;posture:italic" foreground="#3f3f3f" text=".{author}" />
</t:row>
<t:rowdistance id="g_50" height="5" />
<t:row id="g_43" >
<t:textpane id="g_27" text=".{beschreibung}" width="100%" />
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_66" text="Button" width="100" >
<t:pane id="g_39" padding="top:5;bottom:5" >
<t:row id="g_40" >
<t:button id="g_37" actionListener="#{d.NewGadgetDialogUI.onNew}" stylevariant="primaryButton" text="Hinzufügen" />
</t:row>
</t:pane>
</t:gridcol>
</t:fixgrid>
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
