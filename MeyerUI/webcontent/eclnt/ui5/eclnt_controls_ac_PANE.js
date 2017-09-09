/* ############################################################################
 * CCPANEElement
 * ############################################################################ */

function CCPANEElement()
{
    this.init_CCPANEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCPANEElement;
        this.removeChildNode = this.removeChildNode_CCPANEElement;
        this.applyComponentData = this.applyComponentData_CCPANEElement;
        this.reactOnEvent = this.reactOnEvent_CCPANEElement;
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCPANEElement";
        this.bindUI5Node(new cc.VBox());
    };
    this.applyComponentData_CCPANEElement = function() 
    { 
        this.applyComponentData_CCControl();
    }
    this.addChildNode_CCPANEElement = function(ccControl,index) 
    {
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCPANEElement = function(ccControl) 
    {
        this.removeChildNode_CCControl(ccControl);
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCPANEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCPANEElement();
}
CCPANEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["pane"] = function() { return new CCPANEElement(); }; 

