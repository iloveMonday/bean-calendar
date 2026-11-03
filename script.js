console.log("henlo.");

let cal = document.getElementById("popup");
let btn = document.getElementById("protobutton");
let show = false;

btn.addEventListener("click", () => {
    toggle()
})
btn.addEventListener("mousedown", invert)
btn.addEventListener("mouseup", revert)
btn.addEventListener("touchstart", invert)
btn.addEventListener("touchend", revert)

function toggle(){
    if (show == false){
        cal.classList.remove("bye");
        show = true;
    }
    else if(show == true){
        cal.classList.add("bye");
        show = false;
    }
}

function invert(){
 btn.classList.add("inverted");
}

function revert(){
 btn.classList.remove("inverted");
}
