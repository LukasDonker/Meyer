/* ############################################################################
 * CCUI5_FILEUPLOADElement
 * ############################################################################ */

function CCUI5_FILEUPLOADElement()
{
    this.init_CCUI5_FILEUPLOADElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_FILEUPLOADElement;
        this.applyComponentData = this.applyComponentData_CCUI5_FILEUPLOADElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_FILEUPLOADElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_FILEUPLOADElement;
        this.m_ccClassName = "CCUI5_FILEUPLOADElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5_FILEUPLOADElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5_FILEUPLOADElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5_FILEUPLOADElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5_FILEUPLOADElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_FILEUPLOADElement();
}
CCUI5_FILEUPLOADElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_fileupload"] = function() { return new CCUI5_FILEUPLOADElement(); }; 
