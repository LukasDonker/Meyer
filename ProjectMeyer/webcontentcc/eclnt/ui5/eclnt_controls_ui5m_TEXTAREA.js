/* ############################################################################
 * CCUI5M_TEXTAREAElement
 * ############################################################################ */

function CCUI5M_TEXTAREAElement()
{
    this.init_CCUI5M_TEXTAREAElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TEXTAREAElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TEXTAREAElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TEXTAREAElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TEXTAREAElement;
        this.m_ccClassName = "CCUI5M_TEXTAREAElement";
        // --------------------------------------------------------------------
        var that = this;
        var vNode = new sap.m.TextArea();
        vNode.attachLiveChange(function(pEvent) {that.reactOnLiveChange(this,pEvent);});
        vNode.attachChange(function(pEvent) {that.reactOnChange(this,pEvent);});
        this.bindUI5Node(vNode);
    };
    this.applyComponentData_CCUI5M_TEXTAREAElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["cols"] == true)
        {
            this.m_ui5Node.setCols(CCValueManager.decodeNumber(this.m_attributes["cols"]),null);
        }
        if (this.m_attributesChanged["rows"] == true)
        {
            this.m_ui5Node.setRows(CCValueManager.decodeNumber(this.m_attributes["rows"]),null);
        }
        if (this.m_attributesChanged["maxlength"] == true)
        {
            this.m_ui5Node.setMaxLength(CCValueManager.decodeNumber(this.m_attributes["maxlength"]),null);
        }
        if (this.m_attributesChanged["value"] == true)
        {
            this.m_ui5Node.setValue(this.m_attributes["value"]);
        }
        if (this.m_attributesChanged["wrapping"] == true)
        {
            this.m_ui5Node.setWrapping(this.m_attributes["wrapping"]);
        }
    };
    this.addChildNode_CCUI5M_TEXTAREAElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_TEXTAREAElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_TEXTAREAElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnLiveChange = function(pCaller,pEvent)
    {
    };
    this.reactOnChange = function(pCaller,pEvent)
    {
        try
        {
            var vText = this.m_ui5Node.getValue();
            this.registerDirtyInformation(this.getId(),vText,false,true,null,false);
        }
        catch (ex)
        {
        }
    };
    this.init_CCUI5M_TEXTAREAElement();
}
CCUI5M_TEXTAREAElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_textarea"] = function() { return new CCUI5M_TEXTAREAElement(); }; 
