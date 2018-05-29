/* ############################################################################
 * CCCOLDISTANCEElement
 * ############################################################################ */

function CCCOLDISTANCEElement()
{
    this.init_CCCOLDISTANCEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCCOLDISTANCEElement;
        this.applyComponentData = this.applyComponentData_CCCOLDISTANCEElement;
        this.reactOnEvent = this.reactOnEvent_CCCOLDISTANCEElement; 
        this.removeChildNode = this.removeChildNode_CCCOLDISTANCEElement;
        this.m_ccClassName = "CCCOLDISTANCEElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.Label());
        this.m_ui5Node.addStyleClass("ccLabelmini");
    };
    this.applyComponentData_CCCOLDISTANCEElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCCOLDISTANCEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCCOLDISTANCEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCCOLDISTANCEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCCOLDISTANCEElement();
}
CCCOLDISTANCEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["coldistance"] = function() { return new CCCOLDISTANCEElement(); }; 