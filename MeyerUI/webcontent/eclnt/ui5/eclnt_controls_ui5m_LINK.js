/* ############################################################################
 * CCUI5M_LINKElement
 * ############################################################################ */

function CCUI5M_LINKElement()
{
    this.init_CCUI5M_LINKElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_LINKElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_LINKElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_LINKElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_LINKElement;
        this.m_ccClassName = "CCUI5M_LINKElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Link());
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
    };
    this.applyComponentData_CCUI5M_LINKElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["emphasized"])
        {
            this.m_ui5Node.setEmphasized(CCValueManager.decodeBoolean(this.m_attributes["emphasized"],false));
        }
        if (this.m_attributesChanged["href"])
        {
            this.m_ui5Node.setHref(this.getPage().updateUrl(this.m_attributes["href"]));
        }
        if (this.m_attributesChanged["subtle"])
        {
            this.m_ui5Node.setSubtle(CCValueManager.decodeBoolean(this.m_attributes["subtle"],false));
        }
        if (this.m_attributesChanged["target"])
        {
            this.m_ui5Node.setTarget(this.m_attributes["target"]);
        }
        if (this.m_attributesChanged["text"])
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["wrapping"])
        {
            this.m_ui5Node.setWrapping(CCValueManager.decodeBoolean(this.m_attributes["wrapping"],false));
        }
    };
    this.addChildNode_CCUI5M_LINKElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_LINKElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_LINKElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCUI5M_LINKElement();
}
CCUI5M_LINKElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_link"] = function() { return new CCUI5M_LINKElement(); }; 
