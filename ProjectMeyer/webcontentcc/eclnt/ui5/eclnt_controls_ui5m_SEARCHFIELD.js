/* ############################################################################
 * CCUI5M_SEARCHFIELDElement
 * ############################################################################ */

function CCUI5M_SEARCHFIELDElement()
{
    this.init_CCUI5M_SEARCHFIELDElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_SEARCHFIELDElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_SEARCHFIELDElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_SEARCHFIELDElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_SEARCHFIELDElement;
        this.m_ccClassName = "CCUI5M_SEARCHFIELDElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.SearchField());
        this.m_ui5Node.attachLiveChange(function(pEvent) {that.reactOnLiveChange(this,pEvent);});
        this.m_ui5Node.attachSearch(function(pEvent) {that.reactOnSearch(this,pEvent);});
    };
    this.applyComponentData_CCUI5M_SEARCHFIELDElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["maxlength"] == true)
        {
            this.m_ui5Node.setMaxLength(CCValueManager.decodeNumber(this.m_attributes["maxlength"]),0);
        }
        if (this.m_attributesChanged["refreshbuttontooltip"] == true)
        {
            this.m_ui5Node.setRefreshButtonTooltip(this.m_attributes["refreshbuttontooltip"]);
        }
        if (this.m_attributesChanged["showrefreshbutton"] == true)
        {
            this.m_ui5Node.setShowRefreshButton(CCValueManager.decodeBoolean(
                    this.m_attributes["showrefreshbutton"], false));
        }
        if (this.m_attributesChanged["showsearchbutton"] == true)
        {
            this.m_ui5Node.setShowSearchButton(CCValueManager.decodeBoolean(
                    this.m_attributes["showsearchbutton"], true));
        }
        if (this.m_attributesChanged["value"] == true)
        {
            this.m_ui5Node.setValue(this.m_attributes["value"]);
        }
    };
    this.addChildNode_CCUI5M_SEARCHFIELDElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_SEARCHFIELDElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_SEARCHFIELDElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnLiveChange = function(pCaller,pEvent)
    {
        var vText = this.m_ui5Node.getValue();
        this.registerDirtyInformation(this.getId(),vText,false,true,null,false);
    };
    this.reactOnSearch = function(pCaller,pEvent)
    {
        try
        {
            var vText = this.m_ui5Node.getValue();
            this.registerDirtyInformation(this.getId(),vText,false,true,null,false);
            var rbp = pEvent.getParameter("refreshButtonPressed");
            this.getPage().callServer(this,this.getId()+".action","search("+rbp+")");
        }
        catch (ex)
        {
        }
    };
    this.init_CCUI5M_SEARCHFIELDElement();
}
CCUI5M_SEARCHFIELDElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_searchfield"] = function() { return new CCUI5M_SEARCHFIELDElement(); }; 
