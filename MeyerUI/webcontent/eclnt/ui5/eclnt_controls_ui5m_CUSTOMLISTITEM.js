/* ############################################################################
 * CCUI5M_CUSTOMLISTITEMElement
 * ############################################################################ */

function CCUI5M_CUSTOMLISTITEMElement()
{
    this.init_CCUI5M_CUSTOMLISTITEMElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_CUSTOMLISTITEMElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_CUSTOMLISTITEMElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_CUSTOMLISTITEMElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_CUSTOMLISTITEMElement;
        this.m_ccClassName = "CCUI5M_CUSTOMLISTITEMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.CustomListItem());
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
        this.m_ui5Node.attachDetailPress(function() {that.reactOnDetailPress(this);});
    };
    this.applyComponentData_CCUI5M_CUSTOMLISTITEMElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        CCJSUtils.applyListItemBaseAttributes(this);
    };
    this.addChildNode_CCUI5M_CUSTOMLISTITEMElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.addContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5M_CUSTOMLISTITEMElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5M_CUSTOMLISTITEMElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.reactOnDetailPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","detailinvoke()");
    };
    this.reactOnSelectionChange = function() { CCJSUtils.reactOnSelectionChange_ListItemBase(this); };
    this.init_CCUI5M_CUSTOMLISTITEMElement();
}
CCUI5M_CUSTOMLISTITEMElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_customlistitem"] = function() { return new CCUI5M_CUSTOMLISTITEMElement(); }; 
