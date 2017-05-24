/* ############################################################################
 * CCUI5M_TABLECOLUMNSElement
 * ############################################################################ */

function CCUI5M_TABLECOLUMNSElement()
{
    this.init_CCUI5M_TABLECOLUMNSElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TABLECOLUMNSElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TABLECOLUMNSElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TABLECOLUMNSElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TABLECOLUMNSElement;
        this.m_ccClassName = "CCUI5M_TABLECOLUMNSElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5M_TABLECOLUMNSElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_TABLECOLUMNSElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.insertColumn(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5M_TABLECOLUMNSElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.removeColumn(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_TABLECOLUMNSElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_TABLECOLUMNSElement();
}
CCUI5M_TABLECOLUMNSElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_tablecolumns"] = function() { return new CCUI5M_TABLECOLUMNSElement(); }; 
