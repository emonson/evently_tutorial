function(e, topping_idx) {

  $$(this).toppings.splice(topping_idx,1);
  
  for (var i=0; i<$$(this).toppings.length; i++) {
    $$(this).toppings[i]['top_idx'] = i;
  }
   
  $(this).trigger('topping');
}