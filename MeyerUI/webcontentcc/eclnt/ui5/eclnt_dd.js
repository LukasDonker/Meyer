var CCDragDropManager = new Object();

CCDragDropManager.m_currentSource;
CCDragDropManager.m_currentType;
CCDragDropManager.m_currentData;
CCDragDropManager.m_currentDragEvent;
CCDragDropManager.m_withHorizontalLine = false;
CCDragDropManager.m_withVerticallLine = false;

CCDragDropManager.startDrag = function(vSource,vEvent,vType,vData,vWithVerticalLine, vWithHorizontalLine)
{
    CCDragDropManager.m_withHorizontalLine = vWithHorizontalLine;
    CCDragDropManager.m_withVerticallLine = vWithVerticalLine;
    CCDragDropManager.m_currentSource = vSource;
    CCDragDropManager.m_currentType = vType;
    CCDragDropManager.m_currentData = vData;
    CCDragDropManager.m_currentDragEvent = vEvent;
    CLog.logINF("startDrag: " + vType + "/" + vData);
};

CCDragDropManager.getCurrentSource = function() { return CCDragDropManager.m_currentSource; };
CCDragDropManager.getCurrentDragEvent = function() { return CCDragDropManager.m_currentDragEvent; };
CCDragDropManager.getWithVerticalLine = function() { return CCDragDropManager.m_withVerticallLine; };
CCDragDropManager.getWithHorizontalLine = function() { return CCDragDropManager.m_withHorizontalLine; };

CCDragDropManager.dragOver = function(vSource,vType)
{
    CLog.logINF("dragOver: " + vType);
    if (CCDragDropManager.m_currentType == vType)
    {
        CLog.logINF("dragOver: returning " + CCDragDropManager.m_currentData);
        return CCDragDropManager.m_currentData;
    }
    CLog.logINF("dragOver: returning null");
    return null;
};

CCDragDropManager.drop = function()
{
    CCDragDropManager.m_currentSource = null;
    CCDragDropManager.m_currentType = null;
    CCDragDropManager.m_currentData = null;
};