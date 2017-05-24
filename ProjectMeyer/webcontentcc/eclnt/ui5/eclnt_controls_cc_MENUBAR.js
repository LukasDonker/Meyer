/* ############################################################################
 * CCMENUBARElement
 * ############################################################################ */

function CCMENUBARElement()
{
    this.init_CCMENUBARElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCMENUBARElement;
        this.applyComponentData = this.applyComponentData_CCMENUBARElement;
        this.reactOnEvent = this.reactOnEvent_CCMENUBARElement; 
        this.removeChildNode = this.removeChildNode_CCMENUBARElement;
        this.m_ccClassName = "CCMENUBARElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.MenuBar());
    };
    this.applyComponentData_CCMENUBARElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCMENUBARElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        this.m_ui5Node.insertItem(ccControl.m_menu,index);
    };
    this.removeChildNode_CCMENUBARElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.m_ui5Node.removeItem(ccControl.m_menu);
    };
    this.reactOnEvent_CCMENUBARElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCMENUBARElement();
}
CCMENUBARElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["menubar"] = function() { return new CCMENUBARElement(); }; 
