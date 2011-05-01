function(e, query_string) {
  var elem = $(this);
  $.log("entering query function");
  $(this).trigger("_init");
  $$(this).query_string = query_string;
  $.ajax({
    url:"../../_fti/_design/tutorial/by_contents?q=" + query_string,
    dataType:"json",
    error:function(r) {
      elem.trigger("queryError")
    },
    success:function(r) {
      elem.trigger("retrieveQueryResults", r)
    }
  });      
}