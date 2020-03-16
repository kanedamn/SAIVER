
$(function(){
  $('#menuButton').click(menuClick)
});

function menuClick() {

<<<<<<< HEAD
  console.log(x);
  $("#menu").css("left", x.left - $("#menu").width());

  if($("#menu").css('left') !== '100%'){
    $("#menu").css("left", '100%');
=======
  console.log($("#menu").css('right'));
  var right = $("#menu").css('right');
  if (right != '0px') {
    $("#menu").css("right", 0);
  }else {
    $("#menu").css("right", -$("#menu").width());
>>>>>>> 685082d19587fbd12dc59d743d80c9f818538b21
  }

}
