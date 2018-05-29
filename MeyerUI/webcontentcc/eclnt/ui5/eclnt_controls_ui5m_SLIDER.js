/* ############################################################################
 * CCUI5M_SLIDERElement
 * ############################################################################ */

function CCUI5M_SLIDERElement()
{
    this.init_CCUI5M_SLIDERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_SLIDERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_SLIDERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_SLIDERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_SLIDERElement;
        this.m_ccClassName = "CCUI5M_SLIDERElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Slider());
        this.m_ui5Node.attachChange(function() {that.reactOnChange(this);});
    };
    this.applyComponentData_CCUI5M_SLIDERElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["value"])
        {
            this.m_ui5Node.setValue(CCValueManager.decodeNumber(this.m_attributes["value"],0));
        }
        if (this.m_attributesChanged["min"])
        {
            this.m_ui5Node.setMin(CCValueManager.decodeNumber(this.m_attributes["min"],0));
        }
        if (this.m_attributesChanged["max"])
        {
            this.m_ui5Node.setMax(CCValueManager.decodeNumber(this.m_attributes["max"],100));
        }
        if (this.m_attributesChanged["step"])
        {
            this.m_ui5Node.setStep(CCValueManager.decodeNumber(this.m_attributes["step"],1));
        }
        if (this.m_attributesChanged["progress"])
        {
            this.m_ui5Node.setProgress(CCValueManager.decodeBoolean(this.m_attributes["progress"],false));
        }
    };
    this.addChildNode_CCUI5M_SLIDERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_SLIDERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_SLIDERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller)
    {
        this.registerDirtyInformation(this.getId(),this.m_ui5Node.getValue(),false,true,null,false);
    };
    this.init_CCUI5M_SLIDERElement();
}
CCUI5M_SLIDERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_slider"] = function() { return new CCUI5M_SLIDERElement(); }; 
