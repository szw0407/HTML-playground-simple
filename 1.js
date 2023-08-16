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
  let code = document.getElementById("code").value;
  //if code begins with <!DOCTYPE html>, remove it
  if (code.substring(0, 15) == "<!DOCTYPE html>") {
    code = code.substring(16);
  }
  //if code begins without <html> or <head>, do something
  
  var popup = window.open("", "popup", "width=800,height=600");
  // if code begins with neither <html> nor <head>, add them:
  if (code.substring(0, 6) != "<html>") {

    var code2 = "<!DOCTYPE HTML><html>";
    if (code.substring(0, 6) != "<head>") {
      code2 += "<head>";
      code2 += "<title>你写的网页</title>";
      code2 += "</head>";
    }
    
    if (code.substring(0, 6) != "<body>") {
      code2 += "<body>";
    }
    code2 += code;
    code2 += "</body></html>";
  } else {
    var code2 = "<!DOCTYPE HTML>"+code;
  }
    // popup.document.write("<!DOCTYPE HTML><html><head><title>你写的网页</title>");
    // popup.document.write("<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css\">");
    // popup.document.write("</head><body>");
    // popup.document.write(code);
    // popup.document.write("</body></html>");
  popup.document.write(code2);
  // make the main body codeout part show the highlighted code
  document.getElementById("codeout").innerHTML = hljs.highlight(code, { language: 'html' }).value;
  hljs.highlightAll();
  // popup.document.close();
  // render();
}


function Button() {
  var encode = encodeHTML(code)
  document.getElementById("codeout").innerHTML = encode;
  hljs.highlightAll();
  showPopup();

  document.getElementById("code").remove();

};

