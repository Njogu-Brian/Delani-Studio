
$(document).ready(function() {
    $(".jumbotron#click").click(function() {
      $(".show").toggle();
      $(".hide").toggle();
    });
    $(".jumbotron#click1").click(function() {
      $(".show1").toggle();
      $(".hide1").toggle();
    });
    $(".jumbotron#click2").click(function() {
      $(".show2").toggle();
      $(".hide2").toggle();
    });
  });

function send() {
    alert("Your Message has been received. Thanks for Contacting us");
}