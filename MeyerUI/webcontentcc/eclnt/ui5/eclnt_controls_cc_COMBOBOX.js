/* ############################################################################
 * CCCOMBOBOXElement
 * ############################################################################ */

function CCCOMBOBOXElement()
{
    this.init_CCCOMBOBOXElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCCOMBOBOXElement;
        this.applyComponentData = this.applyComponentData_CCCOMBOBOXElement;
        this.reactOnEvent = this.reactOnEvent_CCCOMBOBOXElement; 
        this.removeChildNode = this.removeChildNode_CCCOMBOBOXElement;
        this.m_ccClassName = "CCCOMBOBOXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.ComboBox());
        this.m_ui5Node.attachChange(function() {that.reactOnChange(this);});
    };
    this.applyComponentData_CCCOMBOBOXElement = function() 
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
                    CLog.logERR("Problem when loading combobox items",exc);
                }
            }
        }
        if (this.m_attributesChanged["value"] == true)
        {
            var vKey = this.m_attributes["value"];
            this.m_ui5Node.setSelectedKey(vKey);
        }
    };
    this.addChildNode_CCCOMBOBOXElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCCOMBOBOXElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCCOMBOBOXElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller)
    {
        this.registerDirtyInformation(this.getId(),this.m_ui5Node.getSelectedKey(),false,true,null,false);
    }
    this.init_CCCOMBOBOXElement();
}
CCCOMBOBOXElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["combobox"] = function() { return new CCCOMBOBOXElement(); }; 
