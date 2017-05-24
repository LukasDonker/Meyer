/* ############################################################################
 * CCSize
 * ############################################################################ */

function CCSize(pWidth,pHeight)
{
    if (pWidth != null)
        this.width = pWidth*1;
    if (pHeight != null)
        this.height = pHeight*1;
}

/* ############################################################################
 * CCEvent
 * ############################################################################ */

var s_lastEventHash = null;
var s_pageElementCrossReference = new Object();

var CCEvent_mouseup = "mouseup";
var CCEvent_mousedown = "mousedown";
var CCEvent_mouseover = "mouseover";
var CCEvent_dblclick = "dblclick";
var CCEvent_focus = "focus";
var CCEvent_blur = "blur";
var CCEvent_keyup = "keyup";

function CCEvent(eventId,eventObject,eventSourceElement)
{
    this.m_eventId = eventId;
    this.m_eventObject = eventObject;
    this.m_eventSourceElement = eventSourceElement;
    this.m_elementStack = new Array();
    this.getEventId = function() { return this.m_eventId; };
    this.getEventObject = function() { return this.m_eventObject; };
    this.getEventHash = function() 
    { 
        var vResult = this.m_eventId;
        if (this.m_eventObject != null)
        {
            vResult += this.m_eventObject.timeStamp;
        }
        else
        {
            vResult += (new Date()).getTime();
        }
        return vResult;
    };
    this.getTriggeringElement = function()
    {
        return this.m_elementStack[0];
    };
}

/* ############################################################################
 * CCPageElement
 * Management of hierarchy of page elements. Reacting on new XML (passed
 * as DOM tree). No UI relevance on this level!
 * ############################################################################ */

