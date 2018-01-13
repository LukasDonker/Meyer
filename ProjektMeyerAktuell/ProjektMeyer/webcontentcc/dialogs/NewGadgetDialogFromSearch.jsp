<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="dialogs_NewGadgetDialogFromSearchg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:adaptivesplitarea id="g_3" height="100%" splitsize="500" width="100%" >
<t:pane id="g_4" height="100%" padding="left:10;right:10;top:10;bottom:10" width="220" >
<t:row id="g_5" >
<t:label id="g_6" font="size:14;weight:bold" text="Suche" />
</t:row>
<t:row id="g_7" >
<t:field id="g_8" textimage="/awesomefont(f002,#000000,12)" width="200" />
</t:row>
<t:rowdistance id="g_9" height="30" />
<t:row id="g_10" >
<t:label id="g_11" font="size:14;weight:bold" foreground="#3f3f3f" text="Kategorien" />
</t:row>
<t:row id="g_12" >
<t:fixgrid id="g_13" height="100%" objectbinding="#{d.NewGadgetDialogFromSearchUI.categoryList}" sbvisibleamount="30" stylevariant="borderless" width="100%" >
<t:gridcol id="g_14" text="Kategorien" width="100%" >
<t:link id="g_15" actionListener="#{d.NewGadgetDialogUI.onShowAll}" font=".{font}" text=".{name}" />
</t:gridcol>
<t:gridcol id="g_16" text="Anzahl" width="25" >
<t:label id="g_17" align="center" background="#d8d8d8" font="weight:bold" foreground="#03519d" text=".{anzahl}" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:pane>
<t:pane id="g_18" padding="left:10;right:10;top:10;bottom:10" width="100%" >
<t:row id="g_19" >
<t:pane id="g_20" background="#bfbfbf" padding="left:20;right:20;top:5;bottom:5" width="100%" >
<t:row id="g_21" >
<t:pane id="g_22" >
<t:row id="g_23" >
<t:image id="g_24" background="#bfbfbf" image="/awesomefont(f05a,#5bc0de,74)" />
</t:row>
</t:pane>
<t:coldistance id="g_25" width="20" />
<t:pane id="g_26" width="100%" >
<t:row id="g_27" >
<t:label id="g_28" font="size:14;weight:bold" text="Suche auswählen" />
</t:row>
<t:row id="g_29" >
<t:textpane id="g_30" text="Bitte wählen sie eine Suche aus, um..." width="100%" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_31" height="20" />
<t:row id="g_32" >
<t:fixgrid id="g_33" borderheight="1" height="100%" objectbinding="#{d.NewGadgetDialogFromSearchUI.gadgetList}" rowheight="160" stylevariant="borderless" width="100%" >
<t:gridcol id="g_34" text="Beschreibung" width="100%" >
<t:pane id="g_35" height="100%" padding="top:5;bottom:5" width="100%" >
<t:row id="g_36" >
<t:foldablepane id="g_37" height="100%" rowdistance="3" text=".{titel}" width="100%" >
<t:row id="g_38" >
<t:label id="g_39" font="size:10;posture:italic" foreground="#3f3f3f" text=".{author}" />
</t:row>
<t:row id="g_40" >
<t:textpane id="g_41" text=".{beschreibung}" width="100%" />
</t:row>
<t:rowdistance id="g_42" height="5" />
<t:row id="g_43" >
<t:label id="g_44" text="Titel:" width="100" />
<t:field id="g_45" bgpaint="mandatory()" text=".{chartTitle}" width="200" />
</t:row>
<t:row id="g_46" >
<t:label id="g_47" text="Wert:" width="100" />
<t:combobox id="g_48" bgpaint="mandatory()" placeholder="-- Bitte auswählen --" width="200" >
<t:comboboxitem id="g_49" text="Antragsumme" value="1" />
<t:comboboxitem id="g_50" text="Antragstyp" value="2" />
<t:comboboxitem id="g_51" text="Status" value="3" />
</t:combobox>
</t:row>
<t:rowdistance id="g_52" height="100%" />
<t:row id="g_53" >
<t:coldistance id="g_54" width="100%" />
<t:button id="g_55" actionListener=".{onAddNewChart}" stylevariant="primaryButton" text="Hinzufügen" />
</t:row>
</t:foldablepane>
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
