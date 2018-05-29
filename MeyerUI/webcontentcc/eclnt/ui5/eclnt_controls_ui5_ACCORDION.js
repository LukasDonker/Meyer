/* ############################################################################
 * CCUI5_ACCORDIONElement
 * ############################################################################ */

function CCUI5_ACCORDIONElement()
{
    this.init_CCUI5_ACCORDIONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5_ACCORDIONElement;
        this.applyComponentData = this.applyComponentData_CCUI5_ACCORDIONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5_ACCORDIONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5_ACCORDIONElement;
        this.m_ccClassName = "CCUI5_ACCORDIONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.Accordion());
    };
    this.applyComponentData_CCUI5_ACCORDIONElement = function() 
    { 
        this.applyComponentData_CCControl();
//        if (this.m_attributesChanged["openedsectionsid"])
//        {
//            this.m_ui5Node.setOpenedSectionsId(this.m_attributes["openedsectionsid"]);
//        }
        if (this.m_attributesChanged["openedsectionsindex"])
        {
            CCJSUtils.invokeLater(this,this.openSectionWithIndex,null);
        }
    };
    this.addChildNode_CCUI5_ACCORDIONElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertSection(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCUI5_ACCORDIONElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeSection(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCUI5_ACCORDIONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.openSectionWithIndex = function()
    {
        var vIndex = CCValueManager.decodeNumber(this.m_attributes["openedsectionsindex"],0);
        vIndex = this.calculateUI5ChildIndex(vIndex);
        try
        {
            var vChild = this.getChildren()[vIndex]; 
            var vId = vChild.m_ui5Node.getId();
            this.m_ui5Node.setOpenedSectionsId(vId);
            this.m_ui5Node.openSection(vId);
        }
        catch (exc)
        {
            CLog.logINF("Problem when openeing section " + vIndex,exc);
        }
    };
    this.init_CCUI5_ACCORDIONElement();
}
CCUI5_ACCORDIONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5_accordion"] = function() { return new CCUI5_ACCORDIONElement(); }; 
