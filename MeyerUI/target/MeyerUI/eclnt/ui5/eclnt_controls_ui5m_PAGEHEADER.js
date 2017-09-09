/* ############################################################################
 * CCUI5M_PAGEHEADERElement
 * ############################################################################ */

function CCUI5M_PAGEHEADERElement()
{
    this.init_CCUI5M_PAGEHEADERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_PAGEHEADERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PAGEHEADERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PAGEHEADERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PAGEHEADERElement;
        this.m_ccClassName = "CCUI5M_PAGEHEADERElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5M_PAGEHEADERElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_PAGEHEADERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.addHeaderContent(ccControl.m_ui5Node);
        }
    };
    this.removeChildNode_CCUI5M_PAGEHEADERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.removeHeaderContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_PAGEHEADERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_PAGEHEADERElement();
}
CCUI5M_PAGEHEADERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_pageheader"] = function() { return new CCUI5M_PAGEHEADERElement(); }; 
