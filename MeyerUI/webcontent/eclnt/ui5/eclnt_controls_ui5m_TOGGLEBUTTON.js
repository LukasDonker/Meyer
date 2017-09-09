/* ############################################################################
 * CCUI5M_TOGGLEBUTTONElement
 * ############################################################################ */

function CCUI5M_TOGGLEBUTTONElement()
{
    this.init_CCUI5M_TOGGLEBUTTONElement = function()
    {
        this.init_CCUI5M_BUTTONElement();
        this.addChildNode = this.addChildNode_CCUI5M_TOGGLEBUTTONElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TOGGLEBUTTONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TOGGLEBUTTONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TOGGLEBUTTONElement;
        this.m_ccClassName = "CCUI5M_TOGGLEBUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        var vButton = new sap.m.ToggleButton();
        vButton.attachPress(function() {that.reactOnPress(this);});
        this.bindUI5Node(vButton);
    };
    this.applyComponentData_CCUI5M_TOGGLEBUTTONElement = function() 
    { 
        this.applyComponentData_CCUI5M_BUTTONElement();
        if (this.m_attributesChanged["pressed"] == true)
        {
            this.m_ui5Node.setPressed(CCValueManager.decodeBoolean(
                    this.m_attributes["pressed"], false));
        }
    };
    this.addChildNode_CCUI5M_TOGGLEBUTTONElement = function(ccControl,index) { this.addChildNode_CCUI5M_BUTTONElement(ccControl,index); };
    this.removeChildNode_CCUI5M_TOGGLEBUTTONElement = function(ccControl) { this.removeChildNode_CCUI5M_BUTTONElement(ccControl); };
    this.reactOnEvent_CCUI5M_TOGGLEBUTTONElement = function(ccEvent) { this.reactOnEvent_CCUI5M_BUTTONElement(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        // own implementation
        var vPressed = this.m_ui5Node.getPressed()+"";
        this.getPage().registerDirtyInformation(this.getId(),vPressed,null,false);
        // super implementation
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCUI5M_TOGGLEBUTTONElement();
}
CCUI5M_TOGGLEBUTTONElement.prototype = new CCUI5M_BUTTONElement();
s_CCPageElement_ElementCreators["ui5m_togglebutton"] = function() { return new CCUI5M_TOGGLEBUTTONElement(); }; 
