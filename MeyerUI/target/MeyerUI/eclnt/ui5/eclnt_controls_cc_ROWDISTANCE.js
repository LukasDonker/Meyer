/* ############################################################################
 * CCROWDISTANCEElement
 * ############################################################################ */

function CCROWDISTANCEElement()
{
    this.init_CCROWDISTANCEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCROWDISTANCEElement;
        this.applyComponentData = this.applyComponentData_CCROWDISTANCEElement;
        this.reactOnEvent = this.reactOnEvent_CCROWDISTANCEElement; 
        this.removeChildNode = this.removeChildNode_CCROWDISTANCEElement;
        this.m_ccClassName = "CCROWDISTANCEElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new cc.VDist());
    };
    this.applyComponentData_CCROWDISTANCEElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCROWDISTANCEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCROWDISTANCEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCROWDISTANCEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCROWDISTANCEElement();
}
CCROWDISTANCEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["rowdistance"] = function() { return new CCROWDISTANCEElement(); }; 
