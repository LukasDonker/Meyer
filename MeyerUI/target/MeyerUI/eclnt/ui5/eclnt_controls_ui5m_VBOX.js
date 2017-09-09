/* ############################################################################
 * CCUI5M_VBOXElement
 * ############################################################################ */

function CCUI5M_VBOXElement()
{
    this.init_CCUI5M_VBOXElement = function()
    {
        this.init_CCUI5M_FLEXBOXElement();
        this.addChildNode = this.addChildNode_CCUI5M_VBOXElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_VBOXElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_VBOXElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_VBOXElement;
        this.m_ccClassName = "CCUI5M_VBOXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.VBox());
    };
    this.applyComponentData_CCUI5M_VBOXElement = function() { this.applyComponentData_CCUI5M_FLEXBOXElement(); };
    this.addChildNode_CCUI5M_VBOXElement = function(ccControl,index) { this.addChildNode_CCUI5M_FLEXBOXElement(ccControl,index); };
    this.removeChildNode_CCUI5M_VBOXElement = function(ccControl) { this.removeChildNode_CCUI5M_FLEXBOXElement(ccControl); };
    this.reactOnEvent_CCUI5M_VBOXElement = function(ccEvent) { this.reactOnEvent_CCUI5M_FLEXBOXElement(ccEvent); };
    this.init_CCUI5M_VBOXElement();
}
CCUI5M_VBOXElement.prototype = new CCUI5M_FLEXBOXElement();
s_CCPageElement_ElementCreators["ui5m_vbox"] = function() { return new CCUI5M_VBOXElement(); }; 
