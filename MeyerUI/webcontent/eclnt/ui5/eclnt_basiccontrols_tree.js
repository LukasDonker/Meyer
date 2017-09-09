/* TREENODE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
sap.ui.core.Control.extend("cc.TreeNode",
{
    metadata : 
    { 
        properties:
        {
            "background" : "string",
            "image0": "string",
            "image1": "string",
            "image2": "string",
            "width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
            "level" : { type : "int", bindable : "bindable" },
            "status" : { type : "int", bindable : "bindable" },
            "text" : { type : "string", bindable : "bindable" }
        },
        events: 
        {
            "toggle": {}
        }    
    },
    renderer : function(oRm,oControl)
    {
        // if (oControl.getBackground() != null)  oRm.write("background-color:"+oControl.getBackground()+";")
        oRm.write("<table class='ccTreeNodeTable' cellpadding='0' cellspacing='0' ")
        oRm.writeControlData(oControl);
        oRm.write(" style='")
        if (oControl.getWidth() != null) oRm.write("width:"+oControl.getWidth()+";"); 
        if (oControl.getBackground() != null) oRm.write("background:"+oControl.getBackground()+";"); 
        oRm.write("'>");
        oRm.write("<tr>");
        // distance
        var distanceWidth = (oControl.getLevel() * 20) + "px";
        oRm.write("<td class='ccTreeNodeDistanceTd' style='width:"+distanceWidth+"'>");
        oRm.write("</td>");
        // icon
        var icon = oControl.calculateIcon(oControl.getStatus());
        oRm.write("<td class='ccTreeNodeIconTd'>");
        oRm.write("<img class='ccTreeNodeIconImage' src='"+icon+"'/>")
        oRm.write("</td>");
        // text
        var text = oControl.getText();
        oRm.write("<td class='ccTreeNodeTextTd'>");
        oRm.write(oControl.getText());
        oRm.write("</td>");
        oRm.write("</tr>");
        oRm.write("</table>");
    }
});
cc.TreeNode.prototype.calculateIcon = function(pStatus)
{
    if (pStatus == undefined) pStatus = this.getStatus();
    if (pStatus == 0) return this.getImage0(); 
    if (pStatus == 1) return this.getImage1(); 
    if (pStatus == 2) return this.getImage2();
    return this.getImage2();
};
cc.TreeNode.prototype.onAfterRendering = function() 
{
    this.$().bind("mouseup", jQuery.proxy(this.handleMouseClick, this));  
    this.m_distance = this.$().find(".ccTreeNodeDistanceTd")[0];
    this.m_icon = this.$().find(".ccTreeNodeIconImage")[0];
    this.m_text = this.$().find(".ccTreeNodeTextTd")[0];
};
cc.TreeNode.prototype.onBeforeRendering = function() 
{
    this.$().unbind("mouseup", this.handleMouseClick);
};
cc.TreeNode.prototype.exit = function() 
{
    this.$().unbind("mouseup", this.handleMouseClick);
};
cc.TreeNode.prototype.handleMouseClick = function(oEvent)
{
    var vName = oEvent.target.className;
    if (vName == "ccTreeNodeIconImage")
    {
        this.fireToggle(this);
    }
};
cc.TreeNode.prototype.setText = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.m_text.innerHTML = sValue;
        this.setProperty("text", sValue, true);
    }
    else
    {
        this.setProperty("text", sValue, false);
    }    
}
cc.TreeNode.prototype.setLevel = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.m_distance.style.width = (sValue * 20) + "px";
        this.setProperty("level", sValue, true);
    }
    else
    {
        this.setProperty("level", sValue, false);
    }    
}
cc.TreeNode.prototype.setStatus = function(sValue) 
{
    var vSpan = this.$().context;
    if (vSpan != null)
    {
        this.m_icon.src = this.calculateIcon(sValue);
        this.setProperty("status", sValue, true);
    }
    else
    {
        this.setProperty("status", sValue, false);
    }    
}

