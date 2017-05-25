<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="webcontent_common_mainmenug_sv">
<t:rowtitlebar id="g_1" text="Meyer Zukunft" />
<t:row id="g_2" >
<t:adaptivetoolbar id="g_3" width="100%" >
<t:button id="g_4" text="Hauptmenü" />
<t:coldistance id="g_5" width="100%" />
<t:button id="g_6" text="Benutzer" />
<t:coldistance id="g_7" />
<t:button id="g_8" text="Administration" />
</t:adaptivetoolbar>
</t:row>
<t:rowbodypane id="g_9" >
<t:row id="g_10" >
<t:pane id="g_11" border="left:10;right:10;top:10;bottom:10;color:#33607f" height="100%" width="100%" >
<t:rowtitlebar id="g_12" text="Hauptmenü" />
<t:row id="g_13" >
<t:pane id="g_14" height="100%" padding="left:20;right:20;top:20;bottom:20" width="100%" >
<t:rowdistance id="g_15" height="100%" />
<t:row id="g_16" >
<t:coldistance id="g_17" width="50%" />
<t:button id="g_18" height="150" text="Formular erstellen" width="50%" />
</t:row>
<t:rowdistance id="g_19" height="20" />
<t:row id="g_20" >
<t:coldistance id="g_21" width="50%" />
<t:button id="g_22" height="150" text="Formular öffnen" width="50%" />
</t:row>
<t:rowdistance id="g_23" height="100%" />
</t:pane>
<t:pane id="g_24" height="100%" padding="left:20;right:20;top:20;bottom:20" width="100%" >
<t:rowdistance id="g_25" height="100%" />
<t:row id="g_26" >
<t:button id="g_27" height="150" text="Zeiterfassung erstellen" width="50%" />
<t:coldistance id="g_28" width="50%" />
</t:row>
<t:rowdistance id="g_29" height="20" />
<t:row id="g_30" >
<t:button id="g_31" height="150" text="Zeiterfassung öffnen" width="50%" />
<t:coldistance id="g_32" width="50%" />
</t:row>
<t:rowdistance id="g_33" height="100%" />
</t:pane>
</t:row>
</t:pane>
</t:row>
</t:rowbodypane>
<t:rowstatusbar id="g_34" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
