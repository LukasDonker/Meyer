/* ############################################################################
 * CCUI5U_FILEUPLOADERElement
 * ############################################################################ */

function CCUI5U_FILEUPLOADERElement()
{
    this.init_CCUI5U_FILEUPLOADERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5U_FILEUPLOADERElement;
        this.applyComponentData = this.applyComponentData_CCUI5U_FILEUPLOADERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5U_FILEUPLOADERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5U_FILEUPLOADERElement;
        this.m_ccClassName = "CCUI5U_FILEUPLOADERElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.unified.FileUploader());
        this.m_ui5Node.setButtonOnly(true);
        this.m_ui5Node.setMultiple(false);
        this.m_ui5Node.setUploadOnChange(true);
        this.m_ui5Node.attachUploadComplete(function() {that.reactOnUploadComplete(this);});
        this.m_ui5Node.attachTypeMissmatch(function() {that._outputMessage("Type mismatch - the extension of the selected file is not valid.");});
        this.m_ui5Node.attachFileSizeExceed(function() {that._outputMessage("File is too big - the maximum file size is exceeded.");});
        this.m_ui5Node.attachFilenameLengthExceed(function() {that._outputMessage("File name is too long - the maximum file name length is exceeded.");});
        this.m_ui5Node.attachUploadProgress(function() {that._outputMessage("Upload is processed...");});
        this.m_ui5Node.attachUploadAborted(function() {that._outputMessage("Upload was aborted.");});
    };
    this.applyComponentData_CCUI5U_FILEUPLOADERElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["buttontext"] == true)
        {
            this.m_ui5Node.setButtonText(this.m_attributes["buttontext"]);
        }
        if (this.m_attributesChanged["icon"] == true)
        {
            this.m_ui5Node.setIcon(this.getPage().updateUrl(
                    this.m_attributes["icon"]));
        }
        if (this.m_attributesChanged["iconhovered"] == true)
        {
            this.m_ui5Node.setIconHovered(this.getPage().updateUrl(
                    this.m_attributes["iconhovered"]));
        }
        if (this.m_attributesChanged["iconselected"] == true)
        {
            this.m_ui5Node.setIconSelected(this.getPage().updateUrl(
                    this.m_attributes["iconselected"]));
        }
        if (this.m_attributesChanged["maximumfilenamelength"] == true)
        {
            this.m_ui5Node.setMaximumFilenameLength(CCValueManager.decodeNumber(this.m_attributes["maximumfilenamelength"]),-1);
        }
        if (this.m_attributesChanged["maximumfilesize"] == true)
        {
            this.m_ui5Node.setMaximumFileSize(CCValueManager.decodeNumber(this.m_attributes["maximumfilesize"]),-1);
        }
        if (this.m_attributesChanged["uploadurl"] == true)
        {
            this.m_ui5Node.setUploadUrl(this.getPage().updateUrl(
                    this.m_attributes["uploadurl"]));
        }
        if (this.m_attributesChanged["filetype"] == true)
        {
            var extensions = null;
            if (this.m_attributes["filetype"] != null)
            {
                extensions = CCValueManager.decodeCSV(this.m_attributes["filetype"]);
            }
            this.m_ui5Node.setFileType(extensions);
        }
    };
    this.addChildNode_CCUI5U_FILEUPLOADERElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCUI5U_FILEUPLOADERElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCUI5U_FILEUPLOADERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnUploadComplete = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","uploadasynchronousfinished()");
        this._outputMessage("Upload finished.");
    };
    this._outputMessage = function(msg)
    {
        sap.m.MessageToast.show(msg);    
    };
    this.init_CCUI5U_FILEUPLOADERElement();
}
CCUI5U_FILEUPLOADERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5u_fileuploader"] = function() { return new CCUI5U_FILEUPLOADERElement(); }; 
