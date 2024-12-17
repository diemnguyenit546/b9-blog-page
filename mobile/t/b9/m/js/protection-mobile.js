$(document).ready(function () {
  $(".protection-deposit-div").click(function () {
    $("#" + $(this).attr("id") + "-popup").show();
    $("#" + $(this).attr("id") + "-popup")
      .find(".popup-content-protection-deposit")
      .addClass("css-anim-to-up");
  });

  $(".popup-content-close").click(function () {
    $(this).parent().parent().hide();
    $(this).parent().removeClass("css-anim-to-up");
  });

  $(".seo-readmore").click(function () {
    $(this).hide();
    $(".seo-hidemore").show();
    $(".protection-seo-content").css({
      height: "auto",
      "overflow-y": "auto",
    });
  });

  $(".seo-hidemore").click(function () {
    $(this).hide();
    $(".seo-readmore").show();
    $(".protection-seo-content").css({
      height: "270px",
      "overflow-y": "hidden",
    });
  });

  setTimeout(function () {
    $(".owl-carousel").owlCarousel({
      margin: 20,
      items: 1,
      dots: true,
      autoWidth: true,
    });
  }, 2000);
});
