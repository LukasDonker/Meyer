<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="LandingPageg_sv">
<t:beanprocessing id="g_1" >
<t:clientredirecturl id="g_2" trigger="#{d.LandingPageUI.myTrigger}" url="http://localhost:8080/MeyerUI//DesktopContentWindow.risc" />
<t:clientredirectpage id="g_3" keepsession="true" page="DesktopContentWindow.jsp" trigger="#{d.LandingPageUI.myTrigger}" />
</t:beanprocessing>
<t:rowtitlebar id="g_4" background="#006baf" text="Meyer Zukunft" />
<t:rowbodypane id="g_5" background="#d8d8d8" padding="left:0;right:0;top:0;bottom:0" >
<t:rowdistance id="g_6" height="15" />
<t:row id="g_7" >
<t:coldistance id="g_8" width="10%" />
<t:image id="g_9" image="/images/meyer-logo.png" />
</t:row>
<t:rowdistance id="g_10" height="40%" />
<t:row id="g_11" >
<t:coldistance id="g_12" width="50%" />
<t:pane id="g_13" background="#ffffff" border="left:5;right:5;top:5;bottom:5;color:#006baf" padding="left:5;right:5;top:5;bottom:5" width="400" >
<t:rowtitlebar id="g_14" background="#006baf" text="Anmeldung" />
<t:row id="g_15" >
<t:pane id="g_16" padding="left:10;right:10;top:10;bottom:10" width="100%" >
<t:row id="g_17" >
<t:label id="g_18" font="weight:bold" text="Benutzer" />
</t:row>
<t:row id="g_19" >
<t:field id="g_20" bgpaint="mandatory()" text="#{d.LandingPageUI.benutzername}" width="100%" />
</t:row>
<t:row id="g_21" >
<t:label id="g_22" font="weight:bold" text="Passwort" />
</t:row>
<t:row id="g_23" >
<t:password id="g_24" bgpaint="mandatory()" encryption="SHA512" text="#{d.LandingPageUI.passwort}" width="100%" />
</t:row>
<t:rowdistance id="g_25" height="10" />
<t:row id="g_26" >
<t:coldistance id="g_27" width="100%" />
<t:button id="g_28" actionListener="#{d.LandingPageUI.onAnmelden}" stylevariant="infoButton" text="Anmelden" />
</t:row>
</t:pane>
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_29" height="50%" />
</t:rowbodypane>
<t:rowstatusbar id="g_30" background="#d8d8d8" objectbinding="#{d.statusbar}" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
