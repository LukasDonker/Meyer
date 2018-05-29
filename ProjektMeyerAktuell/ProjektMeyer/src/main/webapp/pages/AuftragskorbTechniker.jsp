<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AuftragskorbTechnikerg_sv">
<t:rowbodypane id="g_1" >
<t:row id="g_2" >
<t:fixgrid id="g_3" height="100%" objectbinding="#{tobedfined}" sbvisibleamount="20" stylevariant="bootstrapTable" suppressheadline="true" width="100%" >
<t:gridcol id="g_4" text="Column" width="100" />
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
