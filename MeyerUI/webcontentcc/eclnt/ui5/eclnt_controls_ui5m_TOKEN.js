/* ############################################################################
 * CCUI5M_TOKENElement
 * ############################################################################ */

function CCUI5M_TOKENElement()
{
    this.init_CCUI5M_TOKENElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TOKENElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TOKENElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TOKENElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TOKENElement;
        this.m_ccClassName = "CCUI5M_TOKENElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Token());
        this.m_ui5Node.attachDelete(function(pEvent) {that.reactOnDelete(this,pEvent);});
        this.m_ui5Node.attachPress(function(pEvent) {that.reactOnPress(this,pEvent);});
        this.m_ui5Node.attachSelect(function(pEvent) {that.reactOnSelect(this,pEvent);});
    };
    this.applyComponentData_CCUI5M_TOKENElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["key"] == true)
        {
            this.m_ui5Node.setKey(this.m_attributes["key"]);
        }
        if (this.m_attributesChanged["selected"] == true)
        {
            this.m_ui5Node.setSelected(CCValueManager.decodeBoolean(
                    this.m_attributes["selected"], false));
        }
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5M_TOKENElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_TOKENElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_TOKENElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnDelete = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","tokendelete()");
    };
    this.reactOnPress = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","select()");
    };
    this.reactOnSelect = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","select()");
    };
    this.init_CCUI5M_TOKENElement();
}
CCUI5M_TOKENElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_token"] = function() { return new CCUI5M_TOKENElement(); }; 
