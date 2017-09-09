/* ############################################################################
 * CCFIELDElement
 * ############################################################################ */

function CCFIELDElement()
{
    this.m_lastValidTextValue = null;
    this.init_CCFIELDElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCFIELDElement;
        this.applyComponentData = this.applyComponentData_CCFIELDElement;
        this.reactOnEvent = this.reactOnEvent_CCFIELDElement; 
        this.removeChildNode = this.removeChildNode_CCFIELDElement;
        this.m_ccClassName = "CCFIELDElement"; 
        // --------------------------------------------------------------------
        this.processChange = this.processChangeFIELD;
        var vNode = new ccext.TextField(this.getId());
        var that = this;
        vNode.attachLiveChange(function(pEvent) {that.reactOnLiveChange(this,pEvent);});
        vNode.attachChange(function(pEvent) {that.reactOnChange(this,pEvent);});
        this.bindUI5Node(vNode);
    };
    this.applyComponentData_CCFIELDElement = function()
    {
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setValue(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCFIELDElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCFIELDElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCFIELDElement = function(ccEvent) 
    { 
        this.reactOnEvent_CCControl(ccEvent); 
        if (ccEvent.getEventId() == CCEvent_focus)
        {
            this.getPage().addNotifiedByCallServerElements(this);
        }
        else if (ccEvent.getEventId() == CCEvent_blur)
        {
            CCJSUtils.invokeLater(this,this._reactOnEventBlurExecute,new Array());
//            this.getPage().removeNotifiedByCallServerElements(this);
//            var vText = this.m_ui5Node.getValue(true);
//            this.processChange(vText,true);
        }
    };
    this._reactOnEventBlurExecute = function()
    {
        var vText = this.m_ui5Node.getValue();
        this.processChange(vText,true);
    };
    this.reactOnLiveChange = function(pCaller,pEvent)
    {
        try
        {
            var vText = pEvent.getParameter("liveValue");
            this.processChange(vText,false);
        }
        catch (ex)
        {
        }
    };
    this.reactOnChange = function(pCaller,pEvent)
    {
        var vText = this.m_ui5Node.getValue();
        this.processChange(vText,true);
    };
    this.notifyPageUpdate = function()
    {
        var vText = this.m_ui5Node.getValue();
        this.processChange(vText,true);
    };
    this.processChangeFIELD = function(vText,vSignificant)
    {
        this.m_realValue = vText;
        if (vText != this.m_attributes["text"] && vSignificant == true)
        {
            this.m_attributes["text"] = vText;
            this.registerDirtyInformation(this.getId(),vText,false,true,null,false);
        }
    };
    this.init_CCFIELDElement();
}
CCFIELDElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["field"] = function() { return new CCFIELDElement(); }; 

