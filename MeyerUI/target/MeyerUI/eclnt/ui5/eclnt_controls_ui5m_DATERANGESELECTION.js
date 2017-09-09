/* ############################################################################
 * CCUI5M_DATERANGESELECTIONElement
 * ############################################################################ */

function CCUI5M_DATERANGESELECTIONElement()
{
    this.init_CCUI5M_DATERANGESELECTIONElement = function()
    {
        this.init_CCUI5M_DATEPICKERElement();
        this.addChildNode = this.addChildNode_CCUI5M_DATERANGESELECTIONElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_DATERANGESELECTIONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_DATERANGESELECTIONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_DATERANGESELECTIONElement;
        this.m_ccClassName = "CCUI5M_DATERANGESELECTIONElement";
        // --------------------------------------------------------------------
        var that = this;
    };
    this.createDatePicker = function()
    {
        return new sap.m.DateRangeSelection();
    };
    this.applyComponentData_CCUI5M_DATERANGESELECTIONElement = function() 
    { 
        this.applyComponentData_CCUI5M_DATEPICKERElement();
        if (this.m_attributesChanged["seconddatevalue"] == true)
        {
            var vDate = CCValueManager.decodeDate(this.m_attributes["seconddatevalue"],this.m_attributes["timezone"]);
            this.m_ui5Node.setSecondDateValue(vDate);
        }
        if (this.m_attributesChanged["delimiter"] == true)
        {
            this.m_ui5Node.setDelimiter(this.m_attributes["delimiter"]);
        }
    };
    this.addChildNode_CCUI5M_DATERANGESELECTIONElement = function(ccControl,index) { this.addChildNode_CCUI5M_DATEPICKERElement(ccControl,index); };
    this.removeChildNode_CCUI5M_DATERANGESELECTIONElement = function(ccControl) { this.removeChildNode_CCUI5M_DATEPICKERElement(ccControl); };
    this.reactOnEvent_CCUI5M_DATERANGESELECTIONElement = function(ccEvent) { this.reactOnEvent_CCUI5M_DATEPICKERElement(ccEvent); };
    this.reactOnChange = function(pCaller,pEvent)
    {
        // this is a copy of DatePicker.reactOnChange!!!
        try
        {
            var valid = pEvent.getParameter("valid");
            if (valid == false)
            {
                this.m_ui5Node.setDateValue(null);
                this.m_ui5Node.setSecondDateValue(null);
                this.m_ui5Node.setValue("");
            }
            {
                var vDate = this.m_ui5Node.getDateValue();
                var vNum = CCValueManager.encodeDate(vDate,this.m_attributes["timezone"]);
                var vValue = null;
                if (vNum != null) vValue = "" + vNum;
                this.getPage().registerDirtyInformation(this.getId(),vValue,null,false);
            }
            {
                var vDate = this.m_ui5Node.getSecondDateValue();
                var vNum = CCValueManager.encodeDate(vDate,this.m_attributes["timezone"]);
                var vValue = null;
                if (vNum != null) vValue = "" + vNum;
                this.getPage().registerDirtyInformation(this.getId()+".seconddatevalue",vValue,null,false);
            }
        }
        catch (ex)
        {
        }
    };
    this.init_CCUI5M_DATERANGESELECTIONElement();
}
CCUI5M_DATERANGESELECTIONElement.prototype = new CCUI5M_DATEPICKERElement();
s_CCPageElement_ElementCreators["ui5m_daterangeselection"] = function() { return new CCUI5M_DATERANGESELECTIONElement(); }; 
