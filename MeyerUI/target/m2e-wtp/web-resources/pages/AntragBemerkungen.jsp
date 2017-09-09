<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AntragBemerkungeng_sv">
<t:rowheader id="g_1" >
<t:adaptivetoolbar id="g_2" width="100%" >
<t:icon id="g_3" image="/awesomefont(f067,#000000,14)" />
<t:coldistance id="g_4" width="100%" />
<t:icon id="g_5" image="/awesomefont(f29c,#000000,15)" />
</t:adaptivetoolbar>
</t:rowheader>
<t:rowbodypane id="g_6" background="#E9E9E9" padding="left:1;right:1;top:1;bottom:1" >
<t:row id="g_7" >
<t:fixgrid id="g_8" background="#E9E9E9" height="100%" objectbinding="#{tobedfined}" width="100%" >
<t:gridcol id="g_9" width="11" >
<t:icon id="g_10" image="/awesomefont(f040,#000000,10)" />
</t:gridcol>
<t:gridcol id="g_11" width="11" >
<t:icon id="g_12" image="/awesomefont(f014,#000000,10)" />
</t:gridcol>
<t:gridcol id="g_13" text="Bemerkung" width="100%" >
<t:label id="g_14" text="label" />
</t:gridcol>
<t:gridcol id="g_15" text="Datum" width="100" />
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
