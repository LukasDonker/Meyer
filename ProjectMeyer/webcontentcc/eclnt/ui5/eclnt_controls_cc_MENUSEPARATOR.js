/* ############################################################################
 * CCMENUSEPARATORElement
 * ############################################################################ */

function CCMENUSEPARATORElement()
{
    this.init_CCMENUSEPARATORElement = function()
    {
        this.init_CCMENUITEMElement();
        this.addChildNode = this.addChildNode_CCMENUSEPARATORElement;
        this.applyComponentData = this.applyComponentData_CCMENUSEPARATORElement;
        this.reactOnEvent = this.reactOnEvent_CCMENUSEPARATORElement; 
        this.removeChildNode = this.removeChildNode_CCMENUSEPARATORElement;
        this.m_ccClassName = "CCMENUSEPARATORElement";
        // --------------------------------------------------------------------
    };
    this.applyComponentData_CCMENUSEPARATORElement = function() { this.applyComponentData_CCMENUITEMElement(); };
    this.addChildNode_CCMENUSEPARATORElement = function(ccControl,index) { this.addChildNode_CCMENUITEMElement(ccControl,index); };
    this.removeChildNode_CCMENUSEPARATORElement = function(ccControl) { this.removeChildNode_CCMENUITEMElement(ccControl); };
    this.reactOnEvent_CCMENUSEPARATORElement = function(ccEvent) { this.reactOnEvent_CCMENUITEMElement(ccEvent); };
    this.init_CCMENUSEPARATORElement();
}
CCMENUSEPARATORElement.prototype = new CCMENUITEMElement();
s_CCPageElement_ElementCreators["menuseparator"] = function() { return new CCMENUSEPARATORElement(); }; 
