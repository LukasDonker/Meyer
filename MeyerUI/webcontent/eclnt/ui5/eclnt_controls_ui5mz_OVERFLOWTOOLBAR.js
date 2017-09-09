/* ############################################################################
 * CCUI5M_OVERFLOWTOOLBARElement
 * ############################################################################ */

function CCUI5M_OVERFLOWTOOLBARElement()
{
    this.init_CCUI5M_OVERFLOWTOOLBARElement = function()
    {
        this.init_CCUI5M_TOOLBARElement();
        this.addChildNode = this.addChildNode_CCUI5M_OVERFLOWTOOLBARElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_OVERFLOWTOOLBARElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_OVERFLOWTOOLBARElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_OVERFLOWTOOLBARElement;
        this.m_ccClassName = "CCUI5M_OVERFLOWTOOLBARElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.OverflowToolbar());
    };
    this.applyComponentData_CCUI5M_OVERFLOWTOOLBARElement = function() { this.applyComponentData_CCUI5M_TOOLBARElement(); };
    this.addChildNode_CCUI5M_OVERFLOWTOOLBARElement = function(ccControl,index) { this.addChildNode_CCUI5M_TOOLBARElement(ccControl,index); };
    this.removeChildNode_CCUI5M_OVERFLOWTOOLBARElement = function(ccControl) { this.removeChildNode_CCUI5M_TOOLBARElement(ccControl); };
    this.reactOnEvent_CCUI5M_OVERFLOWTOOLBARElement = function(ccEvent) { this.reactOnEvent_CCUI5M_TOOLBARElement(ccEvent); };
    this.init_CCUI5M_OVERFLOWTOOLBARElement();
}
CCUI5M_OVERFLOWTOOLBARElement.prototype = new CCUI5M_TOOLBARElement();
s_CCPageElement_ElementCreators["ui5m_overflowtoolbar"] = function() { return new CCUI5M_OVERFLOWTOOLBARElement(); }; 
