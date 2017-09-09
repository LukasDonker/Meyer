/* ############################################################################
 * CCUI5M_OBJECTSTATUSElement
 * ############################################################################ */

function CCUI5M_OBJECTSTATUSElement()
{
    this.init_CCUI5M_OBJECTSTATUSElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_OBJECTSTATUSElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_OBJECTSTATUSElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_OBJECTSTATUSElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_OBJECTSTATUSElement;
        this.m_ccClassName = "CCUI5M_OBJECTSTATUSElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.ObjectStatus());
    };
    this.applyComponentData_CCUI5M_OBJECTSTATUSElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["icon"] == true)
        {
            this.m_ui5Node.setIcon(this.getPage().updateUrl(
                    this.m_attributes["icon"]));
        }
        if (this.m_attributesChanged["icondensityaware"] == true)
        {
            this.m_ui5Node.setIconDensityAware(CCValueManager.decodeBoolean(
                    this.m_attributes["icondensityaware"], true));
        }
        if (this.m_attributesChanged["state"] == true)
        {
            this.m_ui5Node.setState(this.m_attributes["state"]);
        }
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
    };
    this.addChildNode_CCUI5M_OBJECTSTATUSElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_OBJECTSTATUSElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_OBJECTSTATUSElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_OBJECTSTATUSElement();
}
CCUI5M_OBJECTSTATUSElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_objectstatus"] = function() { return new CCUI5M_OBJECTSTATUSElement(); }; 
