/* ############################################################################
 * CCCHECKBOXElement
 * ############################################################################ */

function CCCHECKBOXElement()
{
    this.init_CCCHECKBOXElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCCHECKBOXElement;
        this.applyComponentData = this.applyComponentData_CCCHECKBOXElement;
        this.reactOnEvent = this.reactOnEvent_CCCHECKBOXElement; 
        this.removeChildNode = this.removeChildNode_CCCHECKBOXElement;
        this.m_ccClassName = "CCCHECKBOXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.CheckBox());
        this.m_ui5Node.attachChange(function() {that.reactOnChange(this);});
    };
    this.applyComponentData_CCCHECKBOXElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["selected"] == true)
        {
            this.m_ui5Node.setChecked(CCValueManager.decodeBoolean(this.m_attributes["selected"],false));
        }
    };
    this.addChildNode_CCCHECKBOXElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCCHECKBOXElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCCHECKBOXElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller)
    {
        this.registerDirtyInformation(this.getId(),this.m_ui5Node.getChecked(),false,true,null,false);
    };
    this.init_CCCHECKBOXElement();
}
CCCHECKBOXElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["checkbox"] = function() { return new CCCHECKBOXElement(); }; 
