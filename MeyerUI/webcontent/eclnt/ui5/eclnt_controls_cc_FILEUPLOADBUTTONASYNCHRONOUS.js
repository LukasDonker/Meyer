/* ############################################################################
 * CCFILEUPLOADBUTTONASYNCHRONOUSElement
 * ############################################################################ */

function CCFILEUPLOADBUTTONASYNCHRONOUSElement()
{
    this.init_CCFILEUPLOADBUTTONASYNCHRONOUSElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCFILEUPLOADBUTTONASYNCHRONOUSElement;
        this.applyComponentData = this.applyComponentData_CCFILEUPLOADBUTTONASYNCHRONOUSElement;
        this.reactOnEvent = this.reactOnEvent_CCFILEUPLOADBUTTONASYNCHRONOUSElement; 
        this.removeChildNode = this.removeChildNode_CCFILEUPLOADBUTTONASYNCHRONOUSElement;
        this.m_ccClassName = "CCFILEUPLOADBUTTONASYNCHRONOUSElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.FileUploader());
        this.m_ui5Node.setButtonOnly(true);
        this.m_ui5Node.setUploadOnChange(true);
        this.m_ui5Node.attachUploadComplete(function() {that.reactOnUploadComplete(this);});
    };
    this.applyComponentData_CCFILEUPLOADBUTTONASYNCHRONOUSElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setButtonText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["asynchronousuploadurl"] == true)
        {
            vUrl = this.getPage().updateUrl(this.m_attributes["asynchronousuploadurl"]);
            this.m_ui5Node.setUploadUrl(vUrl);
        }
    };
    this.addChildNode_CCFILEUPLOADBUTTONASYNCHRONOUSElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCFILEUPLOADBUTTONASYNCHRONOUSElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCFILEUPLOADBUTTONASYNCHRONOUSElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnUploadComplete = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","uploadasynchronousfinished()");
    };
    this.init_CCFILEUPLOADBUTTONASYNCHRONOUSElement();
}
CCFILEUPLOADBUTTONASYNCHRONOUSElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["fileuploadlinkasynchronous"] = function() { return new CCFILEUPLOADBUTTONASYNCHRONOUSElement(); }; 
s_CCPageElement_ElementCreators["fileuploadbuttonasynchronous"] = function() { return new CCFILEUPLOADBUTTONASYNCHRONOUSElement(); }; 
