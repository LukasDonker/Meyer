/* ############################################################################
 * CCPOPUPMENUElement
 * ############################################################################ */

function CCPOPUPMENUElement()
{
    this.m_menu = null;
    this.m_firstApplyComponentData = true;
    this.m_lastCallingPageElement = null;
    this.m_lastCallingEvent = null;
    this.m_lastCallingPageElement2 = null;
    this.m_lastCallingEvent2 = null;
    this.init_CCPOPUPMENUElement = function()
    {
        this.init_CCInvisibleControl();
        this.addChildNode = this.addChildNode_CCPOPUPMENUElement;
        this.applyComponentData = this.applyComponentData_CCPOPUPMENUElement;
        this.reactOnEvent = this.reactOnEvent_CCPOPUPMENUElement; 
        this.removeChildNode = this.removeChildNode_CCPOPUPMENUElement;
        this.destroy = this.destroy_CCPOPUPMENUElement;
        this.m_ccClassName = "CCPOPUPMENUElement";
        this.m_menu = new sap.ui.commons.Menu();
    };
    this.applyComponentData_CCPOPUPMENUElement = function() 
    { 
        if (this.m_firstApplyComponentData == true)
        {
            this.m_firstApplyComponentData = false;
            s_pageElementCrossReference[this.getId()] = this;
//            try
//            {
//                var shortId = this.getId();
//                var index1 = shortId.lastIndexOf("-");
//                var index2 = shortId.lastIndexOf(":");
//                var index = index1;
//                if (index2 > index1) index = index2;
//                if (index > 0)
//                {
//                    shortId = shortId.substring(index+1); //
//                    s_pageElementCrossReference[shortId] = this;
//                }
//            }
//            catch (exc) { CLog.logINF("",exc); }
        }
        this.applyComponentData_CCInvisibleControl(); 
    };
    this.addChildNode_CCPOPUPMENUElement = function(ccControl,index) 
    { 
        this.addChildNode_CCInvisibleControl(ccControl,index);
        this.m_menu.insertItem(ccControl.m_menu,index);
    };
    this.removeChildNode_CCPOPUPMENUElement = function(ccControl) 
    { 
        this.removeChildNode_CCInvisibleControl(ccControl);
        this.m_menu.removeItem(ccControl.m_menu);
    };
    this.reactOnEvent_CCPOPUPMENUElement = function(ccEvent) { this.reactOnEvent_CCInvisibleControl(ccEvent); };
    this.destroy_CCPOPUPMENUElement = function()
    {
        this.destroy_CCInvisibleControl();
        this.getPage().removeNotifiedByPageUpdateElements(this);
        s_pageElementCrossReference[this.getId()] = null;
    }
    this.notifyPageUpdate = function()
    {
        if (this.m_lastCallingPageElement != null)
        {
            this.openPopupMenuExecute();
            this.m_lastCallingPageElement = null;
            this.m_lastCallingEvent = null;
        }
    };
    this.openPopupMenu = function(pe,ccEvent)
    {
        this.m_lastCallingPageElement = pe;
        this.m_lastCallingEvent = ccEvent;
        this.m_lastCallingPageElement2 = pe;
        this.m_lastCallingEvent2 = ccEvent;
        if (pe.m_popupmenuloadroundtrip != true)
        {
            this.openPopupMenuExecute();
        }
        else
        {
            this.getPage().addNotifiedByPageUpdateElements(this);
            var loadPE = pe;
            var gridIndex = -1;
            if (this.m_lastCallingPageElement2.m_ccClassName == "CCFIXGRIDROWElement")
            {
                gridIndex = this.m_lastCallingPageElement2.getIndex();
                loadPE = pe.getParent();
            }
            this.getPage().callServer(loadPE,loadPE.getId()+".action","popupmenuload(harry  ,"+gridIndex+")");
        }
    };
    this.openPopupMenuExecute = function()
    {
        var pe = this.m_lastCallingPageElement;
        var ccEvent = this.m_lastCallingEvent;
        var pTarget = ccEvent.getEventObject().target;
        var pTargetRect = pTarget.getBoundingClientRect();
        var vX = ccEvent.getEventObject().clientX - pTargetRect.left;
        var vY = ccEvent.getEventObject().clientY - pTargetRect.top;
        var eDock = sap.ui.core.Popup.Dock;
        this.m_menu.open(false,
                         null,
                         eDock.BeginTop,
                         eDock.BeginTop,
                         pTarget,
                         vX + " " + vY);
    };
    this.sendCommand = function(pCommand)
    {
        if (this.m_lastCallingPageElement2 != null)
        {
            var gridIndex = "-1";
            if (this.m_lastCallingPageElement2.m_ccClassName == "CCFIXGRIDROWElement")
            {
                gridIndex = this.m_lastCallingPageElement2.getIndex();
                this.m_lastCallingPageElement2 = this.m_lastCallingPageElement2.getParent(); // FIXGRID is the event processor
            }
            this.getPage().callServer(this.m_lastCallingPageElement2,
                                      this.m_lastCallingPageElement2.getId()+".action",
                                      pCommand + "(eclntpopupmenu,0,0,0,0,"+gridIndex+")");
        }
        this.m_lastCallingPageElement2 = null;
        this.m_lastCallingEvent2 = null;
    };
    this.init_CCPOPUPMENUElement();
}
CCPOPUPMENUElement.prototype = new CCInvisibleControl();
s_CCPageElement_ElementCreators["popupmenu"] = function() { return new CCPOPUPMENUElement(); }; 
