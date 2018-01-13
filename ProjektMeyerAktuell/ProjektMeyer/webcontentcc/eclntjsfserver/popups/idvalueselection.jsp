<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="eclntjsfserver_popups_idvalueselectiong_sv">
<t:beanprocessing id="g_1" >
<t:beanmethodinvoker id="g_2" actionListener="#{eclntdefscr.popupIdTextSelection.onRenderBeginAction}" jsfphase="renderBegin" />
</t:beanprocessing>
<t:row id="g_3" >
<t:pane id="g_4" border="#808080" height="100%" padding="1" stylevariant="IDVALUESELECTION" width="100%" >
<t:rowheader id="g_5" rendered="#{eclntdefscr.popupIdTextSelection.renderFilterText}" >
<t:pane id="g_6" width="100%" >
<t:row id="g_7" >
<t:field id="g_8" actionListener="#{eclntdefscr.popupIdTextSelection.onFilterTextAction}" flush="true" flushtimer="1000" text="#{eclntdefscr.popupIdTextSelection.filterText}" textimage="/awesomefont(f0b0,#808080,12)" width="100%" />
</t:row>
<t:row id="g_9" >
<t:coldistance id="g_10" width="100%" />
<t:label id="g_11" font="size:10" text="#{eclntdefscr.popupIdTextSelection.filterResultText}" />
</t:row>
</t:pane>
</t:rowheader>
<t:rowbodypane id="g_12" padding="0" stylevariant="IDVALUESELECTION" >
<t:row id="g_13" >
<t:fixgrid id="g_14" avoidroundtrips="true" border="top:0;left:0;right:0;bottom:0" height="100%" keysensitive="true" objectbinding="#{eclntdefscr.popupIdTextSelection.lines}" requestfocus="#{eclntdefscr.popupIdTextSelection.requestFocus}" rowheight="16" sbvisibleamount="20" singleclickexecute="true" stylevariant="IDVALUESELECTION" suppressheadline="#{eclntdefscr.popupIdTextSelection.suppressHeadline}" width="100%" >
<t:gridcol id="e_140" rendered="#{eclntdefscr.popupIdTextSelection.renderIdColumn}" text="#{eclntdefscr.popupIdTextSelection.titleId}" width="100" focusable="false">
<t:label id="e_141" bgpaint=".{bgpaint}" stylevariant="IDVALUESELECTION" text=".{id}" />
</t:gridcol>
<t:gridcol id="g_15" rendered="#{eclntdefscr.popupIdTextSelection.renderTextColumn}" text="#{eclntdefscr.popupIdTextSelection.titleText}" width="100%" focusable="false">
<t:label id="g_16" bgpaint=".{bgpaint}" stylevariant="IDVALUESELECTION" text=".{text}" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:rowheader id="g_17" rendered="#{eclntdefscr.popupIdTextSelection.withHeader}" stylevariant="IDVALUESELECTION" >
<t:button id="g_18" actionListener="#{eclntdefscr.popupIdTextSelection.onOK}" contentareafilled="fase" image="/eclntjsfserver/images/yesnopopup_yes.png" text="#{eclnti18n.IDTEXTSEL_ok}" />
<t:coldistance id="g_19" width="100%" />
<t:button id="g_20" actionListener="#{eclntdefscr.popupIdTextSelection.onCancel}" contentareafilled="false" text="#{eclnti18n.IDTEXTSEL_cancel}" />
</t:rowheader>
</t:pane>
</t:row>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
