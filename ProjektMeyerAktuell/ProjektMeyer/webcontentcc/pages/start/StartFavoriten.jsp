<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_start_StartFavoriteng_sv">
<t:rowbodypane id="g_38" >
<t:row id="g_2" >
<t:fixgrid id="g_3" height="100%" objectbinding="#{d.StartFavoritenUI.favoritesListe}" rowheight="35" sbvisibleamount="20" showemptyrows="false" stylevariant="bootstrapTable" suppressheadline="true" width="100%" >
<t:gridheader id="g_4" >
<t:pane id="g_5" >
<t:row id="g_6" >
<t:gridheaderlabel id="g_7" height="50%" text="GZ" width="100%" />
</t:row>
<t:row id="g_8" >
<t:gridheaderlabel id="g_9" height="50%" text="Kurztitel" width="100%" />
</t:row>
</t:pane>
<t:gridheaderlabel id="g_10" text="Kommentar" />
<t:pane id="g_11" >
<t:row id="g_12" >
<t:gridheaderlabel id="g_13" height="50%" text="Typ" width="100%" />
</t:row>
<t:row id="g_14" >
<t:gridheaderlabel id="g_15" height="50%" text="Letzter Aufruf" width="100%" />
</t:row>
</t:pane>
<t:gridheaderlabel id="g_16" />
</t:gridheader>
<t:gridcol id="g_17" text="Column" width="100%;300" >
<t:pane id="g_18" >
<t:row id="g_19" >
<t:icon id="g_20" actionListener=".{onOpen}" image=".{icon}" />
<t:coldistance id="g_21" width="3" />
<t:pane id="g_22" >
<t:row id="g_23" >
<t:link id="g_24" actionListener=".{onOpen}" font="weight:bold" text=".{gz}" />
</t:row>
<t:row id="g_25" >
<t:link id="g_26" actionListener=".{onOpen}" text=".{kurztitel}" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_27" text="Column" width="75%;200" >
<t:label id="g_28" text=".{kommentar}" />
</t:gridcol>
<t:gridcol id="g_29" text="Column" width="35%;150" >
<t:pane id="g_30" >
<t:row id="g_31" >
<t:label id="g_32" text=".{objekttyp}" />
</t:row>
<t:row id="g_33" >
<t:label id="g_34" text=".{letzterAufruf}" />
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_35" text="Column" width="20" >
<t:icon id="g_36" actionListener=".{onDelete}" image="/awesomefont(f00d,#d9534f,18)" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
