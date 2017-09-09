/* ############################################################################
 * CCSPLITPANEElement
 * ############################################################################ */

function CCSPLITPANEElement()
{
    this.init_CCSPLITPANEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCSPLITPANEElement;
        this.applyComponentData = this.applyComponentData_CCSPLITPANEElement;
        this.reactOnEvent = this.reactOnEvent_CCSPLITPANEElement; 
        this.removeChildNode = this.removeChildNode_CCSPLITPANEElement;
        this.m_ccClassName = "CCSPLITPANEElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new sap.ui.commons.Splitter());
    };
    this.applyComponentData_CCSPLITPANEElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["orientation"] == true)
        {
            var vOrientation = this.m_attributes["orientation"];
            if (vOrientation == "vertical")
                this.m_ui5Node.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
            else
                this.m_ui5Node.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
        }
        if (this.m_attributesChanged["dividerlocation"] == true)
        {
            try
            {
                if (this.m_attributes["dividerlocation"] != null && this.m_attributes["dividerlocation"].indexOf("%") >= 0)
                {
                    this.m_ui5Node.setSplitterPosition(this.m_attributes["dividerlocation"]);
                }
            }
            catch (exc)
            {
                CLog.logERR("Problem setting dividerlocation",exc);
            }
        }
    };
    this.addChildNode_CCSPLITPANEElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (index == 0)
            this.m_ui5Node.addFirstPaneContent(ccControl.m_ui5Node);
        else
            this.m_ui5Node.addSecondPaneContent(ccControl.m_ui5Node);
    };
    this.removeChildNode_CCSPLITPANEElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.m_ui5Node.removeFirstPaneContent(ccControl.m_ui5Node);
        this.m_ui5Node.removeSecondPaneContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCSPLITPANEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.init_CCSPLITPANEElement();
}
CCSPLITPANEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["splitpane"] = function() { return new CCSPLITPANEElement(); }; 
