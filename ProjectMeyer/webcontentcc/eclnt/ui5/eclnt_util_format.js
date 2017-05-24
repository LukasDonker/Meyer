// RISCFormatted works with an abstracted text component for text input or output.
// API of element that does the text input:
// .getRealValue() => real, unformatted value, server value, e.g. Date for date
// .setRealValue(value) => real, unformatted value, server value
// .setTextValue(string,real) => text representation
// .getCurrentTextValue() => currently rendered/input text
// .notifyReset()
var RISCFormatter = new Object();

RISCFormatter.DECIMAL_SEPARATOR = ",";
RISCFormatter.THOUSAND_SEPARATOR = ".";
RISCFormatter.DATE_SEPARATOR = ".";
RISCFormatter.TIME_SEPARATOR = ":";

RISCFormatter.transferRealValue = function(ccNode,ccFormat,ccFormatmask,ccTimezone)
{
    if (ccNode.getRealValue() == null || ccNode.getRealValue() == "")
    {
        ccNode.setTextValue("",ccNode.getRealValue());
        return;
    }
    if (ccFormat == null) 
    {
        ccNode.setTextValue(ccNode.getRealValue());
        return;
    }
    if (ccFormat == "date" || ccFormat == "time" || ccFormat == "datetime")
        this._formatValueToFormatDate(ccNode,ccFormat,ccTimezone);
    else if (ccFormat == "bigdecimal" || ccFormat == "float" || ccFormat == "double" || ccFormat == "long" || ccFormat == "int" || ccFormat == "biginteger")
        this._formatValueToFormatBigdecimal(ccNode,ccFormat,ccFormatmask);
    else
        ccNode.setTextValue(ccNode.getRealValue()+"");
};
RISCFormatter._formatValueToFormatDate = function(ccNode,ccFormat,ccTimezone)
{
    var vDate = CCValueManager.decodeDate(ccNode.getRealValue(),ccTimezone);
    var vDateStr = this._buildDateStringFromDate(vDate,ccFormat);
    ccNode.setTextValue(vDateStr,ccNode.getRealValue());
};
RISCFormatter._formatValueToFormatBigdecimal = function(ccNode,ccFormat,ccFormatmask)
{
    var vText = ccNode.getRealValue();
    var vIsMinus = false;
    vText = CCValueManager.replaceAll(vText,".",RISCFormatter.DECIMAL_SEPARATOR);
    if (vText.length > 1 && vText.charAt(0) == "-")
    {
        vText = vText.substring(1);
        vIsMinus = true;
    }
    // thousands
    var vSepIndex = vText.indexOf(RISCFormatter.DECIMAL_SEPARATOR);
    if (vSepIndex < 0) vSepIndex = vText.length;
    for (var i=0; i<(vSepIndex/3-1); i++)
    {
        var vPos = vSepIndex - (i+1)*3;
        vText = vText.substring(0,vPos) + RISCFormatter.THOUSAND_SEPARATOR + vText.substring(vPos);
    }
    if (vIsMinus) vText = "-" + vText;
    // decimals
    var vNumberOfDecimals = 2;
    if (ccFormatmask != null)
    {
        var ccDecIndex = ccFormatmask.indexOf("dec");
        if (ccDecIndex >= 0)
        {
            var ccMaxIndex = ccFormatmask.indexOf("max");
            if (ccMaxIndex < 0)
            {
                vNumberOfDecimals = parseInt(ccFormatmask.substring(ccDecIndex+3));
            }
            else
            {
                var vSepIndex = vText.indexOf(RISCFormatter.DECIMAL_SEPARATOR);
                if (vSepIndex < 0)
                {
                    vNumberOfDecimals = 0;
                }
                else
                {
                    vNumberOfDecimals = parseInt(ccFormatmask.substring(ccDecIndex+6));
                    var vCurrentNumberOfDecimals = vText.length - (vSepIndex+1);
                    if (vCurrentNumberOfDecimals < vNumberOfDecimals)
                        vNumberOfDecimals = vCurrentNumberOfDecimals;
                }
            }
            if (isNaN(vNumberOfDecimals)) vNumberOfDecimals = 0;
        }
    }
    if (ccFormat == "int") vNumberOfDecimals = 0;
    else if (ccFormat == "long") vNumberOfDecimals = 0;
    else if (ccFormat == "biginteger") vNumberOfDecimals = 0;
    vSepIndex = vText.indexOf(RISCFormatter.DECIMAL_SEPARATOR);
    if (vSepIndex < 0)
    {
        vText = vText + RISCFormatter.DECIMAL_SEPARATOR;
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
        // MISSING: rounding!!!
        vText = vText.substring(0,vText.length+vToAdd); // vToAdd is negative! 
    }
    if (vText.substring(vText.length-1) == RISCFormatter.DECIMAL_SEPARATOR)
        vText = vText.substring(0,vText.length-1);
    ccNode.setTextValue(vText,ccNode.getRealValue());
};

