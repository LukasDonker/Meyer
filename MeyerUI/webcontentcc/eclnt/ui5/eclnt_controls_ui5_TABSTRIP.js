/* ############################################################################
 * CCUI5_TABSTRIPElement
 * ############################################################################ */

function CCUI5_TABSTRIPElement()
{
    this.init_CCUI5_TABSTRIPElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_TABSTRIPElement;
        this.applyComponentData = this.applyComponentData_CCUI5_TABSTRIPElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_TABSTRIPElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_TABSTRIPElement;
        this.m_ccClassName = "CCUI5_TABSTRIPElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.TabStrip());
    };
    this.applyComponentData_CCUI5_TABSTRIPElement = function(){ this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5_TABSTRIPElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        this.m_ui5Node.insertTab(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCUI5_TABSTRIPElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.m_ui5Node.removeTab(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5_TABSTRIPElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_TABSTRIPElement();
}
CCUI5_TABSTRIPElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_tabstrip"] = function() { return new CCUI5_TABSTRIPElement(); }; 

