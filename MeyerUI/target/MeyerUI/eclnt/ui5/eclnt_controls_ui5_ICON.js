/* ############################################################################
 * CCUI5_ICONElement
 * ############################################################################ */

function CCUI5_ICONElement()
{
    this.init_CCUI5_ICONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_ICONElement;
        this.applyComponentData = this.applyComponentData_CCUI5_ICONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_ICONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_ICONElement;
        this.m_ccClassName = "CCUI5_ICONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.core.Icon());
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
    };
    this.applyComponentData_CCUI5_ICONElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["activebackgroundcolor"] == true)
        {
            this.m_ui5Node.setActiveBackgroundColor(CCValueManager
                    .decodeColor(this.m_attributes["activebackgroundcolor"]));
        }
        if (this.m_attributesChanged["activecolor"] == true)
        {
            this.m_ui5Node.setActiveColor(CCValueManager
                    .decodeColor(this.m_attributes["activecolor"]));
        }
        if (this.m_attributesChanged["backgroundcolor"] == true)
        {
            this.m_ui5Node.setBackgroundColor(CCValueManager
                    .decodeColor(this.m_attributes["backgroundcolor"]));
        }
        if (this.m_attributesChanged["color"] == true)
        {
            this.m_ui5Node.setColor(CCValueManager
                    .decodeColor(this.m_attributes["color"]));
        }
        if (this.m_attributesChanged["hoverbackgroundcolor"] == true)
        {
            this.m_ui5Node.setHoverBackgroundColor(CCValueManager
                    .decodeColor(this.m_attributes["hoverbackgroundcolor"]));
        }
        if (this.m_attributesChanged["hovercolor"] == true)
        {
            this.m_ui5Node.setHoverColor(CCValueManager
                    .decodeColor(this.m_attributes["hovercolor"]));
        }
        if (this.m_attributesChanged["size"] == true)
        {
            this.m_ui5Node.setSize(CCValueManager.decodeSize(
                    this.m_attributes["size"], null));
        }
        if (this.m_attributesChanged["src"] == true)
        {
            this.m_ui5Node.setSrc(this.m_attributes["src"]);
        }
    };
    this.addChildNode_CCUI5_ICONElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5_ICONElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5_ICONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCUI5_ICONElement();
}
CCUI5_ICONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_icon"] = function() { return new CCUI5_ICONElement(); }; 
