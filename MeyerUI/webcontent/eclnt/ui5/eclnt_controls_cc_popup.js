/* ############################################################################
 * CCPageElementPopup
 * ############################################################################ */

function CCPageElementPopup()
{
    this.m_modal = true;
    this.m_dialog = null;
    this.m_dialogPane = null;
    this.init_CCPageElementPopup = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCPageElementPopup;
        this.removeChildNode = this.removeChildNode_CCPageElementPopup;
        this.destroy = this.destroy_CCPageElementPopup;
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCPageElementPopup";
    };
    
    this.applyComponentData_CCPageElementPopup = function() 
    { 
        this.applyComponentData_CCControl();
    }
    
    this.addChildNode_CCPageElementPopup = function(ccControl,index) 
    {
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.getUI5Node() != null)
        {
            this.m_dialog.insertContent(ccControl.getUI5Node(),index);
        }
    };
    this.removeChildNode_CCPageElementPopup = function(ccControl) 
    {
        var vUI5Node = ccControl.getUI5Node();
        this.removeChildNode_CCControl(ccControl);
        if (ccControl.getUI5Node() != null)
        {
            this.m_dialog.removeContent(vUI5Node);
        }
    };
    this.destroy_CCPageElementPopup = function()
    {
        this.destroy_CCControl();
    };
    
    this.init_CCPageElementPopup();
}
CCPageElementPopup.prototype = new CCControl();

function CCMODALPOPUPElement()
{
    this.m_applyCalledFirstTime = true;
    this.init_CCMODALPOPUPElement = function()
    {
        this.init_CCPageElementPopup();
        this.applyComponentData = this.applyComponentData_CCMODALPOPUPElement;
        this.destroy = this.destroy_CCMODALPOPUPElement;
        // --------------------------------------------------------------------
        var that = this;
        this.m_ccClassName = "CCMODALPOPUPElement";
        this.bindUI5Node(new sap.ui.commons.Label(this.getId()));
        this.m_ui5Node.setVisible(false);
        this.m_dialog = new sap.ui.commons.Dialog({modal:true});
        this.m_dialog.setTitle("");
        this.m_dialog.setShowCloseButton(false);
        this.m_dialog.open();
    };
    this.applyComponentData_CCMODALPOPUPElement = function() 
    { 
        this.applyComponentData_CCPageElementPopup();
        if (this.m_applyCalledFirstTime == true)
        {
            var undecorated = CCValueManager.decodeBoolean(this.m_attributes["undecorated"], false);
            if (undecorated == false)
            {
                var closeButton = new sap.ui.commons.Button();
                // closeButton.setText("Close");
                closeButton.setIcon("sap-icon://decline");
                var thatt = this;
                closeButton.attachPress(function() {thatt.reactOnClosePress(this);});
                this.m_dialog.addButton(closeButton);
            }
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_dialog.setTitle(this.m_attributes["title"]);
        }
        if (this.m_attributesChanged["width"] == true)
        {
            if (this.m_attributes["width"] > 0)
                this.m_dialog.setWidth(CCValueManager.decodeSize(this.m_attributes["width"],"400px"))
            else
                this.m_dialog.setWidth("300px");
        }
        if (this.m_attributesChanged["height"] == true)
        {
            if (this.m_attributes["height"] > 0)
            {
                var vHeight = CCValueManager.decodeNumber(this.m_attributes["height"],400);
                vHeight += 50;
                this.m_dialog.setHeight(vHeight+"px");
            }
        }
        this.m_applyCalledFirstTime = false;
    };
    this.destroy_CCMODALPOPUPElement = function()
    {
        this.destroy_CCPageElementPopup();
        this.m_dialog.close();
    };
    this.reactOnClosePress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","close(normal)");
    };
    this.init_CCMODALPOPUPElement();
}
CCMODALPOPUPElement.prototype = new CCPageElementPopup();
s_CCPageElement_ElementCreators["modalpopup"] = function() { return new CCMODALPOPUPElement(); }; 
s_CCPageElement_ElementCreators["modelesspopup"] = function() { return new CCMODALPOPUPElement(); }; 
