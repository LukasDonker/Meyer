<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AntragStatusg_sv">
<t:rowbodypane id="g_1" background="#E9E9E9" >
<t:row id="g_2" >
<t:scrollpane id="g_3" height="100%" width="100%" >
<t:row id="g_4" >
<t:pagebeancomponent id="g_5" pagebeanbinding="#{d.AntragStatusUI.graphicalTree}" pagebeanclass="org.eclnt.ccaddons.pbc.CCGraphicalTree" pagebeaninitdata="boxWidth:120;boxHeight:40" />
</t:row>
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
