/* ############################################################################
 * CCUI5M_SCROLLCONTAINERElement
 * ############################################################################ */

function CCUI5M_SCROLLCONTAINERElement()
{
    this.init_CCUI5M_SCROLLCONTAINERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_SCROLLCONTAINERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_SCROLLCONTAINERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_SCROLLCONTAINERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_SCROLLCONTAINERElement;
        this.m_ccClassName = "CCUI5M_SCROLLCONTAINERElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.m.ScrollContainer());
        this.m_ui5Node.setVertical(true);
        this.m_ui5Node.setHorizontal(true);
    };
    this.applyComponentData_CCUI5M_SCROLLCONTAINERElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_SCROLLCONTAINERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCUI5M_SCROLLCONTAINERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_SCROLLCONTAINERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_SCROLLCONTAINERElement();
}
CCUI5M_SCROLLCONTAINERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_scrollcontainer"] = function() { return new CCUI5M_SCROLLCONTAINERElement(); }; 
