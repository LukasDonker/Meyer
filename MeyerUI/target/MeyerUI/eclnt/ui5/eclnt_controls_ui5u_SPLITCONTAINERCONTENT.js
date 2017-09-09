/* ############################################################################
 * CCUI5U_SPLITCONTAINERCONTENTElement
 * ############################################################################ */

function CCUI5U_SPLITCONTAINERCONTENTElement()
{
    this.init_CCUI5U_SPLITCONTAINERCONTENTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5U_SPLITCONTAINERCONTENTElement;
        this.applyComponentData = this.applyComponentData_CCUI5U_SPLITCONTAINERCONTENTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5U_SPLITCONTAINERCONTENTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5U_SPLITCONTAINERCONTENTElement;
        this.m_ccClassName = "CCUI5U_SPLITCONTAINERCONTENTElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5U_SPLITCONTAINERCONTENTElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5U_SPLITCONTAINERCONTENTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5U_SPLITCONTAINERCONTENTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.removeContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5U_SPLITCONTAINERCONTENTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5U_SPLITCONTAINERCONTENTElement();
}
CCUI5U_SPLITCONTAINERCONTENTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5u_splitcontainercontent"] = function() { return new CCUI5U_SPLITCONTAINERCONTENTElement(); }; 
