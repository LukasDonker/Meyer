/* ############################################################################
 * CCUI5M_BUTTONElement
 * ############################################################################ */

function CCUI5M_BUTTONElement()
{
    this.init_CCUI5M_BUTTONElement = function()
    {
        this.init_CCControl();
        this.applyComponentData = this.applyComponentData_CCUI5M_BUTTONElement;
        this.m_ccClassName = "CCUI5M_BUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        var vButton = new sap.m.Button();
        vButton.attachPress(function() {that.reactOnPress(this);});
        this.bindUI5Node(vButton);
    };
    this.applyComponentData_CCUI5M_BUTTONElement = function()
    {
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["buttontype"] == true)
        {
            this.m_ui5Node.setType(this.m_attributes["buttontype"]);
        }
        if (this.m_attributesChanged["icon"] == true)
        {
            var vImage = this.m_page.updateUrl(this.m_attributes["icon"]);
            this.m_ui5Node.setIcon(vImage);
        }
        if (this.m_attributesChanged["activeicon"] == true)
        {
            var vImage = this.m_page.updateUrl(this.m_attributes["activeicon"]);
            this.m_ui5Node.setActiveIcon(vImage);
        }
    };
    this.addChildNode_CCUI5M_BUTTONElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_BUTTONElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_BUTTONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    }
    this.init_CCUI5M_BUTTONElement();
}
CCUI5M_BUTTONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_button"] = function() { return new CCUI5M_BUTTONElement(); }; 
