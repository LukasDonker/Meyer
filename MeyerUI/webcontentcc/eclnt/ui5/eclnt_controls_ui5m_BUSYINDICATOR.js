/* ############################################################################
 * CCUI5M_BUSYINDICATORElement
 * ############################################################################ */

function CCUI5M_BUSYINDICATORElement()
{
    this.init_CCUI5M_BUSYINDICATORElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_BUSYINDICATORElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_BUSYINDICATORElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_BUSYINDICATORElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_BUSYINDICATORElement;
        this.m_ccClassName = "CCUI5M_BUSYINDICATORElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.BusyIndicator());
    };
    this.applyComponentData_CCUI5M_BUSYINDICATORElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["customicon"] == true)
        {
            this.m_ui5Node.setCustomIcon(this.getPage().updateUrl(this.m_attributes["customicon"]));
        }
        if (this.m_attributesChanged["customicondensityaware"] == true)
        {
            this.m_ui5Node.setCustomIconDensityAware(CCValueManager.decodeBoolean(
                    this.m_attributes["customicondensityaware"], true));
        }
        if (this.m_attributesChanged["customiconheight"] == true)
        {
            this.m_ui5Node.setCustomIconHeight(CCValueManager.decodeSize(
                    this.m_attributes["customiconheight"], null));
        }
        if (this.m_attributesChanged["customiconwidth"] == true)
        {
            this.m_ui5Node.setCustomIconWidth(CCValueManager.decodeBoolean(
                    this.m_attributes["customiconwidth"], null));
        }
        if (this.m_attributesChanged["customiconrotationspeed"] == true)
        {
            this.m_ui5Node.setCustomIconRotationSpeed(CCValueManager.decodeNumber(this.m_attributes["customiconrotationspeed"]),0);
        }
        if (this.m_attributesChanged["busyindicatordesign"] == true)
        {
            this.m_ui5Node.setDesign(this.m_attributes["busyindicatordesign"]);
        }
        if (this.m_attributesChanged["size"] == true)
        {
            this.m_ui5Node.setSize(CCValueManager.decodeSize(
                    this.m_attributes["size"], null));
        }
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["textdirection"] == true)
        {
            this.m_ui5Node.setTextDirection(this.m_attributes["textdirection"]);
        }
    };
    this.addChildNode_CCUI5M_BUSYINDICATORElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_BUSYINDICATORElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_BUSYINDICATORElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_BUSYINDICATORElement();
}
CCUI5M_BUSYINDICATORElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_busyindicator"] = function() { return new CCUI5M_BUSYINDICATORElement(); }; 
