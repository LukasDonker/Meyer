/* ############################################################################
 * CCUI5M_LABELElement
 * ############################################################################ */

function CCUI5M_LABELElement()
{
    this.init_CCUI5M_LABELElement = function()
    {
        this.init_CCControl();
        this.applyComponentData = this.applyComponentData_CCUI5M_LABELElement;
        this.m_ccClassName = "CCUI5M_LABELElement";
        // --------------------------------------------------------------------
        var vLabel = new sap.m.Label();
        this.bindUI5Node(vLabel);
    };
    this.applyComponentData_CCUI5M_LABELElement = function()
    {
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["labeldesign"] == true)
        {
            this.m_ui5Node.setDesign(this.m_attributes["labeldesign"]);
        }
        if (this.m_attributesChanged["required"] == true)
        {
            this.m_ui5Node.setRequired(CCValueManager.decodeBoolean(this.m_attributes["required"],false));
        }
        if (this.m_attributesChanged["textalign"] == true)
        {
            var vValue = this.m_attributes["textalign"];
            if ("left" == vValue) vValue = "Left";
            else if ("center" == vValue) vValue = "Center";
            else if ("right" == vValue) vValue = "Right";
            else if ("begin" == vValue) vValue = "Begin";
            else if ("end" == vValue) vValue = "End";
            this.m_ui5Node.setTextAlign(vValue);
        }
//        if (this.m_attributesChanged["textdirection"] == true)
//        {
//            this.m_ui5Node.setTextDirection(this.m_attributes["textdirection"]);
//        }
    };
    this.init_CCUI5M_LABELElement();
}
CCUI5M_LABELElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_label"] = function() { return new CCUI5M_LABELElement(); }; 

