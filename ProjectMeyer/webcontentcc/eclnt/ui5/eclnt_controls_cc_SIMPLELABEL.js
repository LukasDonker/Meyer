/* ############################################################################
 * CCSIMPLELABELElement
 * ############################################################################ */

function CCSIMPLELABELElement()
{
    this.init_CCSIMPLELABELElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCSIMPLELABELElement;
        this.applyComponentData = this.applyComponentData_CCSIMPLELABELElement;
        this.reactOnEvent = this.reactOnEvent_CCSIMPLELABELElement; 
        this.removeChildNode = this.removeChildNode_CCSIMPLELABELElement;
        this.m_ccClassName = "CCSIMPLELABELElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new cc.SimpleLabel());
    };
    this.applyComponentData_CCSIMPLELABELElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCSIMPLELABELElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCSIMPLELABELElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCSIMPLELABELElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCSIMPLELABELElement();
}
CCSIMPLELABELElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["simplelabel"] = function() { return new CCSIMPLELABELElement(); }; 
