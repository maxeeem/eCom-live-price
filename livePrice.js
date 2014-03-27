// Add LivePrice functionality to eCom

$(document).ready(function() {
  if ($("select[name*='pProductOptionID']").length > 0) {
    var ourPrice = Number($(".ecom_ourPrice").text().slice(1))
    $(".ecom_qty_text").prepend("<b>Price with options:</b> $<span id='ecom_live_price'>"+ourPrice+"</span><br><br>")
  
    $("select[name*='pProductOptionID']").change(function() {
      var currentPrice = Number($(".ecom_ourPrice").text().slice(1))
      $("select[name*='pProductOptionID']").each(function() {
        if ($(this).val() != '') {
          var option = $("option[value='"+$(this).val()+"']").text().split('$')
          if (option.length > 1) {
            currentPrice += Number(option[1])
          }
        }
      })
      $("#ecom_live_price").html(currentPrice)
    })
  }
})