function(doc) {
  if(doc.type == "topping")
    emit(null, doc.contents);
}