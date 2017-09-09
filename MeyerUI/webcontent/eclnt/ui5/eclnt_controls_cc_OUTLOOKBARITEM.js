/* ############################################################################
 * CCOUTLOOKBARITEMElement
 * ############################################################################ */

function CCOUTLOOKBARITEMElement()
{
    this.m_selected = false;
    this.init_CCOUTLOOKBARITEMElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCOUTLOOKBARITEMElement;
        this.applyComponentData = this.applyComponentData_CCOUTLOOKBARITEMElement;
        this.reactOnEvent = this.reactOnEvent_CCOUTLOOKBARITEMElement; 
        this.removeChildNode = this.removeChildNode_CCOUTLOOKBARITEMElement;
        this.m_ccClassName = "CCOUTLOOKBARITEMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.Button());
        this.m_ui5Node.setWidth("100%");
        this.m_ui5Node.addStyleClass("ccOutlookbaritem");
        this.m_ui5Node.attachPress(function() {that.reactOnPressOBI(this);});
    };
    this.applyComponentData_CCOUTLOOKBARITEMElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCOUTLOOKBARITEMElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCOUTLOOKBARITEMElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCOUTLOOKBARITEMElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.setSelected = function(pSelected)
    {
        if (this.m_selected == pSelected)
            return;
        this.m_selected = pSelected;
        if (this.m_selected == true)
        {
            this.m_ui5Node.removeStyleClass("ccOutlookbaritem");
            this.m_ui5Node.addStyleClass("ccOutlookbaritemselected");
        }
        else
        {
            this.m_ui5Node.removeStyleClass("ccOutlookbaritemselected");
            this.m_ui5Node.addStyleClass("ccOutlookbaritem");
        }
    };
    this.reactOnPressOBI = function(pCaller)
    {
        this.getParent().notifyItemSelection(this);
        this.reactOnPress(pCaller);
    };
    this.init_CCOUTLOOKBARITEMElement();
}
CCOUTLOOKBARITEMElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["outlookbaritem"] = function() { return new CCOUTLOOKBARITEMElement(); }; 
