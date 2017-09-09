/* ############################################################################
 * CCUI5M_STANDARDTILEElement
 * ############################################################################ */

function CCUI5M_STANDARDTILEElement()
{
    this.init_CCUI5M_STANDARDTILEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_STANDARDTILEElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_STANDARDTILEElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_STANDARDTILEElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_STANDARDTILEElement;
        this.m_ccClassName = "CCUI5M_STANDARDTILEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.StandardTile());
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
    };
    this.applyComponentData_CCUI5M_STANDARDTILEElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
        if (this.m_attributesChanged["number"] == true)
        {
            this.m_ui5Node.setNumber(this.m_attributes["number"]);
        }
        if (this.m_attributesChanged["numberunit"] == true)
        {
            this.m_ui5Node.setNumberUnit(this.m_attributes["numberunit"]);
        }
        if (this.m_attributesChanged["icon"] == true)
        {
            var vImage = this.m_attributes["icon"];
            vImage = this.getPage().updateUrl(vImage);
            this.m_ui5Node.setIcon(vImage);
        }
        if (this.m_attributesChanged["info"] == true)
        {
            this.m_ui5Node.setInfo(this.m_attributes["info"]);
        }
        if (this.m_attributesChanged["infostate"] == true)
        {
            this.m_ui5Node.setInfoState(this.m_attributes["infostate"]);
        }
    };
    this.addChildNode_CCUI5M_STANDARDTILEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_STANDARDTILEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_STANDARDTILEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    }
    this.init_CCUI5M_STANDARDTILEElement();
}
CCUI5M_STANDARDTILEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_standardtile"] = function() { return new CCUI5M_STANDARDTILEElement(); }; 

