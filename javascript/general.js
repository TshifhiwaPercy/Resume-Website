//Show menu
function showMenu(){
	var menu = document.getElementById("nav-bar");
	menu.style.transition="width 1s";
	menu.style.width="300px";
}
//Close menu
function closeMenu(){
	var menu = document.getElementById("nav-bar");
	menu.style.transition="width 1s";
	menu.style.width="0px";

}