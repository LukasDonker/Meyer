/* ############################################################################
 * CCDUMMYElement
 * ############################################################################ */

function CCDUMMYElement()
{
    this.init_CCDUMMYElement = function()
    {
        this.init_CCControl();
        this.m_ccClassName = "CCDUMMYElement";
        this.bindUI5Node(new sap.ui.commons.Label());
        this.m_ui5Node.setVisible(false);
    };
  
    this.init_CCDUMMYElement();
}
CCDUMMYElement.prototype = new CCControl();

/* ############################################################################
 * CCINPUTElement
 * ############################################################################ */

function CCINPUTElement()
{
    this.init_CCINPUTElement = function()
    {
        this.init_CCInvisibleControl();
        this.m_ccClassName = "CCINPUTElement";
    };
  
    this.createComponent = function()
    {
        this.getPage().addNotifiedByCallServerElements(this);
    };
    this.notifyCallServer = function()
    {
        this.registerDirtyInformation(this.m_attributes["name"],this.m_attributes["value"],false,false,null,true);
        return true;
    };
    
    this.init_CCINPUTElement();
}
CCINPUTElement.prototype = new CCInvisibleControl();
s_CCPageElement_ElementCreators["input"] = function() { return new CCINPUTElement(); }; 

/* ############################################################################
 * CCGRIDHEADERLABELElement extends CCLABELElement
 * ############################################################################ */

//function CCGRIDHEADERLABELElement()
//{
//    this.init_CCGRIDHEADERLABELElement = function()
//    {
//        this.init_CCLABELElement();
//        // --------------------------------------------------------------------
//        this.m_ccClassName = "CCGRIDHEADERLABELElement";
//        this.m_ui5Node.addStyleClass("ccGridheaderlabel");
//    };
//    this.init_CCGRIDHEADERLABELElement();
//}
//CCGRIDHEADERLABELElement.prototype = new CCLABELElement();
//s_CCPageElement_ElementCreators["gridheaderlabel"] = function() { return new CCGRIDHEADERLABELElement(); }; 