RISCFormatter.transferCurrentText = function(ccNode,ccFormat,ccFormatmask,ccTimezone)
{
    if (ccFormat == null)
    {
        ccNode.setTextValue(ccNode.getCurrentTextValue(),ccNode.getCurrentTextValue());
        return;
    }
    if (ccNode.getCurrentTextValue() == null || ccNode.getCurrentTextValue() == "")
    {
        ccNode.setTextValue(ccNode.getCurrentTextValue(),null);
        return;
    }
    if (ccFormat == "date" || ccFormat == "time" || ccFormat == "datetime")
        this._reformatToFormatDate(ccNode,ccFormat,ccFormatmask,ccTimezone);
    else if (ccFormat == "bigdecimal" || ccFormat == "float" || ccFormat == "double" || ccFormat == "long" || ccFormat == "int")
        this._reformatToFormatBigdecimal(ccNode,ccFormat,ccFormatmask,ccTimezone);
    else
        this.setTextValue(ccNode.getCurrentTextValue(),ccNode.getCurrentTextValue());
};
RISCFormatter._reformatToFormatDate = function(ccNode,ccFormat,ccFormatmask,ccTimezone)
{
    var ccNow = new Date();
    var ccValue = ccNode.getCurrentTextValue();
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
            if (ccCd.getFullYear() != ccYear || ccCd.getMonth() != ccMonth || ccCd.getDate() != ccDay) 
            { 
                this._resetValue(ccNode,ccFormat,ccFormatmask,ccTimezone); 
                return; 
            }
            var vText = this._buildDateString(ccYear,ccMonth,ccDay);
            var vValue = CCValueManager.encodeDate(ccCd,ccTimezone);
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
            if (ccCd.getHours() != ccHour || ccCd.getMinutes() != ccMinute || ccCd.getSeconds() != ccSecond) 
            { 
                this._resetValue(ccNode,ccFormat,ccFormatmask,ccTimezone); 
                return; 
            }
            var vText = this._buildTimeString(ccHour,ccMinute,ccSecond);
            var vValue = CCValueManager.encodeDate(ccCd,ccTimezone);
            ccNode.setTextValue(vText,vValue);
        }
        else if (ccFormat == "datetime")
        {
            var dateStr = ccValue;
            var timeStr = "";
            var spaceIndex = ccValue.indexOf(" ");
            if (spaceIndex > 0)
            {
                dateStr = ccValue.substring(0,spaceIndex);
                timeStr = ccValue.substring(spaceIndex+1);
            }
            var ccDValues = dateStr.match(/(\d+)/g);
            if (ccDValues == null) ccDValues = new Array();
            if (ccDValues.length == 1) ccDValues[1] = ccNow.getMonth() + 1;
            if (ccDValues.length == 2) ccDValues[2] = ccNow.getFullYear();
            if (ccDValues.length != 3) { throw "DateFormat"; }
            var ccTValues = timeStr.match(/(\d+)/g); 
            if (ccTValues == null) ccTValues = new Array();
            if (ccTValues.length == 0) ccTValues[0] = 0;
            if (ccTValues.length == 1) ccTValues[1] = 0;
            if (ccTValues.length == 2) ccTValues[2] = 0;
            if (ccTValues.length != 3) { throw "TimeFormat"; }
            var ccCd = new Date();
            var ccYear = parseInt(ccDValues[2]);
            var ccMonth = parseInt(ccDValues[1]) - 1;
            var ccDay = parseInt(ccDValues[0]);
            if (ccYear < 100) ccYear = 2000 + ccYear;
            var ccHour = parseInt(ccTValues[0]);
            var ccMinute = parseInt(ccTValues[1]);
            var ccSecond = parseInt(ccTValues[2]);
            ccCd.setFullYear(ccYear,ccMonth,ccDay);
            ccCd.setHours(ccHour);
            ccCd.setMinutes(ccMinute);
            ccCd.setSeconds(ccSecond);
            ccCd.setMilliseconds(0);
            if (ccCd.getFullYear() != ccYear || ccCd.getMonth() != ccMonth || ccCd.getDate() != ccDay ||
                ccCd.getHours() != ccHour || ccCd.getMinutes() != ccMinute || ccCd.getSeconds() != ccSecond) 
            { 
                this._resetValue(ccNode,ccFormat,ccFormatmask,ccTimezone); 
                return; 
            }
            var vText = this._buildDateStringFromDate(ccCd,"datetime");
            var vValue = CCValueManager.encodeDate(ccCd,ccTimezone);
            ccNode.setTextValue(vText,vValue);
        }
    }
    catch (exc)
    {
        this._resetValue(ccNode,ccFormat,ccFormatmask,ccTimezone);
    }
};
RISCFormatter._reformatToFormatBigdecimal = function(ccNode,ccFormat,ccFormatmask,ccTimezone)
{
    var ccValue = ccNode.getCurrentTextValue();
    ccValue = CCValueManager.replaceAll(ccValue,RISCFormatter.THOUSAND_SEPARATOR,"");
    ccValue = CCValueManager.replaceAll(ccValue,RISCFormatter.DECIMAL_SEPARATOR,".");
    try
    {
        var ccFloat = parseFloat(ccValue);
        if  (isNaN(ccFloat) == false)
        {
            ccNode.setRealValue("" + ccFloat);
            RISCFormatter._formatValueToFormatBigdecimal(ccNode,ccFormat,ccFormatmask);
            ccNode.ccBeforeValue = ccNode.value;
        }
        else
        {
            RISCFormatter._resetValue(ccNode,ccFormat,ccFormatmask,ccTimezone);
        }
    }
    catch (exc)
    {
        this.resetValue(ccNode,ccFormat,ccFormatmask,ccTimezone);
    }
};
RISCFormatter._buildDateStringFromDate = function(vDate,vFormat)
{
    if (vFormat == "date")
    {
        return this._buildDateString(vDate.getFullYear(),vDate.getMonth(),vDate.getDate());
    }
    else if (vFormat == "time")
    {
        return this._buildTimeString(vDate.getHours(),vDate.getMinutes(),vDate.getSeconds());
    }
    else if (vFormat == "datetime")
    {
        return this._buildDateString(vDate.getFullYear(),vDate.getMonth(),vDate.getDate()) +
        " " + 
        this._buildTimeString(vDate.getHours(),vDate.getMinutes(),vDate.getSeconds());
    }
};
RISCFormatter._buildDateString = function(ccYear,ccMonth,ccDay)
{
    return this._addLeading0(ccDay,2) + this.m_dateSeparator + 
           this._addLeading0(ccMonth+1,2) + this.m_dateSeparator + 
           this._addLeading0(ccYear,4);
};
RISCFormatter._buildTimeString = function(ccHour,ccMinute,ccSecond)
{
    return this._addLeading0(ccHour,2) + this.m_timeSeparator + 
           this._addLeading0(ccMinute,2) + this.m_timeSeparator + 
           this._addLeading0(ccSecond,2);
};
RISCFormatter._resetValue = function(ccNode,ccFormat,ccFormatmask,ccTimezone)
{
    // transfer last real value...
    ccNode.notifyReset();
    this.transferRealValue(ccNode,ccFormat,ccFormatmask,ccTimezone);
//    alert("Your input " + ccNode.getCurrentTextValue() + " does not match the desired format - and is reset to its previous value.");
//    if (ccNode.getLastValidTextValue() != undefined)
//        ccNode.setTextValue(ccNode.getLastValidTextValue(),ccNode.getRealValue());
//    else
//        ccNode.setTextValue("",null);
};
RISCFormatter._addLeading0 = function(ccValue,ccDigits)
{
    var ccResult = "0000000000" + ccValue;
    return ccResult.substring(ccResult.length-ccDigits);
};
RISCFormatter._buildDateStringFromDate = function(vDate,vFormat)
{
    if (vFormat == "date")
    {
        return this._buildDateString(vDate.getFullYear(),vDate.getMonth(),vDate.getDate());
    }
    else if (vFormat == "time")
    {
        return this._buildTimeString(vDate.getHours(),vDate.getMinutes(),vDate.getSeconds());
    }
    else if (vFormat == "datetime")
    {
        return this._buildDateString(vDate.getFullYear(),vDate.getMonth(),vDate.getDate()) +
        " " + 
        this._buildTimeString(vDate.getHours(),vDate.getMinutes(),vDate.getSeconds());
    }
};
RISCFormatter._buildDateString = function(ccYear,ccMonth,ccDay)
{
    return this._addLeading0(ccDay,2) + this.DATE_SEPARATOR + 
           this._addLeading0(ccMonth+1,2) + this.DATE_SEPARATOR + 
           this._addLeading0(ccYear,4);
};
RISCFormatter._buildTimeString = function(ccHour,ccMinute,ccSecond)
{
    return this._addLeading0(ccHour,2) + this.TIME_SEPARATOR + 
           this._addLeading0(ccMinute,2) + this.TIME_SEPARATOR + 
           this._addLeading0(ccSecond,2);
};

