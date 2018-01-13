<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_extern_ExternAntragsstellungListeg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:fixgrid id="g_3" borderheight="3" height="100%" objectbinding="#{d.ExternAntragsstellungListeUI.antragsliste}" stylevariant="bootstrapTable" suppressheadline="true" width="100%" >
<t:gridheader id="g_4" >
<t:pane id="g_5" >
<t:row id="g_6" >
<t:gridheaderlabel id="g_7" height="100%" text="GZ" width="100" />
<t:gridheaderlabel id="g_8" height="100%" text="Programm und Antragsart" width="100%" />
</t:row>
</t:pane>
<t:gridheaderlabel id="g_9" text="Status" />
</t:gridheader>
<t:gridcol id="g_10" text="Programm und Antragsart" width="100%;350" >
<t:pane id="g_11" >
<t:rowdistance id="g_12" height="5" />
<t:row id="g_13" >
<t:coldistance id="g_14" />
<t:link id="g_15" font="size:14;weight:bold" text=".{kurztitel}" tooltip=".{kurztitel}" />
</t:row>
<t:rowdistance id="g_16" height="8" />
<t:rowline id="g_17" />
<t:rowdistance id="g_18" />
<t:row id="g_19" >
<t:coldistance id="g_20" />
<t:label id="g_21" text=".{gz}" width="100" />
<t:label id="g_22" font="weight:bold" text=".{programmantragsart}" width="100%" />
</t:row>
<t:rowdistance id="g_23" />
</t:pane>
</t:gridcol>
<t:gridcol id="g_24" text="Status" width="200" >
<t:pane id="g_25" >
<t:rowdistance id="g_26" height="5" />
<t:row id="g_27" >
<t:button id="g_28" rendered=".{isRenderUebersicht}" stylevariant="primaryButton" text="Übersicht" />
<t:coldistance id="g_29" width="100%" />
<t:button id="g_30" image="/awesomefont(f061,#FFFFFF,15)" stylevariant="dangerButton" text="Weiter" />
<t:coldistance id="g_31" />
</t:row>
<t:rowdistance id="g_32" height="5" />
<t:rowline id="g_33" />
<t:rowdistance id="g_34" />
<t:row id="g_35" >
<t:label id="g_36" text=".{status}" />
</t:row>
<t:rowdistance id="g_37" />
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
