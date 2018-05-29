/* ############################################################################
 * CCUI5M_TOOLBARSPACERElement
 * ############################################################################ */

function CCUI5M_TOOLBARSPACERElement()
{
    this.init_CCUI5M_TOOLBARSPACERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TOOLBARSPACERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TOOLBARSPACERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TOOLBARSPACERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TOOLBARSPACERElement;
        this.m_ccClassName = "CCUI5M_TOOLBARSPACERElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.ToolbarSpacer());
    };
    this.applyComponentData_CCUI5M_TOOLBARSPACERElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_TOOLBARSPACERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_TOOLBARSPACERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_TOOLBARSPACERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_TOOLBARSPACERElement();
}
CCUI5M_TOOLBARSPACERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_toolbarspacer"] = function() { return new CCUI5M_TOOLBARSPACERElement(); }; 
