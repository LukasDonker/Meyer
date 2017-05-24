/* ############################################################################
 * CCOUTLOOKBARCONTENTElement
 * ############################################################################ */

function CCOUTLOOKBARCONTENTElement()
{
    this.init_CCOUTLOOKBARCONTENTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCOUTLOOKBARCONTENTElement;
        this.applyComponentData = this.applyComponentData_CCOUTLOOKBARCONTENTElement;
        this.reactOnEvent = this.reactOnEvent_CCOUTLOOKBARCONTENTElement; 
        this.removeChildNode = this.removeChildNode_CCOUTLOOKBARCONTENTElement;
        this.m_ccClassName = "CCOUTLOOKBARCONTENTElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new cc.VBox());
        this.m_ui5Node.setHeight("100%");
        this.m_ui5Node.setWidth("100%");
        this.m_ui5Node.setLayoutfixed(true);
    };
    this.applyComponentData_CCOUTLOOKBARCONTENTElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCOUTLOOKBARCONTENTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (this.m_ui5Node != null)
        {
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCOUTLOOKBARCONTENTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (this.m_ui5Node != null)
        {
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCOUTLOOKBARCONTENTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCOUTLOOKBARCONTENTElement();
}
CCOUTLOOKBARCONTENTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["outlookbarcontent"] = function() { return new CCOUTLOOKBARCONTENTElement(); }; 
