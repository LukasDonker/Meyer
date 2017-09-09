/* ############################################################################
 * CCIMAGEElement
 * ############################################################################ */

function CCIMAGEElement()
{
    this.init_CCIMAGEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCIMAGEElement;
        this.applyComponentData = this.applyComponentData_CCIMAGEElement;
        this.reactOnEvent = this.reactOnEvent_CCIMAGEElement; 
        this.removeChildNode = this.removeChildNode_CCIMAGEElement;
        this.m_ccClassName = "CCIMAGEElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.Image());
    };
    this.applyComponentData_CCIMAGEElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["image"] == true)
        {
            var vImage = this.m_attributes["image"];
            vImage = this.getPage().updateUrl(vImage);
            this.m_ui5Node.setSrc(vImage);
        }
    };
    this.addChildNode_CCIMAGEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCIMAGEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCIMAGEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCIMAGEElement();
}
CCIMAGEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["image"] = function() { return new CCIMAGEElement(); }; 
