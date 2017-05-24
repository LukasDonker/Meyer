/* ############################################################################
 * CCICONElement
 * ############################################################################ */

function CCICONElement()
{
    this.init_CCICONElement = function()
    {
        this.init_CCBUTTONElement();
        this.addChildNode = this.addChildNode_CCICONElement;
        this.applyComponentData = this.applyComponentData_CCICONElement;
        this.reactOnEvent = this.reactOnEvent_CCICONElement; 
        this.removeChildNode = this.removeChildNode_CCICONElement;
        this.m_ccClassName = "CCICONElement";
        // --------------------------------------------------------------------
        this.m_ui5Node.setLite(true);
    };
    this.applyComponentData_CCICONElement = function() { this.applyComponentData_CCBUTTONElement(); };
    this.addChildNode_CCICONElement = function(ccControl,index) { this.addChildNode_CCBUTTONElement(ccControl,index); };
    this.removeChildNode_CCICONElement = function(ccControl) { this.removeChildNode_CCBUTTONElement(ccControl); };
    this.reactOnEvent_CCICONElement = function(ccEvent) { this.reactOnEvent_CCBUTTONElement(ccEvent); };
    this.init_CCICONElement();
}
CCICONElement.prototype = new CCBUTTONElement();
s_CCPageElement_ElementCreators["icon"] = function() { return new CCICONElement(); }; 
