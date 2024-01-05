 
$(".button-next").click(function() {
  var e = $(".feature-slide.active");
  $(e).removeClass("active"), 
  $(e).next().addClass("active"), 
  $(".feature-slide").hasClass("active") || $(".feature-slide:first").addClass("active")
});

$(".button-prev").click(function() {
  var e = $(".feature-slide.active");
  $(e).removeClass("active"), $(e).prev().addClass("active"), $(".feature-slide").hasClass("active") || $(".feature-slide:last").addClass("active")
});