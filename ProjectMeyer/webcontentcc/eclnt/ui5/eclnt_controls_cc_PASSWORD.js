/* ############################################################################
 * CCPASSWORDElement
 * ############################################################################ */

function CCPASSWORDElement()
{
    this.init_CCPASSWORDElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCPASSWORDElement;
        this.applyComponentData = this.applyComponentData_CCPASSWORDElement;
        this.reactOnEvent = this.reactOnEvent_CCPASSWORDElement; 
        this.removeChildNode = this.removeChildNode_CCPASSWORDElement;
        this.m_ccClassName = "CCPASSWORDElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.PasswordField());
        this.m_ui5Node.attachLiveChange(function(pEvent) {that.reactOnLiveChange(this,pEvent);});
    };
    this.applyComponentData_CCPASSWORDElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"])
        {
            this.m_ui5Node.setValue(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCPASSWORDElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCPASSWORDElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCPASSWORDElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnLiveChange = function(pCaller,pEvent)
    {
        try
        {
            CLog.logINF("LiveChange: " + pEvent.getParameter("liveValue"));
            var vText = pEvent.getParameter("liveValue");
            this.registerDirtyInformation(this.getId(),vText,false,true,null,false);
        }
        catch (ex)
        {
        }
    };
    this.init_CCPASSWORDElement();
}
CCPASSWORDElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["password"] = function() { return new CCPASSWORDElement(); }; 
