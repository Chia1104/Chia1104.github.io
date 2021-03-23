$(function () {
  let hm_click = false;
  let clicked = false;

  $("#hm").click(function () {
    if (hm_click === clicked) {
      $("#hm_exp").attr("aria-expanded", "true");
      $(this).attr("aria-expanded", "true");
      hm_click = true;
      return;
    }
    $("#hm_exp").attr("aria-expanded", "false");
    $(this).attr("aria-expanded", "false");
    hm_click = false;
  });
})

