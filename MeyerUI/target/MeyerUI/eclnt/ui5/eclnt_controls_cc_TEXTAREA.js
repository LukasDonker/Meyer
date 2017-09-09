/* ############################################################################
 * CCTEXTAREAElement
 * ############################################################################ */

function CCTEXTAREAElement()
{
    this.init_CCTEXTAREAElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCTEXTAREAElement;
        this.applyComponentData = this.applyComponentData_CCTEXTAREAElement;
        this.reactOnEvent = this.reactOnEvent_CCTEXTAREAElement; 
        this.removeChildNode = this.removeChildNode_CCTEXTAREAElement;
        this.m_ccClassName = "CCTEXTAREAElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.TextArea());
    };
    this.applyComponentData_CCTEXTAREAElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setValue(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCTEXTAREAElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCTEXTAREAElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCTEXTAREAElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCTEXTAREAElement();
}
CCTEXTAREAElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["textarea"] = function() { return new CCTEXTAREAElement(); }; 

