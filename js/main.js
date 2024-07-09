$("aside .fa-xmark").on("click", function () {
  $(".hold").animate({ width: "toggle", paddingInline: "toggle" }, 1000);
});
$("aside .fa-bars").on("click", function () {
  $(".hold").animate({ width: "toggle", paddingInline: "toggle" }, 1000);
});
$("#duration .toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
let countDownDate = new Date("10 october 2024 23:59:00").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let defrance = countDownDate - dateNow;
  let days = Math.floor(defrance / 1000 / 60 / 60 / 24);
  let hours = Math.floor((defrance / 1000 / 60 / 60) % 24);
  let mins = Math.floor((defrance / 1000 / 60) % 60);
  let secs = Math.floor((defrance / 1000) % 60);
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);
}, 1000);
const maxCharacters = 100;
$("textarea").on("input", function () {
  const length = $(this).val().length;
  const remaining = maxCharacters - length;

  if (remaining <= 0) {
    $("#msg").text("Character limit exceeded");
    $("#number").text('');
  } else {
    $("#msg").text('Character Remaining');
    $("#number").text(remaining);
  }
});
$("form").submit(function (e) { 
  e.preventDefault();
  setForm();
});
function setForm() {
  $("#email, #name, textarea").val("");
  $("#number").text(100);
}
