// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(function () {
    $('#menuButton').click(menuClick)
});

var menuDisplay = false;
function menuClick() {

    console.log($("#menu").css("width"));
    if (menuDisplay == false) {
        $("#menu").css("right", 0);
    } else {
        $("#menu").css("right", '-34vw');
    }
    menuDisplay = !menuDisplay;

}
