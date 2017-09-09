/* ############################################################################
 * CCUI5M_OBJECTHEADERElement
 * ############################################################################ */

function CCUI5M_OBJECTHEADERElement()
{
    this.init_CCUI5M_OBJECTHEADERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_OBJECTHEADERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_OBJECTHEADERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_OBJECTHEADERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_OBJECTHEADERElement;
        this.m_ccClassName = "CCUI5M_OBJECTHEADERElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.ObjectHeader());
        this.m_ui5Node.attachTitlePress(function(oEvent) {that.reactOnTitlePress(this,oEvent);});
        this.m_ui5Node.attachIntroPress(function(oEvent) {that.reactOnIntroPress(this,oEvent);});
        this.m_ui5Node.attachIconPress(function(oEvent) {that.reactOnIconPress(this,oEvent);});
    };
    this.applyComponentData_CCUI5M_OBJECTHEADERElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["backgrounddesign"] == true)
        {
            this.m_ui5Node.setBackgroundDesign(this.m_attributes["backgrounddesign"]);
        }
        if (this.m_attributesChanged["condensed"] == true)
        {
            this.m_ui5Node.setCondensed(CCValueManager.decodeBoolean(
                    this.m_attributes["condensed"], attbool));
        }
        if (this.m_attributesChanged["icon"] == true)
        {
            this.m_ui5Node.setIcon(this.getPage().updateUrl(
                    this.m_attributes["icon"]));
        }
        if (this.m_attributesChanged["iconactive"] == true)
        {
            this.m_ui5Node.setIconActive(CCValueManager.decodeBoolean(
                    this.m_attributes["iconactive"], false));
        }
        if (this.m_attributesChanged["icondensityaware"] == true)
        {
            this.m_ui5Node.setIconDensityAware(CCValueManager.decodeBoolean(
                    this.m_attributes["icondensityaware"], true));
        }
        if (this.m_attributesChanged["intro"] == true)
        {
            this.m_ui5Node.setIntro(this.m_attributes["intro"]);
        }
        if (this.m_attributesChanged["introactive"] == true)
        {
            this.m_ui5Node.setIntroActive(CCValueManager.decodeBoolean(
                    this.m_attributes["introactive"], false));
        }
        if (this.m_attributesChanged["markfavorite"] == true)
        {
            this.m_ui5Node.setMarkFavorite(CCValueManager.decodeBoolean(
                    this.m_attributes["markfavorite"], false));
        }
        if (this.m_attributesChanged["markflagged"] == true)
        {
            this.m_ui5Node.setMarkFlagged(CCValueManager.decodeBoolean(
                    this.m_attributes["markflagged"], false));
        }
        if (this.m_attributesChanged["number"] == true)
        {
            this.m_ui5Node.setNumber(this.m_attributes["number"]);
        }
        if (this.m_attributesChanged["numberstate"] == true)
        {
            this.m_ui5Node.setNumberState(this.m_attributes["numberstate"]);
        }
        if (this.m_attributesChanged["numberunit"] == true)
        {
            this.m_ui5Node.setNumberUnit(this.m_attributes["numberunit"]);
        }
        if (this.m_attributesChanged["responsive"] == true)
        {
            this.m_ui5Node.setResponsive(CCValueManager.decodeBoolean(
                    this.m_attributes["responsive"], false));
        }
        if (this.m_attributesChanged["showmarkers"] == true)
        {
            this.m_ui5Node.setShowMarkers(CCValueManager.decodeBoolean(
                    this.m_attributes["showmarkers"], false));
        }
        if (this.m_attributesChanged["showtitleselector"] == true)
        {
            this.m_ui5Node.setShowTitleSelector(CCValueManager.decodeBoolean(
                    this.m_attributes["showtitleselector"], false));
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
        if (this.m_attributesChanged["titleactive"] == true)
        {
            this.m_ui5Node.setTitleActive(CCValueManager.decodeBoolean(
                    this.m_attributes["titleactive"], false));
        }
    };
    this.addChildNode_CCUI5M_OBJECTHEADERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_OBJECTHEADERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_OBJECTHEADERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnTitlePress = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","objectheadertitleinvoke()");
    };
    this.reactOnIntroPress = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","objectheaderintroinvoke()");
    };
    this.reactOnIconPress = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","objectheadericoninvoke()");
    };
    this.init_CCUI5M_OBJECTHEADERElement();
}
CCUI5M_OBJECTHEADERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_objectheader"] = function() { return new CCUI5M_OBJECTHEADERElement(); }; 
