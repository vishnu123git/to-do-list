const input = document.getElementById("input");
const button = document.getElementById("button");
const additems = document.getElementById("additems");

button.addEventListener("click",()=>{
    const paragraph = document.createElement("p")
    paragraph.innerText = input.value;
    additems.appendChild(paragraph);
    paragraph.classList.add("paragraph")
    input.value = "";

    paragraph.addEventListener("click",()=>{
        paragraph.classList.add("line")
    })


    paragraph.addEventListener("dblclick",()=>{
        paragraph.remove();
    })





})
   