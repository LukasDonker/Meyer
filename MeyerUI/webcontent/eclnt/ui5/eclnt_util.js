String.prototype.endsWith = function(suffix) 
{
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
String.prototype.startsWith = function(prefix)
{
    if (this.indexOf(prefix) == 0)
        return true;
    else
        return false;
};

/* ############################################################################
 * Logging
 * ############################################################################ */

var CLog = new Object();

CLog.LL_DBG = 0;
CLog.LL_INF = 1;
CLog.LL_WAR = 2;
CLog.LL_ERR = 3;

CLog.active = true;
CLog.level = CLog.LL_INF;

CLog.p_texts = new Array("DBG","INF","WAR","ERR");

CLog.log = function(pLevel,pText,pExc)
{
    if (CLog.active == false) return; 
    if (pLevel < CLog.level) return;
    var now = new Date();
    console.log(now + ": " + CLog.p_texts[pLevel] + " | " + pText);
    if (pExc != null && pExc.message != null)
    {
        console.log(now + ": " + CLog.p_texts[pLevel] + " | Exception: " + pExc.message);
        console.log(now + ": " + CLog.p_texts[pLevel] + " | Stack: \n" + pExc.stack);
    }
};
CLog.alert = function(pText)
{
    alert(pText);
};
CLog.logDBG = function(pText,pExc) { if (CLog.active == false) return; CLog.log(CLog.LL_DBG,pText,pExc); };
CLog.logINF = function(pText,pExc) { if (CLog.active == false) return; CLog.log(CLog.LL_INF,pText,pExc); };
CLog.logWAR = function(pText,pExc) { if (CLog.active == false) return; CLog.log(CLog.LL_WAR,pText,pExc); };
CLog.logERR = function(pText,pExc) { CLog.log(CLog.LL_ERR,pText,pExc); };

/* ############################################################################
 * CCJSUtils
 * ############################################################################ */

var CCJSUtils = new Object();
CCJSUtils.ilObjects = new Array();
CCJSUtils.ilFunctions = new Array();
CCJSUtils.ilParamArrays = new Array();
CCJSUtils.m_isIE = null;
CCJSUtils.invokeLater = function(obj,fct,paramArray,duration)
{
    CCJSUtils.ilObjects.push(obj);
    CCJSUtils.ilFunctions.push(fct);
    CCJSUtils.ilParamArrays.push(paramArray);
    if (duration == undefined) duration = 0;
    setTimeout("CCJSUtils.invokeNext()",duration);
};
CCJSUtils.invokeNext = function()
{
    if (CCJSUtils.ilObjects.length > 0)
    {
        var ilObject = CCJSUtils.ilObjects.pop();
        var ilFunction = CCJSUtils.ilFunctions.pop();
        var ilParamArray = CCJSUtils.ilParamArrays.pop();
        ilFunction.apply(ilObject,ilParamArray);
    }
    if (CCJSUtils.ilObjects.length > 0)
        setTimeout("CCJSUtils.invokeNext()",0);
};
CCJSUtils.roundedRect = function(ctx, x, y, width, height, radius, fill, stroke) 
{
    if (stroke == null) { stroke = true; }
    if (radius == null) { radius = 5; }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) 
    {
        ctx.fill();
    }
    if (stroke) 
    {
        ctx.stroke();
    }
};
CCJSUtils.extractPureWidth = function(node)
{
    var curStyleWidth = node.style.width;
    var curWidth = node.width;
    node.style.width = null;
    node.width = null;
    var result = node.offsetWidth;
    node.style.width = curStyleWidth;
    node.width = curWidth;
    return result;
};
CCJSUtils.extractPureHeight = function(node)
{
    var curStyleHeight = node.style.height;
    var curHeight = node.height;
    node.style.height = null;
    node.height = null;
    var result = node.offsetHeight;
    node.style.height = curStyleHeight;
    node.height = curHeight;
    return result;
};
CCJSUtils.isIE = function()
{
    if (this.m_isIE == null) 
    {
        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE") >= 0 || ua.indexOf("rv:11") >= 0)
            this.m_isIE = true;
        else
            this.m_isIE = false;
    }        
    return this.m_isIE;
};
CCJSUtils.applyListItemBaseAttributes = function(pControl)
{
    if (pControl.m_attributesChanged["counter"] == true)
    {
        pControl.m_ui5Node.setCounter(CCValueManager.decodeNumber(pControl.m_attributes["counter"]),0);
    }
    if (pControl.m_attributesChanged["selected"] == true)
    {
        var selectedValue = CCValueManager.decodeBoolean(pControl.m_attributes["selected"]);
        pControl.m_ui5Node.setSelected(selectedValue, false);
    }
    if (pControl.m_attributesChanged["listitemtype"] == true)
    {
        pControl.m_ui5Node.setType(pControl.m_attributes["listitemtype"]);
    }
    if (pControl.m_attributesChanged["unread"] == true)
    {
        pControl.m_ui5Node.setUnread(CCValueManager.decodeBoolean(pControl.m_attributes["unread"],false));
    }
};
CCJSUtils.applyListBaseAttributes = function(pControl)
{
    if (pControl.m_attributesChanged["backgrounddesign"] == true)
    {
        pControl.m_ui5Node.setBackgroundDesign(pControl.m_attributes["backgrounddesign"]);
    }
    if (pControl.m_attributesChanged["listmode"] == true)
    {
        pControl.m_ui5Node.setMode(pControl.m_attributes["listmode"]);
    }
    if (pControl.m_attributesChanged["enablebusyindicator"] == true)
    {
        pControl.m_ui5Node.setEnabledBusyIndicator(CCValueManager.decodeBoolean(
                pControl.m_attributes["enablebusyindicator"], true));
    }
    if (pControl.m_attributesChanged["footertext"] == true)
    {
        pControl.m_ui5Node.setFooterText(pControl.m_attributes["footertext"]);
    }
    if (pControl.m_attributesChanged["headertext"] == true)
    {
        pControl.m_ui5Node.setHeaderText(pControl.m_attributes["headertext"]);
    }
    if (pControl.m_attributesChanged["growing"] == true)
    {
        pControl.m_ui5Node.setGrowing(CCValueManager.decodeBoolean(
                pControl.m_attributes["growing"], false));
    }
    if (pControl.m_attributesChanged["growingscrolltoload"] == true)
    {
        pControl.m_ui5Node.setGrowingScrollToLoad(CCValueManager.decodeBoolean(
                pControl.m_attributes["growingscrolltoload"], false));
    }
    if (pControl.m_attributesChanged["growingthreshold"] == true)
    {
        pControl.m_ui5Node.setGrowingThreshold(CCValueManager.decodeNumber(pControl.m_attributes["growingthreshold"]),20);
    }
    if (pControl.m_attributesChanged["growingtriggertext"] == true)
    {
        pControl.m_ui5Node.setGrowingTriggerText(pControl.m_attributes["growingtriggertext"]);
    }
    if (pControl.m_attributesChanged["includeiteminselection"] == true)
    {
        pControl.m_ui5Node.setIncludeItemInSelection(CCValueManager.decodeBoolean(
                pControl.m_attributes["includeiteminselection"], false));
    }
    if (pControl.m_attributesChanged["inset"] == true)
    {
        pControl.m_ui5Node.setInset(CCValueManager.decodeBoolean(
                pControl.m_attributes["inset"], false));
    }
    if (pControl.m_attributesChanged["modeanimationon"] == true)
    {
        pControl.m_ui5Node.setModeAnimationOn(CCValueManager.decodeBoolean(
                pControl.m_attributes["modeanimationon"], true));
    }
    if (pControl.m_attributesChanged["nodatatext"] == true)
    {
        pControl.m_ui5Node.setNoDataText(pControl.m_attributes["nodatatext"]);
    }
    if (pControl.m_attributesChanged["shownodata"] == true)
    {
        pControl.m_ui5Node.setShowNoData(CCValueManager.decodeBoolean(
                pControl.m_attributes["shownodata"], true));
    }
    if (pControl.m_attributesChanged["showseparators"] == true)
    {
        pControl.m_ui5Node.setShowSeparators(pControl.m_attributes["showseparators"]);
    }
    if (pControl.m_attributesChanged["showunread"] == true)
    {
        pControl.m_ui5Node.setShowUnread(CCValueManager.decodeBoolean(
                pControl.m_attributes["showunread"], false));
    }
};
CCJSUtils.reactOnSelectionChange_ListBase = function(pCallingElement,pList,pEvent)
{
    for (var i=0; i<pList.m_children.length; i++)
    {
        var child = pList.m_children[i];
        if (child.reactOnSelectionChange != null)
        {
            child.reactOnSelectionChange();
        }
    }
    // notify server
    pCallingElement.getPage().callServer(pCallingElement,pCallingElement.getId()+".action","select()");
};
CCJSUtils.reactOnSelectionChange_ListItemBase = function(vItem)
{
    var mySelected = CCValueManager.decodeBoolean(vItem.m_attributes["selected"],false);
    var vSelected = vItem.m_ui5Node.getSelected();
    if (mySelected == vSelected)
        return;
    var vSelected= vSelected+"";
    CLog.logINF("Selection update: " + vItem + ", " + vSelected);
    vItem.m_attributes["selected"] = vSelected;
    vItem.registerDirtyInformation(vItem.getId(),vSelected,false,true,null,false);
};

