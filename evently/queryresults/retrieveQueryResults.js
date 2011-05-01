function(e, results) {
  $.log("retrieving results");
  $.log(results.rows);
  
  for (var i=0; i<results.rows.length; i++) {
    var row = results.rows[i];
    $$(this).results.push({"id" : row.id, "score" : row.score.toFixed(2)});
  }
  
  $(this).trigger('result');
}