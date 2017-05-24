/* ############################################################################
 * CCSPLITPANESPLITElement
 * ############################################################################ */

function CCSPLITPANESPLITElement()
{
    this.init_CCSPLITPANESPLITElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCSPLITPANESPLITElement;
        this.applyComponentData = this.applyComponentData_CCSPLITPANESPLITElement;
        this.reactOnEvent = this.reactOnEvent_CCSPLITPANESPLITElement; 
        this.removeChildNode = this.removeChildNode_CCSPLITPANESPLITElement;
        this.m_ccClassName = "CCSPLITPANESPLITElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new cc.VBox());
        this.m_ui5Node.setHeight("100%");
        this.m_ui5Node.setWidth("100%");
    };
    this.applyComponentData_CCSPLITPANESPLITElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCSPLITPANESPLITElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCSPLITPANESPLITElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCSPLITPANESPLITElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCSPLITPANESPLITElement();
}
CCSPLITPANESPLITElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["splitpanesplit"] = function() { return new CCSPLITPANESPLITElement(); }; 
