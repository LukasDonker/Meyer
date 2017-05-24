/* ############################################################################
 * CCUI5M_PAGECUSTOMHEADERElement
 * ############################################################################ */

function CCUI5M_PAGECUSTOMHEADERElement()
{
    this.init_CCUI5M_PAGECUSTOMHEADERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_PAGECUSTOMHEADERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PAGECUSTOMHEADERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PAGECUSTOMHEADERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PAGECUSTOMHEADERElement;
        this.m_ccClassName = "CCUI5M_PAGECUSTOMHEADERElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5M_PAGECUSTOMHEADERElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_PAGECUSTOMHEADERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.setCustomHeader(ccControl.m_ui5Node);
        }
    };
    this.removeChildNode_CCUI5M_PAGECUSTOMHEADERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null && ccControl.m_ui5Node == this.getParent().m_ui5Node.getCustomerHeader())
        {
            this.getParent().m_ui5Node.setCustomHeader(null);
        }
    };
    this.reactOnEvent_CCUI5M_PAGECUSTOMHEADERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_PAGECUSTOMHEADERElement();
}
CCUI5M_PAGECUSTOMHEADERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_pagecustomheader"] = function() { return new CCUI5M_PAGECUSTOMHEADERElement(); }; 
