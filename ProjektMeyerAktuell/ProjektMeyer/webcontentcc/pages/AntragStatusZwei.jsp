<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AntragStatusZweig_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:tabbedpane id="g_3" height="100%" width="100%" >
<t:tabbedpanetab id="g_4" text="Entscheidungsunterlagen erstellen" >
<t:row id="g_5" >
<t:fixgrid id="g_9" objectbinding="#{d.AntragStatusZweiUI.rows}" stylevariant="bootstrapTable" width="100%" >
<t:gridcol id="g_10" text="Regel" width="100%" >
<t:label id="g_11" text=".{text}" />
</t:gridcol>
<t:gridcol id="g_32" width="30" >
<t:icon id="g_30" image="/awesomefont(f05a,#5bc0de,15)" />
</t:gridcol>
<t:gridcol id="g_12" text="erl." width="30" >
<t:icon id="g_13" image=".{image}" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:tabbedpanetab>
<t:tabbedpanetab id="g_6" text="Antragstypwechsel" >
<t:row id="g_15" >
<t:fixgrid id="g_16" objectbinding="#{tobedfined}" stylevariant="bootstrapTable" width="100%" >
<t:gridcol id="g_17" text="Regel" width="100%" >
<t:label id="g_18" text="label" />
</t:gridcol>
<t:gridcol id="g_19" text="erl." width="30" >
<t:icon id="g_20" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:tabbedpanetab>
<t:tabbedpanetab id="g_7" text="in Begutachtung" >
<t:row id="g_21" >
<t:fixgrid id="g_22" objectbinding="#{tobedfined}" stylevariant="bootstrapTable" width="100%" >
<t:gridcol id="g_23" text="Regel" width="100%" >
<t:label id="g_24" text="label" />
</t:gridcol>
<t:gridcol id="g_25" text="erl." width="30" >
<t:icon id="g_26" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:tabbedpanetab>
</t:tabbedpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
