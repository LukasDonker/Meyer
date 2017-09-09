/* ############################################################################
 * CCUI5M_SELECTElement
 * ############################################################################ */

function CCUI5M_SELECTElement()
{
    this.init_CCUI5M_SELECTElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_SELECTElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_SELECTElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_SELECTElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_SELECTElement;
        this.m_ccClassName = "CCUI5M_SELECTElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Select());
        this.m_ui5Node.attachChange(function() {that.reactOnChange(this);});
    };
    this.applyComponentData_CCUI5M_SELECTElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["validvaluesbinding"] == true)
        {
            this.m_ui5Node.destroyItems();
            var vCSV = this.m_attributes["validvaluesbinding"];
            if (vCSV != null)
            {
                try
                {
                    var vValues = CCValueManager.decodeCSV(vCSV);
                    var vFirst = vValues[0];
                    if (vFirst == "v1")
                    {
                        {
                            var vItem = new sap.ui.core.ListItem();
                            vItem.setKey("ccnulllluncc");
                            vItem.setText("");
                            this.m_ui5Node.addItem(vItem);
                        }
                        for (var i=1; i<vValues.length; i+=4)
                        {
                            var vItem = new sap.ui.core.ListItem();
                            vItem.setKey(vValues[i]);
                            vItem.setText(vValues[i+1]);
                            this.m_ui5Node.addItem(vItem);
                        }
                    }
                }
                catch (exc)
                {
                    CLog.logERR("Problem when loading select items",exc);
                }
            }
        }
        if (this.m_attributesChanged["value"] == true)
        {
            var vKey = this.m_attributes["value"];
            this.m_ui5Node.setSelectedKey(vKey);
        }
        if (this.m_attributesChanged["autoadjustwidth"])
        {
            this.m_ui5Node.setAutoAdjustWidth(CCValueManager.decodeBoolean(this.m_attributes["autoadjustwidth"], false));
        }
        if (this.m_attributesChanged["icon"])
        {
            this.m_ui5Node.setIcon(this.getPage().updateUrl(this.m_attributes["icon"]));
        }
        if (this.m_attributesChanged["maxheight"])
        {
            this.m_ui5Node.setMaxHeight(CCValueManager.decodeSize(this.m_attributes["maxheight"], null));
        }
        if (this.m_attributesChanged["selecttype"])
        {
            this.m_ui5Node.setType(this.m_attributes["selecttype"]);
        }
    };
    this.addChildNode_CCUI5M_SELECTElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_SELECTElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_SELECTElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller)
    {
        this.registerDirtyInformation(this.getId(),this.m_ui5Node.getSelectedKey(),false,true,null,false);
    };
    this.init_CCUI5M_SELECTElement();
}
CCUI5M_SELECTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_select"] = function() { return new CCUI5M_SELECTElement(); }; 