/* ############################################################################
 * CCPadding
 * ############################################################################ */

function CCPadding()
{
    this.left = 0;
    this.right = 0;
    this.top = 0;
    this.bottom = 0;
}

/* ############################################################################
 * ValueManager
 * ############################################################################ */

var CCValueManager = new Object();
CCValueManager.decodeSize = function(value,nullValue)
{
    if (value == "null") value = null;
    if (value == "Phone") return value;
    if (value == "Tablet") return value;
    if (value == "Dekstop") return value;
    if (value == "Large") return value;
    if (value == "Medium") return value;
    if (value == "Small") return value;
    this.m_dateSeparator = ".";
    this.m_timeSeparator = ":";
    this.m_decimalSeparator = ",";
    this.m_thousandSeparator = ".";
    if (value == null)
    {
        if (nullValue != null)
            return nullValue;
        else
            return null;
    }
    try
    {
        var vStrangeIndex = value.indexOf("+");
        if (vStrangeIndex >= 0) value = value.substring(0,vStrangeIndex);
        vStrangeIndex = value.indexOf(";");
        if (vStrangeIndex >= 0) value = value.substring(0,vStrangeIndex);
        if (value.endsWith("%")) return value;
        if (value.endsWith("px")) return value;
        if (value.endsWith("em")) return value;
        return value + "px";
    }
    catch (rex)
    {
        return nullValue;
    }
};
CCValueManager.decodeSize100Percents = function(value,nullValue)
{
    if (value == null)
    {
        if (nullValue != null)
            return nullValue;
        else
            return null;
    }
    try
    {
        if (value.endsWith("%")) return "100%";
        if (value.endsWith("px")) return value;
        if (value.endsWith("em")) return value;
        return value + "px";
    }
    catch (rex)
    {
        return nullValue;
    }
};
CCValueManager.decodeColor = function(pValue)
{
    if (pValue == null) return null;
    if (pValue.length != 9) return pValue;
    var vRed = parseInt(pValue.substring(1,3), 16);
    var vGreen = parseInt(pValue.substring(3,5), 16);
    var vBlue = parseInt(pValue.substring(5,7), 16);
    var vOpa = parseInt(pValue.substring(7,9), 16);
    var vOpaFloat = vOpa / 256.0;
    return "rgba("+vRed+","+vGreen+","+vBlue+","+vOpaFloat+")";
};
CCValueManager.decodeFont = function(value)
{
    if (value == null) return null;
    var fo = CCValueManager.decodeComplexValue(value);
    var size = fo["size"];
    if (size != null) return size + "px";
    return null;
};
CCValueManager.findIntFromPercentage = function(pValue)
{
    if (pValue == null) return 0;
    try
    {
        pValue = pValue.substring(0,pValue.length-1);
        return CCValueManager.decodeNumber(pValue,0);
    }
    catch (exc)
    {
        return 0;
    }
};
CCValueManager.decodeCSV = function(value)
{
    var result = value.split(";");
    for (var i=0; i<result.length; i++)
    {
        result[i] = result[i].replace(CCValueManager.CHARX_SEMI,";");
    }
    return result;
};
CCValueManager.encodeCSV = function(valueArray)
{
    return valueArray.join(";");
};
CCValueManager.decodeComplexValue = function(value)
{
    if (value == null) return null;
    var vResult = new Array();
    var vCols = CCValueManager.decodeCSV(value);
    for (var i=0; i<vCols.length; i++)
    {
        var vCol = vCols[i];
        var vIndex = vCol.indexOf(":");
        if (vIndex <= 0) continue;
        var vLeft = vCol.substring(0,vIndex);
        var vRight = vCol.substring(vIndex+1);
        vResult[vLeft] = vRight;
    }
    return vResult;
}

