
$(function(){
  $('#menuButton').click(menuClick)
});

function menuClick() {
  var x = $("#menu").position();

  console.log(x);
  $("#menu").css("left", x.left - $("#menu").width());

  if($("#menu").css('left') !== 100%){
    $("#menu").css("left", '100%');
  }
}
