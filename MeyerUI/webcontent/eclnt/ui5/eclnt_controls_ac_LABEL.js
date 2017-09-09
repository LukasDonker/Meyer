/* ############################################################################
 * CCLABELElement
 * ############################################################################ */

function CCLABELElement()
{
    this.m_format = null;
    this.m_formatmask = null;
    this.m_timezone = null;
    this.m_realValue = null;
    this.init_CCLABELElement = function()
    {
        this.init_CCControl();
        this.m_ccClassName = "CCLABELElement";
        // this.bindUI5Node(new sap.ui.commons.Label());
        this.bindUI5Node(new cc.SimpleLabel());
        this.addChildNode = this.addChildNode_CCLABELElement;
        this.removeChildNode = this.removeChildNode_CCLABELElement;
        this.applyComponentData = this.applyComponentData_CCLABELElement;
    };
    this.applyComponentData_CCLABELElement = function()
    {
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["align"] == true)
        {
            this.m_ui5Node.setAlign(this.m_attributes["align"]);
        }
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
        if (this.m_attributesChanged["text"] == true)
        {
            var vText = this.m_attributes["text"];
            this.m_realValue = vText;
            if (vText == null || vText == "")
                vText = ".";
            this.m_ui5Node.setText(vText);
            if (this.m_format != null)
            {
                CCValueManager.formatValueToFormat(this,this.m_format,this.m_formatmask,this.m_timezone);
            }
        }
    };
    this.reactOnEvent_CCLABELElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.addChildNode_CCLABELElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCLABELElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    
    this.getTextValue = function() { return this.m_ui5Node.getValue(); };
    this.setTextValue = function(vValue,vFormattedValue)
    {
        this.m_ui5Node.setText(vValue);
        this.m_realValue = vFormattedValue;
    };
    this.getRealValue = function() { return this.m_realValue; };
    this.setRealValue = function(vValue) { this.m_realValue = vValue; };
    this.getLastValidTextValue = function() { return null; }; // not required here...
    
    this.init_CCLABELElement();
}
CCLABELElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["label"] = function() { return new CCLABELElement(); }; 

