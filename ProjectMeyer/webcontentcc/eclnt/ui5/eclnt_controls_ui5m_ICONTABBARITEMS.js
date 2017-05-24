/* ############################################################################
 * CCUI5M_ICONTABBARITEMSElement
 * ############################################################################ */

function CCUI5M_ICONTABBARITEMSElement()
{
    this.init_CCUI5M_ICONTABBARITEMSElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_ICONTABBARITEMSElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_ICONTABBARITEMSElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_ICONTABBARITEMSElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_ICONTABBARITEMSElement;
        this.m_ccClassName = "CCUI5M_ICONTABBARITEMSElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5M_ICONTABBARITEMSElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_ICONTABBARITEMSElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        this.getParent().m_ui5Node.insertItem(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCUI5M_ICONTABBARITEMSElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.getParent().m_ui5Node.removeItem(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_ICONTABBARITEMSElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_ICONTABBARITEMSElement();
}
CCUI5M_ICONTABBARITEMSElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_icontabbaritems"] = function() { return new CCUI5M_ICONTABBARITEMSElement(); }; 
