/* ############################################################################
 * CCUI5_MENUITEMElement
 * ############################################################################ */

function CCUI5_MENUITEMElement()
{
    this.init_CCUI5_MENUITEMElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_MENUITEMElement;
        this.applyComponentData = this.applyComponentData_CCUI5_MENUITEMElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_MENUITEMElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_MENUITEMElement;
        this.m_ccClassName = "CCUI5_MENUITEMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.unified.MenuItem());
        this.m_ui5Node.attachSelect(function() {that.reactOnSelect(this);});
    };
    this.applyComponentData_CCUI5_MENUITEMElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["icon"] == true)
        {
            var vImage = this.getPage().updateUrl(this.m_attributes["icon"]);
            this.m_ui5Node.setIcon(vImage);
        }
        if (this.m_attributesChanged["text"])
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5_MENUITEMElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5_MENUITEMElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5_MENUITEMElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelect = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCUI5_MENUITEMElement();
}
CCUI5_MENUITEMElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_menuitem"] = function() { return new CCUI5_MENUITEMElement(); }; 
