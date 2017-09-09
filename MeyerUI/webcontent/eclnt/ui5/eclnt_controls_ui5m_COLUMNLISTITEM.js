/* ############################################################################
 * CCUI5M_COLUMNLISTITEMElement
 * ############################################################################ */

function CCUI5M_COLUMNLISTITEMElement()
{
    this.init_CCUI5M_COLUMNLISTITEMElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_COLUMNLISTITEMElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_COLUMNLISTITEMElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_COLUMNLISTITEMElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_COLUMNLISTITEMElement;
        this.m_ccClassName = "CCUI5M_COLUMNLISTITEMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.ColumnListItem());
    };
    this.applyComponentData_CCUI5M_COLUMNLISTITEMElement = function() 
    { 
        this.applyComponentData_CCControl();
        CCJSUtils.applyListItemBaseAttributes(this);
        if (this.m_attributesChanged["valign"] == true)
        {
            this.m_ui5Node.setVAlign(this.m_attributes["valign"]);
        }
    };
    this.addChildNode_CCUI5M_COLUMNLISTITEMElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertCell(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5M_COLUMNLISTITEMElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeCell(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_COLUMNLISTITEMElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelectionChange = function() { CCJSUtils.reactOnSelectionChange_ListItemBase(this); };
    this.init_CCUI5M_COLUMNLISTITEMElement();
}
CCUI5M_COLUMNLISTITEMElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_columnlistitem"] = function() { return new CCUI5M_COLUMNLISTITEMElement(); }; 
