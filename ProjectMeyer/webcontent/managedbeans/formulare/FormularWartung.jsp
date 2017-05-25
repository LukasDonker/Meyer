<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="managedbeans_formulare_FormularWartungg_sv">
<t:rowtitlebar id="g_1" text="Meyer Zukunft" />
<t:rowbodypane id="g_2" >
<t:row id="g_3" >
<t:label id="g_4" font="weight:bold" text="Formulartyp" width="150" />
<t:label id="g_5" text="Wartung" width="150" />
</t:row>
<t:rowdistance id="g_6" height="15" />
<t:row id="g_7" >
<t:label id="g_8" font="weight:bold" text="Ansprechpartner" width="150" />
<t:autocomplete id="g_9" width="150" />
</t:row>
<t:rowdistance id="g_10" height="15" />
<t:row id="g_11" >
<t:textpane id="g_12" font="weight:bold" height="50" text="Kunde" width="150" />
<t:textpane id="g_13" text="Beispiel Kunde Firma 123                                Straße 231                         11111 Musterstadt" width="150" />
</t:row>
<t:rowdistance id="g_14" height="15" />
<t:row id="g_15" >
<t:textpane id="g_16" font="weight:bold" height="50" text="Auszuführende Arbeiten" width="150" />
<t:textarea id="g_17" height="50" width="300" />
</t:row>
<t:rowdistance id="g_18" height="15" />
<t:row id="g_19" >
<t:textpane id="g_20" font="weight:bold" height="200" text="Arbeitsbericht des Technikers" width="150" />
<t:textarea id="g_21" height="200" width="300" />
</t:row>
<t:rowdistance id="g_22" height="15" />
<t:row id="g_23" >
<t:textpane id="g_24" font="weight:bold" height="50" text="Materialbestellung" width="150" />
<t:textarea id="g_25" height="50" width="300" />
</t:row>
<t:rowdistance id="g_26" height="100%" />
<t:row id="g_27" >
<t:button id="g_28" text="Zurück" />
<t:coldistance id="g_29" width="100%" />
<t:button id="g_30" text="Weiter" />
</t:row>
</t:rowbodypane>
<t:rowstatusbar id="g_31" />
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