var s_CCPageElement_ElementCreators = new Array();
function CCPageElement()
{
    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------
    
    this.m_ccClassName = null;
    this.m_parent = null;
    this.m_children = null;
    this.m_page = null;
    this.m_id = null;
    this.m_attributes = null;
    this.m_attributesChanged = null;
    this.addChildNode = null;
    this.applyComponentData = null;
    this.removeChildNode = null;
    
    // ------------------------------------------------------------------------
    // constructor
    // ------------------------------------------------------------------------
    
    this.init_CCPageElement = function()
    {
        this.addChildNode = this.addChildNode_CCPageElement;
        this.removeChildNode = this.removeChildNode_CCPageElement;
        this.applyComponentData = this.applyComponentData_CCPageElement;
        this.destroy = this.destroy_CCPageElement;
        this.m_ccClassName = "CCPageElement";
        this.m_children = new Array();
        this.m_attributes = new Object();
        this.m_attributesChanged = new Object();
    };
    
    // ------------------------------------------------------------------------
    // methods
    // ------------------------------------------------------------------------

    this.getPage = function() { return this.m_page; };
    this.getParent = function() { return this.m_parent; }
    this.getChildren = function() { return this.m_children; }
    this.findIndexOfChild = function(pChild)
    {
        for (var i=0; i<this.m_children.length; i++)
        {
            var c = this.m_children[i];
            if (c == pChild) return i;
        }
        return -1;
    }
    this.setPage = function(page) { this.m_page = page; };
    this.setParent = function(pParent) { this.m_parent = pParent; };
    this.getId = function() 
    { 
        var result = this.m_attributes["id"];
        if (result == null) result = this.m_attributes["name"];
        return result;
    };
    this.addChildNode_CCPageElement = function(ccControl,index) 
    {
        if (index == undefined || index >= this.m_children.length)
        {
            this.m_children.push(ccControl);
        }
        else
        {
            this.m_children.splice(index,0,ccControl);
        }
        ccControl.m_parent = this;
    };
    this.removeChildNode_CCPageElement = function(ccControl,index) 
    {
        ccControl.m_parent = null;
        if (index == null)
        {
            for (var i = this.m_children.length; i >= 0; i--) 
            {
                if (ccControl == this.m_children[i]) 
                {
                    this.m_children.splice(i,1);
                    break;
                }
            }
        }
        else
        {
            this.m_children.splice(index,1);
        }
    };
    this.destroy_CCPageElement = function() {};
    this.notifyCallServer = function() { return true; };
    this.notifyPageUpdate = function() {};
    this.applyDOMNode = function(domNode)
    {
        this.m_currentNochange = false;
        this.m_currentAttributeUpdate = false;
        this.applyDOMNodePassAttributes(domNode);
        this.createComponent();
        // treat elements below
        if (this.m_currentNochange == false)
        {
            var currentIndex = -1;
            for (var i=0; i<domNode.childNodes.length; i++)
            {
                var childNode = domNode.childNodes[i];
                if (childNode.tagName == null) continue;
                currentIndex++;
                if (childNode.tagName == "nochange") return;
                var currentId = childNode.getAttribute("id");
                if (currentId == null) currentId = childNode.getAttribute("name"); // INPUT-Elements
                CLog.logDBG("DOM Node     : " + childNode.tagName + " // " + currentId);
                var realChildElementIndex = this.getChildIndexById(currentId);
                CLog.logDBG("Real Index   : " + realChildElementIndex);
                if (realChildElementIndex < 0)
                {
                    var newElement = this.createChildElement(childNode,currentIndex);
                    newElement.applyDOMNode(childNode);
                    this.addChildNode(newElement,currentIndex);
                }
                else
                {
                    // remove elements
                    while (true)
                    {
                        if (this.m_children.length <= currentIndex)
                        {
                            break;
                        }
                        if (this.m_children[currentIndex].getId() != currentId)
                        {
                            var vChild = this.m_children[currentIndex];
                            this.removeChildNode(vChild,currentIndex);
                            vChild.destroy();
                        }
                        else
                        {
                            break;
                        }
                    }
                    this.m_children[currentIndex].applyDOMNode(childNode);
                }
            }        
            // remove rest of exisiting elements if any
            var removeIndex = currentIndex+1; 
            var numberOfChildren= this.m_children.length;
            for (var i=removeIndex; i<numberOfChildren; i++)
            {
                var vChild = this.m_children[removeIndex];
                this.removeChildNode(this.m_children[removeIndex],removeIndex);
                vChild.destroy();
            }
        }
        try
        {
            this.applyComponentData();
        }
        catch (exc)
        {
            CLog.logERR("Problem when applying component data",exc);
        }
    };
    this.getChildIndexById = function(id)
    {
        for (var i=0; i<this.m_children.length; i++)
        {
            if (this.m_children[i].getId() == id)
                return i;
        }
        return -1;
    };
    this.createChildElement = function(childNode,index)
    {
        var childElement = this.createPageElement(childNode.tagName);
        childElement.setPage(this.m_page);
        return childElement;
    };
    this.applyDOMNodePassAttributes = function(domNode)
    {
        this.m_attributesChanged = new Object();
        for (var i=0; i<domNode.attributes.length; i++)
        {
            var domAttr = domNode.attributes[i];
            if (domAttr.name == "nochange")
            {
                this.m_currentNochange = true;
                continue;
            }
            if (domAttr.name != "natts")
            {
                this.m_attributes[domAttr.name] = domAttr.value;
                this.m_attributesChanged[domAttr.name] = true;
                if (domAttr.value != "id") this.m_currentAttributeUpdate = true;
            }
            else
            {
                var attArray = CCValueManager.decodeCSV(domAttr.value);
                for (var j=0; j<attArray.length; j++)
                {
                    delete this.m_attributes[attArray[j]];
                    this.m_attributesChanged[attArray[j]] = true;
                    this.m_currentAttributeUpdate = true;
                }
            }
        }
    };
    this.applyComponentData_CCPageElement = function()
    {
    };
    this.createPageElement = function(tagName)
    {
        var vFunction = s_CCPageElement_ElementCreators[tagName];
        var vResult = null;
        if (vFunction != null)
            vResult = vFunction.call();
        else
            vResult = new CCDUMMYElement();
        vResult.setParent(this);
        return vResult;
    };
    this.createComponent = function() {};
    this.registerDirtyInformation = function(id,value,byTimer,byUserAction,group,forced)
    {
        this.m_page.registerDirtyInformation(id,value,group,forced);
        if (this.m_page.isJustProcessingXMLAndApplyingData() == false)
        {
            if (byUserAction == true)
            {
                this.processFlushing(byTimer);
                // processEvent(null,EVENT_contentChanged);
            }
        }
    };
    this.processFlushing = function(byTimer)
    {
        var vFlush = CCValueManager.decodeBoolean(this.m_attributes["flush"],false);
        if (vFlush == true)
        {
            this.getPage().callServer(this,this.getId()+".action","flush("+byTimer+")");
        }
    };
    this.findTopPageElement = function()
    {
        var current = this;
        while (true)
        {
            var parent = current.getParent();
            if (parent == null || parent.getId() == null)
            {
                return current;
            }
            current = parent;
        }
    };
//    this.findPageElementById = function(id)
//    {
//        var result = s_pageElementCrossReference[id];
//        return result;
//    };
    this.findAllParents = function()
    {
        var vResult = new Array();
        var vCurrent = this;
        while (true)
        {
            if (vCurrent.getParent() == null)
            {
                break;
            }
            vCurrent = vCurrent.getParent();
            vResult.push(vCurrent);
        }
        var vResultBack = new Array();
        for (var i=vResult.length - 1; i>=0; i--)
        {
            vResultBack.push(vResult[i]);
        }
        return vResultBack;
    };
    this.findPageElementById = function(id)
    {
        var foundArray = new Array();
        var shortId = CCValueManager.extractShortId(id);
        for (var prop in s_pageElementCrossReference)
        {
            var vValue = s_pageElementCrossReference[prop];
            if (vValue == null) continue;
            if (vValue.m_ccClassName == null) continue;
            try
            {
                var otherShortId = CCValueManager.extractShortId(vValue.getId());
                if (otherShortId == shortId)
                    foundArray.push(vValue);
            }
            catch (exc) {}
        }
        if (foundArray.length == 1) 
        {
            return foundArray[0];
        }
        else if (foundArray.length > 1)
        {
            var maxDistance = 0;
            var vResult = null;
            var myParents = this.findAllParents();
            for (var i=0; i<foundArray.length; i++)
            {
                var pe = foundArray[i];
                var peParents = pe.findAllParents();
                var distance = CCValueManager.countEqualObjects(myParents,peParents);
                if (distance > maxDistance)
                {
                    maxDistance = distance;
                    vResult = pe;
                }
            }
            return vResult;
        }
        else
        {
            return null;
        }
    };
    this.findTopPageElement = function()
    {
        var vCurrent = this;
        while (true)
        {
            var vParent = vCurrent.getParent();
            if (vParent == null)
                return this;
            vCurrent = vParent;
        }
    };
    this.findPageElementFromTopByShortId = function(id)
    {
        var vTop = this.findTopPageElement();
        return this.findPageElementByShortId(id);
    };
    this.findPageElementByShortId = function(id)
    {
        var vOwnId = this.getId();
        if (vOwnId != null && vOwnId.indexOf(id) > 0)
            return this;
        var vChildren = this.getChildren();
        for (var i=0; i<vChildren.length; i++)
        {
            var vChild = vChildren[i];
            var vResult = vChild.findPageElementByShortId(id);
            if (vResult != null)
                return vResult;
        }
        return null;
    };
    
    // ------------------------------------------------------------------------
    // constructor call
    // ------------------------------------------------------------------------
    
    this.init_CCPageElement();
}

