
$(function(){
  $('#menuButton').click(menuClick)
});

function menuClick() {

  console.log($("#menu").css('right'));
  var right = $("#menu").css('right');
  if (right != '0px') {
    $("#menu").css("right", 0);
  }else {
    $("#menu").css("right", -$("#menu").width());
  }

}