CCValueManager.decodePadding = function(value)
{
    var result = new CCPadding();
    if (value.indexOf(':') < 0) 
    {
        var pad = CCValueManager.decodeSize(value,0);
        result.left = pad;
        result.right = pad;
        result.top = pad;
        result.bottom = pad;
    }
    return result;
};
CCValueManager.decodeBoolean = function(vString,vDefaultBoolean)
{
    if (vString == null) return vDefaultBoolean;
    if (vString.toLowerCase() == "true") return true;
    if (vString.toLowerCase() == "false") return false;
    return vDefaultBoolean;
};
CCValueManager.decodeNumber = function(vString,vDefaultNumber)
{
    try
    {
        if (vString == null) return vDefaultNumber;
        return vString-0;
    }
    catch (exc)
    {
        return vDefaultNumber;
    }
};
/*
 * pValue = server value, string
 * pTimezone = server timezone, string
 * result = javascript Date
 */
CCValueManager.decodeDate = function(pValue,pTimezone)
{
    try
    {
        if (pValue == null) return null;
        var result = new Date();
        var vNum = this.decodeNumber(pValue,0);
        result.setTime(vNum);
        vNum += (result.getTimezoneOffset() * 60000);
        result.setTime(vNum);
        if (pTimezone != null)
        {
            var vShift = s_tzOffsets[pTimezone];
            if (vShift != null && vShift != 0)
            {
                vNum = vNum - vShift * 60000;
                result.setTime(vNum);
            }
        }
        return result;
    }
    catch (exc)
    {
        return null;
    }
};
/*
 * pDate = client javascript Date
 * pTimezone = server timezone, string
 * result = number for server
 */
