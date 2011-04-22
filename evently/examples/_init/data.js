function(data) {

  // $.log(data);
  var datalist = [];
  
  for (var i=0; i<data.rows.length; i++) {
    row = data.rows[i];
    item_str = "";
    
    for (var j=0; j<row.value.length; j++) {
      item = row.value[j];
      item_str = item_str + item + ", ";
    }
    datalist.push({"value": item_str.substring(0,item_str.length-2)});
  }
  return {examples: datalist};
}