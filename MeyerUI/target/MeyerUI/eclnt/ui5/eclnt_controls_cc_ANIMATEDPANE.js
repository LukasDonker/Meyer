/* ############################################################################
 * CCANIMATEDPANEElement
 * ############################################################################ */

function CCANIMATEDPANEElement()
{
    this.init_CCANIMATEDPANEElement = function()
    {
        this.init_CCPANEElement();
        this.addChildNode = this.addChildNode_CCANIMATEDPANEElement;
        this.applyComponentData = this.applyComponentData_CCANIMATEDPANEElement;
        this.reactOnEvent = this.reactOnEvent_CCANIMATEDPANEElement; 
        this.removeChildNode = this.removeChildNode_CCANIMATEDPANEElement;
        this.m_ccClassName = "CCANIMATEDPANEElement";
        // --------------------------------------------------------------------
    };
    this.applyComponentData_CCANIMATEDPANEElement = function() { this.applyComponentData_CCPANEElement(); };
    this.addChildNode_CCANIMATEDPANEElement = function(ccControl,index) { this.addChildNode_CCPANEElement(ccControl,index); };
    this.removeChildNode_CCANIMATEDPANEElement = function(ccControl) { this.removeChildNode_CCPANEElement(ccControl); };
    this.reactOnEvent_CCANIMATEDPANEElement = function(ccEvent) { this.reactOnEvent_CCPANEElement(ccEvent); };
    this.init_CCANIMATEDPANEElement();
}
CCANIMATEDPANEElement.prototype = new CCPANEElement();
s_CCPageElement_ElementCreators["animatedpane"] = function() { return new CCANIMATEDPANEElement(); }; 
