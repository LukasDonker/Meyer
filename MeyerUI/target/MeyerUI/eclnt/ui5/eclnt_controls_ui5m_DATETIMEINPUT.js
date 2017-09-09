/* ############################################################################
 * CCUI5M_DATETIMEINPUTElement
 * ############################################################################ */

function CCUI5M_DATETIMEINPUTElement()
{
    this.init_CCUI5M_DATETIMEINPUTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_DATETIMEINPUTElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_DATETIMEINPUTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_DATETIMEINPUTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_DATETIMEINPUTElement;
        this.m_ccClassName = "CCUI5M_DATETIMEINPUTElement";
        // --------------------------------------------------------------------
        var that = this;
        var vNode = new sap.m.DateTimeInput();
        vNode.attachChange(function(pEvent) {that.reactOnChange(this,pEvent);});
        this.bindUI5Node(vNode);
    };
    this.applyComponentData_CCUI5M_DATETIMEINPUTElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["datetimeinputtype"] == true)
        {
            this.m_ui5Node.setType(this.m_attributes["datetimeinputtype"]);
        }
        if (this.m_attributesChanged["datevalue"] == true)
        {
            var vDate = CCValueManager.decodeDate(this.m_attributes["datevalue"],this.m_attributes["timezone"]);
            this.m_ui5Node.setDateValue(vDate);
        }
    };
    this.addChildNode_CCUI5M_DATETIMEINPUTElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_DATETIMEINPUTElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_DATETIMEINPUTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller,pEvent)
    {
        try
        {
            var vDate = this.m_ui5Node.getDateValue();
            var vNum = CCValueManager.encodeDate(vDate,this.m_attributes["timezone"]);
            var vValue = null;
            if (vNum != null) vValue = "" + vNum;
            this.getPage().registerDirtyInformation(this.getId(),vValue,null,false);
        }
        catch (ex)
        {
        }
    };
    this.init_CCUI5M_DATETIMEINPUTElement();
}
CCUI5M_DATETIMEINPUTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_datetimeinput"] = function() { return new CCUI5M_DATETIMEINPUTElement(); }; 

