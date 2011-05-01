function(e, results) {
  $.log("retrieving results");
  $.log(results.rows);
  
  var ids_list = [];
  
  for (var i=0; i<results.rows.length; i++) {
    var row = results.rows[i];
    ids_list.push(row.id);
    $$(this).results.push({"id" : row.id, "score" : row.score.toFixed(2)});
  }
  
  var ids_object = { "keys" : ids_list };
  
  // Need to fetch actual documents and then have another routine
  // trigger 'result'...
  // $.post("http://127.0.0.1:5984/tutorial/_all_docs",'{"keys":["3680e87428fc08360ca7f53829000c3d","3680e87428fc08360ca7f53829000c3d"]}');

  $.post("http://127.0.0.1:5984/tutorial/_all_docs?include_docs=true",
         JSON.stringify(ids_object),
         function(data) {
              $.log(data);
            });
  
  $(this).trigger('result');
}