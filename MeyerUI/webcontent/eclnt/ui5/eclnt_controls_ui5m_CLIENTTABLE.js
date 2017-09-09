/* ############################################################################
 * CCUI5M_CLIENTTABLEElement
 * ############################################################################ */

function CCUI5M_CLIENTTABLEElement()
{
    this.m_data = null;
    this.m_config = null;
    this.m_numberOfColumns = 0;
    this.init_CCUI5M_CLIENTTABLEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_CLIENTTABLEElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_CLIENTTABLEElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_CLIENTTABLEElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_CLIENTTABLEElement;
        this.m_ccClassName = "CCUI5M_CLIENTTABLEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Table());
    };
    this.applyComponentData_CCUI5M_CLIENTTABLEElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["configxml"])
        {
            this.m_config = null;
            try
            {
                this.m_ui5Node.destroyColumns();
                var xml = this.m_attributes["configxml"];
                this.m_config = CCValueManager.convertXMLString2JSON(xml);
                // create columns
                var vColumns = this.m_config.clientgridconfig.column;
                this.m_numberOfColumns = vColumns.length;
                for (var i=0; i<vColumns.length; i++)
                {
                    var vColumn = vColumns[i];
                    var oColumn = new sap.m.Column();
                    var vWidth = CCValueManager.decodeSize(vColumn.width["#text"],"100px");
                    oColumn.setWidth(vWidth);
                    var vTitle = vColumn.title["#text"];
                    oColumn.setHeader(new sap.m.Label({text: vTitle}));
                    var vMinScreenWidth = CCValueManager.decodeSize(vColumn.minscreenwidth["#text"],null);
                    if (vMinScreenWidth != null) oColumn.setMinScreenWidth(vMinScreenWidth);
                    var vDemandPopin = CCValueManager.decodeBoolean(vColumn.demandpopin["#text"],false);
                    oColumn.setDemandPopin(vDemandPopin);
                    this.m_ui5Node.addColumn(oColumn);
                }
            }
            catch (exc)
            {
                CLog.logINF("Problem when processing CONFIGXML",exc);
            }
        }
        if (this.m_attributesChanged["modelxml"] == true)
        {
            this.m_data = null;
            try
            {
                var xml = this.m_attributes["modelxml"];
                this.m_data = CCValueManager.convertXMLString2JSON(xml);
                // create items
                this.m_ui5Node.destroyItems();
                var vRows = this.m_data.clientgrid.row;
                for (var i=0; i<vRows.length; i++)
                {
                    var vObj = vRows[i];
                    var cli = new sap.m.ColumnListItem();
                    this.m_ui5Node.addItem(cli);
                    for (var j=0; j<this.m_numberOfColumns; j++)
                    {
                        var s = vObj["value"+j];
                        if (s != null) s = s["#text"];
                        var vText = new sap.m.Text();
                        vText.setText(s);
                        cli.addCell(vText);
                    }
                }
            }
            catch (exc)
            {
                CLog.logINF("Problem when processing MODELXML",exc);
            }
        }
    };
    this.addChildNode_CCUI5M_CLIENTTABLEElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_CLIENTTABLEElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_CLIENTTABLEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCUI5M_CLIENTTABLEElement();
}
CCUI5M_CLIENTTABLEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_clienttable"] = function() { return new CCUI5M_CLIENTTABLEElement(); }; 
