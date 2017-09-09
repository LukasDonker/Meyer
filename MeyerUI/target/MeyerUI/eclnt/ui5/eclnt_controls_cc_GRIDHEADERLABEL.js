/* ############################################################################
 * CCGRIDHEADERLABELElement
 * ############################################################################ */

function CCGRIDHEADERLABELElement()
{
    this.m_sortstatus = 0;
    this.m_sortreference = null;
    this.m_label = null;
    this.m_sizer = null;
    this.init_CCGRIDHEADERLABELElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCGRIDHEADERLABELElement;
        this.applyComponentData = this.applyComponentData_CCGRIDHEADERLABELElement;
        this.reactOnEvent = this.reactOnEvent_CCGRIDHEADERLABELElement; 
        this.removeChildNode = this.removeChildNode_CCGRIDHEADERLABELElement;
        this.m_ccClassName = "CCGRIDHEADERLABELElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new cc.HBox());
        this.m_label = new cc.SimpleLabel();
        this.m_label.setWidth("100%");
        this.m_label.setHeight("100%");
        this.m_label.ccOriginalWidth = "100%";
        this.m_label.addStyleClass("ccGridheaderlabelText");
        this.m_ui5Node.addContent(this.m_label);
        this.m_sizer = new cc.GridcolSizer();
        this.m_sizer.attachMoved(function() {that.reactOnSizerMoved(this);});
        this.m_ui5Node.addContent(this.m_sizer);
        this.m_ui5Node.addStyleClass("ccGridheaderlabel");
    };
    this.applyComponentData_CCGRIDHEADERLABELElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["text"] == true)
        {
            this.m_label.setText(this.m_attributes["text"]);
        }
        if (this.m_attributesChanged["sortstatus"] == true)
        {
            var vSortstatus = this.m_attributes["sortstatus"];
            this.m_ui5Node.removeStyleClass("ccSortdescending");
            this.m_ui5Node.removeStyleClass("ccSortascending");
            if (vSortstatus != null)
            {
                this.m_ui5Node.addStyleClass("ccSort" + vSortstatus);
            }
        }
        if (this.m_attributesChanged["sortreference"] == true)
        {
            this.m_sortreference = this.m_attributes["sortreference"];
        }
    };
    this.addChildNode_CCGRIDHEADERLABELElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,index+1);
        }
    };
    this.removeChildNode_CCGRIDHEADERLABELElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
        }
    };
    this.reactOnEvent_CCGRIDHEADERLABELElement = function(ccEvent) 
    { 
        this.reactOnEvent_CCControl(ccEvent); 
        if (ccEvent.getEventId() == CCEvent_mouseup)
        {
            var grid = this.getParent().getParent();
            grid.sendSort(this.m_sortreference);
        }
    };
    this.reactOnSizerMoved = function(pCaller)
    {
        var vMovedBy = pCaller.m_movedBy;
        var vCurrentSize = this.m_ui5Node.getDomRef().offsetWidth;
        var newSize = vCurrentSize + vMovedBy;
        if (newSize <= 10) newSize = 10;
        this.getParent().reactOnColumnResized(this,newSize);
    };
    this.init_CCGRIDHEADERLABELElement();
}
CCGRIDHEADERLABELElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["gridheaderlabel"] = function() { return new CCGRIDHEADERLABELElement(); }; 
