<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_MaterialBestellungKVAg_sv">
<t:rowheader id="g_1" >
<t:adaptivetoolbar id="g_150" width="100%" >
<t:button id="g_3" image="/awesomefont(f0c7,#FFFFFF,15)" stylevariant="successButton" text="Speichern" />
<t:coldistance id="g_4" />
<t:button id="g_5" image="/awesomefont(f00d,#FFFFFF,15)" stylevariant="dangerButton" text="Abbrechen" />
<t:coldistance id="g_6" width="100%" />
<t:button id="g_7" image="/awesomefont(f019,#FFFFFF,15)" stylevariant="infoButton" text="PDF Download" />
</t:adaptivetoolbar>
</t:rowheader>
<t:rowbodypane id="g_151" background="#E9E9E9" padding="left:20;top:20" >
<t:row id="g_9" >
<t:scrollpane id="g_10" height="100%" padding="right:5" width="100%" >
<t:rowadaptiveline id="g_164" breakindex="1" breakpixels="300" comment="GZ" >
<t:pane id="g_38" >
<t:row id="g_39" >
<t:label id="g_153" font="weight:bold" text="Datum" width="200" />
<t:calendarfield id="g_154" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_155" width="50" />
<t:pane id="g_156" >
<t:row id="g_157" >
<t:textwithlinks id="g_158" font="weight:bold" text="Techniker" width="150" />
<t:field id="g_159" width="100%;200" />
</t:row>
</t:pane>
</t:rowadaptiveline>
<t:rowdistance id="g_161" height="10" />
<t:rowadaptiveline id="g_14" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_15" font="weight:bold" text="Kundennummer" width="200" />
<t:field id="g_16" width="200" />
</t:rowadaptiveline>
<t:rowdistance id="g_162" height="10" />
<t:rowadaptiveline id="g_17" breakindex="1" breakpixels="300" comment="GZ" >
<t:label id="g_18" font="weight:bold" text="Ansprechpartner" width="200" />
<t:autocomplete id="g_19" placeholder="Ansprechpartner auswahl" width="600" />
</t:rowadaptiveline>
<t:rowdistance id="g_20" height="15" />
<t:rowadaptiveline id="g_21" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:pane id="g_22" >
<t:row id="g_23" >
<t:textwithlinks id="g_24" font="weight:bold" text="Ansprechpartner Daten &lt;br&gt;&lt;br&gt;" width="200" />
<t:textwithlinks id="g_25" height="50" text="Musterkunde  &lt;br&gt; Musterstraße 123 &lt;br&gt; 11111 Musterstadt" width="200" />
</t:row>
</t:pane>
<t:coldistance id="g_26" width="50" />
</t:rowadaptiveline>
<t:rowdistance id="g_31" height="10" />
<t:rowadaptiveline id="g_32" breakindex="1" breakpixels="300" comment="Titel DE" >
<t:label id="g_166" font="weight:bold" text="Angebot per" width="200" />
<t:radiobutton id="g_167" group="angebotper" refvalue="Mail" text="Mail" width="100" />
<t:radiobutton id="g_169" group="angebotper" refvalue="Fax" text="Fax" width="100" />
<t:radiobutton id="g_170" group="angebotper" refvalue="Post" text="Post" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_42" height="10" />
<t:rowline id="g_172" />
<t:row id="g_175" >
<t:label id="g_176" font="size:14;weight:bold" text="Gerätebeschreibung" width="200" />
</t:row>
<t:rowdistance id="g_173" height="10" />
<t:rowadaptiveline id="g_43" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_178" font="weight:bold" text="Hersteller" width="200" />
<t:autocomplete id="g_180" placeholder="Hersteller" width="300" />
</t:rowadaptiveline>
<t:rowdistance id="g_57" height="10" />
<t:rowadaptiveline id="g_58" breakindex="1" breakpixels="300" >
<t:label id="g_59" font="weight:bold" text="Typ" width="200" />
<t:autocomplete id="g_60" placeholder="Typ" width="300" />
</t:rowadaptiveline>
<t:rowdistance id="g_61" height="10" />
<t:rowadaptiveline id="g_62" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_182" font="weight:bold" text="Höhe in mm" width="200" />
<t:field id="g_183" width="50" />
<t:label id="g_185" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_187" height="10" />
<t:rowadaptiveline id="g_193" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_194" font="weight:bold" text="Höhe in mm" width="200" />
<t:field id="g_195" width="50" />
<t:label id="g_196" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_27" height="10" />
<t:rowadaptiveline id="g_188" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_189" font="weight:bold" text="Tiefe in mm" width="200" />
<t:field id="g_190" width="50" />
<t:label id="g_191" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_82" height="10" />
<t:rowadaptiveline id="g_198" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_199" font="weight:bold" text="Fußhöhe / Sockelhöhein mm" width="200" />
<t:field id="g_200" width="50" />
<t:label id="g_201" text="mm" />
</t:rowadaptiveline>
<t:rowdistance id="g_88" height="10" />
<t:rowline id="g_203" />
<t:row id="g_244" >
<t:pane id="g_245" height="100%" padding="right:10;top:10;bottom:10" width="50%" >
<t:row id="g_246" >
<t:label id="g_247" font="size:14;weight:bold" text="Besonderheiten" width="200" />
</t:row>
<t:row id="g_248" >
<t:textarea id="g_249" height="100%" width="100%" />
</t:row>
</t:pane>
<t:pane id="g_250" padding="left:10;right:10;top:10;bottom:10" width="50%" >
<t:row id="g_251" >
<t:label id="g_252" font="size:14;weight:bold" text="Merkmale" width="200" />
</t:row>
<t:rowadaptiveline id="g_253" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_254" font="weight:bold" text="Elektro" width="200" />
<t:radiobutton id="g_255" group="elektro" refvalue="230" text="230 V" width="75" />
<t:radiobutton id="g_41" group="elektro" refvalue="400" text="400 V" width="75" />
</t:rowadaptiveline>
<t:rowdistance id="g_286" height="10" />
<t:rowadaptiveline id="g_257" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_258" font="weight:bold" text="Gas" width="200" />
<t:toggle id="g_295" />
</t:rowadaptiveline>
<t:rowdistance id="g_288" height="10" />
<t:rowadaptiveline id="g_261" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_262" font="weight:bold" text="Reinigerdosierung" width="200" />
<t:toggle id="g_263" width="100" />
</t:rowadaptiveline>
<t:rowdistance id="g_289" height="10" />
<t:rowadaptiveline id="g_265" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_266" font="weight:bold" text="Motorkippung" width="200" />
<t:toggle id="g_268" />
</t:rowadaptiveline>
<t:rowdistance id="g_290" height="10" />
<t:rowadaptiveline id="g_269" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_270" font="weight:bold" text="Handkippung" width="200" />
<t:toggle id="g_271" />
</t:rowadaptiveline>
<t:rowdistance id="g_291" height="10" />
<t:rowadaptiveline id="g_273" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_274" font="weight:bold" text="Wasserenthärtung" width="200" />
<t:toggle id="g_275" />
</t:rowadaptiveline>
<t:rowdistance id="g_292" height="10" />
<t:rowadaptiveline id="g_277" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_278" font="weight:bold" text="Altgerätentsorgung" width="200" />
<t:toggle id="g_279" />
</t:rowadaptiveline>
<t:rowdistance id="g_293" height="10" />
<t:rowadaptiveline id="g_281" breakindex="1" breakpixels="300" comment="Titel ENG" >
<t:label id="g_282" font="weight:bold" text="Zeitaufwand" width="200" />
<t:field id="g_283" width="75" />
</t:rowadaptiveline>
</t:pane>
</t:row>
<t:rowdistance id="g_50" height="10" />
<t:rowline id="g_51" />
<t:row id="g_297" >
<t:label id="g_298" font="size:14;weight:bold" text="Bilder" width="200" />
</t:row>
<t:row id="g_53" >
<t:fileuploadbutton id="g_54" font="weight:bold" text="Bilder für Dokumentation Hochladen" />
</t:row>
<t:row id="g_300" >
<t:imageshaker id="g_301" height="100%" objectbinding="#{xyz.xyz}" width="100%" />
</t:row>
</t:scrollpane>
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
