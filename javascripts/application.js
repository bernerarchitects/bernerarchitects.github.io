$(document).ready(function() {
  $("a").hover(
    function () {
      $(this).toggleClass("hover", "fast");
    }
  );
  $("#portfolio img").hover(
    function () {
      $(this).toggleClass("border-hover", "fast");
    }
  );

  $(".fancybox").fancybox();
});
