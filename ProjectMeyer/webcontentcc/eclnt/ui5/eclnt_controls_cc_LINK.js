/* ############################################################################
 * CCLINKElement
 * ############################################################################ */

function CCLINKElement()
{
    this.init_CCLINKElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCLINKElement;
        this.applyComponentData = this.applyComponentData_CCLINKElement;
        this.reactOnEvent = this.reactOnEvent_CCLINKElement; 
        this.removeChildNode = this.removeChildNode_CCLINKElement;
        this.m_ccClassName = "CCLINKElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.Link());
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
    };
    this.applyComponentData_CCLINKElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCLINKElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCLINKElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCLINKElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCLINKElement();
}
CCLINKElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["link"] = function() { return new CCLINKElement(); }; 
s_CCPageElement_ElementCreators["cclink"] = function() { return new CCLINKElement(); }; 
