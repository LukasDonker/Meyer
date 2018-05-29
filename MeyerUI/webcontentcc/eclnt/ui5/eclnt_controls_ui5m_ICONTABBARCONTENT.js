/* ############################################################################
 * CCUI5M_ICONTABBARCONTENTElement
 * ############################################################################ */

function CCUI5M_ICONTABBARCONTENTElement()
{
    this.init_CCUI5M_ICONTABBARCONTENTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_ICONTABBARCONTENTElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_ICONTABBARCONTENTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_ICONTABBARCONTENTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_ICONTABBARCONTENTElement;
        this.m_ccClassName = "CCUI5M_ICONTABBARCONTENTElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5M_ICONTABBARCONTENTElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_ICONTABBARCONTENTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        this.getParent().m_ui5Node.insertContent(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCUI5M_ICONTABBARCONTENTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.getParent().m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_ICONTABBARCONTENTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_ICONTABBARCONTENTElement();
}
CCUI5M_ICONTABBARCONTENTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_icontabbarcontent"] = function() { return new CCUI5M_ICONTABBARCONTENTElement(); }; 
