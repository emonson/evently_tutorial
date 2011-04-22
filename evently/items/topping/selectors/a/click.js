function() {
  // $.log($(this));
  if ($(this).attr('href') === '#deleteItem') {
    var idx = $(this).attr('idx');
    $(this).trigger('deleteToppingX', parseInt(idx));
  }
}