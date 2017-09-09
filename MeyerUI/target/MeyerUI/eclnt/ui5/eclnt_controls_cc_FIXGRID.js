/* ############################################################################
 * CCFIXGRIDElement
 * ############################################################################ */

function CCFIXGRIDElement()
{
    this.m_firstApplyFIXGRID = true;
    this.m_numberofheaderrows = 0;
    this.m_numberoffooterrows = 0;
    this.m_gridBodyScroller = null;
    this.m_gridBody = null;
    this.m_sbvisibleamount = 1;
    this.m_sbmaximum = 0;
    this.m_sbvalue = 0;
    this.m_rowsHiddenFromIndex = 1000;
    this.m_fixgridFirstApplyData = true;
    this.m_pseudoScrollbar = null;
    this.init_CCFIXGRIDElement = function()
    {
        this.init_CCStackedPane();
        this.addChildNode = this.addChildNode_CCFIXGRIDElement;
        this.applyComponentData = this.applyComponentData_CCFIXGRIDElement;
        // --------------------------------------------------------------------
        var that = this;
        this.m_ccClassName = "CCFIXGRIDElement";
        
        var vma = new cc.VBox();
        vma.setWidth("100%");
        vma.setLayoutfixed(true);
        
        var hma = new cc.HBox();
        vma.addContent(hma);
        hma.setLayoutfixed(true);
        
        this.m_gridBodyScroller = new cc.GridScrollPane();
        this.m_gridBodyScroller.setWidth("100%");
        this.m_gridBodyScroller.ccOriginalWidth = "100%";
        hma.addContent(this.m_gridBodyScroller);
        this.m_gridBody = new cc.GridTable();
        this.m_gridBodyScroller.addContent(this.m_gridBody);
        
        {
            {
//                var vvl = new cc.VBox();
//                vvl.setHeight("100%");
//                vvl.setWidth("16px");
//                vvl.addStyleClass("ccScrollbar");
//                this.m_iconLineUp = new sap.ui.commons.Button();
//                this.m_iconLineUp.setLite(true);
//                this.m_iconLineUp.setWidth("16px");
//                this.m_iconLineUp.attachPress(function() {that.reactOnLineUpPressed(this);});
//                vvl.addContent(this.m_iconLineUp);
                this.m_pseudoScrollbar = new cc.PseudoScrollbar();
                this.m_pseudoScrollbar.setHeight("100%");
                this.m_pseudoScrollbar.setWidth("16px");
                this.m_pseudoScrollbar.attachScrollPageDown(function() {that.reactOnPageDownPressed(this);});
                this.m_pseudoScrollbar.attachScrollPageUp(function() {that.reactOnPageUpPressed(this);});
                this.m_pseudoScrollbar.attachScrollLineDown(function() {that.reactOnLineDownPressed(this);});
                this.m_pseudoScrollbar.attachScrollLineUp(function() {that.reactOnLineUpPressed(this);});
                this.m_pseudoScrollbar.attachScrollTo(function() {that.reactOnScrollTo(this,this.m_newDataPosition);});
                this.m_pseudoScrollbar.ccHeight = "100%";
                this.m_pseudoScrollbar.ccExplicitTdIEHeight = "1px";
                hma.addContent(this.m_pseudoScrollbar);
//                vvl.addContent(this.m_pseudoScrollbar);
//                this.m_iconLineDown = new sap.ui.commons.Button();
//                this.m_iconLineDown.setLite(true);
//                this.m_iconLineDown.setWidth("16px");
//                this.m_iconLineDown.attachPress(function() {that.reactOnLineDownPressed(this);});
//                vvl.addContent(this.m_iconLineDown);
//                hma.addContent(vvl);
            }
        }
        this.bindUI5Node(vma);
    };
    this.applyComponentData_CCFIXGRIDElement = function() 
    { 
        if (this.m_fixgridFirstApplyData)
        {
            this.m_fixgridFirstApplyData = false;
//            this.m_iconLineUp.setIcon(this.getPage().updateUrl("/eclntjsfserver/images/scroll_lineup.png"));
//            this.m_iconLineDown.setIcon(this.getPage().updateUrl("/eclntjsfserver/images/scroll_linedown.png"));
        }
        this.applyComponentData_CCControl();
        this.m_numberofheaderrows = CCValueManager.decodeNumber(this.m_attributes["numberofheaderrows"],0);
        this.m_numberoffooterrows = CCValueManager.decodeNumber(this.m_attributes["numberoffooterrows"],0);
        this.m_sbmaximum = CCValueManager.decodeNumber(this.m_attributes["sbmaximum"],0);
        this.m_sbvisibleamount = CCValueManager.decodeNumber(this.m_attributes["sbvisibleamount"],0);
        this.m_sbvalue = CCValueManager.decodeNumber(this.m_attributes["sbvalue"],0);
        if (this.m_attributesChanged["verticalscrollmode"] == true)
        {
            if (this.m_attributes["verticalscrollmode"] == "hidden")
            {
                this.m_pseudoScrollbar.setWidth("0px");
            }
        }
        if (this.m_attributesChanged["columnwidths"] == true)
        {
            this._passWidthsCSV();
        }
        if (this.m_attributesChanged["columnsequence"] == true)
        {
            this.m_gridBody.setColumnsequence(this.m_attributes["columnsequence"]);
        }
        if (this.m_attributesChanged["rowheight"] == true)
        {
            this.m_gridBody.setRowheight(CCValueManager.decodeNumber(this.m_attributes["rowheight"],18));
        }
        if (this.m_attributesChanged["sbmaximum"])
        {
            if (this.m_sbvisibleamount > 0)
            {
                var vPages = Math.floor(this.m_sbmaximum / this.m_sbvisibleamount);
                var vRest = this.m_sbmaximum % this.m_sbvisibleamount;
                if (vRest > 0) vPages++;
            }
        }
        // visibility of rows..
        if (this.m_attributesChanged["sbvalue"] || this.m_attributesChanged["sbmaximum"])
        {
            this._hideEmptyRows();
            try
            {
//                this.m_iconLineUp.setEnabled(true);
//                this.m_iconLineDown.setEnabled(true);
//                if (this.m_sbvalue == 0 && this.m_sbmaximum > 0)
//                {
//                    this.m_iconLineUp.setEnabled(false);
//                }
//                if (this.m_sbvalue + this.m_sbvisibleamount + 1 > this.m_sbmaximum)
//                {
//                    this.m_iconLineDown.setEnabled(false);
//                }
            }
            catch (exc) {}
            try
            {
                this.m_pseudoScrollbar.setValue(this.m_sbvalue);
                this.m_pseudoScrollbar.setSize(this.m_sbvisibleamount);
                this.m_pseudoScrollbar.setMax(this.m_sbmaximum);
            }
            catch (exc) {}
        }
        this.m_firstApplyFIXGRID = false;
    };
    this._hideEmptyRows = function()
    {
        var vRows = this.m_sbmaximum - this.m_sbvalue;
        this.m_rowsHiddenFromIndex = this.m_sbvisibleamount - (this.m_sbvisibleamount - vRows);
        if (this.m_rowsHiddenFromIndex > this.m_sbvisibleamount)
            this.m_rowsHiddenFromIndex = this.m_sbvisibleamount
        for (var i=0; i<this.m_rowsHiddenFromIndex; i++)
        {
            this.m_gridBody.getRows()[this.m_numberofheaderrows + i].setHidden(false);
        }
        for (var i=this.m_rowsHiddenFromIndex; i<this.m_sbvisibleamount; i++)
        {
            this.m_gridBody.getRows()[this.m_numberofheaderrows + i].setHidden(true);
        }
    };
    this.addChildNode_CCFIXGRIDElement = function(ccControl,index) 
    {
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.getUI5Node() != null)
        {
            this.m_gridBody.insertRow(ccControl.getUI5Node(),this.calculateUI5ChildIndex(index));
        }
    };
    this.reactOnRowSelection = function(pRowElement)
    {
        // deselect all rows + select this row!
        var vMaxi = this.getChildren().length;
        var vRowIndex = -1;
        for (var i=0; i<vMaxi; i++)
        {
            var vChild = this.getChildren()[i];
            if (vChild != pRowElement) 
                vChild.drawDeselect();
            else
            {
                vChild.drawSelect();
                vRowIndex = i;
            }
        }
        // communicate to server
        vRowIndex = vRowIndex - this.m_numberofheaderrows;
        if (vRowIndex >= 0)
        {
            this.getPage().callServer(this,this.getId()+".actionbefore","rowselect("+vRowIndex+")");
        }
    };
    this.reactOnRowExecute = function(pRowElement)
    {
        var vMaxi = this.getChildren().length;
        var vRowIndex = -1;
        for (var i=0; i<vMaxi; i++)
        {
            var vChild = this.getChildren()[i];
            if (vChild == pRowElement) 
            {
                vRowIndex = i;
                break;
            }
        }
        // communicate to server
        vRowIndex = vRowIndex - this.m_numberofheaderrows;
        if (vRowIndex >= 0)
        {
            this.getPage().callServer(this,this.getId()+".action","rowexecute("+vRowIndex+")");
        }
    };
    this.sendSort = function(sortReference)
    {
        var shiftKeyPressed = false;
//        if (this.m_multicolumnsort == false)
//            shiftKeyPressed = false;
        var methodCall = "sort("+sortReference+","+shiftKeyPressed+")";
        this.getPage().callServer(this,this.getId()+".action",methodCall,true);
    };
    this.reactOnLineUpPressed = function(pCaller)
    {
        var vNewSbvalue = this.m_sbvalue - 1;
        if (vNewSbvalue < 0) return;
        this.getPage().callServer(this,this.getId()+".action","scroll("+vNewSbvalue+")");
    };
    this.reactOnLineDownPressed = function(pCaller)
    {
        var vNewSbvalue = this.m_sbvalue + 1;
        if (vNewSbvalue > this.m_sbvalue + this.m_sbvisibleamount) return;
        this.getPage().callServer(this,this.getId()+".action","scroll("+vNewSbvalue+")");
    };
    this.reactOnPageUpPressed = function(pCaller)
    {
        var vNewSbvalue = this.m_sbvalue - this.m_sbvisibleamount;
        if (vNewSbvalue < 0) vNewSbvalue = 0;
        this.getPage().callServer(this,this.getId()+".action","scroll("+vNewSbvalue+")");
    };
    this.reactOnPageDownPressed = function(pCaller)
    {
        var vNewSbvalue = this.m_sbvalue + this.m_sbvisibleamount;
        if (vNewSbvalue > this.m_sbvalue + this.m_sbvisibleamount) return;
        this.getPage().callServer(this,this.getId()+".action","scroll("+vNewSbvalue+")");
    };
    this.reactOnScrollTo = function(pCaller,pPosition)
    {
        this.getPage().callServer(this,this.getId()+".action","scroll("+pPosition+")");
    };
    this.reactOnColumnResized = function(colIndex,newWidth)
    {
        var widths = this.m_attributes["columnwidths"];
        var widthArray = CCValueManager.decodeCSV(widths);
        widthArray[colIndex] = newWidth;
        widths = CCValueManager.encodeCSV(widthArray);
        this.m_attributes["columnwidths"] = widths;
        this._passWidthsCSV();
        this.registerDirtyInformation(this.getId()+".modcolumnwidths",widths,false,true,null,false);
    };
    this._passWidthsCSV = function()
    {
        var widths = CCValueManager.decodeCSV(this.m_attributes["columnwidths"]);
        for (var i=0; i<widths.length; i++)
        {
            widths[i] = CCValueManager.decodeSize(widths[i],null);
        }
        this.m_gridBody.setColumns(widths.length);
        this.m_gridBody.setWidths(widths);
    };
    this.init_CCFIXGRIDElement();
}
CCFIXGRIDElement.prototype = new CCStackedPane();
s_CCPageElement_ElementCreators["fixgrid"] = function() { return new CCFIXGRIDElement(); }; 

