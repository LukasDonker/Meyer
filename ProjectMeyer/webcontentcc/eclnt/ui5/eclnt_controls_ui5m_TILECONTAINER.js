/* ############################################################################
 * CCUI5M_TILECONTAINERElement
 * ############################################################################ */

function CCUI5M_TILECONTAINERElement()
{
    this.init_CCUI5M_TILECONTAINERElement = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCUI5M_TILECONTAINERElement;
        this.applyComponentData = this.applyComponentData_CCUI5M_TILECONTAINERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5M_TILECONTAINERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5M_TILECONTAINERElement;
        this.m_ccClassName = "CCUI5M_TILECONTAINERlement";
        // --------------------------------------------------------------------
        var that = this;
        this.bindUI5Node(new sap.m.TileContainer());
        this.m_ui5Node.attachTileMove(function(pEvent) {that.reactOnTileMove(this,pEvent);});
        this.m_ui5Node.attachTileDelete(function(pEvent) {that.reactOnTileDelete(this,pEvent);});
    };
    this.applyComponentData_CCUI5M_TILECONTAINERElement = function() 
    { 
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["allowadd"] == true)
        {
            this.m_ui5Node.setAllowAdd(CCValueManager.decodeBoolean(
                    this.m_attributes["allowadd"], false));
        }
    };
    this.addChildNode_CCUI5M_TILECONTAINERElement = function(ccControl,index) 
    { 
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.insertTile(ccControl.m_ui5Node,this.calculateUI5ChildIndex(index));
    };
    this.removeChildNode_CCUI5M_TILECONTAINERElement = function(ccControl) 
    { 
        this.removeChildNode_CCControl(ccControl); 
        if (ccControl.m_ui5Node != null)
            this.m_ui5Node.removeTile(ccControl.m_ui5Node);
    };
    this.reactOnEvent_CCUI5M_TILECONTAINERElement = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.reactOnTileMove = function(pCaller,pEvent)
    {
        var tile = pEvent.getParameter("tile");
        var oldIndex = this.findTileIndex(tile);
        var newIndex = pEvent.getParameter("newIndex");
        this.getPage().callServer(this,this.getId()+".action","tilemove("+oldIndex+","+newIndex+")");
    }
    this.reactOnTileDelete = function(pCaller,pEvent)
    {
        var tile = pEvent.getParameter("tile");
        var index = this.findTileIndex(tile);
        this.getPage().callServer(this,this.getId()+".action","tiledelete("+index+")");
    }   
    this.findTileIndex = function(pTile)
    {
        var children = this.getChildren();
        for (var i=0; i<children.length; i++)
        {
            var child = children[i];
            if (child.m_ui5Node == pTile) return i;
        }
        return -1;
    }
    this.init_CCUI5M_TILECONTAINERElement();
}
CCUI5M_TILECONTAINERElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_tilecontainer"] = function() { return new CCUI5M_TILECONTAINERElement(); }; 

