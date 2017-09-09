/* ############################################################################
 * CCUI5_HORIZONTALDIVIDERElement
 * ############################################################################ */

function CCUI5_HORIZONTALDIVIDERElement()
{
    this.init_CCUI5_HORIZONTALDIVIDERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_HORIZONTALDIVIDERElement;
        this.applyComponentData = this.applyComponentData_CCUI5_HORIZONTALDIVIDERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_HORIZONTALDIVIDERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_HORIZONTALDIVIDERElement;
        this.m_ccClassName = "CCUI5_HORIZONTALDIVIDERElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.HorizontalDivider());
    };
    this.applyComponentData_CCUI5_HORIZONTALDIVIDERElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["horizontaldividertype"] == true)
        {
            this.m_ui5Node.setType(this.m_attributes["horizontaldividertype"]);
        }
        if (this.m_attributesChanged["horizontaldividerheight"] == true)
        {
            this.m_ui5Node.setHeight(this.m_attributes["horizontaldividerheight"]);
        }
    };
    this.addChildNode_CCUI5_HORIZONTALDIVIDERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5_HORIZONTALDIVIDERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5_HORIZONTALDIVIDERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_HORIZONTALDIVIDERElement();
}
CCUI5_HORIZONTALDIVIDERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_horizontaldivider"] = function() { return new CCUI5_HORIZONTALDIVIDERElement(); }; 
