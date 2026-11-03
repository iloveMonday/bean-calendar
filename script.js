console.log("henlo.");

let cal = document.getElementById("popup");
let btn = document.getElementById("protobutton");
let show = false;

btn.addEventListener("click", () => {
    toggle()
})
btn.addEventListener("mousedown", invert)
btn.addEventListener("mouseup", revert)

function toggle(){
    if (show == false){
        cal.classList.remove("bye");
        show = true;
        console.log("true");
    }
    else if(show == true){
        cal.classList.add("bye");
        show = false;
        console.log("false");
    }
}

function invert(){
 btn.classList.add("inverted");
 console.log("down");
}

function revert(){
 btn.classList.remove("inverted");
 console.log("up");
}
