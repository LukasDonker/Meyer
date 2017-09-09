/* ############################################################################
 * CCUI5M_OBJECTATTRIBUTEElement
 * ############################################################################ */

function CCUI5M_OBJECTATTRIBUTEElement()
{
    this.init_CCUI5M_OBJECTATTRIBUTEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_OBJECTATTRIBUTEElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_OBJECTATTRIBUTEElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_OBJECTATTRIBUTEElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_OBJECTATTRIBUTEElement;
        this.m_ccClassName = "CCUI5M_OBJECTATTRIBUTEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.ObjectAttribute());
        this.m_ui5Node.attachPress(function(oEvent) {that.reactOnPress(this,oEvent);});
    };
    this.applyComponentData_CCUI5M_OBJECTATTRIBUTEElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["active"] == true)
        {
            this.m_ui5Node.setActive(CCValueManager.decodeBoolean(
                    this.m_attributes["active"], false));
        }
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
    };
    this.addChildNode_CCUI5M_OBJECTATTRIBUTEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_OBJECTATTRIBUTEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_OBJECTATTRIBUTEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCUI5M_OBJECTATTRIBUTEElement();
}
CCUI5M_OBJECTATTRIBUTEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_objectattribute"] = function() { return new CCUI5M_OBJECTATTRIBUTEElement(); }; 
