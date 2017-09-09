<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_AntragUebersichtg_sv">
<t:rowbodypane id="g_4" >
<t:row id="g_15" >
<t:scrollpane id="g_1" height="100%" width="100%" >
<t:row id="g_12" >
<t:pane id="g_13" height="100%" >
<t:row id="g_14" comment="Antrag Ueberschrift" >
<t:label id="g_17" text="Antrag" />
</t:row>
<t:row id="g_41" >
<t:label id="g_42" />
</t:row>
<t:rowdistance id="g_56" height="5%" />
<t:row id="g_23" comment="Antragstyp" >
<t:label id="g_24" text="Antragstyp" />
</t:row>
<t:rowdistance id="g_54" height="5%" />
<t:row id="g_32" comment="Antragsteller" >
<t:label id="g_3" text="Antragsteller" />
</t:row>
<t:rowdistance id="g_52" height="10%" />
<t:row id="g_8" comment="Federführung" >
<t:label id="g_9" text="Federführung" />
</t:row>
<t:rowdistance id="g_50" height="5%" />
<t:row id="g_36" comment="Entscheidung" >
<t:label id="g_38" text="Entscheidung" />
</t:row>
<t:row id="g_16" comment="Status" >
<t:label id="g_45" text="Status" />
</t:row>
<t:rowdistance id="g_48" height="5%" />
<t:row id="g_22" comment="Förderabschnitt" >
<t:label id="g_85" text="Förderabschnitt 1" />
</t:row>
<t:rowdistance id="g_74" height="5%" />
<t:row id="g_87" comment="Antragssumme" >
<t:label id="g_27" text="Antragssumme" />
</t:row>
<t:rowdistance id="g_43" height="5%" />
<t:row id="g_30" comment="Bewilligungssumme" >
<t:label id="g_31" text="Bewilligungssumme" />
</t:row>
</t:pane>
<t:coldistance id="g_19" width="20%" />
<t:pane id="g_21" height="100%" >
<t:row id="g_72" comment="GZ Value" >
<t:label id="g_18" text="EL 1234/1-1" />
</t:row>
<t:row id="g_20" comment="Kurztitel" >
<t:label id="g_57" text="Schwarzbrot als Grundnahrungsmittel" />
</t:row>
<t:rowdistance id="g_55" height="5%" />
<t:row id="g_93" comment="Antragstyp Value" >
<t:label id="g_28" text="Sachbeihilfe Einzelantrag Neuantrag" />
</t:row>
<t:rowdistance id="g_89" height="5%" />
<t:row id="g_2" comment="Antragsteller Value" >
<t:link id="g_34" text="Susan Brady" />
<t:coldistance id="g_5" />
<t:label id="g_6" text="BR 4477" />
</t:row>
<t:rowdistance id="g_53" height="10%" />
<t:row id="g_10" comment="Federführung Value" >
<t:label id="g_11" text="0-CSC (Bender, Axel / Donker, Lukas)" />
</t:row>
<t:rowdistance id="g_51" height="5%" />
<t:row id="g_40" comment="Entscheidung Value" >
<t:label id="g_70" />
</t:row>
<t:row id="g_46" comment="Status Values" >
<t:label id="g_47" text="In Erfassung" />
<t:coldistance id="g_80" />
<t:label id="g_81" text="( 10.01.2017 )" />
</t:row>
<t:rowdistance id="g_78" height="5%" />
<t:row id="g_83" comment="Förderabschnitt Value" >
<t:label id="g_25" text="Erfassung" />
</t:row>
<t:rowdistance id="g_76" height="5%" />
<t:row id="g_91" comment="Antragssumme Value" >
<t:label id="g_29" text="300.600,00 €" />
</t:row>
<t:rowdistance id="g_44" height="5%" />
<t:row id="g_94" comment="Bewilligungssumme Value" >
<t:label id="g_33" text="0,00 €" />
</t:row>
</t:pane>
</t:row>
<t:rowdistance id="g_68" height="50%" />
<t:row id="g_65" >
<t:fixgrid id="g_37" objectbinding="#{tobedfined}" width="100%" >
<t:gridcol id="g_66" text="Bemerkungen" width="100%" >
<t:label id="g_39" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
