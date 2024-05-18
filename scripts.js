function openNav() {
    if(window.innerWidth>600){
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    }else{
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    button_function(this)
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
}
