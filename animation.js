let elem = document.querySelectorAll(".elem");
// let img = document.querySelectorAll(".elem img");

elem.forEach(function (val) {
    val.addEventListener("mousemove", function(move){
        val.childNodes[3].style.left = move.x+"px";
        // val.childNodes[3].style.top = move.y+"px";
    });
    
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    });
    
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    });
});
