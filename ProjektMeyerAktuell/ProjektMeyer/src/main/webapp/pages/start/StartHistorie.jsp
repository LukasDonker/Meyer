<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_start_StartHistorieg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:fixgrid id="g_3" height="100%" objectbinding="#{d.StartHistorieUI.historyListe}" rowheight="35" sbvisibleamount="20" showemptyrows="false" stylevariant="bootstrapTable" suppressheadline="true" width="100%" >
<t:gridheader id="g_4" >
<t:pane id="g_5" >
<t:row id="g_6" >
<t:gridheaderlabel id="g_7" height="50%" text="GZ" width="100%" />
</t:row>
<t:row id="g_8" >
<t:gridheaderlabel id="g_9" height="50%" text="Kurztitel" width="100%" />
</t:row>
</t:pane>
<t:pane id="g_10" >
<t:row id="g_11" >
<t:gridheaderlabel id="g_12" height="50%" text="Typ" width="100%" />
</t:row>
<t:row id="g_13" >
<t:gridheaderlabel id="g_14" height="50%" text="Letzter Aufruf" width="100%" />
</t:row>
</t:pane>
</t:gridheader>
<t:gridcol id="g_15" text="Column" width="100%;300" >
<t:pane id="g_16" >
<t:row id="g_17" >
<t:icon id="g_18" actionListener=".{onOpen}" image=".{icon}" />
<t:coldistance id="g_19" width="3" />
<t:pane id="g_20" >
<t:row id="g_21" >
<t:link id="g_22" actionListener=".{onOpen}" font="weight:bold" text=".{gz}" />
</t:row>
<t:row id="g_23" >
<t:link id="g_24" actionListener=".{onOpen}" text=".{kurztitel}" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_25" text="Column" width="35%;150" >
<t:pane id="g_26" >
<t:row id="g_27" >
<t:label id="g_28" text=".{objekttyp}" />
</t:row>
<t:row id="g_29" >
<t:label id="g_30" text=".{letzterAufruf}" />
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
