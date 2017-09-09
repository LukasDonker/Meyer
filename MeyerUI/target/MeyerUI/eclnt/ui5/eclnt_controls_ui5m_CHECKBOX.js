/* ############################################################################
 * CCUI5M_CHECKBOXElement
 * ############################################################################ */

function CCUI5M_CHECKBOXElement()
{
    this.init_CCUI5M_CHECKBOXElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_CHECKBOXElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_CHECKBOXElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_CHECKBOXElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_CHECKBOXElement;
        this.m_ccClassName = "CCUI5M_CHECKBOXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.CheckBox());
        this.m_ui5Node.attachSelect(function() {that.reactOnSelect(this);});
    };
    this.applyComponentData_CCUI5M_CHECKBOXElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["selected"] == true)
        {
            this.m_ui5Node.setSelected(CCValueManager.decodeBoolean(this.m_attributes["selected"],false));
        }
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5M_CHECKBOXElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_CHECKBOXElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_CHECKBOXElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelect = function(pCaller)
    {
        var vSelected= this.m_ui5Node.getSelected()+"";
        this.registerDirtyInformation(this.getId(),vSelected,false,true,null,false);
    }
    this.init_CCUI5M_CHECKBOXElement();
}
CCUI5M_CHECKBOXElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_checkbox"] = function() { return new CCUI5M_CHECKBOXElement(); }; 
