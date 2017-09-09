/* ############################################################################
 * CCUI5_HTMLElement
 * ############################################################################ */

function CCUI5_HTMLElement()
{
    this.init_CCUI5_HTMLElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_HTMLElement;
        this.applyComponentData = this.applyComponentData_CCUI5_HTMLElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_HTMLElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_HTMLElement;
        this.m_ccClassName = "CCUI5_HTMLElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.core.HTML());
    };
    this.applyComponentData_CCUI5_HTMLElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["content"] == true)
        {
            try
            {
                this.m_ui5Node.setContent(this.m_attributes["content"]);
            }
            catch (exc) {}
        }
        if (this.m_attributesChanged["preferdom"] == true)
        {
            this.m_ui5Node.setPreferDOM(CCValueManager.decodeBoolean(
                    this.m_attributes["preferdom"],true));
        }
        if (this.m_attributesChanged["sanitizecontent"] == true)
        {
            this.m_ui5Node.setSanitizeContent(CCValueManager.decodeBoolean(
                    this.m_attributes["sanitizecontent"], false));
        }
    };
    this.addChildNode_CCUI5_HTMLElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5_HTMLElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5_HTMLElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_HTMLElement();
}
CCUI5_HTMLElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_html"] = function() { return new CCUI5_HTMLElement(); }; 
