/* ############################################################################
 * CCSCROLLPANEElement
 * ############################################################################ */

function CCSCROLLPANEElement()
{
    this.m_container;
    this.init_CCSCROLLPANEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCSCROLLPANEElement;
        this.removeChildNode = this.removeChildNode_CCSCROLLPANEElement;
        this.applyComponentData = this.applyComponentData_CCSCROLLPANEElement;
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCSCROLLPANEElement";
        this.bindUI5Node(new cc.ScrollPane());
        this.m_container = new cc.VBox();
        this.m_ui5Node.addContent(this.m_container);
    };
    this.addChildNode_CCSCROLLPANEElement = function(ccControl,index) 
    {
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_container.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCSCROLLPANEElement = function(ccControl) 
    {
        this.removeChildNode_CCControl(ccControl);
        if (ccControl.m_ui5Node != null)
            this.m_container.removeContent(ccControl.m_ui5Node);
    };
    this.applyComponentData_CCSCROLLPANEElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributes["width"] != null) this.m_container.setWidth("100%");
        if (this.m_attributes["height"] != null) this.m_container.setHeight("100%");
    }
    this.init_CCSCROLLPANEElement();
}
CCSCROLLPANEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["scrollpane"] = function() { return new CCSCROLLPANEElement(); }; 

