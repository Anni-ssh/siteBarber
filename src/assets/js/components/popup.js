$(".registr-btn").click(function () {
  $(".modal").fadeIn(1000);
});
$(".close").click(function () {
  $(".modal").fadeOut();
});
$(".modal").click(function (e) {
  if (e.target.parentNode.classList[0] == "wrapper") {
    $(".modal").fadeOut();
  }
});
