var CCHttp = new Object();
CCHttp.s_nextDataTransferShowsErrorScreen = false;
CCHttp.s_dataTransferRequestCounter = (new Date()).getTime();

/* ############################################################################
 * CCRequestParams
 * 
 * paramsToAdd => normal String,String Map.
 * ############################################################################ */

CCRequestParams = function(url,subpageId,paramsToAdd)
{
    var m_url = url;
    var m_subpageId = subpageId;
    var m_params = new Array();
    if (paramsToAdd != null)
    {
        for (var key in paramsToAdd) m_params[key] = paramsToAdd[key];
    }
    this.addParam = function (name,value)
    {
        m_params[name] = value;
    };
    this.getParam = function(name)
    {
        return m_params[name];
    };
    this.getParamNames = function()
    {
        var result = new Array();
        for (var key in m_params) result.push(key);
        return result;
    };
    this.getParamMap = function() { return m_params; };
    this.getUrl = function() { return m_url; };
    this.getSubpageId = function() { return m_subpageId; };
};

/* ############################################################################
 * CCDataTransfer
 * 
 * requestParams => CCRequestParams
 * sessionId => String
 * ############################################################################ */

CCDataTransfer = function(requestParams,sessionId,callBack,ccSessionCheckId)
{
    this.m_transferXMLCallCounter = 0;
    this.m_startTime = null;
    this.m_endTime = null;
    this.m_requestParams = requestParams;
    this.m_sessionId = sessionId;
    this.m_ccSessionCheckId = ccSessionCheckId;
    this.m_responseCCSessionCheckId = null;
    this.m_requestId = 0;
    this.m_conn = null;
    this.m_callBack = callBack;
    
    CCHttp.s_dataTransferRequestCounter++;
    this.m_requestId = CCHttp.s_dataTransferRequestCounter;
    
    /* ------------------------------------------------------------------------
     * browserDim => CCSize
     * referenceComponent => CCComponent
     * requestContext => ...
     * ------------------------------------------------------------------------ */
    this.communicateToServerSynchronous = function(clientId,browserDim,referenceComponent,originalURL,requestContext)
    {
        this.transferXML(clientId,browserDim,referenceComponent,originalURL,requestContext);
        // transferXMLFinished();
    };
    
    /* ------------------------------------------------------------------------ */
    this.getConnection = function() { return this.m_conn; };
    this.getResponseCCSessionCheckId = function() { return this.m_responseCCSessionCheckId; }
    
    /* ------------------------------------------------------------------------
     * browserDim => CCSize
     * referenceComponent => CCComponent
     * requestContext => ...
     * ------------------------------------------------------------------------ */
    this.transferXML = function(clientId,browserDim,referenceComponent,originalURL,requestContext)
    {
        try
        {
            this.m_transferXMLCallCounter++;
            if (CCHttp.s_nextDataTransferShowsErrorScreen == true)
            {
                CCHttp.s_nextDataTransferShowsErrorScreen = false;
                throw "FileNotFoundExecption";
            }
            this.m_startTime = new Date();
            CLog.logINF("transfer of XML started, assembling request");
            // build connection
            var urlString = this.m_requestParams.getUrl();
            // conn.setRequestProperty("Accept-Encoding","gzip");
            // without the following line, no "Umlaute" will be properly received on server side" !!!
            var vStr = this.buildPostString(clientId);
            this.m_conn = new XMLHttpRequest();
            CLog.logINF("The URL is: " + this.m_requestParams.getUrl());
            this.m_conn.open("POST",this.m_requestParams.getUrl(),true);
            this.m_conn.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
            this.m_conn.setRequestHeader("Content-length", vStr.length);
            this.m_conn.setRequestHeader("Connection", "close");
            this.m_conn.setRequestHeader("eclnt-language","en"); //XXX
            this.m_conn.setRequestHeader("eclnt-country","de"); //XXX
            this.m_conn.setRequestHeader("eclnt-orientation","ltr"); //XXX
            this.m_conn.setRequestHeader("eclnt-font","Trebuchet MS"); //XXX
            this.m_conn.setRequestHeader("eclnt-timezone","CET"); //XXX
            this.m_conn.setRequestHeader("eclnt-client","ui5"); //XXX
            this.m_conn.setRequestHeader("eclnt-ip","0.0.0.0"); //XXX
            this.m_conn.setRequestHeader("eclnt-id",clientId);
            this.m_conn.setRequestHeader("eclnt-requestid",this.m_requestId+"");
            this.m_conn.setRequestHeader("eclnt-username","default");
            if (originalURL != null) this.m_conn.setRequestHeader("eclnt-originalurl",originalURL);
            CLog.logINF("The requestid is: " + this.m_requestId);
            if (browserDim != null)
            {
                this.m_conn.setRequestHeader("eclnt-width",browserDim.width+"");
                this.m_conn.setRequestHeader("eclnt-height",browserDim.height+"");
            }
            var that = this;
            this.m_conn.onreadystatechange = function()
            {
                CLog.log(CLog.LL_INF,"xmlhttp onreadystatechange: " + 
                                      that.m_conn.readyState + "/" + 
                                      that.m_conn.status + "/" + 
                                      that.m_conn.statusText);
                if (that.m_conn.readyState == 4 && that.m_conn.status == 200)
                {
                    if (that.m_conn.responseText != null &&
                        that.m_conn.responseText.length > 0)
                    {
                        that.privateCallbackFunctionSuccess();
                        return;
                    }
                    else
                    {
                        that.privateCallbackFunctionFailure();
                        return;
                    }
                }
                if (that.m_conn.readyState == 4 && that.m_conn.status != 200)
                {
                    that.privateCallbackFunctionFailure();
                    return;
                }
            };
            CLog.logINF("Sending request: " + vStr);
            this.m_conn.send(vStr);
            CLog.logINF("Sending request finished");
        }
        catch (exc)
        {
            alert(exc);
        }
    };
    /* ------------------------------------------------------------------------ */
    this.privateCallbackFunctionSuccess = function()
    {
        CLog.logINF("Success");
        this.m_responseCCSessionCheckId = this.m_conn.getResponseHeader("ccsessioncheckid");
        this.m_callBack.loadPageFromServerSuccess(this);
    };
    /* ------------------------------------------------------------------------ */
    this.privateCallbackFunctionFailure = function()
    {
        CLog.logINF("Failure\n" + this.m_conn.readyState + "\n" + this.m_conn.status + "\n" + this.m_conn.statusText);
        try
        {
            var reload = this.m_conn.getResponseHeader("eclnt-reload");
            if (reload == "true")
            {
                location.reload();
                return;
            }
        }
        catch (exc) {}
        this.m_callBack.loadPageFromServerFailure(this);
    };
    /* ------------------------------------------------------------------------
     * buildPostString
     * ------------------------------------------------------------------------ */
    this.buildPostString = function(clientId)
    {
        var buffer = new Array();
        var i = 0;
        for (var key in this.m_requestParams.getParamMap())
        {
            var value = this.m_requestParams.getParam(key);
            if (value == null)
                value = "ccnulllluncc";
            if (i != 0) buffer.push("&");
            buffer.push(encodeURIComponent(key));
            buffer.push("=");
            buffer.push(encodeURIComponent(value));
            i++;
        }
        if (buffer.length != 0)
            buffer.push("&");
        buffer.push("cc_subpageId="+this.m_requestParams.getSubpageId());
        if (clientId != null)
            buffer.push("&cc_clientId="+clientId);
        if (this.m_ccSessionCheckId != null)
            buffer.push("&ccsessioncheckid="+this.m_ccSessionCheckId);
        var vResult = buffer.join("");
        CLog.logINF(">>>>>>>>>> POSTSTRING: " + vResult);
        return vResult;
    };
};

