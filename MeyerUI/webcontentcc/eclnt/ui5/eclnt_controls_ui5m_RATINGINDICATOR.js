/* ############################################################################
 * CCUI5M_RATINGINDICATORElement
 * ############################################################################ */

function CCUI5M_RATINGINDICATORElement()
{
    this.init_CCUI5M_RATINGINDICATORElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_RATINGINDICATORElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_RATINGINDICATORElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_RATINGINDICATORElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_RATINGINDICATORElement;
        this.m_ccClassName = "CCUI5M_RATINGINDICATORElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.RatingIndicator());
        this.m_ui5Node.attachChange(function() {that.reactOnChange(this);});
    };
    this.applyComponentData_CCUI5M_RATINGINDICATORElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["iconhovered"])
        {
            this.m_ui5Node.setIconHovered(this.getPage().updateUrl(this.m_attributes["iconhovered"]));
        }
        if (this.m_attributesChanged["iconselected"])
        {
            this.m_ui5Node.setIconSelected(this.getPage().updateUrl(this.m_attributes["iconselected"]));
        }
        if (this.m_attributesChanged["iconsize"])
        {
            this.m_ui5Node.setIconSize(CCValueManager.decodeSize(this.m_attributes["iconsize"],undefined));
        }
        if (this.m_attributesChanged["iconunselected"])
        {
            this.m_ui5Node.setIconUnselected(this.getPage().updateUrl(this.m_attributes["iconunselected"]));
        }
        if (this.m_attributesChanged["maxvalue"])
        {
            this.m_ui5Node.setMaxValue(CCValueManager.decodeNumber(this.m_attributes["maxvalue"],5));
        }
        if (this.m_attributesChanged["value"])
        {
            this.m_ui5Node.setValue(CCValueManager.decodeNumber(this.m_attributes["value"],0));
        }
        if (this.m_attributesChanged["visualmode"])
        {
            this.m_ui5Node.setVisualMode(CCValueManager.decodeNumber(this.m_attributes["visualmode"],0));
        }
    };
    this.addChildNode_CCUI5M_RATINGINDICATORElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_RATINGINDICATORElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_RATINGINDICATORElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller)
    {
        this.registerDirtyInformation(this.getId(),this.m_ui5Node.getValue(),false,true,null,false);
    };
    this.init_CCUI5M_RATINGINDICATORElement();
}
CCUI5M_RATINGINDICATORElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_ratingindicator"] = function() { return new CCUI5M_RATINGINDICATORElement(); }; 
