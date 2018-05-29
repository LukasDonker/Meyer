

/* ############################################################################
 * CCUI5_HORIZONTALLAYOUTElement
 * ############################################################################ */

function CCUI5_HORIZONTALLAYOUTElement()
{
    this.init_CCUI5_HORIZONTALLAYOUTElement = function()
    {
        this.init_CCContainerControl();
        this.applyComponentData = this.applyComponentData_CCUI5_HORIZONTALLAYOUTElement;
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCUI5_HORIZONTALLAYOUTElement";
        this.bindUI5Node(new sap.ui.layout.HorizontalLayout());
    };
    this.applyComponentData_CCUI5_HORIZONTALLAYOUTElement = function()
    {
        this.applyComponentData_CCContainerControl();
        if (this.m_attributesChanged["allowwrapping"] == true)
        {
            var vBool = CCValueManager.decodeBoolean(this.m_attributes["text"],false);
            this.m_ui5Node.setText(vBool);
        }
    }
    this.init_CCUI5_HORIZONTALLAYOUTElement();
}
CCUI5_HORIZONTALLAYOUTElement.prototype = new CCContainerControl();
s_CCPageElement_ElementCreators["ui5_horizontallayout"] = function() { return new CCUI5_HORIZONTALLAYOUTElement(); }; 

/* ############################################################################
 * CCUI5_VERTICALLAYOUTElement
 * ############################################################################ */

function CCUI5_VERTICALLAYOUTElement()
{
    this.init_CCUI5_VERTICALLAYOUTElement = function()
    {
        this.init_CCContainerControl();
        this.applyComponentData = this.applyComponentData_CCUI5_VERTICALLAYOUTElement;
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCUI5_VERTICALLAYOUTElement";
        this.bindUI5Node(new sap.ui.layout.VerticalLayout());
    };
    this.applyComponentData_CCUI5_VERTICALLAYOUTElement = function()
    {
        this.applyComponentData_CCContainerControl();
        if (this.m_attributesChanged["allowwrapping"] == true)
        {
            var vBool = CCValueManager.decodeBoolean(this.m_attributes["text"],false);
            this.m_ui5Node.setText(vBool);
        }
    }
    this.init_CCUI5_VERTICALLAYOUTElement();
}
CCUI5_VERTICALLAYOUTElement.prototype = new CCContainerControl();
s_CCPageElement_ElementCreators["ui5_verticallayout"] = function() { return new CCUI5_VERTICALLAYOUTElement(); }; 

/* ############################################################################
 * CCUI5M_BUTTONElement
 * ############################################################################ */

function CCUI5M_BUTTONElement()
{
    this.init_CCUI5M_BUTTONElement = function()
    {
        this.init_CCControl();
        this.applyComponentData = this.applyComponentData_CCUI5M_BUTTONElement;
        this.m_ccClassName = "CCUI5M_BUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        var vButton = new sap.m.Button();
        vButton.attachPress(function() {that.reactOnPress(this);});
        this.bindUI5Node(vButton);
    };
    this.applyComponentData_CCUI5M_BUTTONElement = function()
    {
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["buttontype"] == true)
        {
            this.m_ui5Node.setType(this.m_attributes["buttontype"]);
        }
        if (this.m_attributesChanged["icon"] == true)
        {
            var vImage = this.m_page.updateUrl(this.m_attributes["icon"]);
            this.m_ui5Node.setIcon(vImage);
        }
        if (this.m_attributesChanged["activeicon"] == true)
        {
            var vImage = this.m_page.updateUrl(this.m_attributes["activeicon"]);
            this.m_ui5Node.setActiveIcon(vImage);
        }
    };
    this.reactOnPress = function(pCaller)
    {
        CLog.logINF("reactOnPress, this   : " + this);
        CLog.logINF("reactOnPress, pCaller: " + pCaller);
        CLog.logINF("reactOnPress, id     : " + this.getId());
        CLog.logINF("reactOnPress, page   : " + this.getPage());
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    }
    this.init_CCUI5M_BUTTONElement();
}
CCUI5M_BUTTONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_button"] = function() { return new CCUI5M_BUTTONElement(); }; 

