/* ############################################################################
 * CCUI5M_FLEXBOXElement
 * ############################################################################ */

function CCUI5M_FLEXBOXElement()
{
    this.init_CCUI5M_FLEXBOXElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_FLEXBOXElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_FLEXBOXElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_FLEXBOXElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_FLEXBOXElement;
        this.m_ccClassName = "CCUI5M_FLEXBOXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.FlexBox());
    };
    this.applyComponentData_CCUI5M_FLEXBOXElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["alignitems"] == true)
        {
            this.m_ui5Node.setAlignItems(this.m_attributes["alignitems"]);
        }
        if (this.m_attributesChanged["direction"] == true)
        {
            this.m_ui5Node.setDirection(this.m_attributes["direction"]);
        }
        if (this.m_attributesChanged["displayinline"] == true)
        {
            this.m_ui5Node.setDisplayInline(CCValueManager.decodeBoolean(
                    this.m_attributes["displayinline"], false));
        }
        if (this.m_attributesChanged["fitcontainer"] == true)
        {
            this.m_ui5Node.setFitContainer(CCValueManager.decodeBoolean(
                    this.m_attributes["fitcontainer"], false));
        }
        if (this.m_attributesChanged["justifycontent"] == true)
        {
            this.m_ui5Node.setJustifyContent(this.m_attributes["justifycontent"]);
        }
        if (this.m_attributesChanged["rendertype"] == true)
        {
            this.m_ui5Node.setRenderType(this.m_attributes["rendertype"]);
        }
    };
    this.addChildNode_CCUI5M_FLEXBOXElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertItem(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5M_FLEXBOXElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeItem(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_FLEXBOXElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_FLEXBOXElement();
}
CCUI5M_FLEXBOXElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_flexbox"] = function() { return new CCUI5M_FLEXBOXElement(); }; 
