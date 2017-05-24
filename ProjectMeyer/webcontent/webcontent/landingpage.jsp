<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="webcontent_landingpageg_sv">
<t:rowtitlebar id="g_1" text="Meyer Zukunft" />
<t:rowheader id="g_2" />
<t:rowbodypane id="g_3" >
<t:rowdistance id="g_4" height="40%" />
<t:row id="g_5" >
<t:coldistance id="g_6" width="25%" />
<t:pane id="g_7" background="#ffffff" border="left:5;right:5;top:5;bottom:5;color:#33607f" padding="left:5;right:5;top:5;bottom:5" width="50%" >
<t:rowtitlebar id="g_8" text="Anmeldung" />
<t:row id="g_9" >
<t:pane id="g_10" padding="left:10;right:10;top:10;bottom:10" width="100%" >
<t:row id="g_11" >
<t:label id="g_12" font="weight:bold" text="Benutzer" />
</t:row>
<t:row id="g_13" >
<t:field id="g_14" width="100%" />
</t:row>
<t:row id="g_15" >
<t:label id="g_16" font="weight:bold" text="Passwort" />
</t:row>
<t:row id="g_17" >
<t:password id="g_18" encryption="SHA512" width="100%" />
</t:row>
<t:rowdistance id="g_19" height="10" />
<t:row id="g_20" >
<t:coldistance id="g_21" width="100%" />
<t:button id="g_22" text="Anmelden" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:row>
</t:rowbodypane>
<t:rowstatusbar id="g_23" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
