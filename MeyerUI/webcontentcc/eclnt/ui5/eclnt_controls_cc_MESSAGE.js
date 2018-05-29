/* ############################################################################
 * CCMESSAGEElement
 * ############################################################################ */

function CCMESSAGEElement()
{
    this.init_CCMESSAGEElement = function()
    {
        this.init_CCInvisibleControl();
        this.addChildNode = this.addChildNode_CCMESSAGEElement;
        this.applyComponentData = this.applyComponentData_CCMESSAGEElement;
        this.reactOnEvent = this.reactOnEvent_CCMESSAGEElement; 
        this.removeChildNode = this.removeChildNode_CCMESSAGEElement;
        this.m_ccClassName = "CCMESSAGEElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCMESSAGEElement = function() { this.applyComponentData_CCInvisibleControl(); };
    this.addChildNode_CCMESSAGEElement = function(ccControl,index) { this.addChildNode_CCInvisibleControl(ccControl,index); };
    this.removeChildNode_CCMESSAGEElement = function(ccControl) { this.removeChildNode_CCInvisibleControl(ccControl); };
    this.reactOnEvent_CCMESSAGEElement = function(ccEvent) { this.reactOnEvent_CCInvisibleControl(ccEvent); };
    this.init_CCMESSAGEElement();
}
CCMESSAGEElement.prototype = new CCInvisibleControl();
s_CCPageElement_ElementCreators["message"] = function() { return new CCMESSAGEElement(); }; 
