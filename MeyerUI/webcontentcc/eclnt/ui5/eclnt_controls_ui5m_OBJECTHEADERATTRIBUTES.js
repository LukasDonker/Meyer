/* ############################################################################
 * CCUI5M_OBJECTHEADERATTRIBUTESElement
 * ############################################################################ */

function CCUI5M_OBJECTHEADERATTRIBUTESElement()
{
    this.init_CCUI5M_OBJECTHEADERATTRIBUTESElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_OBJECTHEADERATTRIBUTESElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_OBJECTHEADERATTRIBUTESElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_OBJECTHEADERATTRIBUTESElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_OBJECTHEADERATTRIBUTESElement;
        this.m_ccClassName = "CCUI5M_OBJECTHEADERATTRIBUTESElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5M_OBJECTHEADERATTRIBUTESElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_OBJECTHEADERATTRIBUTESElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        this.getParent().m_ui5Node.insertAttribute(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCUI5M_OBJECTHEADERATTRIBUTESElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.getParent().m_ui5Node.removeAttribute(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_OBJECTHEADERATTRIBUTESElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_OBJECTHEADERATTRIBUTESElement();
}
CCUI5M_OBJECTHEADERATTRIBUTESElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_objectheaderattributes"] = function() { return new CCUI5M_OBJECTHEADERATTRIBUTESElement(); }; 
