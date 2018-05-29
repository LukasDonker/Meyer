/* ############################################################################
 * CCTABBEDLINEElement
 * ############################################################################ */

function CCTABBEDLINEElement()
{
    this.m_cctabbedlineFirstApply = true;
    this.init_CCTABBEDLINEElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCTABBEDLINEElement;
        this.applyComponentData = this.applyComponentData_CCTABBEDLINEElement;
        this.reactOnEvent = this.reactOnEvent_CCTABBEDLINEElement; 
        this.removeChildNode = this.removeChildNode_CCTABBEDLINEElement;
        this.m_ccClassName = "CCTABBEDLINEElement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new cc.HBox());
    };
    this.applyComponentData_CCTABBEDLINEElement = function() 
    { 
        this.applyComponentData_CCControl(); 
        if (this.m_attributesChanged["value"] || this.m_cctabbedlineFirstApply)
        {
            var vValue = CCValueManager.decodeNumber(this.m_attributes["value"],0);
            try
            {
                for (var i=0; i<this.getChildren().length; i++)
                {
                    var vChild = this.getChildren()[i];
                    if (vValue != i)
                    {
                        try { vChild.updateSelected(false); } catch (exc) {}
                    }
                    else
                    {
                        try { vChild.updateSelected(true); } catch (exc) {}
                    }
                }
            }
            catch (exc)
            {}
        }
        this.m_cctabbedlineFirstApply = false;
    };
    this.addChildNode_CCTABBEDLINEElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertContent(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCTABBEDLINEElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removeContent(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCTABBEDLINEElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnTabSelection = function(vTabElement)
    {
        var vSelectedTab = -1;
        for (var i=0; i<this.getChildren().length; i++)
        {
            var vChild = this.getChildren()[i];
            if (vChild != vTabElement)
            {
                try { vChild.updateSelected(false); } catch (exc) {}
            }
            else
            {
                vSelectedTab = i;
            }
        }
        if (vSelectedTab >= 0)
        {
            this.registerDirtyInformation(this.getId(),vSelectedTab+"",false,true,null,false);
        }
    };
    this.init_CCTABBEDLINEElement();
}
CCTABBEDLINEElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["tabbedline"] = function() { return new CCTABBEDLINEElement(); }; 
