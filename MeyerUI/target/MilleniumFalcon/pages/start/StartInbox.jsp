<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_start_StartInboxg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:fixgrid id="g_3" borderheight="1" borderwidth="0" height="100%" objectbinding="#{d.StartInboxUI.rows}" rowheight="35" sbvisibleamount="15" suppressheadline="true" width="100%" >
<t:gridheader id="g_4" >
<t:pane id="g_5" >
<t:row id="g_6" >
<t:gridheaderlabel id="g_7" height="50%" text="GZ" width="100%" />
</t:row>
<t:row id="g_8" >
<t:gridheaderlabel id="g_9" height="50%" text="Prozessverantwortlich" width="100%" />
</t:row>
</t:pane>
<t:pane id="g_10" >
<t:row id="g_11" >
<t:gridheaderlabel id="g_12" height="50%" text="Vorgangstyp" width="100%" />
</t:row>
<t:row id="g_13" >
<t:gridheaderlabel id="g_14" height="50%" text="Termin" width="100%" />
</t:row>
</t:pane>
<t:gridheaderlabel id="g_15" />
</t:gridheader>
<t:gridheader id="g_16" rowheight="1" />
<t:gridcol id="g_17" text="Name" width="50%" >
<t:pane id="g_18" background="#FFFFFF" focusable="true" >
<t:row id="g_19" >
<t:label id="g_20" font="size:14;weight:bold" height="50%" text=".{GZ}" width="100%" />
</t:row>
<t:row id="g_21" >
<t:label id="g_22" height="50%" text=".{verantwortlich}" width="100%" />
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_23" text="Address" width="50%" >
<t:pane id="g_24" background="#FFFFFF" focusable="true" >
<t:row id="g_25" >
<t:label id="g_26" font="size:14;weight:bold" height="50%" text=".{vorgang}" width="100%" />
</t:row>
<t:row id="g_27" >
<t:label id="g_28" height="50%" text=".{termin}" width="100%" />
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_29" text="Country" width="50" >
<t:icon id="g_30" image=".{link}" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
