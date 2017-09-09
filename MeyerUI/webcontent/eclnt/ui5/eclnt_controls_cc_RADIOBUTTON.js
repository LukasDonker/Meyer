/* ############################################################################
 * CCRADIOBUTTONElement
 * ############################################################################ */

function CCRADIOBUTTONElement()
{
    this.init_CCRADIOBUTTONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCRADIOBUTTONElement;
        this.applyComponentData = this.applyComponentData_CCRADIOBUTTONElement;
        this.reactOnEvent = this.reactOnEvent_CCRADIOBUTTONElement; 
        this.removeChildNode = this.removeChildNode_CCRADIOBUTTONElement;
        this.m_ccClassName = "CCRADIOBUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.RadioButton());
        this.m_ui5Node.attachSelect(function() {that.reactOnSelect(this);});
    };
    this.applyComponentData_CCRADIOBUTTONElement = function() 
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
        if (this.m_attributesChanged["text"])
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCRADIOBUTTONElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCRADIOBUTTONElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCRADIOBUTTONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelect = function(pCaller)
    {
        if (this.m_ui5Node.getSelected() == true)
        {
            this.registerDirtyInformation(this.getId(),this.m_attributes["refvalue"],false,true,this.m_attributes["group"],false);
        }
    };
    this.init_CCRADIOBUTTONElement();
}
CCRADIOBUTTONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["radiobutton"] = function() { return new CCRADIOBUTTONElement(); }; 
