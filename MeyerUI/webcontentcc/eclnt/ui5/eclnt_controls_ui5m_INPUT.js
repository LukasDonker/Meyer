/* ############################################################################
 * CCUI5M_INPUTElement
 * ############################################################################ */

/**
 * 
 */
function CCUI5M_INPUTElement()
{
    this.m_suggestionLoadRoundtrip = false;
    this.init_CCUI5M_INPUTElement = function()
    {
        this.init_CCControl();
        this.applyComponentData = this.applyComponentData_CCUI5M_INPUTElement;
        this.m_ccClassName = "CCUI5M_INPUTElement";
        // --------------------------------------------------------------------
        var that = this;
        var vNode = new sap.m.Input();
        vNode.attachLiveChange(function(pEvent) {that.reactOnLiveChange(this,pEvent);});
        vNode.attachChange(function(pEvent) {that.reactOnChange(this,pEvent);});
        vNode.attachValueHelpRequest(function(pEvent) {that.reactOnValueHelpRequest(this,pEvent);});
        vNode.attachSuggest(function(pEvent) {that.reactOnSuggest(this,pEvent);});
        vNode.attachSuggestionItemSelected(function(pEvent) {that.reactOnSuggestItemSelected(this,pEvent);});
        this.bindUI5Node(vNode);
    };
    this.applyComponentData_CCUI5M_INPUTElement = function()
    {
        this.applyComponentData_CCControl();
        if (this.m_attributesChanged["format"] == true)
        {
            this.m_format = this.m_attributes["format"];
        }
        if (this.m_attributesChanged["formatmask"] == true)
        {
            this.m_formatmask = this.m_attributes["formatmask"];
        }
        if (this.m_attributesChanged["timezone"] == true)
        {
            this.m_timezone = this.m_attributes["timezone"];
        }
        if (this.m_attributesChanged["value"] == true)
        {
            // this.m_ui5Node.setValue(this.m_attributes["value"]);
            this.m_realValue = this.m_attributes["value"];
            RISCFormatter.transferRealValue(this,this.m_format,this.m_formatmask,this.m_timezone);
        }
        if (this.m_attributesChanged["inputtype"] == true)
        {
            this.m_ui5Node.setType(this.m_attributes["inputtype"]);
        }
        if (this.m_attributesChanged["showvaluehelp"] == true)
        {
            this.m_ui5Node.setShowValueHelp(CCValueManager.decodeBoolean(this.m_attributes["showvaluehelp"],false));
        }
        if (this.m_attributesChanged["valuehelponly"] == true)
        {
            this.m_ui5Node.setValueHelpOnly(CCValueManager.decodeBoolean(this.m_attributes["valuehelponly"],false));
        }
        if (this.m_attributesChanged["valuestate"] == true)
        {
            this.m_ui5Node.setValueState(this.m_attributes["valuestate"]);
        }
        if (this.m_attributesChanged["description"] == true)
        {
            this.m_ui5Node.setDescription(this.m_attributes["description"]);
        }
        if (this.m_attributesChanged["fieldwidth"] == true)
        {
            this.m_ui5Node.setFieldWidth(CCValueManager.decodeSize(
                    this.m_attributes["fieldwidth"], "50%"));
        }
        if (this.m_attributesChanged["filtersuggests"] == true)
        {
            this.m_ui5Node.setFilterSuggests(CCValueManager.decodeBoolean(
                    this.m_attributes["filtersuggests"], true));
        }
        if (this.m_attributesChanged["maxlength"] == true)
        {
            this.m_ui5Node.setMaxLength(CCValueManager.decodeNumber(this.m_attributes["maxlength"]),null);
        }
        if (this.m_attributesChanged["maxsuggestionwidth"] == true)
        {
            this.m_ui5Node.setMaxSuggestionWidth(CCValueManager.decodeNumber(this.m_attributes["maxsuggestionwidth"]),null);
        }
        if (this.m_attributesChanged["showsuggestion"] == true)
        {
            this.m_ui5Node.setShowSuggestion(CCValueManager.decodeBoolean(
                    this.m_attributes["showsuggestion"], false));
        }
        if (this.m_attributesChanged["startsuggestion"] == true)
        {
            this.m_ui5Node.setStartSuggestion(CCValueManager.decodeNumber(this.m_attributes["startsuggestion"]),1);
        }
        if (this.m_attributesChanged["suggestionbinding"] == true)
        {
            this.m_ui5Node.destroySuggestionItems();
            var vCSV = this.m_attributes["suggestionbinding"];
            if (vCSV != null)
            {
                try
                {
                    var vValues = CCValueManager.decodeCSV(vCSV);
                    var vFirst = vValues[0];
                    if (vFirst == "SuggestionSimpleBinding")
                    {
                        this.m_ui5Node.removeAllSuggestionItems();
                        for (var i=1; i<vValues.length; i++)
                        {
                            var item = new sap.ui.core.Item();
                            item.setText(vValues[i]);
                            this.m_ui5Node.addSuggestionItem(item);
                        }
                    }
                }
                catch (exc)
                {
                    CLog.logERR("Problem when loading suggestion items",exc);
                }
            }
        }
        if (this.m_attributesChanged["suggestionloadroundtrip"] == true)
        {
            this.m_suggestionLoadRoundtrip = CCValueManager.decodeBoolean(this.m_attributes["suggestionloadroundtrip"],false);
        }
    };
    // interface for RISCFormatter
    this.getRealValue = function() { return this.m_realValue; };
    this.setRealValue = function(value) { this.m_realValue = value; };
    this.setTextValue = function(text,real) 
    { 
        this.m_ui5Node.setValue(text);
        if (real != undefined) this.m_realValue = real;
    };
    this.getCurrentTextValue = function() { return this.m_ui5Node.getValue(); };
    this.notifyReset = function() { alert("Der Eingabewert \""+this.getCurrentTextValue()+"\" ist nicht korrekt und wird auf den vorhergehenden Wert gesetzt."); };
    // events
    this.reactOnLiveChange = function(pCaller,pEvent)
    {
//        try
//        {
//            var vText = this.m_ui5Node.getValue();
//            this.registerDirtyInformation(this.getId(),vText,false,true,null,false);
//        }
//        catch (ex)
//        {
//        }
    };
    this.reactOnChange = function(pCaller,pEvent)
    {
        try
        {
            RISCFormatter.transferCurrentText(this,this.m_format,this.m_formatmask,this.m_timezone);
            var vText = this.m_ui5Node.getValue();
            this.registerDirtyInformation(this.getId(),vText,false,true,null,false);
        }
        catch (ex)
        {
        }
    };
    this.reactOnValueHelpRequest = function(pCaller,pEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","valuehelp()");
    };
    this.reactOnSuggest = function(pCaller,pEvent)
    {
        this.reactOnChange(pCaller,pEvent);
        this.getPage().callServer(this,this.getId()+".action","suggestion()");
    };
    this.reactOnSuggestItemSelected = function(pCaller,pEvent)
    {
    };
//    this.getTextValue = function()
//    {
//        return this.m_ui5Node.getValue();
//    };
//    this.setTextValue = function(vValue)
//    {
//        this.m_ui5Node.setValue(vValue);
//    };
    this.init_CCUI5M_INPUTElement();
}
CCUI5M_INPUTElement.prototype = new CCControl();
s_CCPageElement_ElementCreators["ui5m_input"] = function() { return new CCUI5M_INPUTElement(); }; 

