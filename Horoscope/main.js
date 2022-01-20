
// Funktioner som startar direkt när sidan laddas
async function onLoad(){
    addContentToWebpage();
    await viewHoroscope();
}






// Lägger till allt innehåll på sidan


function addContentToWebpage(){

let main = document.getElementsByTagName("main")[0]
let horoscope = document.querySelector(".horoscope")

let container = document.createElement("div")
container.classList.add("container")
horoscope.appendChild(container)

let date = document.createElement("h3")
date.classList.add("date")
container.appendChild(date)

let imageContainer = document.createElement("div")
imageContainer.classList.add("imageContainer")
container.appendChild(imageContainer)

let image = document.createElement("img")
image.classList.add("image")
imageContainer.appendChild(image)

let containerContent = document.createElement("div")
containerContent.classList.add("containerContent")
container.appendChild(containerContent)

let starSign = document.createElement("h1")
starSign.classList.add("starSign")
containerContent.appendChild(starSign)

let buttons = document.createElement("div")
buttons.classList.add("buttons")
buttons.setAttribute("id", "buttons1")
main.appendChild(buttons) 

let back = document.createElement("div")
back.classList.add("btn")
back.classList.add("btnArrow")
back.setAttribute("id", "back")
back.innerHTML = '<i class="fas fa-arrow-left"></i>'
main.appendChild(back) 
back.addEventListener("click", getBack)

// Vid klick, kallar på funktionen makeRequest via en anononym funktion och tar med argument.
let save = document.createElement("div")
save.classList.add("btn")
save.setAttribute("id", "save1")
save.innerText = "Spara mitt horoskop"
buttons.appendChild(save) 
save.addEventListener("click", () => {
   makeRequest(addHoroscope,"./server/addHoroscope.php", "POST")
})

// Vid klick, kallar på funktionen updateH
let update = document.createElement("div")
update.classList.add("btn")
update.setAttribute("id", "update1")
update.innerText = "Uppdatera mitt horoskop"
buttons.appendChild(update) 
update.addEventListener("click", updateH)

// Vid klick, kallar på funktionen makeRequest via en anononym funktion och tar med argument.
let deleteBtn = document.createElement("div")
deleteBtn.classList.add("btn")
deleteBtn.setAttribute("id", "delete1")
deleteBtn.innerText = "Radera mitt horoskop"
buttons.appendChild(deleteBtn) 
deleteBtn.addEventListener("click", () => {
   makeRequest(deleteHoroscope,"./server/deleteHoroscope.php", "DELETE")
})

// Vid klick, kallar på funktionen getHoroscope
document.querySelector("#getBtn").addEventListener("click", getHoroscope)

}










// Anpassar output beroende på vad som hämtas från från SESSION / PHP-lista 



function changeData(namn, datum, bild){

    let starSign = document.querySelector(".starSign")
    let date = document.querySelector(".date")
    let image = document.querySelector(".image")
 
    starSign.innerText = namn 
    date.innerText = datum
    image.src =  "./assets/" + bild
 }










// STYLING - Mestadels funktioner som visar eller gömmer vissa element.  



function addHidden(){
    document.querySelector("#save1").classList.add("hidden")
    document.querySelector(".btnArrow").classList.add("hidden")
}

function removeHidden(){
    document.querySelector(".horoscope").classList.remove("hidden")
    document.querySelector(".buttons").classList.remove("hidden")
    document.querySelector("#update1").classList.remove("hidden")
    document.querySelector("#delete1").classList.remove("hidden")
}

function addBlur(){
    document.querySelector("#myVideo").classList.add("blur")
    document.querySelector(".horoscope").classList.add("blur")
    document.querySelector(".buttons").classList.add("blur")
    document.querySelector(".birth").classList.add("absolute")
}

function removeBlur(){
    document.querySelector("#myVideo").classList.remove("blur")
    document.querySelector(".horoscope").classList.remove("blur")
    document.querySelector(".buttons").classList.remove("blur")
    document.querySelector(".birth").classList.remove("absolute")
}

function styleDelete(){
    document.querySelector("#getBtn").classList.remove("hidden")
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector("#updateBtn").classList.add("hidden")
    document.querySelector(".horoscope").classList.add("hidden") 
    document.querySelector("#update1").classList.add("hidden")
    document.querySelector("#delete1").classList.add("hidden")
    document.querySelector("#save1").classList.add("hidden")
}

