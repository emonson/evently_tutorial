function(doc) { 
  var ret=new Document(); 
  ret.add(doc.type, {'field':'type'}); 
  ret.add(doc.contents, {'field':'contents'}); 
  return ret 
}