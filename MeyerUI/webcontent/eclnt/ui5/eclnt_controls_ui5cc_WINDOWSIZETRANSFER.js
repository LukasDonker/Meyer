/* ############################################################################
 * CCUI5CC_WINDOWSIZETRANSFERElement
 * ############################################################################ */

function CCUI5CC_WINDOWSIZETRANSFERElement()
{
    this.m_adaptiveCategories = 
    [
         {name: "S", maxSize:400},
         {name: "M", maxSize:800},
         {name: "L", maxSize:100000}
    ];
    this.m_currentCategory = "L";
    this.m_resizeHandler = null;
    this.init_CCUI5CC_WINDOWSIZETRANSFERElement = function()
    {
        this.init_CCInvisibleControl();
        this.addChildNode = this.addChildNode_CCUI5CC_WINDOWSIZETRANSFERElement;
        this.applyComponentData = this.applyComponentData_CCUI5CC_WINDOWSIZETRANSFERElement;
        this.reactOnEvent = this.reactOnEvent_CCUI5CC_WINDOWSIZETRANSFERElement; 
        this.removeChildNode = this.removeChildNode_CCUI5CC_WINDOWSIZETRANSFERElement;
        this.m_ccClassName = "CCUI5CC_WINDOWSIZETRANSFERElement";
        // --------------------------------------------------------------------
        this.destroy = this.destroy_CCUI5CC_WINDOWSIZETRANSFERElement;
        var that = this;
        // this.bindUI5Node(...);
        this.m_resizeHandler = function() { that.reactOnWindowResize(); };
        window.addEventListener("resize",this.m_resizeHandler,false);
        setTimeout(function() {that.reactOnWindowResize()},10);
    };
    this.applyComponentData_CCUI5CC_WINDOWSIZETRANSFERElement = function() 
    { 
        this.applyComponentData_CCInvisibleControl(); 
        if (this.m_attributesChanged["adaptivecategories"] == true)
        {
            var s = this.m_attributes["adaptivecategories"];
            var a = new Array();
            try
            {
                var vCols = CCValueManager.decodeCSV(s);
                for (var i=0; i<vCols.length; i++)
                {
                    var vCol = vCols[i];
                    var vIndex = vCol.indexOf(":");
                    if (vIndex <= 0) continue;
                    var vLeft = vCol.substring(0,vIndex);
                    var vRight = vCol.substring(vIndex+1);
                    var o = new Object();
                    o.name = vLeft;
                    o.maxSize = vRight * 1;
                    a.push(o);
                }
                this.m_adaptiveCategories = a;
            }
            catch (exc) {}
        }
        if (this.m_attributesChanged["startcategory"] == true)
        {
            this.m_currentCategory = this.m_attributes["startcategory"];
        }
    };
    this.addChildNode_CCUI5CC_WINDOWSIZETRANSFERElement = function(ccControl,index) { this.addChildNode_CCInvisibleControl(ccControl,index); };
    this.removeChildNode_CCUI5CC_WINDOWSIZETRANSFERElement = function(ccControl) { this.removeChildNode_CCInvisibleControl(ccControl); };
    this.destroy_CCUI5CC_WINDOWSIZETRANSFERElement = function() 
    { 
        this.destroy_CCInvisibleControl; 
        try
        {
            window.removeEventListener("resize",this.m_resizeHandler);
            this.m_resizeHandler = null;
        }
        catch (exc) {}
    };
    this.reactOnWindowResize = function()
    {
        var width = window.innerWidth;
        var currentCategory = this.findCurrentCategory();
        if (currentCategory == null) return;
        if (currentCategory == this.m_currentCategory) return;
        this.m_currentCategory = currentCategory;
        this.getPage().callServerWhenPossible(this,this.getId()+".action","windowsizechanged("+currentCategory+")");
    };
    this.reactOnEvent_CCUI5CC_WINDOWSIZETRANSFERElement = function(ccEvent) { this.reactOnEvent_CCInvisibleControl(ccEvent); };
    this.findCurrentCategory = function()
    {
        var width = window.innerWidth;
        for (var i=0; i<this.m_adaptiveCategories.length;i++)
        {
            var adaptiveCategory = this.m_adaptiveCategories[i];
            if (width < adaptiveCategory.maxSize)
            {
                return adaptiveCategory.name;
            }
        }
        return null;
    };
    this.init_CCUI5CC_WINDOWSIZETRANSFERElement();
}
CCUI5CC_WINDOWSIZETRANSFERElement.prototype = new CCInvisibleControl();
s_CCPageElement_ElementCreators["ui5cc_windowsizetransfer"] = function() { return new CCUI5CC_WINDOWSIZETRANSFERElement(); }; 
