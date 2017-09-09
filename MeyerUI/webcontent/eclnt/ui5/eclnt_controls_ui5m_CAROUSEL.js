/* ############################################################################
 * CCUI5M_CAROUSELElement
 * ############################################################################ */

function CCUI5M_CAROUSELElement()
{
    this.init_CCUI5M_CAROUSELElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_CAROUSELElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_CAROUSELElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_CAROUSELElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_CAROUSELElement;
        this.m_ccClassName = "CCUI5M_CAROUSELElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Carousel());
        this.m_ui5Node.attachPageChanged(function() {that.reactOnPageChanged(this);});
    };
    this.applyComponentData_CCUI5M_CAROUSELElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["loop"] == true)
        {
            this.m_ui5Node.setLoop(CCValueManager.decodeBoolean(this.m_attributes["loop"],false));
        }
        if (this.m_attributesChanged["pageindicatorplacement"] == true)
        {
            this.m_ui5Node.setPageIndicatorPlacement(this.m_attributes["pageindicatorplacement"]);
        }
        if (this.m_attributesChanged["showpageindicator"] == true)
        {
            this.m_ui5Node.setShowPageIndicator(CCValueManager.decodeBoolean(this.m_attributes["loop"],true));
        }
        if (this.m_attributesChanged["activepageindex"] == true)
        {
            try
            {
                // pass active page index
                var vIndex = CCValueManager.decodeNumber(this.m_attributes["activepageindex"],0);
                vIndex = this.calculateUI5ChildIndex(vIndex);
                var currentActivePageIndex = CCValueManager.decodeNumber(this.m_attributes["activepageindex"],-1);
                if (currentActivePageIndex == vIndex)
                    return;
                var vPage = this.getChildren()[vIndex].getUI5Node();
                this.m_ui5Node.setActivePage(vPage);
                // call actionListener
                this.getPage().callServer(this,this.getId()+".action","select()");
            }
            catch (exc) 
            {
                CLog.logERR("Problem setting activepageindex",exc);
                alert(exc);
            }
        }
    };
    this.addChildNode_CCUI5M_CAROUSELElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertPage(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCUI5M_CAROUSELElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removePage(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_CAROUSELElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnPageChanged = function(pCaller)
    {
        var vPageId = this.m_ui5Node.getActivePage();
        var index = 0;
        for (var i=0; i<this.getChildren().length; i++)
        {
            var vElement = this.getChildren()[i];
            if (vElement.m_ui5Node == null)
                continue;
            if (vElement.m_ui5Node.getId() == vPageId)
                break;
            index++;
        }
        this.registerDirtyInformation(this.getId(),index+"",false,true,null,false);
        this.getPage().callServer(this,this.getId()+".action","select()");
    };
    this.init_CCUI5M_CAROUSELElement();
}
CCUI5M_CAROUSELElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_carousel"] = function() { return new CCUI5M_CAROUSELElement(); }; 

