/* ############################################################################
 * CCUI5M_TABLEITEMSElement
 * ############################################################################ */

function CCUI5M_TABLEITEMSElement()
{
    this.init_CCUI5M_TABLEITEMSElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TABLEITEMSElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TABLEITEMSElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TABLEITEMSElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TABLEITEMSElement;
        this.m_ccClassName = "CCUI5M_TABLEITEMSElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5M_TABLEITEMSElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_TABLEITEMSElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.insertItem(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5M_TABLEITEMSElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.removeItem(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_TABLEITEMSElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_TABLEITEMSElement();
}
CCUI5M_TABLEITEMSElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_tableitems"] = function() { return new CCUI5M_TABLEITEMSElement(); }; 
