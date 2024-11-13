let show =1;
function showMenu(){
    if (show ===0){
        var iconMenu = document.querySelector(".iconMenu")
        iconMenu.style.display ="none";
        show = 1;
    }
    else {
        var iconMenu = document.querySelector(".iconMenu")
        iconMenu.style.display ="flex";
        show = 0;
    }
}