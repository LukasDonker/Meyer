/* ############################################################################
 * CCUI5M_PROGRESSINDICATORElement
 * ############################################################################ */

function CCUI5M_PROGRESSINDICATORElement()
{
    this.init_CCUI5M_PROGRESSINDICATORElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_PROGRESSINDICATORElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PROGRESSINDICATORElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PROGRESSINDICATORElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PROGRESSINDICATORElement;
        this.m_ccClassName = "CCUI5M_PROGRESSINDICATORElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.ProgressIndicator());
    };
    this.applyComponentData_CCUI5M_PROGRESSINDICATORElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["displayvalue"])
        {
            this.m_ui5Node.setDisplayValue(this.m_attributes["displayvalue"]);
        }
        if (this.m_attributesChanged["percentvalue"])
        {
            this.m_ui5Node.setPercentValue(CCValueManager.decodeNumber(this.m_attributes["percentvalue"],0));
        }
        if (this.m_attributesChanged["showvalue"])
        {
            this.m_ui5Node.setShowValue(CCValueManager.decodeBoolean(this.m_attributes["showvalue"],true));
        }
        if (this.m_attributesChanged["valuestate"])
        {
            this.m_ui5Node.setState(this.m_attributes["valuestate"]);
        }
    };
    this.addChildNode_CCUI5M_PROGRESSINDICATORElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_PROGRESSINDICATORElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_PROGRESSINDICATORElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_PROGRESSINDICATORElement();
}
CCUI5M_PROGRESSINDICATORElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_progressindicator"] = function() { return new CCUI5M_PROGRESSINDICATORElement(); }; 
