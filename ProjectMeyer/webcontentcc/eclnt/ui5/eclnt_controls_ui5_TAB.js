/* ############################################################################
 * CCUI5_TABElement
 * ############################################################################ */

function CCUI5_TABElement()
{
    this.init_CCUI5_TABElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_TABElement;
        this.applyComponentData = this.applyComponentData_CCUI5_TABElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_TABElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_TABElement;
        this.m_ccClassName = "CCUI5_TABElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.Tab());
    };
    this.applyComponentData_CCUI5_TABElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5_TABElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        this.m_ui5Node.insertContent(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCUI5_TABElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5_TABElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_TABElement();
}
CCUI5_TABElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_tab"] = function() { return new CCUI5_TABElement(); }; 

