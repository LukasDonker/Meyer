/* ############################################################################
 * CCROWElement
 * ############################################################################ */

function CCROWElement()
{
    this.init_CCROWElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCROWElement;
        this.applyComponentData = this.applyComponentData_CCROWElement;
        this.reactOnEvent = this.reactOnEvent_CCROWElement; 
        this.removeChildNode = this.removeChildNode_CCROWElement;
        this.m_ccClassName = "CCROWElement";
        // --------------------------------------------------------------------
        this.bindUI5Node(new cc.HBox());
    };
    this.applyComponentData_CCROWElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["coldistance"] == true)
        {
            var vColdistance = CCValueManager.decodeSize(this.m_attributes["coldistance"],"0px");
            this.m_ui5Node.setColdistance(vColdistance);
        }
    };
    this.addChildNode_CCROWElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCROWElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCROWElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.updateChildWidth = function(ccControl,vWidth)
    {   
        if (vWidth == null) return null;
        ccControl.m_ui5Node.ccOriginalWidth = vWidth;
        if (vWidth.endsWith("%"))return "100%";
        return vWidth;
    };
    this.updateChildHeight = function(ccControl,vHeight)
    {   
        if (vHeight == null) return null;
        ccControl.m_ui5Node.ccOriginalHeight = vHeight;
        if (vHeight.endsWith("%"))
        {
            this.m_ui5Node.ccHeight = vHeight;
            return "100%";
        }
        return vHeight;
    };
    this.init_CCROWElement();
}
CCROWElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["row"] = function() { return new CCROWElement(); }; 
