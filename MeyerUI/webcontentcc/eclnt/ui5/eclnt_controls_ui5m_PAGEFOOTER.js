/* ############################################################################
 * CCUI5M_PAGEFOOTERElement
 * ############################################################################ */

function CCUI5M_PAGEFOOTERElement()
{
    this.init_CCUI5M_PAGEFOOTERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_PAGEFOOTERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PAGEFOOTERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PAGEFOOTERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PAGEFOOTERElement;
        this.m_ccClassName = "CCUI5M_PAGEFOOTERElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5M_PAGEFOOTERElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_PAGEFOOTERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.setFooter(ccControl.m_ui5Node);
        }
    };
    this.removeChildNode_CCUI5M_PAGEFOOTERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null && getParent().m_ui5Node.getFooter() == ccControl.m_ui5Node)
        {
            this.getParent().m_ui5Node.setFooter(null);
        }
    };
    this.reactOnEvent_CCUI5M_PAGEFOOTERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_PAGEFOOTERElement();
}
CCUI5M_PAGEFOOTERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_pagefooter"] = function() { return new CCUI5M_PAGEFOOTERElement(); }; 
