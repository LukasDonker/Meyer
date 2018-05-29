/* ############################################################################
 * CCUI5M_PAGESUBHEADERElement
 * ############################################################################ */

function CCUI5M_PAGESUBHEADERElement()
{
    this.init_CCUI5M_PAGESUBHEADERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_PAGESUBHEADERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PAGESUBHEADERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PAGESUBHEADERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PAGESUBHEADERElement;
        this.m_ccClassName = "CCUI5M_PAGESUBHEADERElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5M_PAGESUBHEADERElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_PAGESUBHEADERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.setSubHeader(ccControl.m_ui5Node);
        }
    };
    this.removeChildNode_CCUI5M_PAGESUBHEADERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null && ccControl.m_ui5Node == this.getParent().m_ui5Node.getSubHeader())
        {
            this.getParent().m_ui5Node.setSubHeader(null);
        }
    };
    this.reactOnEvent_CCUI5M_PAGESUBHEADERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_PAGESUBHEADERElement();
}
CCUI5M_PAGESUBHEADERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_pagesubheader"] = function() { return new CCUI5M_PAGESUBHEADERElement(); }; 
