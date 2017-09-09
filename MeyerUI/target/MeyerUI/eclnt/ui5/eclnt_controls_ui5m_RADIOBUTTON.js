/* ############################################################################
 * CCUI5M_RADIOBUTTONElement
 * ############################################################################ */

function CCUI5M_RADIOBUTTONElement()
{
    this.init_CCUI5M_RADIOBUTTONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_RADIOBUTTONElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_RADIOBUTTONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_RADIOBUTTONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_RADIOBUTTONElement;
        this.m_ccClassName = "CCUI5M_RADIOBUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.RadioButton());
        this.m_ui5Node.attachSelect(function() {that.reactOnSelect(this);});
    };
    this.applyComponentData_CCUI5M_RADIOBUTTONElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["group"])
        {
            this.m_ui5Node.setGroupName(this.m_attributes["group"]);
        }
        if (this.m_attributesChanged["value"] || this.m_attributesChanged["value"])
        {
            if (this.m_attributes["value"] == this.m_attributes["refvalue"])
                this.m_ui5Node.setSelected(true);
            else
                this.m_ui5Node.setSelected(false);
        }
        if (this.m_attributesChanged["activehandling"])
        {
            this.m_ui5Node.setActiveHandling(CCValueManager.decodeBoolean(this.m_attributes["activehandling"],true));
        }
        if (this.m_attributesChanged["text"])
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCUI5M_RADIOBUTTONElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_RADIOBUTTONElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_RADIOBUTTONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelect = function(pCaller)
    {
        if (this.m_ui5Node.getSelected() == true)
        {
            this.registerDirtyInformation(this.getId(),this.m_attributes["refvalue"],false,true,this.m_attributes["group"],false);
        }
    };
    this.init_CCUI5M_RADIOBUTTONElement();
}
CCUI5M_RADIOBUTTONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_radiobutton"] = function() { return new CCUI5M_RADIOBUTTONElement(); }; 
