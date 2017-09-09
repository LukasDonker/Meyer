/* ############################################################################
 * CCUI5U_CURRENCYElement
 * ############################################################################ */

function CCUI5U_CURRENCYElement()
{
    this.init_CCUI5U_CURRENCYElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5U_CURRENCYElement;
        this.applyComponentData = this.applyComponentData_CCUI5U_CURRENCYElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5U_CURRENCYElement; 
        this.removeChildNode = this.removeChildNode_CCUI5U_CURRENCYElement;
        this.m_ccClassName = "CCUI5U_CURRENCYElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.unified.Currency());
    };
    this.applyComponentData_CCUI5U_CURRENCYElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["currency"] == true)
        {
            this.m_ui5Node.setCurrency(this.m_attributes["currency"]);
        }
        if (this.m_attributesChanged["maxprecision"] == true)
        {
            this.m_ui5Node.setMaxPrecision(CCValueManager.decodeNumber(this.m_attributes["maxprecision"]),3);
        }
        if (this.m_attributesChanged["usesymbol"] == true)
        {
            this.m_ui5Node.setUseSymbol(CCValueManager.decodeBoolean(
                    this.m_attributes["usesymbol"], true));
        }
        if (this.m_attributesChanged["value"] == true)
        {
            this.m_ui5Node.setValue(CCValueManager.decodeNumber(this.m_attributes["value"]),0);
        }
    };
    this.addChildNode_CCUI5U_CURRENCYElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5U_CURRENCYElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5U_CURRENCYElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5U_CURRENCYElement();
}
CCUI5U_CURRENCYElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5u_currency"] = function() { return new CCUI5U_CURRENCYElement(); }; 
