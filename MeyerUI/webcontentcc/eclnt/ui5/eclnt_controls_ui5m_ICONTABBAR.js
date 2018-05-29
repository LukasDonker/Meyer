/* ############################################################################
 * CCUI5M_ICONTABBARElement
 * ############################################################################ */

function CCUI5M_ICONTABBARElement()
{
    this.init_CCUI5M_ICONTABBARElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_ICONTABBARElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_ICONTABBARElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_ICONTABBARElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_ICONTABBARElement;
        this.m_ccClassName = "CCUI5M_ICONTABBARElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.IconTabBar());
        this.m_ui5Node.attachSelect(function(oEvent) {that.reactOnSelect(this,oEvent);});
    };
    this.applyComponentData_CCUI5M_ICONTABBARElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["expandable"])
        {
            this.m_ui5Node.setExpandable(CCValueManager.decodeBoolean(this.m_attributes["expandable"],true));
        }
        if (this.m_attributesChanged["expanded"])
        {
            this.m_ui5Node.setExpanded(CCValueManager.decodeBoolean(this.m_attributes["expanded"],true));
        }
        if (this.m_attributesChanged["selectedkey"])
        {
            try
            {
                this.m_ui5Node.setSelectedKey(this.m_attributes["selectedkey"]);
            }
            catch (exc)
            {}
        }
        if (this.m_attributesChanged["uppercase"])
        {
            this.m_ui5Node.setUpperCase(CCValueManager.decodeBoolean(this.m_attributes["uppercase"],false));
        }
    };
    this.addChildNode_CCUI5M_ICONTABBARElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
    };
    this.removeChildNode_CCUI5M_ICONTABBARElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
    };
    this.reactOnEvent_CCUI5M_ICONTABBARElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelect = function(pCaller,pEvent)
    {
        this.registerDirtyInformation(this.getId(),pEvent.getParameter("key"),false,true,null,false);
        this.getPage().callServer(this,this.getId()+".action","select()");
    };
    this.init_CCUI5M_ICONTABBARElement();
}
CCUI5M_ICONTABBARElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_icontabbar"] = function() { return new CCUI5M_ICONTABBARElement(); }; 
