/* ############################################################################
 * CCUI5M_COMBOBOXElement
 * ############################################################################ */

function CCUI5M_COMBOBOXElement()
{
    this.init_CCUI5M_COMBOBOXElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_COMBOBOXElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_COMBOBOXElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_COMBOBOXElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_COMBOBOXElement;
        this.m_ccClassName = "CCUI5M_COMBOBOXElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.ComboBox());
        this.m_ui5Node.attachChange(function() {that.reactOnChange(this);});
        this.m_ui5Node.attachSelectionChange(function() {that.reactOnChange(this);});
    };
    this.applyComponentData_CCUI5M_COMBOBOXElement = function() 
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
    this.addChildNode_CCUI5M_COMBOBOXElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_COMBOBOXElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_COMBOBOXElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnChange = function(pCaller)
    {
        this.registerDirtyInformation(this.getId(),this.m_ui5Node.getSelectedKey(),false,true,null,false);
        if (this.m_ui5Node.getValue() != null &&
            this.m_ui5Node.getValue() != "" &&
            (this.m_ui5Node.getSelectedKey() == null || this.m_ui5Node.getSelectedKey() == ""))
        {
            this.m_ui5Node.setValueState("Error");
        }
        else
        {
            this.m_ui5Node.setValueState(this.m_attributes["valuestate"]);
        }
    };
    this.init_CCUI5M_COMBOBOXElement();
}
CCUI5M_COMBOBOXElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_combobox"] = function() { return new CCUI5M_COMBOBOXElement(); }; 
