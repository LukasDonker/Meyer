/* ############################################################################
 * CCUI5M_TABLECOLUMNElement
 * ############################################################################ */

function CCUI5M_TABLECOLUMNElement()
{
    this.init_CCUI5M_TABLECOLUMNElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TABLECOLUMNElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TABLECOLUMNElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TABLECOLUMNElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TABLECOLUMNElement;
        this.m_ccClassName = "CCUI5M_TABLECOLUMNElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Column());
    };
    this.applyComponentData_CCUI5M_TABLECOLUMNElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["demandpopin"] == true)
        {
            this.m_ui5Node.setDemandPopin(CCValueManager.decodeBoolean(
                    this.m_attributes["demandpopin"], false));
        }
        if (this.m_attributesChanged["halign"] == true)
        {
            this.m_ui5Node.setHAlign(this.m_attributes["halign"]);
        }
        if (this.m_attributesChanged["mergeduplicated"] == true)
        {
            this.m_ui5Node.setMergeDuplicates(CCValueManager.decodeBoolean(
                    this.m_attributes["mergeduplicated"], false));
        }
        if (this.m_attributesChanged["minscreenwidth"] == true)
        {
            this.m_ui5Node.setMinScreenWidth(CCValueManager.decodeSize(
                    this.m_attributes["minscreenwidth"], null));
        }
        if (this.m_attributesChanged["popindisplay"] == true)
        {
            this.m_ui5Node.setPopinDisplay(this.m_attributes["popindisplay"]);
        }
        if (this.m_attributesChanged["valign"] == true)
        {
            this.m_ui5Node.setVAlign(this.m_attributes["valign"]);
        }
    };
    this.addChildNode_CCUI5M_TABLECOLUMNElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.setHeader(ccControl.m_ui5Node);
        }
    };
    this.removeChildNode_CCUI5M_TABLECOLUMNElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null && 
            ccControl.m_ui5Node == this.m_ui5Node.getHeader())
        {
            this.m_ui5Node.setHeader(null);
        }
    };
    this.reactOnEvent_CCUI5M_TABLECOLUMNElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_TABLECOLUMNElement();
}
CCUI5M_TABLECOLUMNElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_tablecolumn"] = function() { return new CCUI5M_TABLECOLUMNElement(); }; 
