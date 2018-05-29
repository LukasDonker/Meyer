/* ############################################################################
 * CCCOMBOFIELDElement
 * ############################################################################ */

function CCCOMBOFIELDElement()
{
    this.init_CCCOMBOFIELDElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCCOMBOFIELDElement;
        this.applyComponentData = this.applyComponentData_CCCOMBOFIELDElement;
        this.reactOnEvent = this.reactOnEvent_CCCOMBOFIELDElement; 
        this.removeChildNode = this.removeChildNode_CCCOMBOFIELDElement;
        this.m_ccClassName = "CCCOMBOFIELDElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.ValueHelpField());
        this.m_ui5Node.attachValueHelpRequest(function() {that.reactOnValueHelpRequest(this);});
    };
    this.applyComponentData_CCCOMBOFIELDElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setValue(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCCOMBOFIELDElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCCOMBOFIELDElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCCOMBOFIELDElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnValueHelpRequest = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","valuehelp()");
    };
    this.init_CCCOMBOFIELDElement();
}
CCCOMBOFIELDElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["combofield"] = function() { return new CCCOMBOFIELDElement(); }; 

