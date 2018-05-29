/* ############################################################################
 * CCTABBEDPANETABElement
 * ############################################################################ */

function CCTABBEDPANETABElement()
{
    this.m_container = null;
    this.init_CCTABBEDPANETABElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCTABBEDPANETABElement;
        this.applyComponentData = this.applyComponentData_CCTABBEDPANETABElement;
        this.reactOnEvent = this.reactOnEvent_CCTABBEDPANETABElement; 
        this.removeChildNode = this.removeChildNode_CCTABBEDPANETABElement;
        this.m_ccClassName = "CCTABBEDPANETABElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.Tab());
        this.m_ui5Node.setWidth("100%");
        this.m_container = new cc.VBox();
        this.m_container.setWidth("100%");
        // this.m_container.setHeight("100%");
        this.m_ui5Node.addContent(this.m_container);
    };
    this.getControlToApplyPadding = function() { return this.m_ui5Node.getContent()[0]; };
    this.applyComponentData_CCTABBEDPANETABElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCTABBEDPANETABElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_container.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
            var vChildHeight = ccControl.m_ui5Node.ccHeight;
            if (vChildHeight != null && vChildHeight.endsWith("%"))
                this.m_container.setHeight("100%");
        }
    };
    this.removeChildNode_CCTABBEDPANETABElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_container.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCTABBEDPANETABElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCTABBEDPANETABElement();
}
CCTABBEDPANETABElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["tabbedpanetab"] = function() { return new CCTABBEDPANETABElement(); }; 

