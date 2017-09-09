<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_extern_ExternEntwuerfeg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:fixgrid id="g_3" height="100%" objectbinding="#{d.ExternEntwuerfeUI.entwuerfe}" rowheight="30" stylevariant="bootstrapTable" width="100%" >
<t:gridcol id="g_4" text="Entwurf" width="100%" >
<t:pane id="g_5" >
<t:row id="g_6" >
<t:coldistance id="g_7" />
<t:image id="g_8" image=".{image}" />
<t:coldistance id="g_9" />
<t:label id="g_10" font="weight:bold" text=".{name}" />
</t:row>
</t:pane>
</t:gridcol>
<t:gridcol id="g_11" width="106" >
<t:pane id="g_12" >
<t:rowdistance id="g_13" />
<t:row id="g_14" >
<t:coldistance id="g_15" width="3" />
<t:button id="g_16" image="/awesomefont(f061,#FFFFFF,15)" stylevariant="dangerButton" text="Fortsetzen" width="100" />
<t:coldistance id="g_17" width="3" />
</t:row>
<t:rowdistance id="g_18" />
</t:pane>
</t:gridcol>
<t:gridcol id="g_19" text="Unterbrechung am" width="120" >
<t:label id="g_20" text=".{unterbrechungdate}" />
</t:gridcol>
<t:gridcol id="g_21" text="Speicherung bis" width="110" >
<t:label id="g_22" text=".{speicherungdate}" />
</t:gridcol>
<t:gridcol id="g_23" width="106" >
<t:pane id="g_24" >
<t:rowdistance id="g_25" />
<t:row id="g_26" >
<t:coldistance id="g_27" width="3" />
<t:button id="g_28" image="/awesomefont(f1da,#FFFFFF,12)" rendered=".{verlaengerungpossible}" stylevariant="primaryButton" text="Verlängern" width="100" />
<t:coldistance id="g_29" width="3" />
</t:row>
<t:rowdistance id="g_30" />
</t:pane>
</t:gridcol>
<t:gridcol id="g_31" width="106" >
<t:pane id="g_32" >
<t:rowdistance id="g_33" />
<t:row id="g_34" >
<t:coldistance id="g_35" width="3" />
<t:button id="g_36" image="/awesomefont(f014,#FFFFFF,12)" stylevariant="primaryButton" text="Löschen" width="100" />
<t:coldistance id="g_37" width="3" />
</t:row>
<t:rowdistance id="g_38" />
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
