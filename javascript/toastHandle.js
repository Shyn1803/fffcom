$(document).ready(function () {
  $("#btn-registration").click(function () {
    if ($("#registration-input").val() !== "") {
      $("#registration-success").toast("show");
      $("#registration-input").val("");
    }
  });
});
