<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_dialog_UnterschriftDialogg_sv">
<t:rowbodypane id="g_1" padding="left:10;right:10;top:10;bottom:10" >
<t:row id="g_2" >
<t:label id="g_3" font="weight:bold" text="Name" />
</t:row>
<t:row id="g_4" >
<t:field id="g_5" text="#{d.UnterschriftDialogUI.klartext}" width="350" />
</t:row>
<t:rowdistance id="g_6" height="50" />
<t:row id="g_7" >
<t:label id="g_8" text="Bitte unterschreiben sie hier." />
</t:row>
<t:row id="g_9" >
<t:touchsignature id="g_10" border="left:2.5;right:2.5;top:2.5;bottom:2.5;color:#000000" height="130" pixelvalues="#{d.UnterschriftDialogUI.pixelValues}" width="350" />
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
