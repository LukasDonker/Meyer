/* ############################################################################
 * CCBgpaintCommand
 * ############################################################################ */

function CCBgpaintCommand()
{
    this.params = new Array();
    this.command = arguments[0];
    if (arguments.length > 1)
    {
        this.mode = arguments[1];
        for (var i=2; i<arguments.length; i++)
        {
            this.params.push(arguments[i]);
        }
    }
    else
    {
        this.mode = 0;
    }
}

/* ############################################################################
 * CCBgpaint
 * ############################################################################ */

function CCBgpaint(pCanvas)
{
    this.m_preCommands = undefined;
    this.m_commands = undefined;
    this.m_postCommands = undefined;
    this.m_canvas = undefined;
    
    this.init_CCBgpaint = function(pCanvas)
    {
        this.m_preCommands = new Array();
        this.m_commands = new Array();
        this.m_postCommands = new Array();
        this.m_canvas = pCanvas;
    };
    
    this.clearCommands = function() 
    {
        this.m_preCommands = new Array();
        this.m_commands = new Array();
        this.m_postCommands = new Array();
    };
    this.addPreCommand = function(c) { this.m_preCommands.push(c); };
    this.addCommand = function(c) { this.m_commands.push(c); };
    this.addPostCommand = function(c) { this.m_postCommands.push(c); };

    this.removePostCommand = function(commandName)
    {
        this.removeCommand(commandName,this.m_postCommands);
    };
    
    this.removeCommand = function(commandName,cs)
    {
        for (var i=cs.length-1; i>=0; i--)
        {
            var c = cs[i];
            if (c.command == commandName)
                cs.splice(i,1);
        }
    };
    
    this.init_CCBgpaint(pCanvas);
    
    this.paint = function()
    {
        CLog.logINF("Paint Executed");
        var ctx = this.m_canvas.getContext("2d");
        ctx.clearRect(0,0,this.m_canvas.width,this.m_canvas.height);
        for (var i=0; i<this.m_preCommands.length; i++) { this.paintCommand(ctx,this.m_preCommands[i]); }
        for (var i=0; i<this.m_commands.length; i++) { this.paintCommand(ctx,this.m_commands[i]); }
        for (var i=0; i<this.m_postCommands.length; i++) { this.paintCommand(ctx,this.m_postCommands[i]); }
    };
    
    this.paintCommand = function(ctx,c)
    {
        ctx.save();
        if ("focus" == c.command)
        {
            ctx.fillStyle = "rgba(255,255,0,.1)";
            ctx.fillRect(0,0,this.m_canvas.offsetWidth,this.m_canvas.offsetHeight);
        }
        if ("mouseover" == c.command)
        {
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0,0,this.m_canvas.offsetWidth,this.m_canvas.offsetHeight);
        }
        if ("mousedown" == c.command)
        {
            ctx.fillStyle = "rgba(255,200,0,0.3)";
            ctx.fillRect(0,0,this.m_canvas.offsetWidth,this.m_canvas.offsetHeight);
        }
        ctx.restore();
    };
}