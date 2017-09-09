/* ############################################################################
 * CCTEXTPANEElement
 * ############################################################################ */

function CCTEXTPANEElement()
{
    this.init_CCTEXTPANEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCTEXTPANEElement;
        this.applyComponentData = this.applyComponentData_CCTEXTPANEElement;
        this.reactOnEvent = this.reactOnEvent_CCTEXTPANEElement; 
        this.removeChildNode = this.removeChildNode_CCTEXTPANEElement;
        this.m_ccClassName = "CCTEXTPANEElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.FormattedTextView());
    };
    this.applyComponentData_CCTEXTPANEElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setHtmlText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCTEXTPANEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCTEXTPANEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCTEXTPANEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCTEXTPANEElement();
}
CCTEXTPANEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["textpane"] = function() { return new CCTEXTPANEElement(); }; 
