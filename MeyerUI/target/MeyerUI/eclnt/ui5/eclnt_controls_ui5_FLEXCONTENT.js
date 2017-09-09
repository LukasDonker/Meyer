/* ############################################################################
 * CCUI5_FLEXCONTENTElement
 * ############################################################################ */

function CCUI5_FLEXCONTENTElement()
{
    this.init_CCUI5_FLEXCONTENTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_FLEXCONTENTElement;
        this.applyComponentData = this.applyComponentData_CCUI5_FLEXCONTENTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_FLEXCONTENTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_FLEXCONTENTElement;
        this.m_ccClassName = "CCUI5_FLEXCONTENTElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5_FLEXCONTENTElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5_FLEXCONTENTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.setFlexContent(ccControl.m_ui5Node);
        }
    };
    this.removeChildNode_CCUI5_FLEXCONTENTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            if (p.getFlexContent() == ccControl.m_ui5Node)
            {
                p.m_ui5Node.setFlexContent(null);
            }
        }
    };
    this.reactOnEvent_CCUI5_FLEXCONTENTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_FLEXCONTENTElement();
}
CCUI5_FLEXCONTENTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_flexcontent"] = function() { return new CCUI5_FLEXCONTENTElement(); }; 
