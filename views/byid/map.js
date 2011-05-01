function(doc) {
	if(doc.type == "topping")
	  emit(doc._id, {"type":doc.type, "contents":doc.contents});
}