/* ############################################################################
 * CCUI5_GRIDElement
 * ############################################################################ */

function CCUI5_GRIDElement()
{
    this.init_CCUI5_GRIDElement = function()
    {
        this.init_CCContainerControl();
        this.applyComponentData = this.applyComponentData_CCUI5_GRIDElement;
        // --------------------------------------------------------------------
        var that = this;
        this.m_ccClassName = "CCUI5_GRIDElement";
        this.bindUI5Node(new sap.ui.layout.Grid());
    };
    this.applyComponentData_CCUI5_GRIDElement = function()
    {
        this.applyComponentData_CCContainerControl();
        if (this.m_attributesChanged["defaultspan"] == true)
        {
            this.m_ui5Node.setDefaultSpan(this.m_attributes["defaultspan"]);
        }
        if (this.m_attributesChanged["defaultindent"] == true)
        {
            this.m_ui5Node.setDefaultIndent(this.m_attributes["defaultindent"]);
        }
        if (this.m_attributesChanged["hspacing"] == true)
        {
            this.m_ui5Node.setHSpacing(CCValueManager.decodeNumber(this.m_attributes["hspacing"],0));
        }
        if (this.m_attributesChanged["position"] == true)
        {
            this.m_ui5Node.setHSpacing(this.m_attributes["position"]);
        }
        if (this.m_attributesChanged["vspacing"] == true)
        {
            this.m_ui5Node.setVSpacing(CCValueManager.decodeNumber(this.m_attributes["vspacing"],0));
        }
    }
    this.init_CCUI5_GRIDElement();
}
CCUI5_GRIDElement.prototype = new CCContainerControl();
s_CCPageElement_ElementCreators["ui5_grid"] = function() { return new CCUI5_GRIDElement(); }; 