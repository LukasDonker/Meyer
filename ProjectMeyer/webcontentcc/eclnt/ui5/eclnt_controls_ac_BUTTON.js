/* ############################################################################
 * CCBUTTONElement
 * ############################################################################ */

function CCBUTTONElement()
{
    this.init_CCBUTTONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCBUTTONElement;
        this.applyComponentData = this.applyComponentData_CCBUTTONElement;
        this.reactOnEvent = this.reactOnEvent_CCBUTTONElement; 
        this.removeChildNode = this.removeChildNode_CCBUTTONElement;
        this.m_ccClassName = "CCBUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        var vButton = new sap.ui.commons.Button();
        vButton.attachPress(function() {that.reactOnPress(this);});
        this.bindUI5Node(vButton);
    };
    this.applyComponentData_CCBUTTONElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["key"])
        {
            this.m_ui5Node.setKey(this.m_attributes["key"]);
        }
        if (this.m_attributesChanged["image"] == true)
        {
            var vImage = this.m_attributes["image"];
            vImage = this.getPage().updateUrl(vImage);
            this.m_ui5Node.setIcon(vImage);
        }
        if (this.m_attributesChanged["iconcolor"])
        {
            this.m_ui5Node.setIconColor(this.m_attributes["iconcolor"]);
        }
        if (this.m_attributesChanged["icontabdesign"])
        {
            this.m_ui5Node.setDesign(this.m_attributes["icontabdesign"]);
        }
        if (this.m_attributesChanged["contentareafilled"] == true)
        {
            var vValue = CCValueManager.decodeBoolean(this.m_attributes["contentareafilled"],false);
            vValue = !vValue;
            this.m_ui5Node.setLite(vValue);
        }
    };
    this.addChildNode_CCBUTTONElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCBUTTONElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCBUTTONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCBUTTONElement();
}
CCBUTTONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["button"] = function() { return new CCBUTTONElement(); }; 

