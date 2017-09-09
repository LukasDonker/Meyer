/* ############################################################################
 * CCUI5M_PAGEElement
 * ############################################################################ */

function CCUI5M_PAGEElement()
{
    this.init_CCUI5M_PAGEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_PAGEElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_PAGEElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_PAGEElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_PAGEElement;
        this.m_ccClassName = "CCUI5M_PAGEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Page());
        this.m_ui5Node.attachNavButtonPress(function() {that.reactOnNavButtonPress(this);});
    };
    this.applyComponentData_CCUI5M_PAGEElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["enablescrolling"] == true)
        {
            this.m_ui5Node.setEnableScrolling(CCValueManager.decodeBoolean(this.m_attributes["enablescrolling"],true));
        }
        if (this.m_attributesChanged["showheader"] == true)
        {
            this.m_ui5Node.setShowHeader(CCValueManager.decodeBoolean(this.m_attributes["showheader"],true));
        }
        if (this.m_attributesChanged["showfooter"] == true)
        {
            this.m_ui5Node.setShowFooter(CCValueManager.decodeBoolean(this.m_attributes["showfooter"],true));
        }
        if (this.m_attributesChanged["shownavbutton"] == true)
        {
            this.m_ui5Node.setShowNavButton(CCValueManager.decodeBoolean(this.m_attributes["shownavbutton"],false));
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_ui5Node.setTitle(this.m_attributes["title"]);
        }
    };
    this.addChildNode_CCUI5M_PAGEElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
//        if (ccControl.m_ui5Node != null)
//            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCUI5M_PAGEElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
//        if (ccControl.m_ui5Node != null)
//            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_PAGEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnNavButtonPress = function(pCaller)
    {
        this.getPage().callServer(this,this.getId()+".action","navbuttonpress()");
    }
    this.init_CCUI5M_PAGEElement();
}
CCUI5M_PAGEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_page"] = function() { return new CCUI5M_PAGEElement(); }; 
