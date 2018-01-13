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
<t:rowbodypane id="g_2" padding="left:10;right:10;top:10;bottom:10" >
<t:row id="g_3" >
<t:label id="g_4" font="weight:bold" text="Name" />
</t:row>
<t:row id="g_5" >
<t:field id="g_6" width="300" />
</t:row>
<t:rowdistance id="g_7" height="50" />
<t:row id="g_8" >
<t:label id="g_9" text="Bitte unterschreiben sie hier." />
</t:row>
<t:row id="g_10" >
<t:touchsignature id="g_11" border="left:2.5;right:2.5;top:2.5;bottom:2.5;color:#000000" height="100%" width="100%" />
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
