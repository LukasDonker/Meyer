/* ############################################################################
 * CCUI5M_HBOXElement
 * ############################################################################ */

function CCUI5M_HBOXElement()
{
    this.init_CCUI5M_HBOXElement = function()
    {
        this.init_CCUI5M_FLEXBOXElement();
        this.addChildNode = this.addChildNode_CCUI5M_HBOXElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_HBOXElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_HBOXElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_HBOXElement;
        this.m_ccClassName = "CCUI5M_HBOXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.HBox());
    };
    this.applyComponentData_CCUI5M_HBOXElement = function() { this.applyComponentData_CCUI5M_FLEXBOXElement(); };
    this.addChildNode_CCUI5M_HBOXElement = function(ccControl,index) { this.addChildNode_CCUI5M_FLEXBOXElement(ccControl,index); };
    this.removeChildNode_CCUI5M_HBOXElement = function(ccControl) { this.removeChildNode_CCUI5M_FLEXBOXElement(ccControl); };
    this.reactOnEvent_CCUI5M_HBOXElement = function(ccEvent) { this.reactOnEvent_CCUI5M_FLEXBOXElement(ccEvent); };
    this.init_CCUI5M_HBOXElement();
}
CCUI5M_HBOXElement.prototype = new CCUI5M_FLEXBOXElement();
s_CCPageElement_ElementCreators["ui5m_hbox"] = function() { return new CCUI5M_HBOXElement(); }; 
