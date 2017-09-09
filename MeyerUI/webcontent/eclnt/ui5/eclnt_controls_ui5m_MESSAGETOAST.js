/* ############################################################################
 * CCUI5M_MESSAGETOASTElement
 * ############################################################################ */

function CCUI5M_MESSAGETOASTElement()
{
    this.init_CCUI5M_MESSAGETOASTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_MESSAGETOASTElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_MESSAGETOASTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_MESSAGETOASTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_MESSAGETOASTElement;
        this.m_ccClassName = "CCUI5M_MESSAGETOASTElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.applyComponentData_CCUI5M_MESSAGETOASTElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["trigger"])
        {
            if (this.m_attributes["trigger"] != null)
            {
                this.showMessageToast();
            }
        }
    };
    this.addChildNode_CCUI5M_MESSAGETOASTElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_MESSAGETOASTElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_MESSAGETOASTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.showMessageToast = function() 
    {
        var vDuration = CCValueManager.decodeNumber(this.m_attributes["duration"],3000);
        var vAutoClose = CCValueManager.decodeBoolean(this.m_attributes["autoclose"],true);
        var vWidth = CCValueManager.decodeSize(this.m_attributes["width"],"15em");
        sap.m.MessageToast.show(this.m_attributes["message"], {duration:vDuration,width:vWidth,autoClose:vAutoClose});
    };
    this.init_CCUI5M_MESSAGETOASTElement();
}
CCUI5M_MESSAGETOASTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_messagetoast"] = function() { return new CCUI5M_MESSAGETOASTElement(); }; 
