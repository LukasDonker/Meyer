/* ############################################################################
 * CCEditorBrige
 * ############################################################################ */

function cceditorbridgehighlightcontrol(pId)
{
    var vControl = s_ccPageBrowser.findPageElementFromTopByShortId(pId);
    CCEditorBridge.highlightControl(vControl);
}

var CCEditorBridge = new Object();
CCEditorBridge.m_lastHighlightedControl = null;
CCEditorBridge.reactOnControlSelection = function(ccControl)
{
    try
    {
        CCEditorBridge.highlightControl(ccControl);
        if (CCMessageBridge == undefined) return;
        if (CCMessageBridge == null) return;
        var id = ccControl.getId();
        CLog.logINF("Now commumnicating to message briged, id="+id);
        CCMessageBridge.processMessage("jspElementSelected("+id+")");
    }
    catch (exc) 
    {
        // CLog.logERR("Problem when communicating to message bridge",exc);
    }
};
CCEditorBridge.highlightControl = function(ccControl)
{
    if (CCEditorBridge.m_lastHighlightedControl != null)
    {
        CCEditorBridge.m_lastHighlightedControl.dehighlight();
    }
    if (ccControl != null)
    {
        if (ccControl.getId().indexOf("ccpreview") >= 0)
        {
            ccControl.highlight();
            CCEditorBridge.m_lastHighlightedControl = ccControl;
        }
    }
};
