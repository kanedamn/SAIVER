
$(function(){
  $('#menuButton').click(menuClick)
});

var menuDisplay = false;
function menuClick() {

<<<<<<< HEAD
  console.log($("#menu").css('right'));
  var right = $("#menu").css('right');
  if (right != '0px') {
    $("#menu").css("right", 0);
  }else {
    $("#menu").css("right", -$("#menu").width());
=======
  console.log($("#menu").css("width"));
  if (menuDisplay == false) {
    $("#menu").css("right", 0);
  }else {
    $("#menu").css("right", '-34vw');
>>>>>>> 68b0edc65f0600c3a22913ee8eb767a6bd891c26
  }
  menuDisplay = ! menuDisplay;

}
