/* ############################################################################
 * CCUI5CC_TIMERElement
 * ############################################################################ */

function CCUI5CC_TIMERElement()
{
    this.m_duration = 0;
    this.m_lastTimerExecution = 0;
    this.m_timerStopped = false;
    this.init_CCUI5CC_TIMERElement = function()
    {
        this.init_CCInvisibleControl();
        this.applyComponentData = this.applyComponentData_CCUI5CC_TIMERElement;
        this.destroy = this.destroy_CCUI5CC_TIMERElement;
        this.m_ccClassName = "CCUI5CC_TIMERElement";
        // --------------------------------------------------------------------
        this.m_firstApply_timer = true;
    };
    this.applyComponentData_CCUI5CC_TIMERElement = function() 
    { 
        this.applyComponentData_CCInvisibleControl(); 
        if (this.m_attributesChanged["duration"] == true)
        {
            try
            {
                this.m_duration = this.m_attributes["duration"];
            }
            catch (exc) { this.m_duration = 0; }
        }
        if (this.m_firstApply_timer == true)
        {
            this.m_firstApply_timer = false;
            this.launchTimer();
        }
    };
    this.destroy_CCUI5CC_TIMERElement = function() 
    { 
        this.destroy_CCInvisibleControl(); 
        try
        {
            this.stopTimer();
        }
        catch (exc) {}
    };
    this.timerPing = function()
    {
        this.getPage().callServerWhenPossible(this,this.getId()+".action","invoke()");
    }
    this.launchTimer = function()
    {
        this.m_lastTimerExecution = (new Date()).getTime();
        this.m_timerStopped = false;
        this.startTimer();
    };
    this.startTimer = function()
    {
        if (this.m_timerStopped == true)
            return;
        var now = 1 * (new Date()).getTime();
        if (this.m_duration > 0)
        {
            var nextPing = 1 * this.m_lastTimerExecution + 1 * this.m_duration;
            if (now >= nextPing)
            {
                if (this.getPage().isJustProcessingXML() == false)
                {
                    try { this.timerPing(); } catch (exc) { CLog.logINF("Problems calling timerPing",exc); }
                    this.m_lastTimerExecution = now;
                }
            }
        }
        var that = this;
        setTimeout(function() { that.startTimer(); },1000);
    };
    this.stopTimer = function()
    {
        this.m_timerStopped = true;
    };
    this.init_CCUI5CC_TIMERElement();
}
CCUI5CC_TIMERElement.prototype = new CCInvisibleControl();
s_CCPageElement_ElementCreators["ui5cc_timer"] = function() { return new CCUI5CC_TIMERElement(); }; 
