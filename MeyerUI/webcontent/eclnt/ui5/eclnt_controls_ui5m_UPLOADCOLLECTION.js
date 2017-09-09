/* ############################################################################
 * CCUI5M_UPLOADCOLLECTIONElement
 * ############################################################################ */

function CCUI5M_UPLOADCOLLECTIONElement()
{
    this.init_CCUI5M_UPLOADCOLLECTIONElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_UPLOADCOLLECTIONElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_UPLOADCOLLECTIONElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_UPLOADCOLLECTIONElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_UPLOADCOLLECTIONElement;
        this.m_ccClassName = "CCUI5M_UPLOADCOLLECTIONElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.UploadCollection());
        this.m_ui5Node.setMultiple(false);
        this.m_ui5Node.attachUploadComplete(function() {that.reactOnUploadComplete(this);});
    };
    this.applyComponentData_CCUI5M_UPLOADCOLLECTIONElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["uploadurl"] == true)
        {
            var sUrl = this.m_attributes["uploadurl"]+"ui5";
            var sIndex = sUrl.indexOf(".ccupload");
            if (sIndex >= 0)
            {
                sUrl = sUrl.substring(0,sIndex+9) + "ui5" + sUrl.substring(sIndex+9);
            }
            this.m_ui5Node.setUploadUrl(this.getPage().updateUrl(sUrl));
        }
        if (this.m_attributesChanged["multiple"] == true)
        {
            this.m_ui5Node.setMultiple(CCValueManager.decodeBoolean(
                    this.m_attributes["multiple"], attbool));
        }
    };
    this.addChildNode_CCUI5M_UPLOADCOLLECTIONElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5M_UPLOADCOLLECTIONElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5M_UPLOADCOLLECTIONElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnUploadComplete = function(pCaller)
    {
        // alert("Upload complete!!!");
        CCJSUtils.invokeLater(this,this._resetItems,new Array(),200);
        // CCJSUtils.invokeLater(this,this._clearItems,new Array(),2000);
    };
    this._resetItems = function()
    {
        var items = this.m_ui5Node.getItems();
        for (var i=0; i<items.length; i++)
        {
            var item = items[i];
            item.setVisibleDelete(false);
            item.setVisibleEdit(false);
        }
        alert("RESET");
    };
    this._clearItems = function()
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.init_CCUI5M_UPLOADCOLLECTIONElement();
}
CCUI5M_UPLOADCOLLECTIONElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_uploadcollection"] = function() { return new CCUI5M_UPLOADCOLLECTIONElement(); }; 
