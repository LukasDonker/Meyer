/* ############################################################################
 * CCUI5U_SPLITCONTAINERElement
 * ############################################################################ */

function CCUI5U_SPLITCONTAINERElement()
{
    this.init_CCUI5U_SPLITCONTAINERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5U_SPLITCONTAINERElement;
        this.applyComponentData = this.applyComponentData_CCUI5U_SPLITCONTAINERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5U_SPLITCONTAINERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5U_SPLITCONTAINERElement;
        this.m_ccClassName = "CCUI5U_SPLITCONTAINERElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.unified.SplitContainer());
    };
    this.applyComponentData_CCUI5U_SPLITCONTAINERElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["orientation"])
        {
            if (this.m_attributes["orientation"] == "horizontal") this.m_attributes["orientation"] = "Horizontal";
            if (this.m_attributes["orientation"] == "vertical") this.m_attributes["orientation"] = "Vertical";
            this.m_ui5Node.setOrientation(this.m_attributes["orientation"]);
        }
        if (this.m_attributesChanged["secondarycontentsize"])
        {
            this.m_ui5Node.setSecondaryContentSize(CCValueManager.decodeSize(
                    this.m_attributes["secondarycontentsize"], "200px"));
        }
        if (this.m_attributesChanged["showsecondarycontent"])
        {
            this.m_ui5Node.setShowSecondaryContent(CCValueManager.decodeBoolean(
                    this.m_attributes["showsecondarycontent"], true));
        }
    };
    this.addChildNode_CCUI5U_SPLITCONTAINERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5U_SPLITCONTAINERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5U_SPLITCONTAINERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5U_SPLITCONTAINERElement();
}
CCUI5U_SPLITCONTAINERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5u_splitcontainer"] = function() { return new CCUI5U_SPLITCONTAINERElement(); }; 
