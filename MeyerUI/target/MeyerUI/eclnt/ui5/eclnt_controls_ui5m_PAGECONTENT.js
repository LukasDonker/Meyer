/* ############################################################################
 * CCUI5M_PAGECONTENTElement
 * ############################################################################ */

function CCUI5M_PAGECONTENTElement()
{
    this.init_CCUI5M_PAGECONTENTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_PAGECONTENTElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PAGECONTENTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PAGECONTENTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PAGECONTENTElement;
        this.m_ccClassName = "CCUI5M_PAGECONTENTElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5M_PAGECONTENTElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5M_PAGECONTENTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5M_PAGECONTENTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.removeContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_PAGECONTENTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_PAGECONTENTElement();
}
CCUI5M_PAGECONTENTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_pagecontent"] = function() { return new CCUI5M_PAGECONTENTElement(); }; 
