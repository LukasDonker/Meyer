/* ############################################################################
 * CCUI5_CLIENTTABLEElement
 * ############################################################################ */

function CCUI5_CLIENTTABLEElement()
{
    this.init_CCUI5_CLIENTTABLEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_CLIENTTABLEElement;
        this.applyComponentData = this.applyComponentData_CCUI5_CLIENTTABLEElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_CLIENTTABLEElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_CLIENTTABLEElement;
        this.m_ccClassName = "CCUI5_CLIENTTABLEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.table.Table());
    };
    this.applyComponentData_CCUI5_CLIENTTABLEElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["visiblerowcount"] == true)
        {
            this.m_ui5Node.setVisibleRowCount(CCValueManager.decodeNumber(this.m_attributes["visiblerowcount"],5));
        }
        if (this.m_attributesChanged["modelxml"] == true)
        {
            var xml = this.m_attributes["modelxml"];
            var vModel = new sap.ui.model.xml.XMLModel();
            vModel.setXML(xml);
            this.m_ui5Node.setModel(vModel);
            this.m_ui5Node.bindRows("/row/");
        }
        if (this.m_attributesChanged["titles"] || this.m_attributesChanged["widths"])
        {
            this.m_ui5Node.destroyColumns();
            var vTitleArray = CCValueManager.decodeCSV(this.m_attributes["titles"]);
            var vWidthArray = CCValueManager.decodeCSV(this.m_attributes["widths"]);
            for (var i=0; i<vTitleArray.length; i++)
            {
                var vWidth = CCValueManager.decodeSize(vWidthArray[i],"100px");
                var vProp = "value" + i;
                var oColumn = new sap.ui.table.Column({
                    label: new sap.ui.commons.Label({text: vTitleArray[i]}),
                    template: new sap.ui.commons.TextView().bindProperty("text", vProp),
                    sortProperty: vProp,
                    filterProperty: vProp,
                    width: vWidth});
                this.m_ui5Node.addColumn(oColumn);
            }
        }
    };
    this.addChildNode_CCUI5_CLIENTTABLEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5_CLIENTTABLEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5_CLIENTTABLEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5_CLIENTTABLEElement();
}
CCUI5_CLIENTTABLEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_clienttable"] = function() { return new CCUI5_CLIENTTABLEElement(); }; 
