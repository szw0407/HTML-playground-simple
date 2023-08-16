function encodeHTML(source) {
  return String(source)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;");
 }

function showPopup() {
    // hljs.highlightElement(document.getElementById("code"))
  var code = document.getElementById("code").value;
  
    var popup = window.open("", "popup", "width=800,height=600");
    popup.document.write("<!DOCTYPE HTML><html><head><title>你写的网页</title>");
    popup.document.write("<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css\">");
    popup.document.write("</head><body>");
    popup.document.write(code);
    popup.document.write("</body></html>");

}


function Button() {
  var encode = encodeHTML(code)
  document.getElementById("codeout").innerHTML = encode;
  hljs.highlightAll();
  showPopup();

  document.getElementById("code").style("visibility:hidden")
  // render();
};

function reset() {
}
