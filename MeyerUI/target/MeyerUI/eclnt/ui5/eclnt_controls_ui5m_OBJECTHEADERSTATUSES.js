/* ############################################################################
 * CCUI5M_OBJECTHEADERSTATUSESElement
 * ############################################################################ */

function CCUI5M_OBJECTHEADERSTATUSESElement()
{
    this.init_CCUI5M_OBJECTHEADERSTATUSESElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_OBJECTHEADERSTATUSESElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_OBJECTHEADERSTATUSESElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_OBJECTHEADERSTATUSESElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_OBJECTHEADERSTATUSESElement;
        this.m_ccClassName = "CCUI5M_OBJECTHEADERSTATUSESElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5M_OBJECTHEADERSTATUSESElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_OBJECTHEADERSTATUSESElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        this.getParent().m_ui5Node.insertStatus(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCUI5M_OBJECTHEADERSTATUSESElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.getParent().m_ui5Node.removeStatus(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_OBJECTHEADERSTATUSESElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_OBJECTHEADERSTATUSESElement();
}
CCUI5M_OBJECTHEADERSTATUSESElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_objectheaderstatuses"] = function() { return new CCUI5M_OBJECTHEADERSTATUSESElement(); }; 
