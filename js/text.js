jQuery(document).ready(function() {

    $("#price").each(function() {
      total += parseFloat(this.value);
    });

    // This button will increment the value
    $('.add').click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
        // Increment
        $('input[name=' + fieldName + ']').val(currentVal + 1);
        qty = parseInt($('.qty').val());
        price = parseFloat($('#price').val());
        $('#total').val((qty * price ? qty * price : 0).toFixed(2));
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
        qty = parseInt($('.qty').val());
        price = parseFloat($('#price').val());
        $('#total').val((qty * price ? qty * price : 0).toFixed(2));
      }
    });
    // This button will decrement the value till 0
    $(".del").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name=' + fieldName + ']').val(currentVal - 1);
        qty = parseInt($('.qty').val());
        price = parseFloat($('#price').val());
        $('#total').val(((qty * price > 0) ? qty * price : 0).toFixed(2));
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
        qty = parseInt($('.qty').val());
        price = parseFloat($('#price').val());
        $('#total').val(((qty * price > 0) ? qty * price : 0).toFixed(2));
      }
    });
  });
