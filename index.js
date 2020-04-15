
function disappear() {
    var iconDisappear = document.getElementById("icon-hamburger");
    var divNav = document.getElementById("div-nav");
    var iconAppear = document.getElementById("icon-close");
    iconDisappear.style.display = "none";
    divNav.style.display = "block";
    iconAppear.style.display = "block";
}
function appear() {
    var iconDisappear = document.getElementById("icon-hamburger");
    var divNav = document.getElementById("div-nav");
    var iconAppear = document.getElementById("icon-close");
    iconDisappear.style.display = "block";
    divNav.style.display = "none";
    iconAppear.style.display = "none";
}
