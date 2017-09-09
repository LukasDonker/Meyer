/* ############################################################################
 * CCUI5M_TOOLBARElement
 * ############################################################################ */

function CCUI5M_TOOLBARElement()
{
    this.init_CCUI5M_TOOLBARElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TOOLBARElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TOOLBARElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TOOLBARElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TOOLBARElement;
        this.m_ccClassName = "CCUI5M_TOOLBARElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Toolbar());
    };
    this.applyComponentData_CCUI5M_TOOLBARElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["active"])
        {
            this.m_ui5Node.setActive(CCValueManager.decodeBoolean(this.m_attributes["active"],false));
        }
        if (this.m_attributesChanged["toolbardesign"])
        {
            this.m_ui5Node.setDesign(this.m_attributes["toolbardesign"]);
        }
    };
    this.addChildNode_CCUI5M_TOOLBARElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5M_TOOLBARElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_TOOLBARElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_TOOLBARElement();
}
CCUI5M_TOOLBARElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_toolbar"] = function() { return new CCUI5M_TOOLBARElement(); }; 
