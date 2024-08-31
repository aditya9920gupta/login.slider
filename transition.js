const Signup = document.getElementById("m")
const Signin = document.getElementById("z")
Signup.addEventListener("click",()=>{

document.querySelector("max").style.transform="translateX(-100%)",
document.querySelector("right").style.display="block"

setTimeout(() => {
    document.querySelector("right").style.display="none"
    
}, 3000);
setTimeout(() => {
    document.querySelector("left").style.display="block"
}, 3000);

})
Signin.addEventListener("click",()=>{
    document.querySelector("max").style.transform="translateX(0)",
    document.querySelector("left").style.display="block"
    setTimeout(() => {
        document.querySelector("left").style.display="none"
    }, 3000);
    setTimeout(() => {
        document.querySelector("right").style.display="block"
    }, 3000);

})