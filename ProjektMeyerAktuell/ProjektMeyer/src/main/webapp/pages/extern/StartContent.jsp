<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

<%@taglib prefix="t" uri="/WEB-INF/eclnt"%>


<!-- ========== CONTENT BEGIN ========== -->
<f:view>
<h:form>
<f:subview id="pages_extern_StartContentg_sv">
<t:row id="g_1" >
<t:foldablepane id="g_2" border="bottom:3;color:#03519d" text="Herzlich willkommen im elan-Portal der Deutschen Forschungsgemeinschaft!" width="100%" >
<t:foldablepaneheaderrow id="g_3" >
<t:adaptivetoolbar id="g_4" stylevariant="Navigation" >
<t:coldistance id="g_5" />
<t:button id="g_6" actionListener="#{d.ExternStartContentUI.onNewProject}" image="/awesomefont(f067,#FFFFFF,15)" stylevariant="dangerButton" text="Neues Projekt / Antragskizze" tooltip="Hier können Sie Neuanträge oder Antragskizzen zu einem (Teil-)Projekt einreichen." width="100%" />
</t:adaptivetoolbar>
<t:icon id="g_7" height="30" image="/awesomefont(f013,#FFFFFF,20)" tooltip="Konfigurieren sie sich ihre eigene Startseite!" />
<t:coldistance id="g_8" />
</t:foldablepaneheaderrow>
<t:row id="g_9" >
<t:textwithlinks id="g_10" text="&lt;b&gt;Herzlich willkommen im elan-Portal der Deutschen Forschungsgemeinschaft!&lt;/b&gt; &lt;/br&gt; &lt;/br&gt; &lt;b&gt;Wartungsfenster:&lt;/b&gt; Es gibt ein geplantes Wartungsfenster am &lt;b&gt;Freitag den 31.03. 18:00-19:00.&lt;/b&gt; &lt;/br&gt; In dieser Zeit steht ihnen das Elan Portal nicht zur Verfügung.&lt;/br&gt;&lt;/br&gt;&lt;b&gt;Ausschreibungen:&lt;/b&gt; &#34;Nachwuchsinitiative neues ElektrA&#34; endet am &lt;b&gt;31.05.2017&lt;/b&gt;. &lt;/br&gt;" width="100%" />
</t:row>
</t:foldablepane>
</t:row>
<t:rowbodypane id="g_11" >
<t:row id="g_12" >
<t:tiledarea id="g_13" objectbinding="#{d.ExternStartContentUI.tiledAreaBinding}" persistid="startcontent" />
</t:row>
</t:rowbodypane>
<t:pageaddons id="g_pa"/>
</f:subview>
</h:form>
</f:view>
<!-- ========== CONTENT END ========== -->
