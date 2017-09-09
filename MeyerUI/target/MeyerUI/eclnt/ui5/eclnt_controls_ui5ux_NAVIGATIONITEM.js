/* ############################################################################
 * CCUI5UX_NAVIGATIONITEMElement
 * ############################################################################ */

function CCUI5UX_NAVIGATIONITEMElement()
{
    this.init_CCUI5UX_NAVIGATIONITEMElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5UX_NAVIGATIONITEMElement;
        this.applyComponentData = this.applyComponentData_CCUI5UX_NAVIGATIONITEMElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5UX_NAVIGATIONITEMElement; 
        this.removeChildNode = this.removeChildNode_CCUI5UX_NAVIGATIONITEMElement;
        this.m_ccClassName = "CCUI5UX_NAVIGATIONITEMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.ux3.NavigationItem());
    };
    this.applyComponentData_CCUI5UX_NAVIGATIONITEMElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["key"] == true)
        {
            this.m_ui5Node.setKey(this.m_attributes["key"]);
        }
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5UX_NAVIGATIONITEMElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5UX_NAVIGATIONITEMElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5UX_NAVIGATIONITEMElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5UX_NAVIGATIONITEMElement();
}
CCUI5UX_NAVIGATIONITEMElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5ux_navigationitem"] = function() { return new CCUI5UX_NAVIGATIONITEMElement(); }; 
