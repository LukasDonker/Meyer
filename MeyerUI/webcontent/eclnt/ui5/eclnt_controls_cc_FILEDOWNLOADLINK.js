/* ############################################################################
 * CCFILEDOWNLOADLINKElement
 * ############################################################################ */

function CCFILEDOWNLOADLINKElement()
{
    this.init_CCFILEDOWNLOADLINKElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCFILEDOWNLOADLINKElement;
        this.applyComponentData = this.applyComponentData_CCFILEDOWNLOADLINKElement;
        this.reactOnEvent = this.reactOnEvent_CCFILEDOWNLOADLINKElement; 
        this.removeChildNode = this.removeChildNode_CCFILEDOWNLOADLINKElement;
        this.m_ccClassName = "CCFILEDOWNLOADLINKElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.Link());
        this.m_ui5Node.setTarget("_blank");
    };
    this.applyComponentData_CCFILEDOWNLOADLINKElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["url"] == true)
        {
            vUrl = this.getPage().updateUrl(this.m_attributes["url"]);
            this.m_ui5Node.setHref(vUrl);
        }
    };
    this.addChildNode_CCFILEDOWNLOADLINKElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCFILEDOWNLOADLINKElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCFILEDOWNLOADLINKElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCFILEDOWNLOADLINKElement();
}
CCFILEDOWNLOADLINKElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["filedownloadlink"] = function() { return new CCFILEDOWNLOADLINKElement(); }; 
