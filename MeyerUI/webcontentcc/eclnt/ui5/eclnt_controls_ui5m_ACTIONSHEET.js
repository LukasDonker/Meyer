/* ############################################################################
 * CCUI5M_ACTIONSHEETElement
 * ############################################################################ */

function CCUI5M_ACTIONSHEETElement()
{
    this.m_actionSheet = null;
    this.m_placementReference = "Previous";
    this.init_CCUI5M_ACTIONSHEETElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_ACTIONSHEETElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_ACTIONSHEETElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_ACTIONSHEETElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_ACTIONSHEETElement;
        this.m_ccClassName = "CCUI5M_ACTIONSHEETElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.Label());
        this.m_ui5Node.setText("");
        this.m_ui5Node.addStyleClass("ccLabelmini");
        this.m_actionSheet = new sap.m.ActionSheet();
    };
    this.applyComponentData_CCUI5M_ACTIONSHEETElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["cancelbuttontext"] == true)
        {
            this.m_actionSheet.setCancelButtonText(this.m_attributes["cancelbuttontext"]);
        }
        if (this.m_attributesChanged["placement"] == true)
        {
            this.m_actionSheet.setPlacement(this.m_attributes["placement"]);
        }
        if (this.m_attributesChanged["showcancelbutton"] == true)
        {
            this.m_actionSheet.setShowCancelButton(CCValueManager.decodeBoolean(
                    this.m_attributes["showcancelbutton"], true));
        }
        if (this.m_attributesChanged["title"] == true)
        {
            this.m_actionSheet.setTitle(this.m_attributes["title"]);
        }
        if (this.m_attributesChanged["trigger"] == true)
        {
            if (this.m_attributes["trigger"] != null)
            {
                this.openActionSheet();
            }
        }
        if (this.m_attributesChanged["placementreference"] == true)
        {
            this.m_placementReference = this.m_attributes["placementreference"];
        }
    };
    this.addChildNode_CCUI5M_ACTIONSHEETElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_actionSheet.insertButton(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCUI5M_ACTIONSHEETElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_actionSheet.removeButton(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_ACTIONSHEETElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.openActionSheet = function() 
    {
        var refControl = this.m_ui5Node;
        // previous element?
        if (this.m_placementReference == "No")
        {
        }
        else if (this.m_placementReference == "Next")
        {
            try
            {
                var vParent = this.getParent();
                var myChildIndex = vParent.findIndexOfChild(this);
                for (var i=myChildIndex+1; i<vParent.getChildren().length; i++)
                {
                    var child = vParent.getChildren()[i];
                    if (child.m_ui5Node != null)
                    {
                        refControl = child.m_ui5Node;
                        break;
                    }
                }
            }
            catch (exc) {}
        }
        else // default
        {
            try
            {
                var vParent = this.getParent();
                var myChildIndex = vParent.findIndexOfChild(this);
                for (var i=myChildIndex-1; i>=0; i--)
                {
                    var child = vParent.getChildren()[i];
                    if (child.m_ui5Node != null)
                    {
                        refControl = child.m_ui5Node;
                        break;
                    }
                }
            }
            catch (exc) {}
        }
        this.m_actionSheet.openBy(refControl);
    }
    this.init_CCUI5M_ACTIONSHEETElement();
}
CCUI5M_ACTIONSHEETElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_actionsheet"] = function() { return new CCUI5M_ACTIONSHEETElement(); }; 
