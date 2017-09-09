/* ############################################################################
 * CCUI5M_TABLEElement
 * ############################################################################ */

function CCUI5M_TABLEElement()
{
    this.init_CCUI5M_TABLEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TABLEElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TABLEElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TABLEElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TABLEElement;
        this.m_ccClassName = "CCUI5M_TABLEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Table());
        this.m_ui5Node.attachSelectionChange(function(pEvent) {that.reactOnSelectionChange(this,pEvent);});
    };
    this.applyComponentData_CCUI5M_TABLEElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        CCJSUtils.applyListBaseAttributes(this);
        if (this.m_attributesChanged["fixedlayout"] == true)
        {
            this.m_ui5Node.setFixedLayout(CCValueManager.decodeBoolean(
                    this.m_attributes["fixedlayout"], true));
        }
        if (this.m_attributesChanged["showoverlay"] == true)
        {
            this.m_ui5Node.setShowOverlay(CCValueManager.decodeBoolean(
                    this.m_attributes["showoverlay"], false));
        }
    };
    this.addChildNode_CCUI5M_TABLEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_TABLEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_TABLEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelectionChange = function(pCaller,pEvent) 
    { 
        var itemsChild = this.findItemsChild();
        if (itemsChild != null)
        {
            CCJSUtils.reactOnSelectionChange_ListBase(this,itemsChild,pEvent);
        }
    };
    this.findItemsChild = function()
    {
        for (var i=0; i<this.getChildren().length; i++)
        {
            var child = this.getChildren()[i];
            if (child.m_ccClassName == "CCUI5M_TABLEITEMSElement")
            {
                return child;
            }
        }
        return null;
    };
    this.init_CCUI5M_TABLEElement();
}
CCUI5M_TABLEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_table"] = function() { return new CCUI5M_TABLEElement(); }; 
