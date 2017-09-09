/* ############################################################################
 * CCMENUElement
 * ############################################################################ */

function CCMENUElement()
{
    this.m_menu = null;
    this.init_CCMENUElement = function()
    {
        this.init_CCInvisibleControl();
        this.addChildNode = this.addChildNode_CCMENUElement;
        this.applyComponentData = this.applyComponentData_CCMENUElement;
        this.reactOnEvent = this.reactOnEvent_CCMENUElement; 
        this.removeChildNode = this.removeChildNode_CCMENUElement;
        this.m_ccClassName = "CCMENUElement";
        // --------------------------------------------------------------------
        this.m_menu = new sap.ui.commons.MenuItem();
        this.m_submenu = new sap.ui.commons.Menu();
        this.m_menu.setSubmenu(this.m_submenu);
    };
    this.applyComponentData_CCMENUElement = function() 
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
    };
    this.addChildNode_CCMENUElement = function(ccControl,index) 
    { 
        this.addChildNode_CCInvisibleControl(ccControl,index);
        this.m_submenu.insertItem(ccControl.m_menu,index);
    };
    this.removeChildNode_CCMENUElement = function(ccControl) 
    { 
        this.removeChildNode_CCInvisibleControl(ccControl); 
        this.m_submenu.removeItem(ccControl.m_menu);
    };
    this.reactOnEvent_CCMENUElement = function(ccEvent) { this.reactOnEvent_CCInvisibleControl(ccEvent); };
    this.init_CCMENUElement();
}
CCMENUElement.prototype = new CCInvisibleControl();
s_CCPageElement_ElementCreators["menu"] = function() { return new CCMENUElement(); }; 
