/* ############################################################################
 * CCUI5M_SEGMENTEDBUTTONElement
 * ############################################################################ */

function CCUI5M_SEGMENTEDBUTTONElement()
{
    this.init_CCUI5M_SEGMENTEDBUTTONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_SEGMENTEDBUTTONElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_SEGMENTEDBUTTONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_SEGMENTEDBUTTONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_SEGMENTEDBUTTONElement;
        this.m_ccClassName = "CCUI5M_SEGMENTEDBUTTONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.SegmentedButton());
        this.m_ui5Node.attachSelect(function(oEvent) {that.reactOnSelect(this,oEvent);});
    };
    this.applyComponentData_CCUI5M_SEGMENTEDBUTTONElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["selectedindex"])
        {
            try
            {
                var vIndex = CCValueManager.decodeNumber(this.m_attributes["selectedindex"],0);
                var vChild = this.getChildren()[vIndex];
                this.m_ui5Node.setSelectedButton(vChild.m_ui5Node);
            }
            catch (exc)
            {}
        }
    };
    this.addChildNode_CCUI5M_SEGMENTEDBUTTONElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        // this.m_ui5Node.insertButton(ccControl.m_ui5Node,index);  // reverse order is shown!
        this.m_ui5Node.addButton(ccControl.m_ui5Node);  // reverse order is shown!
    };
    this.removeChildNode_CCUI5M_SEGMENTEDBUTTONElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        this.m_ui5Node.removeButton(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_SEGMENTEDBUTTONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnSelect = function(pCaller,pEvent)
    {
        var vButtonId = pEvent.getParameter("id");
        var vIndex = -1;
        for (var i=0; i<this.getChildren().length; i++)
        {
            var vChild = this.getChildren()[i];
            if (vChild.m_ui5Node != null && vChild.m_ui5Node.getId() == vButtonId)
            {
                vIndex = i;
                break;
            }
        }
        if (i < 0) return;
        this.registerDirtyInformation(this.getId(),""+vIndex,false,true,null,false);
        this.getPage().callServer(this,this.getId()+".action","select()");
    };
    this.init_CCUI5M_SEGMENTEDBUTTONElement();
}
CCUI5M_SEGMENTEDBUTTONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_segmentedbutton"] = function() { return new CCUI5M_SEGMENTEDBUTTONElement(); }; 
