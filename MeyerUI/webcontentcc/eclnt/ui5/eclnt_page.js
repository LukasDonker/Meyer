function CCRequestContext(page)
{
    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------
    
    this.m_page = null;
    
    // ------------------------------------------------------------------------
    // constructor
    // ------------------------------------------------------------------------
    
    this.initCCRequestContext = function(page)
    {
        this.m_page = page;
    };
    this.initCCRequestContext(page);
};

function CCPage(urlServer,urlAddress,subpageId,owningWindow,pageBrowser)
{
    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------
    
    this.m_urlServer = null;
    this.m_urlAddress = null;
    this.m_subpageId = null;
    this.m_owningWindow = null;
    this.m_pageBrowser= null;
    this.m_lastServerRoundtripTimeStamp = null;
    this.m_fullRootNS = undefined; // everything in front of /faces/ within the URL, e.g. "/demos", without slash at end
    this.m_imageRootNS = undefined; // everything to the last / of the first JSP page loaded, without slash at end
    this.m_notifiedByCallServerElements = undefined;
    this.m_notifiedByPageUpdateElements = undefined;
    this.m_isJustProcessingCallServerElements = undefined;
    
    this.m_postURL = undefined;
    this.m_alwaysUrlParameter = undefined;
    
    this.m_XMLProcessingId = undefined;
    this.m_isJustProcessingXML = undefined;
    this.m_isJustProcessingXMLAndApplyingData = undefined;
    this.m_isJustProcessingCallServerElements = false;
    this.m_dirtyList = undefined; // String/String
    this.m_dirtyGroupInfo = undefined; // String/String
    this.m_callServerCounter = 0;
    this.m_callServerRequestCounter = 0;
    
    this.m_ccSessionCheckId = null;
    
    // ------------------------------------------------------------------------
    // constructor
    // ------------------------------------------------------------------------
    
    this.initCCPage = function(urlServer,urlAddress,subpageId,owningWindow,pageBrowser)
    {
        this.m_dirtyList = new Object(); // Map
        this.m_dirtyGroupInfo = new Object(); // Map
        this.m_notifiedByCallServerElements = new Object();
        this.m_notifiedByPageUpdateElements = new Object();
        this.m_XMLProcessingId = 0;
        this.m_isJustProcessingXML = false;
        this.m_isJustProcessingXMLAndApplyingData = false;
        this.m_isJustProcessingCallServerElements = false;
        this.m_isJustProcessingCallServerElements = false;
        this.m_callServerCounter = 0;
        this.m_callServerRequestCounter = 0;
        this.m_alwaysUrlParameter = new Object();
        CLog.logINF("CCPage - creation, urlServer: " + urlServer);
        CLog.logINF("CCPage - creation, urlAddress: " + urlAddress);
        this.m_urlServer = urlServer;
        this.m_urlAddress = urlAddress;
        if (!this.m_urlAddress.startsWith("/")) this.m_urlAddress = "/" + this.m_urlAddress;
        this.m_subpageId = subpageId;
        this.m_owningWindow = owningWindow;
        this.m_pageBrowser= pageBrowser;
        // full root
        var facesIndex = this.m_urlAddress.indexOf("/faces/");
        this.m_fullRootNS = this.m_urlAddress.substring(0,facesIndex);
        CLog.logINF("m_fullRootNS = " + this.m_fullRootNS);
        // image root
        var questionMarkIndex = this.m_urlAddress.indexOf("?");
        var lastSlashindex = 0;
        if (questionMarkIndex < 0)
            lastSlashindex = this.m_urlAddress.lastIndexOf("/");
        else
            lastSlashindex = this.m_urlAddress.substring(0,questionMarkIndex).lastIndexOf("/");
        if (lastSlashindex > 0)
        {
            this.m_imageRootNS = this.m_urlAddress.substring(0,lastSlashindex);
            // cut /faces/
            if (facesIndex > 0)
            {
                this.m_imageRootNS = this.m_imageRootNS.substring(0,facesIndex) + 
                                     this.m_imageRootNS.substring(facesIndex + "/faces".length);
            }
        }
        CLog.logINF("m_imageRootNS = " + this.m_imageRootNS);
    };
    this.loadInitialPage = function() { this.loadPageFromServer(); };
    
    // ------------------------------------------------------------------------
    // methods
    // ------------------------------------------------------------------------

    this.isJustProcessingXML = function() { return this.m_isJustProcessingXML; };
    this.isJustProcessingXMLAndApplyingData = function() { return this.m_isJustProcessingXMLAndApplyingData; };
    this.setPostURL = function(postURL) { this.m_postURL = postURL; };
    this.checkIfChangedDataExists = function()
    {
        var size = m_dirtyList.length;
        if (size > 0)
            return true;
        else
            return false;
    };
    this.loadPageFromServer = function()
    {
        this.m_lastServerRoundtripTimeStamp = new Date();
        var params = new CCRequestParams(this.m_urlServer + this.m_urlAddress,this.m_subpageId,null);
        params.addParam("cc_clearDump","true");
        params.addParam("cc_initialCall","true");
        var dataTransfer = new CCDataTransfer(params,null,this,this.m_ccSessionCheckId);
        dataTransfer.communicateToServerSynchronous(this.m_pageBrowser.getClientId(),
                                                    this.m_pageBrowser.getBrowserDim(),
                                                    this.m_pageBrowser,
                                                    this.getOriginalURL(),
                                                    new CCRequestContext(this));
    };
    this.loadPageFromServerSuccess = function(dataTransfer)
    {
        CLog.logINF("##### loadPageFromServerSuccess invoked");
        // pre processing
        this.m_ccSessionCheckId = dataTransfer.getResponseCCSessionCheckId();
        this.m_XMLProcessingId++;
        this.m_isJustProcessingXML = true;
        this.m_isJustProcessingXMLAndApplyingData = true;
        // create elements
        var conn = dataTransfer.getConnection();
        var xmlString = conn.responseText;
        // alert("XML:\n\n" + xmlString + "\n\nENDE"); 
        CLog.logINF("##### starting XML response processing")
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlString, "application/xml");
        CLog.logINF("##### passing xmlDoc into pageBrowser")
        this.m_pageBrowser.applyServerXmlDoc(xmlDoc);
        CLog.logINF("##### notifying page update")
        this.notifyPageUpdate();
        // post processing
        this.m_isJustProcessingXMLAndApplyingData = false;
        this.m_isJustProcessingXML = false;
        CLog.logINF("##### finished")
    };
    this.loadPageFromServerFailure = function(dataTransfer)
    {
        var vResponse = "";
        try
        {
            var conn = dataTransfer.getConnection();
            vResponse = conn.responseText;
        }
        catch (exc) {}
        CCClientError.showErrorScreen("",vResponse);
        // CLog.alert("FAILURE OCCURRED DURING COMMUNICATION");
    };
    this.getOriginalURL = function() 
    { 
        return this.m_urlServer + this.m_urlAddress; 
    };
    
    this.registerDirtyInformationWithKeepingExistingValue = function(id,value)
    {
        if (id == null) return;
        if ("dummy" == id) return;
        if (this.isJustProcessingXML()) return;
        if (this.m_dirtyList[id] != null) return;
        this.registerDirtyInformation(id,value,null,true);
    };
    this.registerDirtyInformation = function(id,value,group,forced)
    {
        if (id == null) return;
        if ("dummy" == id) return;
        if (this.isJustProcessingXML() && (forced == undefined  || forced == false)) return; 
        this.m_dirtyList[id] = value;
        if (group != null)
        {
            var previousDirtyId = this.m_dirtyGroupInfo[group];
            if (previousDirtyId != null)
                delete this.m_dirtyList[previousDirtyId];
            this.m_dirtyGroupInfo[group] = id;
        }
    };
    this.getDirtyList = function() { return m_dirtyList; };
    this.callServerWhenPossible = function(caller,id,value,withSettingCausingPageElement)
    {
        var that = this;
        if (this.isJustProcessingXML()) 
        {
            CLog.logINF("########## just processing XML - delaying processing of callServer");
            setTimeout(function() {that.callServerWhenPossible(caller,id,value,withSettingCausingPageElement);},10);
            return;
        }
        else
        {
            this.callServer(caller,id,value,withSettingCausingPageElement,true);
        }
    };
    this.callServer = function(caller,id,value,withSettingCausingPageElement,forced)
    {
        if (this.isJustProcessingXML() && forced == false) 
        {
            CLog.logINF("########## callServer was blocked - still processing XML...");
            return;
        }
        this.m_callServerRequestCounter++;
        // only set causing component if not in call server notification phase:
        // these are the controls that are not responsible for the sync to the server
//        if (withSettingCausingPageElement == true)
//        {
//            if (isJustProcessingCallServerElements() == false)
//            {
//                if (caller != null) 
//                    setCausingComponentCallServer(caller);
//                else
//                    CLog.L.log(CLog.LL_WAR,"No caller was passed with callServer");
//            }
//        }
        this.callServerForced(caller,id,value,false,false,null,withSettingCausingPageElement);
    };

    this.callServerForced = function(caller,id,value,synchronousOnly,asynchronousOnly,addonRunnable,withSettingCausingPageElement)
    {
        this.m_callServerRequestCounter++;
        if (value == null || value.length < 200)
            CLog.logINF("Call server forced was called: " + id + " ==> " + value);
        else
            CLog.logINF("Call server forced was called: " + id + " ==> " + value.substring(0,200));
        // manage statusbarneutral-flag
//        if (caller != null && caller.getStatusbarneutralAsBoolean() == true && id != null)
//        {
//            int indexDot = id.indexOf('.');
//            if (indexDot > 0)
//            {
//                registerDirtyInformation(id.substring(0,indexDot) + ".autotriggered","true",true,null);
//            }
//        }
        // caller management
//        if (withSettingCausingPageElement == true)
//        {
//            if (isJustProcessingCallServerElements() == false && caller != null)
//            {
//                setCausingComponentCallServer(caller);
//            }
//            else
//            {
//                CLog.L.log(CLog.LL_WAR,"No caller was passed callServerForced");
//            }
//        }
//        if (caller != null)
//            CLog.L.logINF("Calling of server is started: caller: " + caller.getClass().getName() + " / " + caller.getId());
//        else
//            CLog.L.log(CLog.LL_INF,"Calling of server is started: caller is null");
        if (value != null && value.indexOf('(') < 0)
            value += "()";
        if (id != null)
            this.registerDirtyInformationWithKeepingExistingValue(id, value);
        if (this.m_isJustProcessingCallServerElements == false)
        {
            CCJSUtils.invokeLater(this,this.runCallServerRunner,new Array(this.m_callServerCounter,synchronousOnly,asynchronousOnly,addonRunnable));
        }
    };
    this.runCallServerRunner = function(callServerCounter,synchronousOnly,asynchronousOnly,addonRunnable)
    {
//        if (m_callServerStoppedCounter > 0)
//        {
//            CLog.L.log(CLog.LL_INF,"No execution of callServerRun - stop counter is: " + m_callServerStoppedCounter);
//            return;
//        }
        // check if already communicated
        if (callServerCounter < this.m_callServerCounter)
        {
            CLog.logINF("No execution of callServerRun - already processed, callServerCounter = " + callServerCounter);
            return;
        }
//        try
        {
            CLog.logINF("Execution of callServerRun - callServerCounter = " + this.m_callServerCounter);
            this.m_callServerCounter++;
//            m_focussedComponentBeforeCallServer = FocusManager.getCurrentManager().getFocusOwner();
//            m_causingPageElementCallServerIsAlreadyDefined = false; // reset...
//            blockBlockingGlassPanes(true);
//            if (addOnRunnable != null)
//            {
//                CLog.L.log(CLog.LL_INF,"Addonrunnable is executed");
//                addOnRunnable.run();
//            }
            var facesSlash = this.m_postURL.indexOf("/faces/");
            var pagePostURL = this.m_fullRootNS + this.m_postURL.substring(facesSlash);
            var params = new CCRequestParams(this.m_urlServer  + this.m_postURL,this.m_subpageId,this.m_alwaysUrlParameter);
            var notifyResult = this.notifyCallServer();
            if (notifyResult == true)
            {
                this.addDirtyInformationToRequest(params);
                var dataTransfer = new CCDataTransfer(params,this.getJSessionId(),this,this.m_ccSessionCheckId);
//                dataTransfer.addDataTransferListener(new MyUpdateDataTransferListener(dataTransfer));
//                m_pageBrowser.outputMessage("",IPageBrowser.MT_INFO,10);
                CLog.logINF(" ===== Communication to server triggered - URL = " + params.getUrl());
                dataTransfer.communicateToServerSynchronous(this.m_pageBrowser.getClientId(),
                                                            this.m_pageBrowser.getBrowserDim(),
                                                            this.m_pageBrowser,
                                                            this.getOriginalURL(),
                                                            new CCRequestContext(this));
            }
            else
            {
                CLog.logINF("Communication to server not executed (blocked in notification phase)");
//                blockBlockingGlassPanes(false);
                return;
            }
//            if (asynchrounousOnly == true)
//                blockBlockingGlassPanes(false);
        }
//        catch (exc)
//        {
//            CLog.logERR("Problem in runCallServerRunner",exc);
//            alert("Problem in runCallServerRunner " + exc);
////            blockBlockingGlassPanes(false);
////            m_pageBrowser.outputThrowable(t);
//        }
        CLog.logINF("synch end - now waiting for server response");
    };
    this.addDirtyInformationToRequest = function(params)
    {
        for (var id in this.m_dirtyList)
        {
            var value = this.m_dirtyList[id];
            params.addParam(id,value);
        }
        CLog.logINF("Clearing dirty list");
        this.m_dirtyList = new Object();
        this.m_dirtyGroupInfo = new Object();
    };
    this.getJSessionId = function() { return undefined; }; //XXX
    
    
    this.addNotifiedByPageUpdateElements  = function(pe) { this.m_notifiedByPageUpdateElements[pe.getId()] = pe; };
    this.removeNotifiedByPageUpdateElements = function(pe) { delete this.m_notifiedByPageUpdateElements[pe.getId()]; };
    this.notifyPageUpdate = function()
    {
        var nbs = new Object();
        for (var id in this.m_notifiedByPageUpdateElements)
            nbs[id] = this.m_notifiedByPageUpdateElements[id];
        for (var id in nbs) 
        {
            var pageElement = nbs[id];
            if (pageElement.notifyPageUpdate == null) continue;
            pageElement.notifyPageUpdate();
        }
    }
    
    this.addNotifiedByCallServerElements = function(pe) { this.m_notifiedByCallServerElements[pe.getId()] = pe; };
    this.removeNotifiedByCallServerElements = function(pe) { delete this.m_notifiedByCallServerElements[pe.getId()]; };
    this.notifyCallServer = function()
    {
        var result = true;
        this.m_isJustProcessingCallServerElements = true;
//        m_page_FlushArea.sendFlushActions();
        // extra array: otherwise concurrent modification exception
        var nbcses = new Object();
        for (var id in this.m_notifiedByCallServerElements)
            nbcses[id] = this.m_notifiedByCallServerElements[id];
        for (var id in nbcses) 
        {
//            try
            {
                var pageElement = nbcses[id];
                if (pageElement.notifyCallServer == null) continue;
                var notifyResult = pageElement.notifyCallServer();
                if (notifyResult == false)
                    result = false;
            }
//            catch (t)
//            {
//                CLog.logERR("Problem during call server notification",t);
//            }
        }
        this.m_isJustProcessingCallServerElements = false;
        return result;
    };
    this.updateUrl = function(vUrl)
    {
        if (vUrl == null) return null;
        var vResult = vUrl;
        if (vResult.length > 0 && vResult.substring(0,1) == "/")
        {
            vResult = this.m_fullRootNS + vResult;
        }
        return vResult;
    }
    
    // ------------------------------------------------------------------------
    // call constructor
    // ------------------------------------------------------------------------
    
    this.initCCPage(urlServer,urlAddress,subpageId,owningWindow,pageBrowser);
    
//    private void loadPageFromServer()
//    {
//        try
//        {
//            m_lastServerRoundtripTimeStamp = System.currentTimeMillis();
//            RequestParams params = new RequestParams(m_urlServer + m_urlAddress,m_subpageId,null);
//            params.addParam("cc_clearDump","true");
//            params.addParam("cc_initialCall","true");
//            DataTransfer dataTransfer = new DataTransfer(params,null);
//            dataTransfer.addDataTransferListener(new MyInitDataTransferListener(dataTransfer));
//            m_pageBrowser.outputMessage("Loading page...",IPageBrowser.MT_INFO,10);
//            dataTransfer.communicateToServerSynchronous(PageBrowser.getClientId(),
//                                                        getClientSize(),
//                                                        null,
//                                                        getOriginalURL(),
//                                                        new CommHttpRequestContext(m_this)); // the component is passed as null ==> no popup is coming up in case of connection problems
//        }
//        catch (Throwable t)
//        {
//            CLog.L.log(LL_ERR,"",t);
//            m_pageBrowser.outputMessage("Error: " + t.toString(),IPageBrowser.MT_ERROR);
//        }
//    }
}