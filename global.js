
$(function(){
  $('#menuButton').click(menuClick)
});

var menuDisplay = false;
function menuClick() {

  console.log($("#menu").css("width"));
  if (menuDisplay == false) {
    $("#menu").css("right", 0);
  }else {
    $("#menu").css("right", '-34vw');
  }
  menuDisplay = ! menuDisplay;

}
