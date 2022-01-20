
let header = document.getElementsByTagName("header")[0]
let welcome = document.querySelector(".welcome")
let main = document.getElementsByTagName("main")[0]

// Mobile navigation menu - variables
let collapse = document.querySelector(".collapse")
let menu = document.querySelector(".menu")


// Phone function - variables
let callIcon = document.querySelector(".fas")
let phoneBox = document.createElement("div")
let endCall = document.createElement("div")
let sorry = document.createElement("div")
let sorryButton = document.createElement("div")
let audio = new Audio('recordmp3.mp3')



// Counts websiteVisits // Note to myself: Add unique visits
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}


// Window onload
function onLoad(){
getContent();
}



 // Mobile navigation menu
 document.querySelector(".navigation").addEventListener("click", () => {menuCollapse();})
 document.querySelector(".cross").addEventListener("click", () => {menuCollapse();})
 document.querySelector(".off1").addEventListener("click", () => {menuCollapse();})
 document.querySelector(".off2").addEventListener("click", () => {menuCollapse();})
 document.querySelector(".off3").addEventListener("click", () => {menuCollapse();})
 
 function menuCollapse() {
     collapse.classList.toggle("menu")
 }
 

 
 // Navbar scroll function
 let navbar = document.querySelector('.top');
 window.onscroll = () => {
     if (window.scrollY > 90) {
         navbar.classList.add('top-active');
     } else {
         navbar.classList.remove('top-active');
     }
 };




// Adding content
function getContent() {

    phoneBox.classList.add("phoneBox")
    phoneBox.classList.add("none")
    header.appendChild(phoneBox)

    let profilePic = document.createElement("img")
    profilePic.classList.add("profilePick")
    profilePic.src = "./assets/profilepic.png"
    phoneBox.appendChild(profilePic)

    let calling = document.createElement("h1")
    calling.innerText = "Calling..."
    calling.classList.add("calling")
    phoneBox.appendChild(calling)

    let boxIcons = document.createElement("div")
    boxIcons.innerHTML = '<i class="fas fa-microphone-slash"></i>'+'<i class="fas fa-volume-mute"></i>'
    boxIcons.classList.add("boxIcons")
    phoneBox.appendChild(boxIcons)

    endCall.innerHTML = '<i class="fas fa-phone-slash"></i> '
    endCall.classList.add("endCall")
    phoneBox.appendChild(endCall)
    
    sorry.innerText = "Sorry, you actually didn't call me. Please send me an e-mail if you still want to get in touch. "
    sorry.classList.add("sorry")
    sorry.classList.add("none")
    header.appendChild(sorry)

    sorryButton.innerText = "Got it!"
    sorryButton.classList.add("sorryButton")
    sorry.appendChild(sorryButton)
}


// Phonecall function
function phoneCall() {
    welcome.classList.add("blur")
    main.classList.add("blur")
    phoneBox.classList.remove("none")
    callIcon.classList.add("phoneActive")

    audio.currentTime = 0;
    audio.play();

    endCall.addEventListener("click", () => {

        phoneBox.classList.add("none")
        sorry.classList.remove("none")

        audio.pause();

        sorryButton.addEventListener("click", () => {
            
            welcome.classList.remove("blur")
            main.classList.remove("blur")
            callIcon.classList.remove("phoneActive")
            sorry.classList.add("none")
        })
    })

}


window.addEventListener("load", onLoad());