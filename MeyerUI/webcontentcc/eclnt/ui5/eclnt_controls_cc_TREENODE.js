/* ############################################################################
 * CCTREENODEElement
 * ############################################################################ */

function CCTREENODEElement()
{
    this.m_firstApplyCCTREENODEElement = true;
    this.init_CCTREENODEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCTREENODEElement;
        this.applyComponentData = this.applyComponentData_CCTREENODEElement;
        this.reactOnEvent = this.reactOnEvent_CCTREENODEElement; 
        this.removeChildNode = this.removeChildNode_CCTREENODEElement;
        this.m_ccClassName = "CCTREENODEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new cc.TreeNode());
        this.m_ui5Node.attachToggle(function() {that.reactOnToggle(this);});
    };
    this.applyComponentData_CCTREENODEElement = function() 
    { 
        if (this.m_firstApplyCCTREENODEElement == true)
        {
            this.m_ui5Node.setImage0(this.getPage().updateUrl("/eclntjsfserver/images/bullet_toggle_minus.png"));
            this.m_ui5Node.setImage1(this.getPage().updateUrl("/eclntjsfserver/images/bullet_toggle_plus.png"));
            this.m_ui5Node.setImage2(this.getPage().updateUrl("/eclntjsfserver/styles/defaultfx/fximages/nothing.png"));
            this.m_firstApplyCCTREENODEElement = false;
        }
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            var vText = this.m_attributes["text"];
            this.m_ui5Node.setText(vText);
        }
        if (this.m_attributesChanged["level"] == true)
        {
            var vLevel = CCValueManager.decodeNumber(this.m_attributes["level"],0);
            this.m_ui5Node.setLevel(vLevel);
        }
        if (this.m_attributesChanged["status"] == true)
        {
            var vStatus =  CCValueManager.decodeNumber(this.m_attributes["status"],0);;
            this.m_ui5Node.setStatus(vStatus);
        }
    };
    this.addChildNode_CCTREENODEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCTREENODEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCTREENODEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnToggle = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","toggle(toggle)");
    };
    this.init_CCTREENODEElement();
}
CCTREENODEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["treenode"] = function() { return new CCTREENODEElement(); }; 
