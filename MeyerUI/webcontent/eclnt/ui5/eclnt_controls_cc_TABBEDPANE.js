/* ############################################################################
 * CCTABBEDPANEElement
 * ############################################################################ */

function CCTABBEDPANEElement()
{
    this.init_CCTABBEDPANEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCTABBEDPANEElement;
        this.applyComponentData = this.applyComponentData_CCTABBEDPANEElement;
        this.reactOnEvent = this.reactOnEvent_CCTABBEDPANEElement; 
        this.removeChildNode = this.removeChildNode_CCTABBEDPANEElement;
        this.m_ccClassName = "CCTABBEDPANEElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.TabStrip());
    };
    this.applyComponentData_CCTABBEDPANEElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCTABBEDPANEElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        this.m_ui5Node.insertTab(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCTABBEDPANEElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.m_ui5Node.removeTab(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCTABBEDPANEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCTABBEDPANEElement();
}
CCTABBEDPANEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["tabbedpane"] = function() { return new CCTABBEDPANEElement(); }; 