/* ############################################################################
 * CCControl extends CCPageElement
 * ############################################################################ */

function CCControl() 
{
    // ------------------------------------------------------------------------
    // members
    // ------------------------------------------------------------------------
    
    this.m_ui5Node = null;
    this.m_childrenSizer = false;
    this.m_popupmenu = null;
    this.m_popupmenuloadroundtrip = false;
    this.m_complexIndexManagement = false;
    this.m_invokeevent = null;
    
    // ------------------------------------------------------------------------
    // constructor
    // ------------------------------------------------------------------------
    
    this.init_CCControl = function()
    {
        this.init_CCPageElement();
        this.addChildNode = this.addChildNode_CCControl;
        this.removeChildNode = this.removeChildNode_CCControl;
        this.applyComponentData = this.applyComponentData_CCControl;
        this.destroy = this.destroy_CCControl;
        this.reactOnEvent = this.reactOnEvent_CCControl;
        this.m_ccClassName = "CCControl";
    };
    
    // ------------------------------------------------------------------------
    // public methods
    // ------------------------------------------------------------------------
    
    this.bindUI5Node = function(ui5Node) 
    { 
        this.m_ui5Node = ui5Node; 
        this.m_ui5Node.ccPageElement = this;
        this.m_appliedStyleClasses = null;
        if (this.m_ui5Node.attachBrowserEvent != null)
        {
             this.m_ui5Node.attachBrowserEvent("mousedown", function(pEvent) { this.ccPageElement.processCCEvent(new CCEvent(CCEvent_mousedown,pEvent,this.ccPageElement)); });
             this.m_ui5Node.attachBrowserEvent("dblclick", function(pEvent) { this.ccPageElement.processCCEvent(new CCEvent(CCEvent_dblclick,pEvent,this.ccPageElement)); });
//             this.m_ui5Node.attachBrowserEvent("mouseover", function(pEvent) { this.ccPageElement.processCCEvent(new CCEvent(CCEvent_mouseover,pEvent,this.ccPageElement)); });
             this.m_ui5Node.attachBrowserEvent("keyup", function(pEvent) { this.ccPageElement.processCCEvent(new CCEvent(CCEvent_keyup,pEvent,this.ccPageElement)); });
             this.m_ui5Node.attachBrowserEvent("mouseup", function(pEvent) { this.ccPageElement.processCCEvent(new CCEvent(CCEvent_mouseup,pEvent,this.ccPageElement)); });
             this.m_ui5Node.attachBrowserEvent("focus", function(pEvent) { this.ccPageElement.processCCEvent(new CCEvent(CCEvent_focus,pEvent,this.ccPageElement)); });
             this.m_ui5Node.attachBrowserEvent("blur", function(pEvent) { this.ccPageElement.processCCEvent(new CCEvent(CCEvent_blur,pEvent,this.ccPageElement)); });
        }
        ui5Node.m_ccControl = this;
    };
    this.getUI5Node = function() 
    { 
        return this.m_ui5Node; 
    }
    this.addChildNode_CCControl = function(ccControl,index) 
    {
        this.addChildNode_CCPageElement(ccControl,index);
        if (ccControl.getUI5Node() == null)
        {
            this.m_complexIndexManagement = true;
        }
    };
    this.removeChildNode_CCControl = function(ccControl) 
    {
        this.removeChildNode_CCPageElement(ccControl);
    };
    this.destroy_CCControl = function()
    {
        this.destroy_CCPageElement();
    };
    this.processCCEvent = function(ccEvent)
    {
        if (ccEvent == null) return;
        var vEventHash = ccEvent.getEventHash();
        if (vEventHash == s_lastEventHash) return;
        s_lastEventHash = vEventHash;
        // CLog.logINF("processCCEvent! " + ccEvent.m_eventId + "/" + ccEvent.m_eventObject + "/" + ccEvent.m_eventObject.target + "//" + this.getId());
        var curElement = this;
        while (true)
        {
            // CLog.logINF("Bubbling: " + curElement.m_ccClassName);
            ccEvent.m_elementStack.push(curElement);
            curElement.reactOnEvent(ccEvent);
            curElement = curElement.m_parent;
            if (curElement == null)
                break;
        }
    };
    this.calculateUI5ChildIndex = function(pIndex)
    {
        if (this.m_complexIndexManagement == false)
        {
            return pIndex;
        }
        else
        {
//            CLog.logINF("calculateChildIndex, complex: ***************************************");
//            CLog.logINF("calculateChildIndex, complex: " + this.m_ccClassName);
//            CLog.logINF("calculateChildIndex, complex: pIndex = " + pIndex);
//            CLog.logINF("calculateChildIndex, complex: m_children.length = " + this.m_children.length);
            var vRealIndex = 0;
            for (var i=0; i<pIndex; i++)
            {
//                CLog.logINF("calculateChildIndex, complex: Loop " + i);
                if (this.m_children[i].m_ui5Node != null)
                    vRealIndex++;
            }
            return vRealIndex;
        }
    };
    this.getControlToApplyPadding = function() { return this.m_ui5Node; };
    this.getControlToApplyForeground = function() { return this.m_ui5Node; };
    this.getControlToApplyFont = function() { return this.m_ui5Node; };
    
    // ------------------------------------------------------------------------
    // private methods
    // ------------------------------------------------------------------------
    
    this.applyComponentData_CCControl = function()
    {
        this.applyComponentData_CCPageElement();
        if (this.m_attributesChanged["width"] == true)
        {
            if (this.m_parent == null || this.m_parent.m_childrenSizer == false)
            {
                var vWidth = CCValueManager.decodeSize(this.m_attributes["width"],null);
                if (this.m_parent != null && this.m_parent.updateChildWidth != null)
                    vWidth = this.m_parent.updateChildWidth(this,vWidth);
                if (this.m_ui5Node != null && this.m_ui5Node.setWidth != null)
                {
                    this.m_ui5Node.setWidth(vWidth);
                }
            }
        }
        if (this.m_attributesChanged["height"] == true)
        {
            if (this.m_parent == null || this.m_parent.m_childrenSizer == false)
            {
                var vHeight = CCValueManager.decodeSize(this.m_attributes["height"],null);
                if (this.m_parent != null && this.m_parent.updateChildHeight != null)
                    vHeight = this.m_parent.updateChildHeight(this,vHeight);
                if (this.m_ui5Node != null && this.m_ui5Node.setHeight != null)
                {
                    this.m_ui5Node.setHeight(vHeight);
                }
            }
        }
        if (this.m_attributesChanged["placeholder"] == true)
        {
            if (this.m_ui5Node.setPlaceholder != null)
                this.m_ui5Node.setPlaceholder(this.m_attributes["placeholder"]);
        }
        if (this.m_attributesChanged["editable"] == true)
        {
            if (this.m_ui5Node.setEditable != null)
                this.m_ui5Node.setEditable(CCValueManager.decodeBoolean(this.m_attributes["editable"],true));
        }
        if (this.m_attributesChanged["enabled"] == true)
        {
            if (this.m_ui5Node.setEnabled != null)
                this.m_ui5Node.setEnabled(CCValueManager.decodeBoolean(this.m_attributes["enabled"],true));
        }
        if (this.m_attributesChanged["background"] == true)
        {
            if (this.m_ui5Node.setBackground != null)
            {
                var vColor = CCValueManager.decodeColor(this.m_attributes["background"]);
                this.m_ui5Node.setBackground(vColor);
            }
        }
        if (this.m_attributesChanged["layoutdata"] == true)
        {
            if (this.m_ui5Node.setLayoutData != null)
            {
                var vMap = CCValueManager.decodeComplexValue(this.m_attributes["layoutdata"]);
                if (vMap == null)
                {
                    this.m_ui5Node.setLayoutData(null);
                }
                else
                {
                    var vClass = vMap["class"];
                    if (vClass == "SplitterLayoutData")
                    {
                        var vLayoutData = new sap.ui.layout.SplitterLayoutData();
                        var vSize = CCValueManager.decodeSize(vMap["size"],null);
                        if (vSize != null) vLayoutData.setSize(vSize);
                        this.m_ui5Node.setLayoutData(vLayoutData);
                    }
                    else if (vClass == "GridData")
                    {
                        var vLayoutData = new sap.ui.layout.GridData();
                        var v = null;
                        v = vMap["span"]; if (v != null) vLayoutData.setSpan(v);
                        v = vMap["linebreak"]; if (v != null) vLayoutData.setLinebreak(CCValueManager.decodeBoolean(v,false));
                        v = vMap["linebreakL"]; if (v != null) vLayoutData.setLinebreakL(CCValueManager.decodeBoolean(v,false));
                        v = vMap["linebreakM"]; if (v != null) vLayoutData.setLinebreakM(CCValueManager.decodeBoolean(v,false));
                        v = vMap["linebreakS"]; if (v != null) vLayoutData.setLinebreakS(CCValueManager.decodeBoolean(v,false));
                        v = vMap["indent"]; if (v != null) vLayoutData.setIndent(v);
                        v = vMap["indentL"]; if (v != null) vLayoutData.setIndentL(CCValueManager.decodeNumber(v,undefined));
                        v = vMap["indentM"]; if (v != null) vLayoutData.setIndentM(CCValueManager.decodeNumber(v,undefined));
                        v = vMap["indentS"]; if (v != null) vLayoutData.setIndentS(CCValueManager.decodeNumber(v,undefined));
                        v = vMap["moveForward"]; if (v != null) vLayoutData.setMoveForward(v);
                        v = vMap["moveBackwards"]; if (v != null) vLayoutData.setMoveBackwards(v);
                        this.m_ui5Node.setLayoutData(vLayoutData);
                    }
                    else if (vClass == "FlexItemData")
                    {
                        var vLayoutData = new sap.m.FlexItemData();
                        var v = null;
                        v = vMap["alignSelf"]; if (v != null) vLayoutData.setAlignSelf(v);
                        v = vMap["baseSize"]; if (v != null) vLayoutData.setBaseSize(v);
                        v = vMap["growFactor"]; if (v != null) vLayoutData.setGrowFactor(CCValueManager.decodeNumber(v,0));
                        v = vMap["order"]; if (v != null) vLayoutData.setOrder(CCValueManager.decodeNumber(v,0));
                        v = vMap["shrinkFactor"]; if (v != null) vLayoutData.setShrinkFactor(CCValueManager.decodeNumber(v,0));
                        this.m_ui5Node.setLayoutData(vLayoutData);
                    }
                }
            }
        }
        if (this.m_attributesChanged["rowdistance"] == true)
        {
            var vRowdistance = CCValueManager.decodeSize(this.m_attributes["rowdistance"],"0px");
            if (this.m_ui5Node.setRowdistance != null)
            {
                this.m_ui5Node.setRowdistance(vRowdistance);
            }
        }
        if (this.m_attributesChanged["popupmenu"] == true)
        {
            this.m_popupmenu = this.m_attributes["popupmenu"];
        }
        if (this.m_attributesChanged["tooltip"] == true)
        {
            if (this.m_ui5Node.setTooltip != null)
            {
                try { this.m_ui5Node.setTooltip(m_attribtues["tooltip"]); } catch (exc) {}
            }
        }
        if (this.m_attributesChanged["popupmenuloadroundtrip"])
        {
            this.m_popupmenuloadroundtrip = CCValueManager.decodeBoolean(this.m_attributes["popupmenuloadroundtrip"],false);
        }
        if (this.m_attributesChanged["fxstyleseq"])
        {
            if (this.m_appliedStyleClasses != null)
            {
                // remove style classes: todo!
            }
            var vStyleClasses = this.m_attributes["fxstyleseq"];
            this.m_appliedStyleClasses = vStyleClasses;
            if (vStyleClasses != null)
            {
                var values = CCValueManager.decodeCSV(vStyleClasses);
                for (var i=0; i<values.length; i++)
                {
                    var value = values[i];
                    this.m_ui5Node.addStyleClass(value);
                }
            }
        }
        if (this.m_attributesChanged["styleseq"])
        {
            if (this.m_ui5Node.addStyleClass != null)
            {
                if (this.m_appliedStyleClasses != null)
                {
                    var values = CCValueManager.decodeCSV(this.m_appliedStyleClasses);
                    for (var i=0; i<values.length; i++)
                    {
                        var value = values[i];
                        this.m_ui5Node.removeStyleClass(value);
                    }
                }
                var vStyleClasses = this.m_attributes["styleseq"];
                this.m_appliedStyleClasses = vStyleClasses;
                if (vStyleClasses != null)
                {
                    var values = CCValueManager.decodeCSV(vStyleClasses);
                    for (var i=0; i<values.length; i++)
                    {
                        var value = values[i];
                        this.m_ui5Node.addStyleClass(value);
                    }
                }
            }
        }
        if (this.m_attributesChanged["padding"])
        {
            try
            {
                var control = this.getControlToApplyPadding();
                if (control.setPadding != null)
                {
                    var vPadding = CCValueManager.decodeSize(this.m_attributes["padding"],null);
                    control.setPadding(vPadding);
                }
            }
            catch (exc)
            {}
        }
        if (this.m_attributesChanged["foreground"])
        {
            try
            {
                var control = this.getControlToApplyForeground();
                if (control.setForeground != null)
                {
                    control.setForeground(CCValueManager.decodeColor(this.m_attributes["foreground"]));
                }
            }
            catch (exc)
            {}
        }
        if (this.m_attributesChanged["font"])
        {
            try
            {
                var control = this.getControlToApplyFont();
                if (control.setFont != null)
                {
                    control.setFont(CCValueManager.decodeFont(this.m_attributes["font"]));
                }
            }
            catch (exc)
            {}
        }
        if (this.m_attributesChanged["invokeevent"])
        {
            this.m_invokeevent = this.m_attributes["invokeevent"];
        }
        if (this.m_attributesChanged["animationtrigger"] == true)
        {
            if (this.m_attributes["animationtrigger"] != null)
            {
                CLog.logINF("#ANIMATION: Animation is started");
                this.m_ui5Node.addStyleClass(this.getAnimationStyleClass());
                var that = this;
                setTimeout(function() {that.removeAnimation()},1000);            }
        }
        this.m_popupmenuloadroundtrip = CCValueManager.decodeBoolean(this.m_attributes["popupmenuloadroundtrip"],false);
    };

    this.getAnimationStyleClass = function()
    {
        var vResult = this.m_attributes["animationclass"];
        if (vResult == null) vResult = "ccAnimation";
        return vResult;
    };
    this.removeAnimation = function()
    {
        CLog.logINF("#ANIMATION: Animation is removed");
        this.m_ui5Node.removeStyleClass(this.getAnimationStyleClass());
    };
    
    this.reactOnEvent_CCControl = function(ccEvent) 
    {
        if (ccEvent.getEventId() == CCEvent_mouseup)
        {
            if (this.m_popupmenu != null && ccEvent.getEventObject() != null && ccEvent.getEventObject().button != 0)
            {
                this.processPopupMenu(ccEvent);
            }
        }
        if (ccEvent.getEventId() == CCEvent_mouseup && this.m_invokeevent != null)
        {
            if (this.m_invokeevent == "click" || this.m_invokeevent == "leftclick" || this.m_invokeevent == "anyclick")
            {
                this.processInvokeEvent(ccEvent);
            }
        }
        var myId = this.getId();
        if (ccEvent.getEventId() == CCEvent_mouseup && myId != null)
        {
            if (ccEvent.m_processedEditorBrigde == null)
            {
                ccEvent.m_processedEditorBrigde = true;
                CCEditorBridge.reactOnControlSelection(this);
            }
        }
    };
    
    this.processPopupMenu = function(ccEvent)
    {
        try
        {
            if (ccEvent.m_processedOpenPopupMenu == true)
                return;
            ccEvent.m_processedOpenPopupMenu = true;
            var pe = this.findPageElementById(this.m_popupmenu);
            pe.openPopupMenu(this,ccEvent);
        }
        catch (exc)
        {
            CLog.logERR("processPopupMenu",exc);
        }
    };
    this.processInvokeEvent = function(ccEvent)
    {
        this.getPage().callServer(this,this.getId()+".action","invoke()");
    };
    this.highlight = function()
    {
        if (this.m_ui5Node != null)
        {
            this.m_ui5Node.addStyleClass("cchla");
            this.m_ui5Node.addStyleClass("cchlb");
            this.m_ui5Node.addStyleClass("cchlc");
            this.m_ui5Node.addStyleClass("cchld");
            this.m_ui5Node.addStyleClass("cchle");
        }
    };
    this.dehighlight = function()
    {
        if (this.m_ui5Node != null)
        {
            this.m_ui5Node.removeStyleClass("cchla");
            this.m_ui5Node.removeStyleClass("cchlb");
            this.m_ui5Node.removeStyleClass("cchlc");
            this.m_ui5Node.removeStyleClass("cchld");
            this.m_ui5Node.removeStyleClass("cchle");
        }
    };
    
    // ------------------------------------------------------------------------
    // constructor call
    // ------------------------------------------------------------------------
    
    this.init_CCControl();
}
CCControl.prototype = new CCPageElement();

