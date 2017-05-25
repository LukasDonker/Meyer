<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="managedbeans_formulare_Unterschriftg_sv">
<t:rowtitlebar id="g_1" text="Meyer Zukunft" />
<t:rowbodypane id="g_2" >
<t:row id="g_3" >
<t:touchsignature id="g_4" height="50%" width="100%" />
</t:row>
<t:rowdistance id="g_5" height="15" />
<t:row id="g_6" >
<t:button id="g_7" text="Zurück" />
<t:coldistance id="g_8" width="100%" />
<t:button id="g_9" text="Speichern" />
</t:row>
<t:rowdistance id="g_10" height="40%" />
</t:rowbodypane>
<t:rowstatusbar id="g_11" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
