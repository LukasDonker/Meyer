<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_dialog_MaterialBestellungDialogg_sv">
<t:rowtitlebar id="g_1" text="Materialbestellung" />
<t:rowbodypane id="g_2" padding="left:20;right:20;top:20" >
<t:row id="g_3" >
<t:label id="g_4" font="weight:bold" text="Dringend" />
<t:coldistance id="g_5" />
<t:toggle id="g_6" />
<t:coldistance id="g_7" width="35%" />
<t:label id="g_8" font="weight:bold" text="KVA" />
<t:coldistance id="g_9" />
<t:toggle id="g_10" />
</t:row>
<t:rowdistance id="g_11" height="20" />
<t:row id="g_12" >
<t:label id="g_13" font="weight:bold" text="Gerät:" />
</t:row>
<t:row id="g_14" >
<t:fixgrid id="g_15" height="150" objectbinding="#{tobedfined}" width="100%" >
<t:gridcol id="g_16" text="Hersteller" width="20%" />
<t:gridcol id="g_17" text="Gerät" width="20%" />
<t:gridcol id="g_18" text="Typ/Modell" width="20%" />
<t:gridcol id="g_19" text="S/N" width="20%" />
<t:gridcol id="g_20" text="Baujahr" width="20%" />
</t:fixgrid>
</t:row>
<t:rowdistance id="g_21" height="20" />
<t:row id="g_22" >
<t:label id="g_23" font="weight:bold" text="Auszuführende Arbeiten" />
</t:row>
<t:row id="g_24" >
<t:textarea id="g_25" height="200" width="100%" />
</t:row>
<t:row id="g_26" >
<t:coldistance id="g_27" />
<t:label id="g_28" font="underline:true" foreground="#FF0000" text="Eventuell noch auftretende Fehler können erst nach erfolgter Repeatur festgestellt werden." />
<t:coldistance id="g_29" />
</t:row>
<t:rowdistance id="g_30" height="20" />
<t:row id="g_31" >
<t:label id="g_32" font="weight:bold" text="Material" />
</t:row>
<t:row id="g_33" >
<t:fixgrid id="g_34" objectbinding="#{tobedfined}" width="100%" >
<t:gridcol id="g_35" text="Menge" width="50" />
<t:gridcol id="g_36" text="Beschreibung" width="100%" />
<t:gridcol id="g_37" text="Bestellnummer" width="100" />
<t:gridcol id="g_38" text="Hersteller/Zulieferer" width="150" />
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
