/* ############################################################################
 * CCMENUITEMElement
 * ############################################################################ */

function CCMENUITEMElement()
{
    this.m_command = null;
    this.init_CCMENUITEMElement = function()
    {
        this.init_CCInvisibleControl();
        this.addChildNode = this.addChildNode_CCMENUITEMElement;
        this.applyComponentData = this.applyComponentData_CCMENUITEMElement;
        this.reactOnEvent = this.reactOnEvent_CCMENUITEMElement; 
        this.removeChildNode = this.removeChildNode_CCMENUITEMElement;
        this.m_ccClassName = "CCMENUITEMElement";
        // --------------------------------------------------------------------
        var that = this;
        this.m_menu = new sap.ui.commons.MenuItem();
        this.m_menu.attachSelect(function() {that.reactOnSelect(this);});
    };
    this.applyComponentData_CCMENUITEMElement = function() 
    { 
        this.applyComponentData_CCInvisibleControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_menu.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["image"] == true)
        {
            var vImage = this.m_attributes["image"];
            vImage = this.getPage().updateUrl(vImage);
            this.m_menu.setIcon(vImage);
        }
        this.m_command = this.m_attributes["command"];
    };
    this.addChildNode_CCMENUITEMElement = function(ccControl,index) { this.addChildNode_CCInvisibleControl(ccControl,index); };
    this.removeChildNode_CCMENUITEMElement = function(ccControl) { this.removeChildNode_CCInvisibleControl(ccControl); };
    this.reactOnEvent_CCMENUITEMElement = function(ccEvent) { this.reactOnEvent_CCInvisibleControl(ccEvent); };
    this.reactOnSelect = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
        // if (this.m_command != null)
        {
            var vmc = this.findMenuContainer();
            if (vmc.m_ccClassName == "CCPOPUPMENUElement")
            {
                vmc.sendCommand(this.m_command);
            }
        }
    };
    this.findMenuContainer = function()
    {
        var parent = this.getParent();
        while (true)
        {
            if (parent == null) return null;
            if (parent.m_ccClassName == "CCPOPUPMENUElement") return parent;
            if (parent.m_ccClassName == "CCMENUBARElement") return parent;
            if (parent.m_ccClassName == "CCBUTTONMENUElement") return parent;
            if (parent.m_ccClassName == "CCMENUElement")
            {
                parent = parent.getParent(); continue;
            }
            return null;
        }
    };
    this.init_CCMENUITEMElement();
}
CCMENUITEMElement.prototype = new CCInvisibleControl();
s_CCPageElement_ElementCreators["menuitem"] = function() { return new CCMENUITEMElement(); }; 
