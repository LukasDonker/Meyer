/* ############################################################################
 * CCUI5M_NAVCONTAINERElement
 * ############################################################################ */

function CCUI5M_NAVCONTAINERElement()
{
    this.init_CCUI5M_NAVCONTAINERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_NAVCONTAINERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_NAVCONTAINERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_NAVCONTAINERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_NAVCONTAINERElement;
        this.m_ccClassName = "CCUI5M_NAVCONTAINERElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.m.NavContainer());
    };
    this.applyComponentData_CCUI5M_NAVCONTAINERElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["defaulttransitionname"] == true)
        {
            this.m_ui5Node.setDefaultTransitionName(this.m_attributes["defaulttransitionname"]);
        }
        if (this.m_attributesChanged["value"] == true)
        {
            try
            {
                var vPage = this.m_ui5Node.getPages()[CCValueManager.decodeNumber(this.m_attributes["value"],0)];
                this.m_ui5Node.to(vPage.getId());
            }
            catch (exc)
            {
            }
        }
    };
    this.addChildNode_CCUI5M_NAVCONTAINERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertPage(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCUI5M_NAVCONTAINERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removePage(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_NAVCONTAINERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_NAVCONTAINERElement();
}
CCUI5M_NAVCONTAINERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_navcontainer"] = function() { return new CCUI5M_NAVCONTAINERElement(); }; 
