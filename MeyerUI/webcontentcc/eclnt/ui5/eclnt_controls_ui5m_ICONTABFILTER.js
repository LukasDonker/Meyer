/* ############################################################################
 * CCUI5M_ICONTABFILTERElement
 * ############################################################################ */

function CCUI5M_ICONTABFILTERElement()
{
    this.init_CCUI5M_ICONTABFILTERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_ICONTABFILTERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_ICONTABFILTERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_ICONTABFILTERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_ICONTABFILTERElement;
        this.m_ccClassName = "CCUI5M_ICONTABFILTERElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.IconTabFilter());
    };
    this.applyComponentData_CCUI5M_ICONTABFILTERElement = function() 
    { 
        this.applyComponentData_CCControl();
//        if (this.m_attributesChanged["count"])
//        {
//            this.m_ui5Node.setCount(CCValueManager.decodeNumber(this.m_attributes["count"],0));
//        }
        if (this.m_attributesChanged["key"] == true)
        {
            this.m_ui5Node.setKey(this.m_attributes["key"]);
        }
        if (this.m_attributesChanged["icon"])
        {
            this.m_ui5Node.setIcon(this.getPage().updateUrl(this.m_attributes["icon"]));
        }
        if (this.m_attributesChanged["iconcolor"])
        {
            this.m_ui5Node.setIconColor(this.m_attributes["iconcolor"]);
        }
        if (this.m_attributesChanged["text"]) 
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5M_ICONTABFILTERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_ICONTABFILTERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_ICONTABFILTERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_ICONTABFILTERElement();
}
CCUI5M_ICONTABFILTERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_icontabfilter"] = function() { return new CCUI5M_ICONTABFILTERElement(); }; 
