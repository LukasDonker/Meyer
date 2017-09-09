/* ############################################################################
 * CCUI5M_PANELElement
 * ############################################################################ */

function CCUI5M_PANELElement()
{
    this.init_CCUI5M_PANELElement = function()
    {
        this.init_CCContainerControl();
        this.addChildNode = this.addChildNode_CCUI5M_PANELElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PANELElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PANELElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PANELElement;
        this.m_ccClassName = "CCUI5M_PANELElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Panel());
        this.m_ui5Node.setExpanded(true);
        this.m_ui5Node.attachExpand(function(oEvent) {that.reactOnExpand(this,oEvent);});
    };
    this.applyComponentData_CCUI5M_PANELElement = function()
    {
        this.applyComponentData_CCContainerControl();
        if (this.m_attributesChanged["headertext"] == true)
        {
            this.m_ui5Node.setHeaderText(this.m_attributes["headertext"]);
        }
        if (this.m_attributesChanged["expandable"] == true)
        {
            this.m_ui5Node.setExpandable(CCValueManager.decodeBoolean(this.m_attributes["expandable"],false));
        }
        if (this.m_attributesChanged["expanded"] == true)
        {
            this.m_ui5Node.setExpanded(CCValueManager.decodeBoolean(this.m_attributes["expanded"],true));
        }
    };
    this.addChildNode_CCUI5M_PANELElement = function(ccControl,index) { this.addChildNode_CCContainerControl(ccControl,index); };
    this.removeChildNode_CCUI5M_PANELElement = function(ccControl) { this.removeChildNode_CCContainerControl(ccControl); };
    this.reactOnEvent_CCUI5M_PANELElement = function(ccEvent) { this.reactOnEvent_CCContainerControl(ccEvent); };
    this.reactOnExpand = function(pCaller,pEvent)
    {
        this.registerDirtyInformation(this.getId(),""+pEvent.getParameter("expand"),false,true,null,false);
    };
    this.init_CCUI5M_PANELElement();
}
CCUI5M_PANELElement.prototype = new CCContainerControl();
s_CCPageElement_ElementCreators["ui5m_panel"] = function() { return new CCUI5M_PANELElement(); }; 
