/* ############################################################################
 * CCUI5_ACCORDIONSECTIONElement
 * ############################################################################ */

function CCUI5_ACCORDIONSECTIONElement()
{
    this.init_CCUI5_ACCORDIONSECTIONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_ACCORDIONSECTIONElement;
        this.applyComponentData = this.applyComponentData_CCUI5_ACCORDIONSECTIONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_ACCORDIONSECTIONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_ACCORDIONSECTIONElement;
        this.m_ccClassName = "CCUI5_ACCORDIONSECTIONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.AccordionSection());
    };
    this.applyComponentData_CCUI5_ACCORDIONSECTIONElement = function() 
    { 
        this.applyComponentData_CCControl();
//        if (this.m_attributesChanged["sectionid"])
//        {
//        }
        if (this.m_attributesChanged["title"])
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
        if (this.m_attributesChanged["collapsed"])
        {
            this.m_ui5Node.setCollapsed(CCValueManager.decodeBoolean(this.m_attributes["collapsed"],false));
        }
        if (this.m_attributesChanged["maxheight"])
        {
            this.m_ui5Node.setMaxHeight(CCValueManager.decodeSize(this.m_attributes["maxheight"],null));
        }
    };
    this.addChildNode_CCUI5_ACCORDIONSECTIONElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5_ACCORDIONSECTIONElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5_ACCORDIONSECTIONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_ACCORDIONSECTIONElement();
}
CCUI5_ACCORDIONSECTIONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_accordionsection"] = function() { return new CCUI5_ACCORDIONSECTIONElement(); }; 
