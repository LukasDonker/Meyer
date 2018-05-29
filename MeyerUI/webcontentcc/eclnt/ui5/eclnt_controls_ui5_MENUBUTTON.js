/* ############################################################################
 * CCUI5_MENUBUTTONElement
 * ############################################################################ */

function CCUI5_MENUBUTTONElement()
{
    this.init_CCUI5_MENUBUTTONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_MENUBUTTONElement;
        this.applyComponentData = this.applyComponentData_CCUI5_MENUBUTTONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_MENUBUTTONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_MENUBUTTONElement;
        this.m_ccClassName = "CCUI5_MENUBUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.MenuButton());
        var vMenu = new sap.ui.commons.Menu();
        this.m_ui5Node.setMenu(vMenu);
    };
    this.applyComponentData_CCUI5_MENUBUTTONElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["icon"] == true)
        {
            var vImage = this.getPage().updateUrl(this.m_attributes["icon"]);
            this.m_ui5Node.setIcon(vImage);
        }
        if (this.m_attributesChanged["lite"])
        {
            this.m_ui5Node.setLite(CCValueManager.decodeBoolean(this.m_attributes["lite"],false));
        }
        if (this.m_attributesChanged["text"])
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5_MENUBUTTONElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.getMenu().insertItem(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5_MENUBUTTONElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.getMenu().removeItem(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5_MENUBUTTONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_MENUBUTTONElement();
}
CCUI5_MENUBUTTONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_menubutton"] = function() { return new CCUI5_MENUBUTTONElement(); }; 
