var menuIcon = document.querySelector('.menu-icon');
var SideBar = document.querySelector('.sidebar');

menuIcon.onclick =function(){
    console.log('clicked');
    SideBar.classList.toggle('small-sidebar'); //toggle is used to add or remove a class and classlist is used for adding or removing a class
}