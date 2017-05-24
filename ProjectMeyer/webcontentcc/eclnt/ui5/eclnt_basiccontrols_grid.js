/* ############################################################################
 * Own grid controls
 * ############################################################################ */

/* GRIDTABLE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.GridTable",
{
    metadata : 
    { 
        properties:
        {
            "background" : "string",
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
            "columns" : {type : "int", group : "Appearance", defaultValue : null},
            "widths" : {type : "sap.ui.core.CSSSize[]", group : "Appearance", defaultValue : null},
            "columnsequence" : "string",
            "rowheight" : {type : "int", group : "Appearance", defaultValue : 18}
        },
        defaultAggregation : "rows",
        aggregations: 
        { 
            rows: {type : "sap.ui.core.Control", multiple : true, singularName : "row"} 
        } 
    },
    renderer : function(oRm,oControl)
    {
        // if (oControl.getBackground() != null)  oRm.write("background-color:"+oControl.getBackground()+";")
        oRm.write("<table class='ccGridTableTable' cellpadding='0' cellspacing='0' ")
        oRm.writeControlData(oControl);
        oRm.write(" style='")
//        if (oControl.getWidth() != null) oRm.write("width:"+oControl.getWidth()+";"); 
        oRm.write("width:100%;"); 
        oRm.write("'>");
        oControl.m_columnSequenceArray = null; // accessed during row rendering
        if (oControl.getColumnsequence() != null)
        {
            oControl.m_columnSequenceArray = CCValueManager.decodeCSV(oControl.getColumnsequence());
        }
        var vChildren = oControl.getRows(); 
        for (var i = 0; i < vChildren.length; i++) 
        {    
            oRm.renderControl(vChildren[i]);
        }
        oRm.write("</table>");
    }
});

/* GRIDTABLEROW  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.GridTableRow",
{
    metadata : 
    { 
        properties:
        {
            "hidden" : {type : "boolean", bindable : "bindable"}
        },
        defaultAggregation : "cells",
        aggregations: 
        { 
            cells: {type : "sap.ui.core.Control", multiple : true, singularName : "cell"} 
        } 
    },
    renderer : function(oRm,oControl)
    {
        // if (oControl.getBackground() != null)  oRm.write("background-color:"+oControl.getBackground()+";")
        var vWidths = new Array();
        var vColumnSequenceArray = null;
        var vRowheight = 18;
        try { vWidths = oControl.getParent().getWidths(); } catch (exc) {}
        try { vColumnSequenceArray = oControl.getParent().m_columnSequenceArray; } catch (exc) {}
        try { vRowheight = oControl.getParent().getRowheight(); } catch (exc) {}
        var counter = 0;
        oRm.write("<tr ")
        oRm.writeControlData(oControl);
        oRm.addClass("ccGridTableRow");
        oRm.writeClasses(oControl);
        oRm.write(">");
        var vChildren = oControl.getCells(); 
        for (var iLoop = 0; iLoop < vChildren.length; iLoop++) 
        {    
            var i = iLoop;
            if (vColumnSequenceArray != null)
            {
                if (i >= vColumnSequenceArray.length)
                {
                    break;
                }
                i = vColumnSequenceArray[i];
                i = CCValueManager.decodeNumber(i,0);
            }
            oRm.write("<td class='ccGridTableCell' style='");
            try { oRm.write("width:"+vWidths[i])+";"; } catch (exc) {}
            oRm.write(";border-right-width: 1px;")
            oRm.write("border-bottom-width: 1px;")
            oRm.write("height:"+vRowheight+"px;");
            oRm.write("'>");
            oRm.renderControl(vChildren[i]);
            oRm.write("</td>");
        }
        oRm.write("</tr>");
    }
});
cc.GridTableRow.prototype.onAfterRendering = function() 
{
    this.m_renderedAsHidden = false;
    if (this.getHidden() == true)
        this.hideCellContent();
    else
        this.showCellContent();
};
cc.GridTableRow.setHidden = function(pValue)
{
    var vRow = this.$().context;
    if (vRow != null)
    {
        if (pValue == true)
            this.hideCellContent();
        else
            this.showCellContent();
        this.setProperty("hidden", sValue, true);
    }
    else
    {
        this.setProperty("hidden", sValue, false);
    }    
};
cc.GridTableRow.prototype.hideCellContent = function() 
{
    if (this.m_renderedAsHidden == true)
        return;
    var vTds = this.$().find(".ccGridTableCell");
    for (var i=0; i<vTds.length; i++)
    {
        vTds[i].style.visibility = "hidden";
    }
    this.m_renderedAsHidden = true;
};
cc.GridTableRow.prototype.showCellContent = function() 
{
    if (this.m_renderedAsHidden == undefined || this.m_renderedAsHidden == false)
        return;
    var vTds = this.$().find(".ccGridTableCell");
    for (var i=0; i<vTds.length; i++)
    {
        vTds[i].style.visibility = "";
    }
    this.m_renderedAsHidden = false;
};

/* GRIDSCROLLPANE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.GridScrollPane",
{
    metadata : 
    { 
        properties:
        {
            "background" : "string",
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
        },
        defaultAggregation : "content",
        aggregations: 
        { 
            content: {type : "sap.ui.core.Control", multiple : true, singularName : "content"} 
        } 
    },
    renderer : function(oRm,oControl)
    {
        // if (oControl.getBackground() != null)  oRm.write("background-color:"+oControl.getBackground()+";")
        oRm.write("<div class='ccGridscrollpane' ")
        oRm.writeControlData(oControl);
        oRm.write(">")
        var vChildren = oControl.getContent(); 
        for (var i = 0; i < vChildren.length; i++) 
        {    
            oRm.renderControl(vChildren[i]);
        }
        oRm.write("</div>");
    }
});

/* PSEUDOSCROLLBAR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.PseudoScrollbar",
{
    metadata : 
    { 
        properties:
        {
            "max" : "string",
            "value": "string",
            "size": "string",
            "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
        },
        events: 
        {
            "scrollPageUp": {},
            "scrollPageDown": {},
            "scrollLineUp": {},
            "scrollLineDown": {},
            "scrollTo": {}
        }    
    },
    renderer : function(oRm,oControl)
    {
        // if (oControl.getBackground() != null)  oRm.write("background-color:"+oControl.getBackground()+";")
        var vMax = CCValueManager.decodeNumber(oControl.getMax(),0);
        var vValue = CCValueManager.decodeNumber(oControl.getValue(),0);
        var vSize = CCValueManager.decodeNumber(oControl.getSize(),0);
        if (vMax == 0) return;
        if (vSize == 0) return;
        var vFactor = 100.0 / vMax;
        var vValue = Math.round(vValue * vFactor);
        var vSize = Math.round(vSize * vFactor);
        oRm.write("<table cellpadding='0' cellspacing='0' class='ccPseudoScrollbarTable' style='");
        if (oControl.getHeight() != null) oRm.write("height:"+oControl.getHeight()+";");
        if (oControl.getWidth() != null) oRm.write("width:"+oControl.getWidth()+";");
        oRm.write("' ");
        oRm.writeControlData(oControl);
        oRm.write(">")
        oRm.write("<tr><td class='ccPseudoScrollbarTopArrow'></td></tr>");
        oRm.write("<tr><td class='ccPseudoScrollbarInnerTableTd'><table class='ccPseudoScrollbarInnerTable' cellspacing='0' cellpadding='0'>");
        oRm.write("<tr><td class='ccPseudoScrollbarTop' style='height:"+vValue+"%;");
        if (vValue == 0) oRm.write("display:none;")
        oRm.write("'> </td></tr>");
        oRm.write("<tr><td class='ccPseudoScrollbarScroller' draggable='true' style='height:"+vSize+"%;");
        if (vValue == 0 && vSize >= 100) oRm.write("display:none;")
        oRm.write("'> </td></tr>");
        oRm.write("<tr><td class='ccPseudoScrollbarBottom' style='height:"+(100-vSize-vValue)+"%;");
        if (100-vSize-vValue <= 0) oRm.write("display:none;");
        oRm.write("'> </td></tr>");
        oRm.write("</table></td></tr>");
        oRm.write("<tr><td class='ccPseudoScrollbarBottomArrow'></td></tr>");
        oRm.write("</table>");
        CLog.logINF("SCROLLBARSIZING: " + vValue + "/" + vSize + "/" + (100-vSize-vValue));
    }
});
cc.PseudoScrollbar.prototype.onAfterRendering = function() 
{
    this.$().bind("mousedown", jQuery.proxy(this.handleScrollClick, this));     
    this.$().bind("dragstart", jQuery.proxy(this.handleDragStart, this));     
    // buffer controls for faster access in dragover processing
    this.m_innerTable = this.$().find(".ccPseudoScrollbarInnerTable")[0];
    this.m_top = this.$().find(".ccPseudoScrollbarTop")[0];
    this.m_scroller = this.$().find(".ccPseudoScrollbarScroller")[0];
    this.m_bottom = this.$().find(".ccPseudoScrollbarBottom")[0];
};
cc.PseudoScrollbar.prototype.onBeforeRendering = function() 
{
    this.$().unbind("mousedown", this.handleScrollClick);
    this.$().unbind("dragstart", this.handleDragStart);
};
cc.PseudoScrollbar.prototype.exit = function() 
{
    this.$().unbind("mousedown", this.handleScrollClick);
    this.$().unbind("dragstart", this.handleDragStart);
};
cc.PseudoScrollbar.prototype.handleDragStart = function(oEvent)
{
    // oEvent.originalEvent.dataTransfer.setData("ccpassback","ccpassback");
    if (CCJSUtils.isIE() == false)
    {
        oEvent.originalEvent.dataTransfer.setData("ccdragsend","dummy");
    }
    else
    {
        oEvent.originalEvent.dataTransfer.setData("Text","dummy");
    }
    this.m_scrollerStart = this.m_scroller.offsetTop;
    this.m_scrollerHeight = this.m_scroller.offsetHeight;
    CCDragDropManager.startDrag(this,oEvent,"passback","passback",false,false);
};
cc.PseudoScrollbar.prototype.handleScrollClick = function(oEvent) 
{
    var vName = oEvent.target.className;
    if (vName == "ccPseudoScrollbarTop")
    {
        this.fireScrollPageUp(this);
    }
    else if (vName == "ccPseudoScrollbarBottom")
    {
        this.fireScrollPageDown(this);
    }
    else if (vName == "ccPseudoScrollbarTopArrow")
    {
        this.fireScrollLineUp(this);
    }
    else if (vName == "ccPseudoScrollbarBottomArrow")
    {
        this.fireScrollLineDown(this);
    }
};
cc.PseudoScrollbar.prototype.ccPassBackDragOver = function(oDragEvent,oDragOverEvent)
{
    var vTableHeight = this.m_innerTable.clientHeight;
    
    var eventYDiff = oDragOverEvent.originalEvent.screenY - oDragEvent.originalEvent.screenY;
    var newYScroller = this.m_scrollerStart + eventYDiff;
    
    var newTopHeight = newYScroller;
    if (newTopHeight < 0) newTopHeight = 0;
    if (newTopHeight > vTableHeight - this.m_scrollerHeight)
        newTopHeight = vTableHeight - this.m_scrollerHeight;
    this.m_top.style.height = newTopHeight + "px";
    this.m_scroller.style.height = this.m_scrollerHeight + "px";
    this.m_bottom.style.height = "100%";
    this.m_top.style.display = "";
    this.m_scroller.style.display = "";
    this.m_bottom.style.display = "";
};
cc.PseudoScrollbar.prototype.ccPassBackDrop = function(oDragEvent,oDropEvent)
{
    var vTableHeight = this.m_innerTable.clientHeight;
    
    var eventYDiff = oDropEvent.originalEvent.screenY - oDragEvent.originalEvent.screenY;
    var newYScroller = this.m_scrollerStart + eventYDiff;
    var newTopHeight = newYScroller;
    if (newTopHeight < 0) newTopHeight = 0;
    var vAvailableHeight = vTableHeight - this.m_scrollerHeight;
    if (newTopHeight > vAvailableHeight)
        newTopHeight = vAvailableHeight;
    
    this.m_newDataPosition = Math.round((this.getMax() - this.getSize()) * (newTopHeight / vAvailableHeight));
    this.fireScrollTo(this);
};

/* GRIDCOLSIZER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.GridcolSizer",
{
    metadata : 
    { 
        properties:
        {
        },
        events: 
        {
            "moved": {}
        }    
    },
    renderer : function(oRm,oControl)
    {
        oRm.write("<div class='ccGridcolSizer' draggable='true' style='");
        oRm.write("' ");
        oRm.writeControlData(oControl);
        oRm.write(">")
        oRm.write("</div>");
    }
});
cc.GridcolSizer.prototype.onAfterRendering = function() 
{
    this.$().bind("dragstart", jQuery.proxy(this.handleDragStart, this));     
};
cc.GridcolSizer.prototype.onBeforeRendering = function() 
{
    this.$().unbind("dragstart", this.handleDragStart);
};
cc.GridcolSizer.prototype.exit = function() 
{
    this.$().unbind("dragstart", this.handleDragStart);
};
cc.GridcolSizer.prototype.handleDragStart = function(oEvent)
{
    if (CCJSUtils.isIE() == false)
    {
        oEvent.originalEvent.dataTransfer.setData("ccdragsend","dummy");
    }
    else
    {
        oEvent.originalEvent.dataTransfer.setData("Text","dummy");
    }
    CCDragDropManager.startDrag(this,oEvent,"passback","passback",true,false);
};
cc.GridcolSizer.prototype.ccPassBackDragOver = function(oDragEvent,oDragOverEvent)
{
};
cc.GridcolSizer.prototype.ccPassBackDrop = function(oDragEvent,oDropEvent)
{
    this.m_movedBy = oDropEvent.originalEvent.screenX - oDragEvent.originalEvent.screenX;
    this.fireMoved(this);
};

