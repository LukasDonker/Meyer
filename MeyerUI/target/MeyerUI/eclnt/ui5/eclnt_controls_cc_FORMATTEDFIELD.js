/* ############################################################################
 * CCFORMATTEDFIELDElement
 * ############################################################################ */

function CCFORMATTEDFIELDElement()
{
    this.m_format = null;
    this.m_formatmask = null;
    this.m_timezone = null;
    this.m_realValue = null;
    this.init_CCFORMATTEDFIELDElement = function()
    {
        this.init_CCFIELDElement();
        this.addChildNode = this.addChildNode_CCFORMATTEDFIELDElement;
        this.applyComponentData = this.applyComponentData_CCFORMATTEDFIELDElement;
        this.reactOnEvent = this.reactOnEvent_CCFORMATTEDFIELDElement; 
        this.removeChildNode = this.removeChildNode_CCFORMATTEDFIELDElement;
        this.m_ccClassName = "CCFORMATTEDFIELDElement";
        // --------------------------------------------------------------------
        this.processChange = this.processChangeFORMATTEDFIELD;
    };
    this.applyComponentData_CCFORMATTEDFIELDElement = function() 
    { 
        this.applyComponentData_CCFIELDElement(); 
        if (this.m_attributesChanged["format"] == true)
        {
            this.m_format = this.m_attributes["format"];
        }
        if (this.m_attributesChanged["formatmask"] == true)
        {
            this.m_formatmask = this.m_attributes["formatmask"];
        }
        if (this.m_attributesChanged["timezone"] == true)
        {
            this.m_timezone = this.m_attributes["timezone"];
        }
        if (this.m_attributesChanged["value"] == true)
        {
            this.m_realValue = this.m_attributes["value"];
            CCValueManager.formatValueToFormat(this,this.m_format,this.m_formatmask,this.m_timezone);
        }
    };
    this.addChildNode_CCFORMATTEDFIELDElement = function(ccControl,index) { this.addChildNode_CCFIELDElement(ccControl,index); };
    this.removeChildNode_CCFORMATTEDFIELDElement = function(ccControl) { this.removeChildNode_CCFIELDElement(ccControl); };
    this.reactOnEvent_CCFORMATTEDFIELDElement = function(ccEvent) { this.reactOnEvent_CCFIELDElement(ccEvent); };
    
    this.getTextValue = function() { return this.m_ui5Node.getValue(); };
    this.setTextValue = function(vValue,vFormattedValue)
    {
        this.m_ui5Node.setValue(vValue);
        this.m_lastValidTextValue = vValue;
        this.m_realValue = vFormattedValue;
    };
    this.getRealValue = function() { return this.m_realValue; };
    this.setRealValue = function(vValue) { this.m_realValue = vValue; };
    this.getLastValidTextValue = function() { return this.m_lastValidTextValue; };
    
    this.setText = function(vValue) { this.m_ui5Node.setValue(vValue); };
    
    this.processChangeFORMATTEDFIELD = function(vText,vSignificant)
    {
        if (vSignificant == true)
        {
            CCValueManager.reformatToFormat(this,this.m_format,this.m_formatmask,this.m_timezone);
            this.processChangeFIELD(this.m_realValue,vSignificant);
        }
    };
    
    this.init_CCFORMATTEDFIELDElement();
}
CCFORMATTEDFIELDElement.prototype = new CCFIELDElement();
s_CCPageElement_ElementCreators["formattedfield"] = function() { return new CCFORMATTEDFIELDElement(); }; 