function styleGet(){
    document.querySelector(".horoscope").classList.remove("hidden")
    document.querySelector("#save1").classList.remove("hidden")
    document.querySelector(".btnArrow").classList.remove("hidden")
    document.querySelector(".buttons").classList.remove("hidden")
    document.querySelector(".birth").classList.add("hidden")
    document.querySelector("#update1").classList.add("hidden")
    document.querySelector("#delete1").classList.add("hidden")
}

function getBack(){
   document.querySelector(".birth").classList.remove("hidden")
   document.querySelector(".horoscope").classList.add("hidden") 
   addHidden();
}








/* REQUESTS */





// Request för POST och DELETE (addHoroscope, updateHoroscope och deleteHoroscope) 

async function makeRequest(func, url, method){

    const inputMonth = document.querySelector("#month").value
    const inputDay = document.querySelector("#day").value
    const inputDate = inputMonth + inputDay

    if(func != deleteHoroscope) {

        if(inputDate == "0230" || inputDate == "0231" || inputDate == "0431" ||  inputDate == "0631" || inputDate == "0931" ||  inputDate == "1131" || 
        inputDate <= 0 || inputMonth == "" || inputDay == "") {

        alert("Dubbelkolla ditt datum och försök igen.")
        return
        } 
    }
   

   let body = new FormData() 
   body.set("inputDate", inputDate)

   try{
       let response = await fetch(url, {
           method: method, 
           body: body})

       let result = await response.json()

       console.log(result)

       func(result);

   }catch(err){
       console.log(err)
   }
}


function addHoroscope(result){

    if(result){
         alert("Ditt horoskop är sparat")
         document.querySelector("#update1").classList.remove("hidden")
         document.querySelector("#delete1").classList.remove("hidden")
         addHidden();
    } else {
        alert("Kunde inte lägga till horoskop")
    }

    viewHoroscope();
 }


// Första "uppdatera mitt horoskop"-knappen. Vid klick, kallar på funktionen makeRequest via en anononym funktion och tar med argument.
function updateH(){

    addBlur();
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector("#getBtn").classList.add("hidden")

   let updateButton = document.querySelector("#updateBtn")
   updateButton.classList.remove("hidden")
   updateButton.addEventListener("click", () => {
       makeRequest(updateHoroscope,"./server/updateHoroscope.php", "POST")
   })
}


function updateHoroscope(result) {

    if(result){
         alert("Ditt nya horoskop är sparat")
         removeHidden();
         addHidden();
         removeBlur();
         document.querySelector(".birth").classList.add("hidden")
    
    } else{
        alert("Kunde inte uppdatera horoskop")
    }
 
    viewHoroscope();
 }


async function deleteHoroscope(result){

    if(result){
         alert("Ditt horoskop är raderat")
         styleDelete();
 
    } else {
        alert("Fanns inget horoskop att radera")
    }
 
    viewHoroscope();
 }
 


// Hämtar horoskop från SESSION via viewHoroscope.php med inputreferens - Printar ut output.
async function viewHoroscope(){

   let url = "./server/viewHoroscope.php"
   
   try {
       let response = await fetch(url)
       let result = await response.json()

       console.log(result)
       
       if(result) {

            changeData(result.name, result.date, result.image)

            removeHidden();
            addHidden();
            document.querySelector(".birth").classList.add("hidden")

       } else {
            document.querySelector(".btnArrow").classList.add("hidden")
            document.querySelector(".buttons").classList.add("hidden") 
       }

   } catch(err){
       console.log(err)
       throw err
   }  

}


// Hämtar horoskop från lista via getHoroscope.php med inputreferens - Printar ut output.
async function getHoroscope(){

   try {

       const inputMonth = document.querySelector("#month").value
       const inputDay = document.querySelector("#day").value
       const inputDate = inputMonth + inputDay
       let url = "./server/getHoroscope.php?input="+inputDate

       if(inputDate == "0230" || inputDate == "0231" || inputDate == "0431" ||  inputDate == "0631" || inputDate == "0931" ||  inputDate == "1131" || 
        inputDate <= 0 || inputMonth == "" || inputDay == "") {
        
            alert("Dubbelkolla ditt datum och försök igen.")
            return
        }  
       
       let response = await fetch(url)
       let result = await response.json()

       console.log(result)

       if(result) {
            styleGet();
            changeData(result.name, result.date, result.image)
       } else {
           alert("Horoskopet kunde inte hittas")
       }

   } catch(err){
       console.log(err)
       throw err
   } 

}


window.addEventListener("load", onLoad)