function (e, data) {

  // $.log(JSON.parse(data));
  var jdata = JSON.parse(data);
  for (var i=0; i<jdata.rows.length; i++) {
    var row = jdata.rows[i];
    // $.log(row);
    if (row.id === $$(this).results[i].id) {
      $$(this).results[i].type = row.value.type;
      $$(this).results[i].contents = row.value.contents[0] + "...";
    }
    else {
      $.log("PROBLEM -- Non-matching ids!");
    }
  }
  
  // $.log($$(this).results);

  $(this).trigger('result');
}