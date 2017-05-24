/* ############################################################################
 * CCUI5_FIXCONTENTElement
 * ############################################################################ */

function CCUI5_FIXCONTENTElement()
{
    this.init_CCUI5_FIXCONTENTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_FIXCONTENTElement;
        this.applyComponentData = this.applyComponentData_CCUI5_FIXCONTENTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_FIXCONTENTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_FIXCONTENTElement;
        this.m_ccClassName = "CCUI5_FIXCONTENTElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5_FIXCONTENTElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5_FIXCONTENTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.insertFixContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5_FIXCONTENTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            var p = this.getParent();
            p.m_ui5Node.removeFixContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5_FIXCONTENTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_FIXCONTENTElement();
}
CCUI5_FIXCONTENTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_fixcontent"] = function() { return new CCUI5_FIXCONTENTElement(); }; 
