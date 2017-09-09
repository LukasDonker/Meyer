/* ############################################################################
 * Own controls
 * ############################################################################ */

/* TEXTFIELD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.commons.TextField.extend("ccext.TextField",
{
    metadata : 
    { 
        properties:
        {
            "background" : { type : "string", bindable : "bindable" }
        }
    },
    renderer :
    {
        renderInnerAttributes : function(oRm, oControl) 
        {
            if (oControl.getBackground() != null)
            {
                oRm.addStyle('background-color', oControl.getBackground());  
            }
        }        
    }
});
ccext.TextField.prototype.setBackground = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.$().context.style.backgroundColor = sValue;
        this.setProperty("background", sValue, true);
    }
    else
    {
        this.setProperty("background", sValue, false);
    }    
}

/* STACKPANE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.StackPane",
{
    metadata : 
    { 
        properties:
        {
            "comment" : "string",
            "visible" : {type : "boolean", group : "Appearance", defaultValue : true}
        },
        defaultAggregation : "content",
        aggregations: 
        { 
            content: {type : "sap.ui.core.Control", multiple : true, singularName : "content"} 
        } 
    },
    renderer : function(oRm,oControl)
    {
        if (!oControl.getVisible()) return;
        oRm.write("<div style='-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;position:absolute;left:0px;top:0px;height:100%;width:100%' ccComment='"+oControl.getComment()+"' ");
        oRm.writeControlData(oControl);
        oRm.write(">");
        var vChildren = oControl.getContent(); 
        for (var i = 0; i < vChildren.length; i++) 
        {    
            oRm.renderControl(vChildren[i]);
        }
        oRm.write("</div>");
    }
});

/* STACKPANEWITHDD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
cc.StackPane.extend("cc.StackPaneWithDD",
{
    metadata : 
    { 
    },
    renderer : function(oRm,oControl)
    {
        if (!oControl.getVisible()) return;
        oRm.write("<div style='height:100%;width:100%;overflow:hidden' ccComment='"+oControl.getComment()+"' ");
        oRm.writeControlData(oControl);
        oRm.write(">");
        oRm.write("<div class='ccStackPaneDDVerticalLine' style='display:none'></div>");
        oRm.write("<div class='ccStackPaneDDHorizontalLine' style='display:none'></div>");
        var vChildren = oControl.getContent(); 
        for (var i = 0; i < vChildren.length; i++) 
        {    
            oRm.renderControl(vChildren[i]);
        }
        oRm.write("</div>");
    }
});
cc.StackPaneWithDD.prototype.onAfterRendering = function() 
{
    this.m_verticalLine = this.$().find(".ccStackPaneDDVerticalLine")[0];
    this.m_horizontalLine = this.$().find(".ccStackPaneDDHorizontalLine")[0];
    this.$().bind("dragover", jQuery.proxy(this.handleDragOver, this));     
    this.$().bind("drop", jQuery.proxy(this.handleDrop, this));     
};
cc.StackPaneWithDD.prototype.onBeforeRendering = function() 
{
    this.$().unbind("dragover", this.handleDragOver);
    this.$().unbind("drop", this.handleDrop);
};
cc.StackPaneWithDD.prototype.exit = function() 
{
    this.$().unbind("dragover", this.handleDragOver);
    this.$().unbind("drop", this.handleDrop);
};
cc.StackPaneWithDD.prototype.handleDragOver = function(oEvent) 
{
    try
    {
        var vPassback = CCDragDropManager.dragOver(this,"passback");
        if (vPassback != null)
        {
            oEvent.preventDefault();
            var vDragSender = CCDragDropManager.getCurrentSource();
            var vDragEvent = CCDragDropManager.getCurrentDragEvent();
            vDragSender.ccPassBackDragOver(vDragEvent,oEvent);
            this._drawLines(oEvent);
        }
    }
    catch (exc) 
    {
        CLog.logINF("",exc);
    }
};
cc.StackPaneWithDD.prototype._drawLines = function(oEvent)
{
    var vX = oEvent.originalEvent.pageX;
    var vY = oEvent.originalEvent.pageY;
    if (CCDragDropManager.getWithVerticalLine() == true)
    {
        this.m_verticalLine.style.display = "";
        this.m_verticalLine.style.left = vX+"px";
    }
    if (CCDragDropManager.getWithHorizontalLine() == true)
    {
        this.m_horizontalLine.style.display = "";
        this.m_horizontalLine.style.top = vY+"px";
    }
};
cc.StackPaneWithDD.prototype.handleDrop = function(oEvent) 
{
    this.m_verticalLine.style.display = "none";
    this.m_horizontalLine.style.display = "none";
    try
    {
        var vPassback = CCDragDropManager.dragOver(this,"passback");
        if (vPassback != null)
        {
            var vDragSender = CCDragDropManager.getCurrentSource();
            var vDragEvent = CCDragDropManager.getCurrentDragEvent();
            vDragSender.ccPassBackDrop(vDragEvent,oEvent);
        }
    }
    catch (exc) 
    {
        CLog.logINF("",exc);
    }
};

/* SCROLLPANE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.ScrollPane",
{
    metadata : 
    { 
        properties:
        {
            "background" : "string",
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
            "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
            "padding" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '0px'}
        },
        defaultAggregation : "content",
        aggregations: 
        { 
            content: {type : "sap.ui.core.Control", multiple : true, singularName : "content"} 
        } 
    },
    renderer : function(oRm,oControl)
    {
        oRm.write("<table cellpadding='0' cellspacing='0' style='table-layout:fixed;");
        if (oControl.getWidth() != null) oRm.write("width:"+oControl.getWidth()+";")
        if (oControl.getHeight() != null) oRm.write("height:"+oControl.getHeight()+";")
        if (oControl.getBackground() != null)  oRm.write("background-color:"+oControl.getBackground()+";")
        oRm.write("'")
        oRm.writeControlData(oControl);
        oRm.write(">");
        oRm.write("<tr>");
        oRm.write("<td style='width:100%;height:100%;table-layout:fixed;");
        if (oControl.getPadding() != null) oRm.write("padding:"+oControl.getPadding()+";");
        oRm.write("'>");
        oRm.write("<div style='width:100%;height:100%;overflow:auto;");
        oRm.write("'>");
        var vChildren = oControl.getContent(); 
        for (var i = 0; i < vChildren.length; i++) 
        {    
            oRm.renderControl(vChildren[i]);
        }
        oRm.write("</div>");
        oRm.write("</td>");
        oRm.write("</tr>");
        oRm.write("</table>");
    }
});
/* HBOX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.HBox",
{
    metadata : 
    { 
        properties:
        {
            "coldistance" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '0px'},
            "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
            "fullWidth" : {type : "boolean", group : "Appearance", defaultValue : false},
            "layoutfixed" : {type : "boolean", group : "Appearance", defaultValue : false}
        },
        defaultAggregation : "content",
        aggregations: 
        { 
            content: {type : "sap.ui.core.Control", multiple : true, singularName : "content"} 
        } 
    },
    renderer : function(oRm,oControl)
    {
        var vFullWidth = oControl.getFullWidth();
        var vPercHeight = oControl.getHeight();
        if (vPercHeight == "") vPercHeight = null;
        var vChildren = oControl.getContent(); 
        var vTotalWidthPercentage = 0;
        for (var i = 0; i < vChildren.length; i++) 
        {
            var vChild = vChildren[i];
            if (vChild.getWidth != null && vChild.getWidth().endsWith("%"))
            {
                vFullWidth = true;
            }
            if (vChild.ccOriginalWidth != null && vChild.ccOriginalWidth.endsWith("%"))
            {
                vTotalWidthPercentage += CCValueManager.findIntFromPercentage(vChild.ccOriginalWidth);
            }
            if (vPercHeight == null && vChild.getHeight != null && vChild.getHeight().endsWith("%"))
            {
                vPercHeight = vChild.getHeight();
            }
        }
        var vPercFactor = 1;
        if (vTotalWidthPercentage > 100)
            vPercFactor = vTotalWidthPercentage / 100.0;
        oRm.write("<table cellpadding='0' cellspacing='0'");
        oRm.addClass("ccNoborder");
        oRm.writeControlData(oControl);
        oRm.write(" style='")
        if (vFullWidth) oRm.write("width:100%;")
        if (oControl.getLayoutfixed() == true) oRm.write("table-layout:fixed;");
        if (vPercHeight != null) 
            oRm.write("height:"+vPercHeight+";");
        oRm.write("'")
        oRm.writeClasses(oControl);
        oRm.write(">");
        oRm.write("<tr>")
        CLog.logINF("+++++ Rendering children: " + vChildren.length);
        for (var i = 0; i < vChildren.length; i++) 
        {    
            var vChild = vChildren[i];
            oRm.write("<td class='ccNoborder' style='");
            var vWidth = null;
            if (vChild.getWidth != null) vWidth = vChild.getWidth();
            if (vWidth != null)
            {
                if (vWidth.endsWith("%"))
                {
                    if (vPercFactor != 1)
                    {
                        var vWidthNum = CCValueManager.findIntFromPercentage(vChild.ccOriginalWidth);
                        vWidthNum = vWidthNum / vPercFactor;
                        vWidthNum = Math.round(vWidthNum);
                        oRm.write("width:"+vWidthNum+"%;");
                    }
                    else
                    {
                        oRm.write("width:"+vChild.ccOriginalWidth+";");
                    }
                }
                else
                {
                    oRm.write("width:"+vChild.getWidth()+";");
                }
            }
            // height
            if (vChild.ccExplicitTdIEHeight != null && CCJSUtils.isIE() == true)
            {
                oRm.write("height:"+vChild.ccExplicitTdIEHeight+";");
            }
            else if (vChild.getHeight != null && vChild.getHeight().endsWith("%"))
            {
                oRm.write("height:100%;");
            }
            if (i != (vChildren.length -1))
            {
                oRm.write("border-style:solid;border-color:transparent;border-right-width: "+oControl.getColdistance()+";");
            }
            oRm.write("'>")
            oRm.renderControl(vChildren[i]);
            oRm.write("</td>")
        }
        oRm.write("</tr>");
        oRm.write("</table>");
    }
});
/* VBOX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.VBox",
{
    metadata : 
    { 
        properties:
        {
            "background" : "string",
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
            "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
            "padding" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '0px'},
            "rowdistance" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
            "layoutfixed" : {type : "boolean", group : "Appearance", defaultValue : false}
        },
        defaultAggregation : "content",
        aggregations: 
        { 
            content: {type : "sap.ui.core.Control", multiple : true, singularName : "content"} 
        } 
    },
    renderer : function(oRm,oControl)
    {
        oRm.write("<div ");
        oRm.writeControlData(oControl);
        oRm.addClass("ccVBox");
        oRm.writeClasses();
        oRm.write(" style='");
        if (oControl.getWidth() != null) oRm.write("width:"+oControl.getWidth()+";")
        if (oControl.getHeight() != null) oRm.write("height:"+oControl.getHeight()+";")
        if (oControl.getBackground() != null)  oRm.write("background-color:"+oControl.getBackground()+";")
        if (oControl.getPadding() != null) oRm.write("padding:"+oControl.getPadding()+";");
        oRm.write("'>");
        oRm.write("<table cellpadding='0' cellspacing='0' ");
        oRm.write(" style='")
        if (oControl.getWidth() != null) oRm.write("width:100%;")
        if (oControl.getHeight() != null) oRm.write("height:100%;")
        if (oControl.getLayoutfixed() != null) oRm.write("table-layout:fixed;");
        oRm.write("'")
        oRm.write(">");
        var vChildren = oControl.getContent(); 
        CLog.logINF("+++++ Rendering children: " + vChildren.length);
        var vPercentageHeightOccurred = false;
        for (var i = 0; i < vChildren.length; i++) 
        {    
            var vChild = vChildren[i];
            oRm.write("<tr>")
            oRm.write("<td class='ccNoborder' style='")
            if (oControl.getWidth() != null)
            {
                oRm.write("width:100%;");
            }
            if (vChild.ccHeight != null)
            {
                oRm.write("height:"+vChild.ccHeight+";");
                var vHeightString = vChild.ccHeight + "";
                if (vHeightString.indexOf("%") >= 0)
                    vPercentageHeightOccurred = true;
            }
            if (i != (vChildren.length - 1))
                oRm.write("border-bottom-width: "+oControl.getRowdistance()+";");
            oRm.write("'>")
            oRm.renderControl(vChild);
            oRm.write("</td>")
            oRm.write("</tr>");
        }
        if (vPercentageHeightOccurred == false && oControl.getHeight() != null)
        {
            oRm.write("<tr><td class='ccNoborder' style='height:100%'></td></tr>")
        }
        oRm.write("</table>");
        oRm.write("</div>");
    }
});
/* VDIST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.VDist",
{
    metadata : 
    { 
        properties:
        {
            "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '2px'},
            "layoutfixed" : {type : "boolean", group : "Appearance", defaultValue : false}
        }
    },
    renderer : function(oRm,oControl)
    {
        oRm.write("<tr ");
        oRm.writeControlData(oControl);
        oRm.write("><td class='ccNoborder' style='")
        if (oControl.getHeight() != null) oRm.write("height:"+oControl.getHeight()+";")
        oRm.write("'/><td></td></tr>");
    }
});
/* SIMPLELABEL +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.SimpleLabel",
{
    metadata : 
    { 
        properties:
        {
            "text" : { type : "string", bindable : "bindable" },
            "font" : { type : "string", bindable : "bindable" },
            "align" : { type : "string", bindable : "bindable" },
            "foreground" : { type : "string", bindable : "bindable" },
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
            "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'}
        }
    },
    renderer : function(oRm,oControl)
    {
        oRm.write("<div ");
        oRm.writeControlData(oControl);
        oRm.addClass("ccSimpleLabel");
        oRm.writeClasses(oControl);
        if (oControl.getWidth() != null) oRm.addStyle("width",oControl.getWidth());
        if (oControl.getHeight() != null) oRm.addStyle("height",oControl.getHeight());
        if (oControl.getFont() != null) oRm.addStyle("font-size",oControl.getFont());
        if (oControl.getForeground() != null) oRm.addStyle("color",oControl.getForeground());
        if (oControl.getAlign() != null) oRm.addStyle("text-align",oControl.getAlign());
        oRm.writeStyles();
        oRm.write(">");
        oRm.write(oControl.getText());
        oRm.write("</div>");
    }
});
cc.SimpleLabel.prototype.setText = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.$().context.innerHTML = sValue;
        this.setProperty("text", sValue, true);
    }
    else
    {
        this.setProperty("text", sValue, false);
    }    
};
cc.SimpleLabel.prototype.setFont = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.$().context.style.fontSize = sValue;
        this.setProperty("font", sValue, true);
    }
    else
    {
        this.setProperty("font", sValue, false);
    }    
};
cc.SimpleLabel.prototype.setForeground = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.$().context.style.color = sValue;
        this.setProperty("foreground", sValue, true);
    }
    else
    {
        this.setProperty("foreground", sValue, false);
    }    
};
cc.SimpleLabel.prototype.setAlign = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.$().context.style.textAlign = sValue;
        this.setProperty("align", sValue, true);
    }
    else
    {
        this.setProperty("align", sValue, false);
    }    
};


/* ExternalPage ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.Browser",
{
    metadata : 
    { 
        properties:
        {
            "url" : "string",
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
            "height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'}
        },
    },
    renderer : function(oRm,oControl)
    {
        oRm.write("<iframe style='overflow:hidden;margin:0px;border-width:0px;");
        if (oControl.getWidth() != null) 
            oRm.write("width:"+oControl.getWidth()+";");
        if (oControl.getHeight() != null) 
            oRm.write("height:"+oControl.getHeight()+";");
        oRm.write("'");
        oRm.write(" src='"+oControl.getUrl()+"' ");
        oRm.writeControlData(oControl);
        oRm.write(">");
        oRm.write("</iframe>");
    }
});
cc.Browser.prototype.onAfterRendering = function() 
{
    if (this.ccCallBack != null)
    {
        // alert(this + "/" + this.$());
        try
        {
            this.getDomRef().contentWindow.ccCallBack = this.ccCallBack;
        }
        catch (exc)
        {
        }
    }
}



