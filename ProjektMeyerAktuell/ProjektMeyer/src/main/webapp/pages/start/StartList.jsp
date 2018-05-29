<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_start_StartListg_sv">
<t:rowbodypane id="g_4" padding="left:20;right:20;top:20;bottom:20" >
<t:row id="g_144" >
<t:coldistance id="g_147" width="100%" />
<t:button id="g_148" actionListener="#{d.StartListUI.list.onEditColumnDetails}" image="/awesomefont(f06e,#FFFFFF,15)" stylevariant="infoButton" text="Ansicht anpassen" />
<t:coldistance id="g_149" />
<t:button id="g_150" actionListener="#{d.StartListUI.list.onOpenGridFunctions}" image="/awesomefont(f0ad,#FFFFFF,15)" stylevariant="infoButton" text="... weitere Funktionen" />
<t:coldistance id="g_151" />
</t:row>
<t:rowdistance id="g_152" height="10" />
<t:row id="g_153" >
<t:fixgrid id="g_186" height="100%;300" objectbinding="#{d.StartListUI.list}" sbvisibleamount="200" width="100%" >
<t:gridcol id="g_187" text="GZ" width="150" >
<t:link id="g_188" font="weight:bold" text=".{gz}" />
</t:gridcol>
<t:gridcol id="g_189" text="Antragsteller" width="100" >
<t:label id="g_190" text=".{antragsteller}" />
</t:gridcol>
<t:gridcol id="g_159" text="Ort" width="100" >
<t:label id="g_160" text=".{ort}" />
</t:gridcol>
<t:gridcol id="g_161" text="Titel" width="100%;400" >
<t:label id="g_162" text=".{titel}" />
</t:gridcol>
<t:gridcol id="g_163" text="Art" width="100" >
<t:label id="g_164" text=".{art}" />
</t:gridcol>
<t:gridcol id="g_165" text="Status" width="150" >
<t:label id="g_166" text=".{status}" />
</t:gridcol>
<t:gridcol id="g_191" text="Änderung" width="100" >
<t:label id="g_192" text=".{aenderung}" />
</t:gridcol>
<t:gridcol id="g_169" text="Federf. Team" width="100" >
<t:label id="g_170" text=".{fdrTeam}" />
</t:gridcol>
<t:gridcol id="g_171" text="Bearbeiter" width="100" >
<t:label id="g_172" text=".{bearbeiter}" />
</t:gridcol>
<t:gridcol id="g_173" text="Referent" width="100" >
<t:label id="g_174" text=".{referent}" />
</t:gridcol>
<t:gridcol id="g_175" text="Programm" width="100" >
<t:label id="g_176" text=".{programm}" />
</t:gridcol>
<t:gridcol id="g_177" text="Antragsart" width="100" >
<t:label id="g_178" text=".{antragsart}" />
</t:gridcol>
<t:gridcol id="g_179" text="Antragsform" width="100" >
<t:label id="g_180" text=".{antragsform}" />
</t:gridcol>
<t:gridcol id="g_181" text="Antragstyp" width="100" >
<t:label id="g_182" text=".{antragstyp}" />
</t:gridcol>
<t:gridcol id="g_183" text="Fach" width="100" >
<t:label id="g_184" text=".{fach}" />
</t:gridcol>
<t:gridcol id="g_193" align="right" text="Antragsumme" width="100%" >
<t:label id="g_194" align="right" text=".{antragSumme}" width="100" />
</t:gridcol>
</t:fixgrid>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
