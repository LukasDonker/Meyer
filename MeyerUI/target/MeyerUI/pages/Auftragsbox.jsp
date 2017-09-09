<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_Auftragsboxg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:fixgrid id="g_3" borderheight="3" height="100%" objectbinding="#{d.AuftragsboxUI.bereitstellungstree}" sbvisibleamount="30" stylevariant="bootstrapTable" suppressheadline="true" width="100%" >
<t:gridcol id="g_4" width="40%;150" >
<t:treenode id="g_5" font="weight:bold" tooltip=".{text}" />
</t:gridcol>
<t:gridcol id="g_6" width="20%;50" >
<t:label id="g_7" text=".{date}" />
</t:gridcol>
<t:gridcol id="g_8" width="40%;200" >
<t:label id="g_9" text=".{kurztext}" />
</t:gridcol>
<t:gridcol id="g_10" width="30%;250" >
<t:label id="g_11" text=".{mitarbeiter}" />
</t:gridcol>
<t:gridcol id="g_12" width="30" >
<t:image id="g_13" image=".{imageerledigt}" />
</t:gridcol>
<t:gridcol id="g_14" width="30" >
<t:pane id="g_15" >
<t:row id="g_16" >
<t:icon id="g_17" image="/awesomefont(f019,#03519d,15)" rendered=".{download}" tooltip="Hier können sie die gesamte Bereitstellung herunterladen." />
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_18" width="30" >
<t:pane id="g_19" >
<t:row id="g_20" >
<t:icon id="g_21" image="/awesomefont(f06e,#5bc0de,15)" rendered=".{open}" tooltip="Einzeldokument öffnen." />
</t:row>
</t:pane>
</t:gridcol>
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
