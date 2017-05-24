/* ############################################################################
 * CCTABBEDLINETABElement
 * ############################################################################ */

function CCTABBEDLINETABElement()
{
    this.m_selcted = false;
    this.init_CCTABBEDLINETABElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCTABBEDLINETABElement;
        this.applyComponentData = this.applyComponentData_CCTABBEDLINETABElement;
        this.reactOnEvent = this.reactOnEvent_CCTABBEDLINETABElement; 
        this.removeChildNode = this.removeChildNode_CCTABBEDLINETABElement;
        this.m_ccClassName = "CCTABBEDLINETABElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.ui.commons.Button());
        this.m_ui5Node.setLite(true);
        this.m_ui5Node.attachPress(function() {that.reactOnPress(this);});
        this._updateStyleClass();
    };
    this.applyComponentData_CCTABBEDLINETABElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_ui5Node.setText(this.m_attributes["text"]);
        }
    };
    this.addChildNode_CCTABBEDLINETABElement = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCTABBEDLINETABElement = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCTABBEDLINETABElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPress = function(pCaller)
    {
        this.updateSelected(true);
        this._updateStyleClass();
        if (this.getParent().reactOnTabSelection != null)
        {
            this.getParent().reactOnTabSelection(this);
        }
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.updateSelected = function(vSelected)
    {
        this.m_selcted = vSelected;
        this._updateStyleClass();
    };
    this._updateStyleClass = function()
    {
        if (this.m_selcted)
        {
            this.m_ui5Node.removeStyleClass("ccTabbedlinetabUnselected");
            this.m_ui5Node.addStyleClass("ccTabbedlinetabSelected");
        }
        else
        {
            this.m_ui5Node.removeStyleClass("ccTabbedlinetabSelected");
            this.m_ui5Node.addStyleClass("ccTabbedlinetabUnselected");
        }
    };
    this.init_CCTABBEDLINETABElement();
}
CCTABBEDLINETABElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["tabbedlinetab"] = function() { return new CCTABBEDLINETABElement(); }; 
