/* ############################################################################
 * CCUI5M_IMAGEElement
 * ############################################################################ */

function CCUI5M_IMAGEElement()
{
    this.init_CCUI5M_IMAGEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_IMAGEElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_IMAGEElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_IMAGEElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_IMAGEElement;
        this.m_ccClassName = "CCUI5M_IMAGEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Image());
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
    };
    this.applyComponentData_CCUI5M_IMAGEElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["activesrc"])
        {
            this.m_ui5Node.setActiveSrc(this.getPage().updateUrl(this.m_attributes["activesrc"]));
        }
        if (this.m_attributesChanged["alt"])
        {
            this.m_ui5Node.setAlt(this.m_attributes["alt"]);
        }
        if (this.m_attributesChanged["decorative"])
        {
            this.m_ui5Node.setDecorative(CCValueManager.decodeBoolean(this.m_attributes["decorative"],true));
        }
        if (this.m_attributesChanged["densityaware"])
        {
            this.m_ui5Node.setDensityAware(CCValueManager.decodeBoolean(this.m_attributes["densityaware"],true));
        }
        if (this.m_attributesChanged["src"])
        {
            this.m_ui5Node.setSrc(this.getPage().updateUrl(this.m_attributes["src"]));
        }
    };
    this.addChildNode_CCUI5M_IMAGEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_IMAGEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_IMAGEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCUI5M_IMAGEElement();
}
CCUI5M_IMAGEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_image"] = function() { return new CCUI5M_IMAGEElement(); }; 
