/* ############################################################################
 * CCUI5M_DATEPICKERElement
 * ############################################################################ */

function CCUI5M_DATEPICKERElement()
{
    this.init_CCUI5M_DATEPICKERElement = function()
    {
        this.init_CCControl();
        this.applyComponentData = this.applyComponentData_CCUI5M_DATEPICKERElement;
        this.m_ccClassName = "CCUI5M_DATEPICKERElement";
        // --------------------------------------------------------------------
        var that = this;
        var vNode = this.createDatePicker(); 
        vNode.attachChange(function(pEvent) {that.reactOnChange(this,pEvent);});
        this.bindUI5Node(vNode);
    };
    this.createDatePicker = function()
    {
        return new sap.m.DatePicker();
    };
    this.applyComponentData_CCUI5M_DATEPICKERElement = function()
    {
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["displayformat"] == true)
        {
            this.m_ui5Node.setDisplayFormat(this.m_attributes["displayformat"]);
        }
        if (this.m_attributesChanged["datevalue"] == true)
        {
            var vDate = CCValueManager.decodeDate(this.m_attributes["datevalue"],this.m_attributes["timezone"]);
            this.m_ui5Node.setDateValue(vDate);
        }
        if (this.m_attributesChanged["valuestate"] == true)
        {
            this.m_ui5Node.setValueState(this.m_attributes["valuestate"]);
        }
    };
    this.reactOnChange = function(pCaller,pEvent)
    {
        try
        {
            var valid = pEvent.getParameter("valid");
            // do not transfer it not valid
//            if (valid == false)
//            {
//                this.m_ui5Node.setValueState("Error");
//                return;
//            }
//            this.m_ui5Node.setValueState(this.m_attributes["valuestate"]);
            if (valid == false)
            {
                this.m_ui5Node.setDateValue(null);
                this.m_ui5Node.setValue("");
            }
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
    this.init_CCUI5M_DATEPICKERElement();
}
CCUI5M_DATEPICKERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_datepicker"] = function() { return new CCUI5M_DATEPICKERElement(); }; 

