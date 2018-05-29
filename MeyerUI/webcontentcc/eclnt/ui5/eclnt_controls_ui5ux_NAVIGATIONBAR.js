/* ############################################################################
 * CCUI5UX_NAVIGATIONBARElement
 * ############################################################################ */

function CCUI5UX_NAVIGATIONBARElement()
{
    this.init_CCUI5UX_NAVIGATIONBARElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5UX_NAVIGATIONBARElement;
        this.applyComponentData = this.applyComponentData_CCUI5UX_NAVIGATIONBARElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5UX_NAVIGATIONBARElement; 
        this.removeChildNode = this.removeChildNode_CCUI5UX_NAVIGATIONBARElement;
        this.m_ccClassName = "CCUI5UX_NAVIGATIONBARElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.ux3.NavigationBar());
        this.m_ui5Node.attachSelect(function(oEvent) {that.reactOnSelect(this,oEvent);});
    };
    this.applyComponentData_CCUI5UX_NAVIGATIONBARElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["toplevelvariant"] == true)
        {
            this.m_ui5Node.setToplevelVariant(CCValueManager.decodeBoolean(
                    this.m_attributes["toplevelvariant"], false));
        }
        if (this.m_attributesChanged["selectedkey"] == true)
        {
            var vItem = this._findItemForKey(this.m_attributes["selectedkey"]);
            if (vItem != null)
            {
                this.m_ui5Node.setSelectedItem(vItem.m_ui5Node);
            }
        }
    };
    this.addChildNode_CCUI5UX_NAVIGATIONBARElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertItem(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5UX_NAVIGATIONBARElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeItem(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5UX_NAVIGATIONBARElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelect = function(pCaller,pEvent)
    {
        var vKey = pEvent.getParameter("item").getKey(); 
        this.registerDirtyInformation(this.getId(),vKey,false,true,null,false);
        this.m_attributes["selectedkey"] = vKey;
        this.getPage().callServer(this,this.getId()+".action","select()");
    };
    this._findItemForKey = function(pKey)
    {
        var children = this.getChildren();
        for (var i=0; i<children.length; i++)
        {
            var child = children[i];
            if (child.m_ui5Node == null) continue;
            if (child.m_ui5Node.getKey != null && child.m_ui5Node.getKey() == pKey)
            {
                return child;
            }
        }
        return null;
    };
    this.init_CCUI5UX_NAVIGATIONBARElement();
}
CCUI5UX_NAVIGATIONBARElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5ux_navigationbar"] = function() { return new CCUI5UX_NAVIGATIONBARElement(); }; 