CCValueManager.encodeDate = function(pDate,pTimezone)
{
    try
    {
        if (pDate == null) return null;
        var result = pDate.getTime();
        result = result - pDate.getTimezoneOffset() * 60000;
        if (pTimezone != null)
        {
            var vShift = s_tzOffsets[pTimezone];
            if (vShift != null)
            {
                result = result + vShift * 60000;
            }
        }
        return result;
    }
    catch (exc)
    {
        return null;
    }
};

CCValueManager.extractShortId = function(pId)
{
    var shortId = pId;
    try
    {
        var index1 = shortId.lastIndexOf("-");
        var index2 = shortId.lastIndexOf(":");
        var index = index1;
        if (index2 > index1) index = index2;
        if (index > 0)
        {
            shortId = shortId.substring(index+1); //
        }
    }
    catch (exc) {}
    return shortId;
};

CCValueManager.countEqualObjects = function(a1,a2)
{
    if (a1 == null || a2 == null) return 0;
    if (a1.length == null || a2.length == null) return 0;
    var maxi = a1.length;
    if (a2.length < maxi)
        maxi = a2.length;
    for (var i=0; i<maxi; i++)
    {
        if (a1[i] != a2[i])
        {
            return i;
        }
    }
    return maxi;
};


//CCValueManager.ccReformatToRegex = function(ccNode,ccRegex)
//{
//    if (ccRegex.test(ccNode.value))
//      ccNode.value = ccNode.value.replace(ccRegex,'');
//};
         
//CCValueManager.ccRegisterFieldValueComponent = function(ptid,pvid,pformat,pformatmask)
//{
//    // set up connection
//    var ccvc=document.getElementById(pvid);
//    var cctc=document.getElementById(ptid);
//    cctc.ccValueField = ccvc;
//    ccvc.ccTextField = cctc;
//    // transfer value and convert
//    cctc.value = ccvc.value;
//    ccFormatValueToFormat(cctc,pformat,pformatmask);
//    cctc.ccBeforeValue = cctc.value;
//};

/*
 * Takes textValue from node and converts it to updated text value and
 * logical value 
 */
