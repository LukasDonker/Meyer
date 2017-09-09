/* ############################################################################
 * CCUI5_SIMPLEFORMElement
 * ############################################################################ */

function CCUI5_SIMPLEFORMElement()
{
    this.init_CCUI5_SIMPLEFORMElement = function()
    {
        this.init_CCContainerControl();
        this.addChildNode = this.addChildNode_CCUI5_SIMPLEFORMElement;
        this.applyComponentData = this.applyComponentData_CCUI5_SIMPLEFORMElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_SIMPLEFORMElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_SIMPLEFORMElement;
        this.m_ccClassName = "CCUI5_SIMPLEFORMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.layout.form.SimpleForm());
    };
    this.applyComponentData_CCUI5_SIMPLEFORMElement = function() 
    { 
        this.applyComponentData_CCContainerControl();
        if (this.m_attributesChanged["breakpointl"] == true)
        {
            this.m_ui5Node.setBreakpointL(CCValueManager.decodeNumber(this.m_attributes["breakpointl"]),1024);
        }
        if (this.m_attributesChanged["breakpointm"] == true)
        {
            this.m_ui5Node.setBreakpointM(CCValueManager.decodeNumber(this.m_attributes["breakpointm"]),600);
        }
        if (this.m_attributesChanged["columnsl"] == true)
        {
            this.m_ui5Node.setColumnsL(CCValueManager.decodeNumber(this.m_attributes["columnsl"]),2);
        }
        if (this.m_attributesChanged["columnsm"] == true)
        {
            this.m_ui5Node.setColumnsM(CCValueManager.decodeNumber(this.m_attributes["columnsm"]),1);
        }
        if (this.m_attributesChanged["emptyspanl"] == true)
        {
            this.m_ui5Node.setEmptySpanL(CCValueManager.decodeNumber(this.m_attributes["emptyspanl"]),0);
        }
        if (this.m_attributesChanged["emptyspanm"] == true)
        {
            this.m_ui5Node.setEmptySpanM(CCValueManager.decodeNumber(this.m_attributes["emptyspanm"]),0);
        }
        if (this.m_attributesChanged["emptyspans"] == true)
        {
            this.m_ui5Node.setEmptySpanS(CCValueManager.decodeNumber(this.m_attributes["emptyspans"]),0);
        }
        if (this.m_attributesChanged["labelminwidth"] == true)
        {
            this.m_ui5Node.setLabelMinWidth(CCValueManager.decodeNumber(this.m_attributes["labelminwidth"]),192);
        }
        if (this.m_attributesChanged["labelspanl"] == true)
        {
            this.m_ui5Node.setLabelSpanL(CCValueManager.decodeNumber(this.m_attributes["labelspanl"]),4);
        }
        if (this.m_attributesChanged["labelspanm"] == true)
        {
            this.m_ui5Node.setLabelSpanM(CCValueManager.decodeNumber(this.m_attributes["labelspanm"]),2);
        }
        if (this.m_attributesChanged["labelspans"] == true)
        {
            this.m_ui5Node.setLabelSpanS(CCValueManager.decodeNumber(this.m_attributes["labelspans"]),12);
        }
        if (this.m_attributesChanged["maxcontainercols"] == true)
        {
            this.m_ui5Node.setMaxContainerCols(CCValueManager.decodeNumber(this.m_attributes["maxcontainercols"]),2);
        }
        if (this.m_attributesChanged["minwidth"] == true)
        {
            this.m_ui5Node.setMinWidth(CCValueManager.decodeNumber(this.m_attributes["minwidth"]),-1);
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
        if (this.m_attributesChanged["layout"] == true)
        {
            this.m_ui5Node.setLayout(this.m_attributes["layout"]);
        }
    };
    this.addChildNode_CCUI5_SIMPLEFORMElement = function(ccControl,index) { this.addChildNode_CCContainerControl(ccControl,index); };
    this.removeChildNode_CCUI5_SIMPLEFORMElement = function(ccControl) { this.removeChildNode_CCContainerControl(ccControl); };
    this.reactOnEvent_CCUI5_SIMPLEFORMElement = function(ccEvent) { this.reactOnEvent_CCContainerControl(ccEvent); };
    this.init_CCUI5_SIMPLEFORMElement();
}
CCUI5_SIMPLEFORMElement.prototype = new CCContainerControl();
s_CCPageElement_ElementCreators["ui5_simpleform"] = function() { return new CCUI5_SIMPLEFORMElement(); }; 
