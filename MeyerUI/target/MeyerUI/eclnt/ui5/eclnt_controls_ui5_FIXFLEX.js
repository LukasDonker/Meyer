/* ############################################################################
 * CCUI5_FIXFLEXElement
 * ############################################################################ */

function CCUI5_FIXFLEXElement()
{
    this.init_CCUI5_FIXFLEXElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_FIXFLEXElement;
        this.applyComponentData = this.applyComponentData_CCUI5_FIXFLEXElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_FIXFLEXElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_FIXFLEXElement;
        this.m_ccClassName = "CCUI5_FIXFLEXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.layout.FixFlex());
    };
    this.applyComponentData_CCUI5_FIXFLEXElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["fixcontentsize"] == true)
        {
            this.m_ui5Node.setFixContentSize(CCValueManager.decodeSize(
                    this.m_attributes["fixcontentsize"], null));
        }
        if (this.m_attributesChanged["fixfirst"] == true)
        {
            this.m_ui5Node.setFixFirst(CCValueManager.decodeBoolean(
                    this.m_attributes["fixfirst"], true));
        }
        if (this.m_attributesChanged["vertical"] == true)
        {
            this.m_ui5Node.setVertical(CCValueManager.decodeBoolean(
                    this.m_attributes["vertical"], true));
        }
        if (this.m_attributesChanged["minflexsize"] == true)
        {
            this.m_ui5Node.setMinFlexSize(CCValueManager.decodeNumber(this.m_attributes["minflexsize"]),0);
        }
    };
    this.addChildNode_CCUI5_FIXFLEXElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5_FIXFLEXElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5_FIXFLEXElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_FIXFLEXElement();
}
CCUI5_FIXFLEXElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_fixflex"] = function() { return new CCUI5_FIXFLEXElement(); }; 
