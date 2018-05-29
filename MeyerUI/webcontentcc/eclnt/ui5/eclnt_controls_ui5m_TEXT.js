/* ############################################################################
 * CCUI5M_TEXTElement
 * ############################################################################ */

function CCUI5M_TEXTElement()
{
    this.init_CCUI5M_TEXTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TEXTElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TEXTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TEXTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TEXTElement;
        this.m_ccClassName = "CCUI5M_TEXTElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Text());
    };
    this.applyComponentData_CCUI5M_TEXTElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["maxlines"] == true)
        {
            this.m_ui5Node.setMaxLines(CCValueManager.decodeNumber(this.m_attributes["maxlines"]),null);
        }
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["textalign"] == true)
        {
            this.m_ui5Node.setTextAlign(this.m_attributes["textalign"]);
        }
        if (this.m_attributesChanged["textdirection"] == true)
        {
            this.m_ui5Node.setTextdirection(this.m_attributes["textdirection"]);
        }
        if (this.m_attributesChanged["wrapping"] == true)
        {
            this.m_ui5Node.setWrapping(CCValueManager.decodeBoolean(
                    this.m_attributes["wrapping"], true));
        }
    };
    this.addChildNode_CCUI5M_TEXTElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_TEXTElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_TEXTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_TEXTElement();
}
CCUI5M_TEXTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_text"] = function() { return new CCUI5M_TEXTElement(); }; 
