function(e, topping) {
    $$(this).toppings.push({"top" : topping.slice(1),
                            "top_idx" : $$(this).toppings.length});
    $(this).trigger('topping');
}