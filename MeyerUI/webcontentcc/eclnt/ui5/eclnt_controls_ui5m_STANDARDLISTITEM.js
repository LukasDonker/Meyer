/* ############################################################################
 * CCUI5M_STANDARDLISTITEMElement
 * ############################################################################ */

function CCUI5M_STANDARDLISTITEMElement()
{
    this.init_CCUI5M_STANDARDLISTITEMElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_STANDARDLISTITEMElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_STANDARDLISTITEMElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_STANDARDLISTITEMElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_STANDARDLISTITEMElement;
        this.m_ccClassName = "CCUI5M_STANDARDLISTITEMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.StandardListItem());
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
        this.m_ui5Node.attachDetailPress(function() {that.reactOnDetailPress(this);});
    };
    this.applyComponentData_CCUI5M_STANDARDLISTITEMElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        CCJSUtils.applyListItemBaseAttributes(this);
        if (this.m_attributesChanged["activeicon"] == true)
        {
            this.m_ui5Node.setActiveIcon(this.getPage().updateUrl(this.m_attributes["activeicon"]));
        }
        if (this.m_attributesChanged["adapttitlesize"] == true)
        {
            this.m_ui5Node.setAdaptTitleSize(CCValueManager.decodeBoolean(this.m_attributes["activeicon"],true));
        }
        if (this.m_attributesChanged["counter"] == true)
        {
            this.m_ui5Node.setCounter(CCValueManager.decodeNumber(this.m_attributes["counter"],0));
        }
        if (this.m_attributesChanged["description"] == true)
        {
            this.m_ui5Node.setDescription(this.m_attributes["description"]);
        }
        if (this.m_attributesChanged["icon"] == true)
        {
            this.m_ui5Node.setIcon(this.getPage().updateUrl(this.m_attributes["icon"]));
        }
        if (this.m_attributesChanged["icondensityaware"] == true)
        {
            this.m_ui5Node.setIconDensityAware(CCValueManager.decodeBoolean(this.m_attributes["icondensityaware"],true));
        }
        if (this.m_attributesChanged["iconinset"] == true)
        {
            this.m_ui5Node.setIconInset(CCValueManager.decodeBoolean(this.m_attributes["iconinset"],true));
        }
        if (this.m_attributesChanged["info"] == true)
        {
            this.m_ui5Node.setInfo(this.m_attributes["info"]);
        }
        if (this.m_attributesChanged["infostate"] == true)
        {
            this.m_ui5Node.setInfoState(this.m_attributes["infostate"]);
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
    };
    this.addChildNode_CCUI5M_STANDARDLISTITEMElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_STANDARDLISTITEMElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_STANDARDLISTITEMElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.reactOnDetailPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","detailinvoke()");
    };
    this.reactOnSelectionChange = function() { CCJSUtils.reactOnSelectionChange_ListItemBase(this); };
    this.init_CCUI5M_STANDARDLISTITEMElement();
}
CCUI5M_STANDARDLISTITEMElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_standardlistitem"] = function() { return new CCUI5M_STANDARDLISTITEMElement(); }; 
