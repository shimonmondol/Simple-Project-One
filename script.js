let onebtn= document.querySelector('.one');
let twobtn= document.querySelector('.two');
let threebtn= document.querySelector('.three');
let fourbtn= document.querySelector('.four');
let value = document.querySelector('h2');

onebtn.addEventListener("click", function(){
    value.innerHTML = "Dhaka";
})
twobtn.addEventListener("click", function(){
    value.innerHTML = "New Delhi";
})
threebtn.addEventListener("click", function(){
    value.innerHTML = "Islamabad";
})
fourbtn.addEventListener("click", function(){
    value.innerHTML = "Colombo";
})



