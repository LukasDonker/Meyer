<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="dialogs_AntragContentDialogg_sv">
<t:rowheader id="g_1" >
<t:adaptivetoolbar id="g_2" width="100%" >
<t:button id="g_3" image="/awesomefont(f0c7,#FFFFFF,14)" stylevariant="successButton" text="Speichern" />
<t:coldistance id="g_4" />
<t:button id="g_5" image="/awesomefont(f00d,#FFFFFF,14)" stylevariant="dangerButton" text="Abbrechen" />
<t:coldistance id="g_6" width="100%" />
<t:button id="g_7" image="/awesomefont(f1e0,#FFFFFF,14)" stylevariant="infoButton" text="Share" />
<t:coldistance id="g_8" />
<t:button id="g_9" image="/awesomefont(f29c,#FFFFFF,14)" stylevariant="infoButton" />
</t:adaptivetoolbar>
</t:rowheader>
<t:rowbodypane id="g_10" padding="left:20;right:20;top:20;bottom:20" >
<t:rowtitlebar id="g_11" text="Stellen sie sich ihre Übersicht zusammen" />
<t:rowdistance id="g_12" />
<t:row id="g_13" >
<t:pagebeancomponent id="g_14" pagebeanbinding="#{d.AntragContentDialogUI.picklist}" pagebeanclass="org.eclnt.ccaddons.pbc.CCFilteredPickList" pagebeaninitdata="paneheight:300;panewidth:100%;lefttitle:Selected Objects;leftgridbackground:#FFFFFF;righttitle:Available Objects;rightgridbackground:#fafafa" />
</t:row>
<t:rowdistance id="g_15" height="20" />
<t:rowtitlebar id="g_16" text="Wählen sie ihre Registerseiten aus" />
<t:rowdistance id="g_17" />
<t:row id="g_18" >
<t:pagebeancomponent id="g_19" pagebeanbinding="#{d.AntragContentDialogUI.picklistContent}" pagebeanclass="org.eclnt.ccaddons.pbc.CCFilteredPickList" pagebeaninitdata="paneheight:300;panewidth:100%;lefttitle:Selected Objects;leftgridbackground:#FFFFFF;righttitle:Available Objects;rightgridbackground:#fafafa" />
</t:row>
<t:rowdistance id="g_20" />
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
