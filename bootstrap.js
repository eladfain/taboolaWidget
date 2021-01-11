document.write('<link rel="stylesheet" type="text/css" href="style.css" />');
var myElement = document.getElementById('suggestionsWidget');
var JavaScriptCode = document.createElement("script");
JavaScriptCode.setAttribute('type', 'text/javascript');
JavaScriptCode.setAttribute("src", 'data.js');
//myElement.appendChild(JavaScriptCode);

document.write('<script type="text/javascript" src="widget.js"></script>');