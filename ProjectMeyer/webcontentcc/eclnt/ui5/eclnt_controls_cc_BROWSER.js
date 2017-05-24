/* ############################################################################
 * CCBROWSERElement
 * ############################################################################ */

function CCBROWSERElement()
{
    this.init_CCBROWSERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCBROWSERElement;
        this.applyComponentData = this.applyComponentData_CCBROWSERElement;
        this.reactOnEvent = this.reactOnEvent_CCBROWSERElement; 
        this.removeChildNode = this.removeChildNode_CCBROWSERElement;
        this.m_ccClassName = "CCBROWSERElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new cc.Browser());
        this.m_ui5Node.ccCallBack = this;
    };
    this.applyComponentData_CCBROWSERElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["url"] == true)
        {
            var vUrl = this.m_attributes["url"];
            vUrl = this.getPage().updateUrl(vUrl);
            this.m_ui5Node.setUrl(vUrl);
        }
    };
    this.addChildNode_CCBROWSERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCBROWSERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCBROWSERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.ccCallBackExecute = function(pValue)
    {
        this.getPage().callServer(this,this.getId()+".action","select("+pValue+")");
    }
    this.init_CCBROWSERElement();
}
CCBROWSERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["browser"] = function() { return new CCBROWSERElement(); }; 
