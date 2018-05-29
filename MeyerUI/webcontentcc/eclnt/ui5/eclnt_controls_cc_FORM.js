function CCFORMElement()
{
    this.init_CCFORMElement = function()
    {
        this.init_CCStackedPane();
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCFORMElement";
        this.m_ui5Node.setComment("CCFORMElement");
    };
    this.createComponent = function()
    {
        this.getPage().setPostURL(this.m_attributes["action"]);
    };
    this.init_CCFORMElement();
}
CCFORMElement.prototype = new CCStackedPane();
s_CCPageElement_ElementCreators["form"] = function() { return new CCFORMElement(); }; 
