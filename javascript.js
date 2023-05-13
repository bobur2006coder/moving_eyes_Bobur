
let  a = document.getElementsByClassName("eye")

document.onmousemove = function(){
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";

    for(let i=0;i<2;i++){
        a[i].style.left = x;
        a[i].style.top = y;
        a[i].style.transfrom = "translate(-"+x+",-"+y+")";
    }
}























// document.onmousemove = function(){
//     let x = event.clientX * 100 / window.innerWidth + "%";
//     let y = event.clientY * 100 / window.innerHeight + "%";

    // for(let i=0;i<2;i++){
    //     eye[i].style.left = x;
    //     eye[i].style.top = y;
    //     eye[i].style.transfrom = "translate(-"+x+",-"+y+")";
    // }
// }