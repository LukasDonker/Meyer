/* ############################################################################
 * CCOUTLOOKBARElement
 * ############################################################################ */

function CCOUTLOOKBARElement()
{
    this.m_value = -1;
    this.m_firstApplyCCOUTLOOKBARElement = true;
    this.init_CCOUTLOOKBARElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCOUTLOOKBARElement;
        this.applyComponentData = this.applyComponentData_CCOUTLOOKBARElement;
        this.reactOnEvent = this.reactOnEvent_CCOUTLOOKBARElement; 
        this.removeChildNode = this.removeChildNode_CCOUTLOOKBARElement;
        this.m_ccClassName = "CCOUTLOOKBARElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new cc.VBox());
        this.m_ui5Node.setHeight("100%");
        this.m_ui5Node.setWidth("100%");
        this.m_ui5Node.setLayoutfixed(true);
    };
    this.applyComponentData_CCOUTLOOKBARElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["value"] || this.m_firstApplyCCOUTLOOKBARElement)
        {
            var vValue = CCValueManager.decodeNumber(this.m_attributes["value"],0);
            this._selectItem(vValue);
        }
        this.m_firstApplyCCOUTLOOKBARElement = false;
    };
    this.addChildNode_CCOUTLOOKBARElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
//        var vRow = new cc.HBox();
//        vRow.setFullWidth(true);
//        this.m_ui5Node.insertContent(vRow,index);
//        vRow.addContent(ccControl.m_ui5Node);
//        ccControl.m_ui5Node.ccRow = vRow;
        this.m_ui5Node.insertContent(ccControl.m_ui5Node,index);
//        if (ccControl.m_ccClassName == "CCOUTLOOKBARCONTENTElement")
//            vRow.ccHeight = "100%";
    };
    this.removeChildNode_CCOUTLOOKBARElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl);
//        this.removeContent(ccControl.ccRow);
        this.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCOUTLOOKBARElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this._rearrangeToValue = function()
    {
        var maxi = this.getChildren().length;
        // remove all buttons
        for (var i=(maxi-1); i>=0; i--)
        {
            var child = this.getChildren()[i];
            if (child.m_ccClassName == "CCOUTLOOKBARITEMElement")
            {
                this.m_ui5Node.removeContent(child.m_ui5Node);
            }
        }
        // re-add the buttons
        var buttonIndex = 0;
        for (var i=0; i<maxi;i++)
        {
            var child = this.getChildren()[i];
            if (child.m_ccClassName != "CCOUTLOOKBARITEMElement") continue;
            if (buttonIndex <= this.m_value)
            {
                this.m_ui5Node.insertContent(child.m_ui5Node,buttonIndex);
            }
            else
            {
                this.m_ui5Node.addContent(child.m_ui5Node);
            }
            buttonIndex += 1;
        }
    };
    this.notifyItemSelection = function(pItem)
    {
        var vIndex = this._indexOfItem(pItem);
        if (vIndex >= 0)
        {
            this._selectItem(vIndex);
            this.getPage().registerDirtyInformation(this.getId(),""+vIndex,null,false);
        }
    };
    this._selectItem = function(pIndex)
    {
        if (this.m_value == pIndex) return;
        this.m_value = pIndex;
        var vItems = this._findItems();
        for (var i=0; i<vItems.length; i++)
        {
            var vItem = vItems[i];
            vItem.setSelected(i==pIndex);
        }
        this._rearrangeToValue();
    };
    this._indexOfItem = function(pItem)
    {
        var vItems = this._findItems();
        for (var i=0; i<vItems.length; i++)
        {
            if (vItems[i] == pItem)
                return i;
        }
        return -1;
    };
    this._findItems = function()
    {
        var vResult = new Array();
        for (var i=0; i<this.getChildren().length; i++)
        {
            var vChild = this.getChildren()[i];
            if (vChild.m_ccClassName == "CCOUTLOOKBARITEMElement")
            {
                vResult.push(vChild);
            }
        }
        return vResult;
    };
    this.init_CCOUTLOOKBARElement();
}
CCOUTLOOKBARElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["outlookbar"] = function() { return new CCOUTLOOKBARElement(); }; 
