<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_dialog_UnterschriftDialogg_sv">
<t:rowtitlebar id="g_1" text="Unterschrift" />
<t:rowbodypane id="g_2" >
<t:row id="g_3" >
<t:label id="g_4" text="Bitte unterschreiben sie hier." />
</t:row>
<t:row id="g_5" >
<t:touchsignature id="g_6" height="100%" width="100%" />
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
