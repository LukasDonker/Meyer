<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="LandingPageg_sv">
<t:rowtitlebar id="g_1" background="#006baf" text="Meyer Zukunft" />
<t:rowbodypane id="g_2" background="#d8d8d8" padding="left:0;right:0;top:0;bottom:0" >
<t:rowdistance id="g_3" height="15" />
<t:row id="g_4" >
<t:coldistance id="g_5" width="10%" />
<t:image id="g_6" image="/images/meyer-logo.png" />
</t:row>
<t:rowdistance id="g_7" height="40%" />
<t:row id="g_8" >
<t:coldistance id="g_9" width="50%" />
<t:pane id="g_10" background="#ffffff" border="left:5;right:5;top:5;bottom:5;color:#006baf" padding="left:5;right:5;top:5;bottom:5" width="400" >
<t:rowtitlebar id="g_11" background="#006baf" text="Anmeldung" />
<t:row id="g_12" >
<t:pane id="g_13" padding="left:10;right:10;top:10;bottom:10" width="100%" >
<t:row id="g_14" >
<t:label id="g_15" font="weight:bold" text="Benutzer" />
</t:row>
<t:row id="g_16" >
<t:field id="g_17" bgpaint="mandatory()" width="100%" />
</t:row>
<t:row id="g_18" >
<t:label id="g_19" font="weight:bold" text="Passwort" />
</t:row>
<t:row id="g_20" >
<t:password id="g_21" bgpaint="mandatory()" encryption="SHA512" width="100%" />
</t:row>
<t:rowdistance id="g_22" height="10" />
<t:row id="g_23" >
<t:coldistance id="g_24" width="100%" />
<t:button id="g_25" stylevariant="infoButton" text="Anmelden" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_26" height="50%" />
</t:rowbodypane>
<t:rowstatusbar id="g_27" background="#d8d8d8" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