/* ############################################################################
 * CCINVISIBLECONTROL
 * ############################################################################ */

function CCInvisibleControl()
{
    this.init_CCInvisibleControl = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCInvisibleControl;
        this.applyComponentData = this.applyComponentData_CCInvisibleControl;
        this.reactOnEvent = this.reactOnEvent_CCInvisibleControl; 
        this.removeChildNode = this.removeChildNode_CCInvisibleControl;
        this.destroy = this.destroy_CCInvisibleControl;
        this.m_ccClassName = "CCInvisibleControl";
    };
    this.applyComponentData_CCInvisibleControl = function() { this.applyComponentData_CCControl(); };
    this.addChildNode_CCInvisibleControl = function(ccControl,index) { this.addChildNode_CCControl(ccControl,index); };
    this.removeChildNode_CCInvisibleControl = function(ccControl) { this.removeChildNode_CCControl(ccControl); };
    this.reactOnEvent_CCInvisibleControl = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
    this.destroy_CCInvisibleControl = function() { this.destroy_CCControl; };
    this.init_CCInvisibleControl();
}
CCInvisibleControl.prototype = new CCControl();

/* ############################################################################
 * CCContainerControl extends CCControl
 * ############################################################################ */

function CCContainerControl()
{
    this.init_CCContainerControl = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCContainerControl;
        this.removeChildNode = this.removeChildNode_CCContainerControl;
        this.applyComponentData = this.applyComponentData_CCContainerControl;
        this.reactOnEvent = this.reactOnEvent_CCContainerControl; 
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCContainerControl";
    };

    // ------------------------------------------------------------------------
    // private methods
    // ------------------------------------------------------------------------

    this.addChildNode_CCContainerControl = function(ccControl,index) 
    {
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.getUI5Node() != null)
        {
            this.m_ui5Node.insertContent(ccControl.getUI5Node(),this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCContainerControl = function(ccControl) 
    {
        var vUI5Node = ccControl.getUI5Node();
        this.removeChildNode_CCControl(ccControl);
        if (vUI5Node != null)
        {
            this.m_ui5Node.removeContent(vUI5Node);
        }
    };
    this.applyComponentData_CCContainerControl = function() { this.applyComponentData_CCControl(); }
    this.reactOnEvent_CCContainerControl = function(ccEvent) { this.reactOnEvent_CCControl(ccEvent); };
   
    // ------------------------------------------------------------------------
    // constructor call
    // ------------------------------------------------------------------------
    
    this.init_CCContainerControl();
}
CCContainerControl.prototype = new CCControl();

/* ############################################################################
 * CCStackedPane extends CCControl
 * ############################################################################ */

function CCStackedPane()
{
    this.init_CCStackedPane = function()
    {
        this.init_CCControl();
        this.addChildNode = this.addChildNode_CCStackedPane;
        this.removeChildNode = this.removeChildNode_CCStackedPane;
        this.applyComponentData = this.applyComponentData_CCStackedPane;
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCStackedPane";
        this.bindUI5Node(new cc.StackPane());
    };

    // ------------------------------------------------------------------------
    // private methods
    // ------------------------------------------------------------------------

    this.addChildNode_CCStackedPane = function(ccControl,index) 
    {
        this.addChildNode_CCControl(ccControl,index);
        if (ccControl.m_ui5Node != null)
        {
            this.m_ui5Node.insertContent(ccControl.getUI5Node(),this.calculateUI5ChildIndex(index));
        }
    };
    this.removeChildNode_CCStackedPane = function(ccControl) 
    {
        var vUI5Node = ccControl.getUI5Node();
        this.removeChildNode_CCControl(ccControl);
        if (vUI5Node != null)
        {
            this.m_ui5Node.removeContent(vUI5Node);
        }
    };
    this.applyComponentData_CCStackedPane = function()
    {
        this.applyComponentData_CCControl();
    };
   
    // ------------------------------------------------------------------------
    // constructor call
    // ------------------------------------------------------------------------
    
    this.init_CCStackedPane();
}
CCStackedPane.prototype = new CCControl();

/* ############################################################################
 * CCPageBrowser
 * urlServer => String
 * urlAddress => String
 * subPageId => int
 * owningWindow => CCWindowPane
 * ############################################################################ */

var s_ccPageBrowser = null;
function CCPageBrowser(urlServer,urlAddress,subPageId,owningWindow)
{
    // -----------------------------------------------------------------------
    // members
    // -----------------------------------------------------------------------
    
    this.m_urlServer = null;
    this.m_urlAddress = null;
    this.m_subPageId = null;
    this.m_ownindWindow = null;
    this.m_pageContainer = null;
    this.m_clientId = null;
    
    // ------------------------------------------------------------------------
    // constructor
    // ------------------------------------------------------------------------
    
    this.init_CCPageBrowser = function(urlServer,urlAddress,subPageId,owningWindow)
    {
        CLog.logINF("CCPageBrowser creation: " + urlServer + "/" + urlAddress);
        this.init_CCStackedPane();
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCPageBrowser";
        this.m_ui5Node.setComment("CCPageBrowser");
        this.m_clientId = (new Date()).getTime() + "/" + Math.round(Math.random() * 100000);
        this.m_urlServer = urlServer;
        this.m_urlAddress = urlAddress;
        this.m_subPageId = subPageId;
        this.m_ownindWindow = owningWindow;
        this.m_pageContainer = new CCPageContainer(urlServer,urlAddress,subPageId,owningWindow,this);
        this.addChildNode(this.m_pageContainer);
        s_ccPageBrowser = this;
    };
    
    // ------------------------------------------------------------------------
    // methods
    // ------------------------------------------------------------------------
    
    this.getClientId = function () { return this.m_clientId; };
    this.getBrowserDim = function() { return new CCSize(600,400); };
    this.applyServerXmlDoc = function(xmlDoc) { this.m_pageContainer.applyServerXmlDoc(xmlDoc); };
    
    // ------------------------------------------------------------------------
    // private methods
    // ------------------------------------------------------------------------
    
    // ------------------------------------------------------------------------
    // constructor call
    // ------------------------------------------------------------------------
    
    this.init_CCPageBrowser(urlServer,urlAddress,subPageId,owningWindow);    
}
CCPageBrowser.prototype = new CCStackedPane();


/* ############################################################################
 * CCPageContainer
 * ############################################################################ */

function CCPageContainer(urlServer,urlAddress,subPageId,owningWindow,pageBrowser)
{
    // -----------------------------------------------------------------------
    // members
    // -----------------------------------------------------------------------
    
    this.m_urlServer = null;
    this.m_urlAddress = null;
    this.m_subPageId = null;
    this.m_ownindWindow = null;
    this.m_pageBrowser = null;
    this.m_page = null;
    this.m_topNode = null;
    
    // ------------------------------------------------------------------------
    // constructor
    // ------------------------------------------------------------------------

    this.init_CCPageContainer = function(urlServer,urlAddress,subPageId,owningWindow,pageBrowser)
    {
        CLog.logINF("CCPageContainer creation: " + urlServer + "/" + urlAddress);
        this.init_CCStackedPane();
        // --------------------------------------------------------------------
        this.m_ccClassName = "CCPageContainer";
        this.bindUI5Node(new cc.StackPaneWithDD());
        this.m_ui5Node.setComment("CCPageContainer");
        this.m_urlServer = urlServer;
        this.m_urlAddress = urlAddress;
        this.m_subPageId = subPageId;
        this.m_ownindWindow = owningWindow;
        this.m_pageBrowser = pageBrowser;
        this.m_page = new CCPage(urlServer,urlAddress,subPageId,owningWindow,pageBrowser);
        this.m_topNode = new CCFORMElement();
        this.m_topNode.setPage(this.m_page);
        this.m_page.loadInitialPage();
        this.addChildNode(this.m_topNode);
    };
    
    // ------------------------------------------------------------------------
    // methods
    // ------------------------------------------------------------------------
    
    this.applyServerXmlDoc = function(xmlDoc) 
    {
        this.m_topNode.applyDOMNode(xmlDoc.documentElement);
    };

    // ------------------------------------------------------------------------
    // private methods
    // ------------------------------------------------------------------------
    
    // ------------------------------------------------------------------------
    // constructor call
    // ------------------------------------------------------------------------

    this.init_CCPageContainer(urlServer,urlAddress,subPageId,owningWindow,pageBrowser);
}
CCPageContainer.prototype = new CCStackedPane();

