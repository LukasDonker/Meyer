/* ############################################################################
 * CCFIXGRIDROW
 * ############################################################################ */

function CCFIXGRIDROWElement()
{
    this.m_selected = false;
    this.m_index = -1;
    this.init_CCFIXGRIDROWElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCFIXGRIDROWElement;
        this.removeChildNode = this.removeChildNode_CCFIXGRIDROWElement;
        this.applyComponentData = this.applyComponentData_CCFIXGRIDROWElement;
        this.reactOnEvent = this.reactOnEvent_CCFIXGRIDROWElement; 
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCFIXGRIDROWElement";
        var vRow = new cc.GridTableRow();
        this.bindUI5Node(vRow);
    };
    this.applyComponentData_CCFIXGRIDROWElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        var vSelected = CCValueManager.decodeBoolean(this.m_attributes["selected"],false);
        if (vSelected != this.m_selected)
        {
            this.m_selected = vSelected;
            this.updateDrawSelection();
        }   
        this.m_index = CCValueManager.decodeNumber(this.m_attributes["index"],-1);
    };
    this.addChildNode_CCFIXGRIDROWElement = function(ccControl,index) 
    {
        this.addChildNode_CCControl(ccControl,index);
        var vCellNode = ccControl.getUI5Node(); 
        this.m_ui5Node.insertCell(vCellNode,index);
        if (vCellNode != null)
        {
            try { vCellNode.addStyleClass("ccFixgridcell"); } catch (exc) {}
            try { vCellNode.setWidth("100%"); } catch (exc) {}
            try { vCellNode.setHeight("100%"); } catch (exc) {}
        }
    };
    this.removeChildNode_CCFIXGRIDROWElement = function(ccControl) 
    {
        this.removeChildNode_CCControl(ccControl);
        var vCellNode = ccControl.getUI5Node(); 
        this.m_ui5Node.removeCell(vCellNode);
    };
    this.reactOnEvent_CCFIXGRIDROWElement = function(ccEvent) 
    {
        this.reactOnEvent_CCControl(ccEvent);
        var originalEvent = ccEvent.getEventObject();
        if (this.m_index >= 0 && this.m_selected == false)
        {
            if ((ccEvent.getEventId() == CCEvent_mousedown) || ccEvent.getEventId() == CCEvent_keyup)
            {
                this.getParent().reactOnRowSelection(this);
            }
        }
        if (ccEvent.getEventId() == CCEvent_dblclick)
        {
            this.getParent().reactOnRowExecute(this);
        }
    };
    this.updateDrawSelection = function()
    {
        if (this.m_selected == true)
            this.drawSelect();
        else
            this.drawDeselect();
    };
    this.drawSelect = function()
    {
        this.m_ui5Node.addStyleClass("ccRowselected");
    };
    this.drawDeselect = function()
    {
        this.m_ui5Node.removeStyleClass("ccRowselected");
    };
    this.updateChildWidth = function(ccControl,vWidth)
    {   
        if (vWidth == null) return null;
        ccControl.m_ui5Node.ccOriginalWidth = vWidth;
        return "100%";
//        if (vWidth.endsWith("%"))return "100%";
//        return vWidth;
    };
    this.getIndex = function()
    {
        return this.m_index;
    };
    this.reactOnColumnResized = function(pe,newWidth)
    {
        for (var i=0; i<this.getChildren().length; i++)
        {
            if (pe == this.getChildren()[i])
            {
                this.getParent().reactOnColumnResized(i,newWidth);
                break;
            }
        }
    }
    this.init_CCFIXGRIDROWElement();
}
CCFIXGRIDROWElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["fixgridrow"] = function() { return new CCFIXGRIDROWElement(); }; 

