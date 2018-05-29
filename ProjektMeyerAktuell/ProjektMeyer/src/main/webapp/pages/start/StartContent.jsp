<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_start_StartContentg_sv">
<t:row id="g_28" >
<t:pane id="g_29" background="#006baf" height="30" width="100%" >
<t:row id="g_30" >
<t:coldistance id="g_32" />
<t:label id="g_31" font="size:16;weight:bold" foreground="#ffffff" height="30" text="Willkommen" />
<t:coldistance id="g_33" width="100%" />
<t:buttonpopup id="g_1" image="/awesomefont(f013,#FFFFFF,20)" width="21" >
<t:pane id="g_2" width="150" >
<t:row id="g_3" >
<t:button id="g_4" actionListener="#{d.StartContentUI.onNewGadget}" align="left" text="Inhalt hinzufügen" width="150" />
</t:row>
<t:row id="g_7" >
<t:button id="g_8" align="left" text="Inhalte verwalten" width="150" />
</t:row>
<t:row id="g_5" >
<t:button id="g_6" align="left" text="Startseite teilen" width="150" />
</t:row>
</t:pane>
</t:buttonpopup>
<t:coldistance id="g_34" />
</t:row>
</t:pane>
</t:row>
<t:rowbodypane id="g_36" >
<t:row id="g_37" >
<t:tiledarea id="g_39" objectbinding="#{d.StartContentUI.tiledAreaBinding}" persistid="startcontent" />
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
