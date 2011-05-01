function(doc) { 
  var ret=new Document(); 
  for (var i in doc.contents) {
    ret.add(doc.contents[i]);
  }
  return ret
}