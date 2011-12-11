$(document).ready(function() {
  $("a").hover(
    function () {
      $(this).toggleClass("hover", "fast");
    }
  );

  $(".fancybox").fancybox();
});
