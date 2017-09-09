/* ############################################################################
 * CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement
 * ############################################################################ */

function CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement()
{
    this.init_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement;
        this.applyComponentData = this.applyComponentData_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement;
        this.m_ccClassName = "CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement";
        // --------------------------------------------------------------------
        var that = this;
        // this.bindUI5Node(...);
    };
    this.applyComponentData_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.insertSecondaryContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.getParent().m_ui5Node.removeSecondaryContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement();
}
CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5u_splitcontainersecondarycontent"] = function() { return new CCUI5U_SPLITCONTAINERSECONDARYCONTENTElement(); }; 
