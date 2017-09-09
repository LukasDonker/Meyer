/* ############################################################################
 * CCUI5M_SWITCHElement
 * ############################################################################ */

function CCUI5M_SWITCHElement()
{
    this.init_CCUI5M_SWITCHElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_SWITCHElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_SWITCHElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_SWITCHElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_SWITCHElement;
        this.m_ccClassName = "CCUI5M_SWITCHElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Switch());
        this.m_ui5Node.attachChange(function() {that.reactOnChange(this);});
    };
    this.applyComponentData_CCUI5M_SWITCHElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["customtextoff"])
        {
            this.m_ui5Node.setCustomTextOff(this.m_attributes["customtextoff"]);
        }
        if (this.m_attributesChanged["customtexton"])
        {
            this.m_ui5Node.setCustomTextOn(this.m_attributes["customtexton"]);
        }
        if (this.m_attributesChanged["state"])
        {
            this.m_ui5Node.setState(CCValueManager.decodeBoolean(this.m_attributes["state"],false));
        }
        if (this.m_attributesChanged["switchtype"])
        {
            this.m_ui5Node.setType(this.m_attributes["switchtype"]);
        }
    };
    this.addChildNode_CCUI5M_SWITCHElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_SWITCHElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_SWITCHElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller)
    {
        this.registerDirtyInformation(this.getId(),this.m_ui5Node.getState(),false,true,null,false);
    };
    this.init_CCUI5M_SWITCHElement();
}
CCUI5M_SWITCHElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_switch"] = function() { return new CCUI5M_SWITCHElement(); }; 
