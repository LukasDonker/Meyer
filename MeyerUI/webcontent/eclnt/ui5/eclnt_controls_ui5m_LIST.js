/* ############################################################################
 * CCUI5M_LISTElement
 * ############################################################################ */

function CCUI5M_LISTElement()
{
    this.init_CCUI5M_LISTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_LISTElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_LISTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_LISTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_LISTElement;
        this.m_ccClassName = "CCUI5M_LISTElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.List());
        this.m_ui5Node.attachSelectionChange(function(pEvent) {that.reactOnSelectionChange(this,pEvent);});
    };
    this.applyComponentData_CCUI5M_LISTElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        CCJSUtils.applyListBaseAttributes(this);
    };
    this.addChildNode_CCUI5M_LISTElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            var selectedValue = ccControl.m_ui5Node.getSelected();
            this.m_ui5Node.insertItem(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
            if (selectedValue == true)
            {
                ccControl.m_ui5Node.setSelected(true);
                // delayed calling of selection in parallel,
                // otherwise the selection is NOT taken over!!!!
                var paramArray = new Array();
                paramArray.push(ccControl);
                CCJSUtils.invokeLater(this,this._selectItem,paramArray);
            }
        }
    };
    this._selectItem = function(ccControl)
    {
        ccControl.m_ui5Node.setSelected(true);
    };
    this.removeChildNode_CCUI5M_LISTElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removeItem(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_LISTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelectionChange = function(pCaller,pEvent) { CCJSUtils.reactOnSelectionChange_ListBase(this,this,pEvent) };
    this.init_CCUI5M_LISTElement();
}
CCUI5M_LISTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_list"] = function() { return new CCUI5M_LISTElement(); }; 
