<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="LandingPageg_sv">
<t:rowtitlebar id="g_2" background="#006baf" text="Meyer Zukunft" />
<t:rowbodypane id="g_4" background="#d8d8d8" padding="left:0;right:0;top:0;bottom:0" >
<t:rowdistance id="g_27" height="15" />
<t:row id="g_28" >
<t:coldistance id="g_5" width="10%" />
<t:image id="g_1" image="/images/meyer-logo.png" />
</t:row>
<t:rowdistance id="g_30" height="40%" />
<t:row id="g_6" >
<t:coldistance id="g_7" width="50%" />
<t:pane id="g_8" background="#ffffff" border="left:5;right:5;top:5;bottom:5;color:#006baf" padding="left:5;right:5;top:5;bottom:5" width="400" >
<t:rowtitlebar id="g_9" background="#006baf" text="Anmeldung" />
<t:row id="g_10" >
<t:pane id="g_11" padding="left:10;right:10;top:10;bottom:10" width="100%" >
<t:row id="g_12" >
<t:label id="g_13" font="weight:bold" text="Benutzer" />
</t:row>
<t:row id="g_14" >
<t:field id="g_15" bgpaint="mandatory()" width="100%" />
</t:row>
<t:row id="g_16" >
<t:label id="g_17" font="weight:bold" text="Passwort" />
</t:row>
<t:row id="g_18" >
<t:password id="g_19" bgpaint="mandatory()" encryption="SHA512" width="100%" />
</t:row>
<t:rowdistance id="g_20" height="10" />
<t:row id="g_21" >
<t:coldistance id="g_22" width="100%" />
<t:button id="g_23" text="Anmelden" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_24" height="50%" />
</t:rowbodypane>
<t:rowstatusbar id="g_25" background="#d8d8d8" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
