/* ############################################################################
 * CCANIMATEICONElement
 * ############################################################################ */

function CCANIMATEICONElement()
{
    this.init_CCANIMATEICONElement = function()
    {
        this.init_CCBUTTONElement();
        this.addChildNode = this.addChildNode_CCANIMATEICONElement;
        this.applyComponentData = this.applyComponentData_CCANIMATEICONElement;
        this.reactOnEvent = this.reactOnEvent_CCANIMATEICONElement; 
        this.removeChildNode = this.removeChildNode_CCANIMATEICONElement;
        this.m_ccClassName = "CCANIMATEICONElement";
        // --------------------------------------------------------------------
        this.m_ui5Node.setLite(true);
    };
    this.applyComponentData_CCANIMATEICONElement = function() { this.applyComponentData_CCBUTTONElement(); };
    this.addChildNode_CCANIMATEICONElement = function(ccControl,index) { this.addChildNode_CCBUTTONElement(ccControl,index); };
    this.removeChildNode_CCANIMATEICONElement = function(ccControl) { this.removeChildNode_CCBUTTONElement(ccControl); };
    this.reactOnEvent_CCANIMATEICONElement = function(ccEvent) { this.reactOnEvent_CCBUTTONElement(ccEvent); };
    this.init_CCANIMATEICONElement();
}
CCANIMATEICONElement.prototype = new CCBUTTONElement();
s_CCPageElement_ElementCreators["animateicon"] = function() { return new CCANIMATEICONElement(); }; 
