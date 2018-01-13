<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_dialog_TeileUndPauschalarbeitenDIalogg_sv">
<t:rowtitlebar id="g_1" text="Teile und Pauschalarbeiten" />
<t:rowbodypane id="g_2" >
<t:rowdistance id="g_3" height="50" />
<t:row id="g_4" >
<t:coldistance id="g_5" width="100%" />
<t:pane id="g_6" width="100%" >
<t:row id="g_7" >
<t:label id="g_8" font="weight:bold" text="Suchen:" width="100%" />
</t:row>
<t:row id="g_9" >
<t:autocomplete id="g_10" width="450;100%" />
<t:coldistance id="g_11" />
<t:button id="g_12" stylevariant="primaryButton" text="Hinzufügen" />
</t:row>
</t:pane>
<t:coldistance id="g_13" width="100%" />
</t:row>
<t:rowdistance id="g_14" height="100" />
<t:row id="g_15" >
<t:coldistance id="g_16" width="100%" />
<t:pane id="g_17" width="100%" >
<t:row id="g_18" >
<t:button id="g_19" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button1x1}" width="75" />
<t:coldistance id="g_20" width="20" />
<t:button id="g_21" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button1x2}" width="75" />
<t:coldistance id="g_22" width="20" />
<t:button id="g_23" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button1x3}" width="75" />
<t:coldistance id="g_24" width="20" />
<t:button id="g_25" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button1x4}" width="75" />
<t:coldistance id="g_26" width="20" />
<t:button id="g_27" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button1x5}" width="75" />
</t:row>
<t:rowdistance id="g_28" height="20" />
<t:row id="g_29" >
<t:button id="g_30" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button2x1}" width="75" />
<t:coldistance id="g_31" width="20" />
<t:button id="g_32" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button2x2}" width="75" />
<t:coldistance id="g_33" width="20" />
<t:button id="g_34" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button2x3}" width="75" />
<t:coldistance id="g_35" width="20" />
<t:button id="g_36" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button2x4}" width="75" />
<t:coldistance id="g_37" width="20" />
<t:button id="g_38" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button2x5}" width="75" />
</t:row>
<t:rowdistance id="g_39" height="20" />
<t:row id="g_40" >
<t:button id="g_41" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button3x1}" width="75" />
<t:coldistance id="g_42" width="20" />
<t:button id="g_43" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button3x2}" width="75" />
<t:coldistance id="g_44" width="20" />
<t:button id="g_45" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button3x3}" width="75" />
<t:coldistance id="g_46" width="20" />
<t:button id="g_47" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button3x4}" width="75" />
<t:coldistance id="g_48" width="20" />
<t:button id="g_49" height="75" stylevariant="successButton" text="#{d.TeileUndPauschalarbeitenDialogUI.button3x5}" width="75" />
</t:row>
</t:pane>
<t:coldistance id="g_50" width="100%" />
</t:row>
<t:rowdistance id="g_51" height="50" />
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