CCValueManager.formatValueToFormat = function(ccNode,ccFormat,ccFormatmask,ccTimezone)
{
    if (ccFormat == null) return;
    if (ccNode.getRealValue() == null || ccNode.getRealValue() == "")
    {
        ccNode.setTextValue("",null);
        return;
    }
    if (ccFormat == "date" || ccFormat == "time" || ccFormat == "datetime")
        this.formatValueToFormatDate(ccNode,ccFormat,ccTimezone);
    if (ccFormat == "bigdecimal" || ccFormat == "float" || ccFormat == "double" || ccFormat == "long" || ccFormat == "int")
        this.formatValueToFormatBigdecimal(ccNode,ccFormat,ccFormatmask);
};
CCValueManager.formatValueToFormatDate = function(ccNode,ccFormat,ccTimezone)
{
    var vDate = CCValueManager.decodeDate(ccNode.getRealValue(),ccTimezone);
    var vDateStr = CCValueManager.buildDateStringFromDate(vDate,ccFormat);
    ccNode.setTextValue(vDateStr,ccNode.getRealValue());
};
CCValueManager.formatValueToFormatBigdecimal = function(ccNode,ccFormat,ccFormatmask)
{
    var vText = ccNode.getRealValue();
    vText = this.replaceAll(vText,".",this.m_decimalSeparator);
    // thousands
    var vSepIndex = vText.indexOf(this.m_decimalSeparator);
    if (vSepIndex < 0) vSepIndex = vText.length;
    for (var i=0; i<(vSepIndex/3-1); i++)
    {
        var vPos = vSepIndex - (i+1)*3;
        vText = vText.substring(0,vPos) + this.m_thousandSeparator + vText.substring(vPos);
    }
    // decimals
    var vNumberOfDecimals = 0;
    if (ccFormatmask != null)
    {
        var ccDecIndex = ccFormatmask.indexOf("dec");
        if (ccDecIndex >= 0)
            vNumberOfDecimals = parseInt(ccFormatmask.substring(ccDecIndex+3));
    }
    if (ccFormat == "int") vNumberOfDecimals = 0;
    vSepIndex = vText.indexOf(this.m_decimalSeparator);
    if (vSepIndex < 0)
    {
        vText = vText + this.m_decimalSeparator;
        vSepIndex = vText.length-1;
    }
    var vToAdd = vNumberOfDecimals - (vText.length - (vSepIndex+1));
    if (vToAdd > 0)
    {
        for (var i=0; i<vToAdd; i++)
            vText += "0";
    }
    else
    {
        vText = vText.substring(0,vText.length+vToAdd); // vToAdd is negative! 
    }
    if (vText.substring(vText.length-1) == this.m_decimalSeparator)
        vText = vText.substring(0,vText.length-1);
    ccNode.setTextValue(vText,ccNode.getRealValue());
};
CCValueManager.reformatToFormat = function(ccNode,ccFormat,ccFormatmask,ccTimezone)
{
    if (ccFormat == null) return;
    if (ccNode.getTextValue() == null || ccNode.getTextValue() == "") return;
    if (ccFormat == "date" || ccFormat == "time")
        this.reformatToFormatDate(ccNode,ccFormat,ccTimezone);
    else if (ccFormat == "bigdecimal" || ccFormat == "float" || ccFormat == "double" || ccFormat == "long" || ccFormat == "int")
        this.reformatToFormatBigdecimal(ccNode,ccFormat,ccFormatmask);
};
CCValueManager.reformatToFormatDate = function(ccNode,ccFormat,ccTimezone)
{
    var ccNow = new Date();
    var ccValue = ccNode.getTextValue();
    var ccValues = ccValue.match(/(\d+)/g);
    try
    {
        if (ccValues == null) { throw "ccValuesIsNull"; }
        if (ccFormat == "date")
        {
            if (ccValues.length == 1) ccValues[1] = ccNow.getMonth() + 1;
            if (ccValues.length == 2) ccValues[2] = ccNow.getFullYear();
            if (ccValues.length != 3) { throw "DateFormat"; }
            var ccYear = parseInt(ccValues[2]);
            var ccMonth = parseInt(ccValues[1]) - 1;
            var ccDay = parseInt(ccValues[0]);
            if (ccYear < 100) ccYear = 2000 + ccYear;
            var ccCd = new Date();
            ccCd.setFullYear(ccYear,ccMonth,ccDay);
            if (ccCd.getFullYear() != ccYear || ccCd.getMonth() != ccMonth || ccCd.getDate() != ccDay) { ccResetValue(ccNode); return; }
            var vText = this.buildDateString(ccYear,ccMonth,ccDay);
            var vValue = this.encodeDate(ccCd,ccTimezone);
            ccNode.setTextValue(vText,vValue);
        }
        else if (ccFormat == "time")
        {
            if (ccValues.length == 1) ccValues[1] = 0;
            if (ccValues.length == 2) ccValues[2] = 0;
            if (ccValues.length != 3) { throw "TimeFormat"; }
            var ccHour = parseInt(ccValues[0]);
            var ccMinute = parseInt(ccValues[1]);
            var ccSecond = parseInt(ccValues[2]);
            var ccCd = new Date();
            ccCd.setHours(ccHour);
            ccCd.setMinutes(ccMinute);
            ccCd.setSeconds(ccSecond);
            ccCd.setMilliseconds(0);
            var vText = this.buildTimeString(ccHour,ccMinute,ccSecond);
            var vValue = this.encodeDate(ccCd,ccTimezone);
            ccNode.setTextValue(vText,vValue);
        }
    }
    catch (exc)
    {
        this.resetValue(ccNode);
    }
};
CCValueManager.reformatToFormatBigdecimal = function(ccNode,ccFormat,ccFormatmask)
{
    var ccValue = ccNode.getTextValue();
    ccValue = this.replaceAll(ccValue,this.m_thousandSeparator,"");
    ccValue = this.replaceAll(ccValue,this.m_decimalSeparator,".");
    try
    {
        var ccFloat = parseFloat(ccValue);
        if  (isNaN(ccFloat) == false)
        {
            ccNode.setRealValue("" + ccFloat);
            this.formatValueToFormatBigdecimal(ccNode,ccFormat,ccFormatmask);
            ccNode.ccBeforeValue = ccNode.value;
        }
        else
        {
            this.resetValue(ccNode);
        }
    }
    catch (exc)
    {
        this.resetValue(ccNode);
    }
};
CCValueManager.buildDateStringFromDate = function(vDate,vFormat)
{
    if (vFormat == "date")
    {
        return this.buildDateString(vDate.getFullYear(),vDate.getMonth(),vDate.getDate());
    }
    else if (vFormat == "time")
    {
        return this.buildTimeString(vDate.getHours(),vDate.getMinutes(),vDate.getSeconds());
    }
    else if (vFormat == "datetime")
    {
        return this.buildDateString(vDate.getFullYear(),vDate.getMonth(),vDate.getDate()) +
        " " + 
        this.buildTimeString(vDate.getHours(),vDate.getMinutes(),vDate.getSeconds());
    }
};
CCValueManager.buildDateString = function(ccYear,ccMonth,ccDay)
{
    return this.addLeading0(ccDay,2) + this.m_dateSeparator + this.addLeading0(ccMonth+1,2) + this.m_dateSeparator + this.addLeading0(ccYear,4);
};
CCValueManager.buildTimeString = function(ccHour,ccMinute,ccSecond)
{
    return this.addLeading0(ccHour,2) + this.m_timeSeparator + this.addLeading0(ccMinute,2) + this.m_timeSeparator + this.addLeading0(ccSecond,2);
};
CCValueManager.resetValue = function(ccNode)
{
    alert("Your input " + ccNode.getTextValue() + " does not match the desired format - and is reset to its previous value.");
    if (ccNode.getLastValidTextValue() != undefined)
        ccNode.setTextValue(ccNode.getLastValidTextValue(),ccNode.getRealValue());
    else
        ccNode.setTextValue("",null);
};
CCValueManager.addLeading0 = function(ccValue,ccDigits)
{
    var ccResult = "0000000000" + ccValue;
    return ccResult.substring(ccResult.length-ccDigits);
};
CCValueManager.replaceAll = function(pValue,pFrom,pTo)
{
    if (pValue == null)
        return null;
    while (pValue.indexOf(pFrom) >= 0)
    {
        pValue = pValue.replace(pFrom,pTo);
    }
    return pValue;
};
CCValueManager.convertXMLString2JSON = function(xmlString)
{
    var parser = new DOMParser();
    var xml = parser.parseFromString(xmlString, "text/xml");
    return CCValueManager.convertXML2JSON(xml);
};
CCValueManager.convertXML2JSON = function(xml)
{
    var obj = {};
    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = CCValueManager.convertXML2JSON(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(CCValueManager.convertXML2JSON(item));
            }
        }
    }
    return obj;
};
