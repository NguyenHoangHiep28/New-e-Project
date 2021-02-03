 //Autocomplete 
 var products = [
    "Low Beam Bulbs",
    "Instant Water Heater",
    "1200Mm Ceiling Fan",
    "ECO Dry Iron",
];
$("#autocomplete").autocomplete({
    source: products
})

//Slick item

$('.pro-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: 4000,
    speed: 800
  });
  $('.bselling-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: 4000,
    speed: 800
  });
  $('.product-img').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: 4000,
    speed: 1800
  });
// countdown

$('.time-countdown').countdown("2021/02/08", function(event) {
  $('#day').text(
    event.strftime('%D')
  );
  $('#hour').text(
    event.strftime('%H')
  );
  $('#minute').text(
    event.strftime('%M')
  );
  $('#second').text(
    event.strftime('%S')
  );
});
//load more
  $("div.row-items").slice(0, 3).show();
  $("#load-more").on("click", function(e){
    e.preventDefault();
    $(".row-items:hidden").slice(0, 4).slideDown(1000);
    if($('.row-items:hidden').length == 0) {
      $('#load-more').delay(2000).fadeOut('2000');
    }
  });

  // nice select 
  $(".price-sorting").niceSelect();
  $(".show").niceSelect();

  // inc and dec quatity 
  function incQty() {
    var qtyval, inc;
    qtyval = document.getElementById('qty').value;
    inc = parseInt(qtyval) + 1;
    document.getElementById('qty').value = inc;
  }
  function decQty() {
    var qtyval, dec;
    qtyval = document.getElementById('qty').value;
    if (qtyval > 1) {
    dec = parseInt(qtyval) - 1;
    document.getElementById('qty').value = dec;
    }
  }
  // Tab
  function switchnav(evt, cuscontent) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cuscontent).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById('default-opened').click();