var CCClientError = new Object();

CCClientError.showErrorScreen = function(pReloadUrl,pMessage)
{
    var vDiv = document.getElementById("uiArea");
    vDiv.innerHTML = CCClientError.createInnerHTML(pReloadUrl,pMessage);
};

CCClientError.createInnerHTML = function(pReloadUrl,pMessage)
{
    var sb = new Array();
    sb.push("<div style='width:100%;height:100%;padding:20px;background-color:#FFFFFF;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;'>");
    sb.push("<h2>Problem</h2>");
    sb.push("<p>");
    sb.push("A problem occurred when communicating between the frontend client and the server.");
    sb.push("</p>");
    sb.push("<p>");
    sb.push("The problem may have been caused by:");
    sb.push("<ul>")
    sb.push("<li>The server is not available anymore.</li>")
    sb.push("<li>The session on the server is not available anymore.</li>")
    sb.push("<li>Problems during the session because of refreshing the browser.</li>")
    sb.push("<li>An error occurred in the server side application.</li>")
    sb.push("</ul>")
    sb.push("</p>");
    sb.push("<p>");
    sb.push("<a href='javascript:location.reload()'>Reload current page</a>");
    sb.push("</p>");
    sb.push("</div>");
    return sb.join("\n");
};
