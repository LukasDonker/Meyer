<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_Adming_sv">
<t:rowheader id="g_1" >
<t:adaptivetoolbar id="g_2" width="100%" >
<t:button id="g_3" image="/awesomefont(f0c7,#FFFFFF,15)" stylevariant="successButton" text="Speichern" />
<t:coldistance id="g_4" />
<t:button id="g_5" image="/awesomefont(f00d,#FFFFFF,15)" stylevariant="dangerButton" text="Abbrechen" />
</t:adaptivetoolbar>
</t:rowheader>
<t:rowbodypane id="g_6" background="#E9E9E9" padding="left:20;top:20" >
<t:row id="g_7" >
<t:scrollpane id="g_8" height="100%" padding="right:5" width="100%" >
<t:rowadaptiveline id="g_9" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_10" font="weight:bold" text="Benutzername" width="200" />
<t:field id="g_11" enabled="#{d.AntragKerndatenUI.admin}" placeholder="Benutzername" text="#{d.AntragKerndatenUI.benutzername}" width="200" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_12" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_13" font="weight:bold" text="Kennwort" width="200" />
<t:password id="g_14" encryption="SHA512" placeholder="Passwort" text="#{d.AntragKerndatenUI.passwort}" width="200" />
</t:rowadaptiveline>
<t:rowadaptiveline id="g_15" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_16" font="weight:bold" text="Neues Passwort" width="200" />
<t:password id="g_17" encryption="SHA512" placeholder="Neues Passwort" text="#{d.AntragKerndatenUI.neuesPasswort}" width="200" />
</t:rowadaptiveline>
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
