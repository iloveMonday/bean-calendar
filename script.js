console.log("henlo.");

let cal = document.getElementById("popup");
let btn = document.getElementById("protobutton");
let show = false;

btn.addEventListener("click", () => {
    toggle()
})

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