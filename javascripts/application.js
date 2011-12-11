$(document).ready(function() {
  $("a").hover(
    function () {
      $(this).toggleClass("hover", "fast");
    }
  );
  $(".item").hover(
    function () {
      $(this).toggleClass("border-hover", "fast");
    }
  );

  $(".fancybox").fancybox();
});
