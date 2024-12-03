let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
};

document.getElementById('navigateButton').onclick = function() {
    window.location.href = '/aboutus.html';
};
function notifyLogout() {
    alert("You have successfully logged out!"); 
}