/* ----------------------------------------------------------------------------
 * processGet
 * ---------------------------------------------------------------------------- */
CCHttp.processGet = function(pUrl,fCallBack)
{
    CLog.log(CLog.LL_INF,"processGet: " + pUrl);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",pUrl,true);
    xmlhttp.onreadystatechange = function()
    {
        CLog.log(CLog.LL_INF,"xmlhttp onreadstatechange: " + 
                               xmlhttp.readyState + "/" + 
                               xmlhttp.status + "/" + 
                               xmlhttp.statusText);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            fCallBack(xmlhttp);
        }
    };
    xmlhttp.send(null);
};

/* ---------------------------------------------------------------------------- */
CCHttp.parseXmlResponse = function(xmlhttp)
{
    alert(xmlhttp.responseText);
    var rootDoc = xmlhttp.responseXML;
    CCHttp.dumpNode(rootDoc.firstChild);
};

/* ---------------------------------------------------------------------------- */
CCHttp.dumpNode = function(pNode)
{
    if (pNode.tagName == null)
        return;
    CLog.logWAR("Node: " + pNode.tagName);
    for (var i=0; i<pNode.childNodes.length; i++)
    {
        var pSubNode = pNode.childNodes[i];
        CCHttp.dumpNode(pSubNode);
    }        
};