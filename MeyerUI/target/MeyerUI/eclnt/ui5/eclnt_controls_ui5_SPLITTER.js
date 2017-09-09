/* ############################################################################
 * CCUI5_SPLITTERElement
 * ############################################################################ */

function CCUI5_SPLITTERElement()
{
    this.init_CCUI5_SPLITTERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_SPLITTERElement;
        this.applyComponentData = this.applyComponentData_CCUI5_SPLITTERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_SPLITTERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_SPLITTERElement;
        this.m_ccClassName = "CCUI5_SPLITTERElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.layout.Splitter());
    };
    this.applyComponentData_CCUI5_SPLITTERElement = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCUI5_SPLITTERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.getLayoutData != null && ccControl.getLayoutData() == null)
        {
            var vLayoutData = new sap.ui.layout.SplitterLayoutData();
            vLayoutData.setSize("100%");
            ccControl.m_ui5Node.setLayoutData(vLayoutData);
        }
        this.m_ui5Node.insertContentArea(ccControl.m_ui5Node,index);
    };
    this.removeChildNode_CCUI5_SPLITTERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.m_ui5Node.removeContentArea(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5_SPLITTERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_SPLITTERElement();
}
CCUI5_SPLITTERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_splitter"] = function() { return new CCUI5_SPLITTERElement(); }; 
