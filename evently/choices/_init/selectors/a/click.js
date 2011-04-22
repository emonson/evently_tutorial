function() {
  if ($(this).attr('href') === '#delete') {
    $(this).trigger('deleteToppings');
  }
  else {
    $(this).trigger('addTopping', $(this).attr('href'));
  }
  // $.log($(this).attr('href'));
}