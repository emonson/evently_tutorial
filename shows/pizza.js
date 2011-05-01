function(doc, req) {
  start({ "headers" : { "Content-type": "text/html" } });
  var mustache = require("vendor/couchapp/lib/mustache");

  var item_str = "";
  for (var j=0; j<doc.contents.length; j++) {
    item_str = item_str + doc.contents[j] + ", ";
  }

  var data = {
    "type": doc.type,
    "contents": item_str.substring(0,item_str.length-2)
  };
  
  return mustache.to_html(this.templates.pizza, data);
}