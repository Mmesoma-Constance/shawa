
function order() {
    let result = document.querySelector('.inputed');
    let cost = result.value;
 result.style.border = "";

    let result2 = document.querySelector('.inputed2');
    let cost2 = result2.value;
    result2.style.border = "";

    let result3 = document.querySelector('.inputed3');
    let cost3 = result3.value;
    result3.style.border = "";

    let result4 = document.querySelector('.inputed4');
    let cost4 = result4.value;
    result4.style.border = "";


  let selectOption2 = document.getElementById('selectValue2');
  let selected2 = selectOption2.value;
 

    let selectOption = document.getElementById('selectValue');
  let selected = selectOption.value;
  

     
if (cost === "") {
    const element = document.querySelector('.error');
    let result = document.querySelector('.inputed');
    result.style.border = "2px solid red";
        element.innerText =  "Please enter your name!";
        
    setTimeout(function() {
        element.innerText = "";
           }, 1500);
} 

 else if (cost2 === "") {
    const element2 = document.querySelector('.error2');
    let result2 = document.querySelector('.inputed2');
    result2.style.border = "2px solid red";
    element2.innerText =  "Please enter your email!";
    
setTimeout(function() {
    element2.innerText = "";
       }, 1500);

    } 

   else if (!cost2.includes("@") || !cost2.includes(".")) {
        const element2 = document.querySelector('.error2');
        let result2 = document.querySelector('.inputed2');
        result2.style.border = "2px solid red";
        element2.innerText =  "Please enter a valid email!";

          
    setTimeout(function() {
        element2.innerText = "";
           }, 1500);
    }

    


    else if (cost4 === "") {
        const element4 = document.querySelector('.error4');
        let result4 = document.querySelector('.inputed4');
        result4.style.border = "2px solid red";
        element4.innerText =  "Please enter your phone number!";
        
    setTimeout(function() {
        element4.innerText = "";
           }, 1500);
    } 

    else if (isNaN(cost4)) {
        const element4 = document.querySelector('.error4');
        let result4 = document.querySelector('.inputed4');
        result4.style.border = "2px solid red";
        element4.innerText =  "Please enter a valid phone number!";
        
    setTimeout(function() {
        element4.innerText = "";
           }, 1500);
    }

   else if (cost3 === "") {
        const element3 = document.querySelector('.error3');
        let result3 = document.querySelector('.inputed3');
        result3.style.border = "2px solid red";
        element3.innerText =  "Please enter your location!";
        
    setTimeout(function() {
        element3.innerText = "";
           }, 1500);
    } 

else {

    result.style.border = "2px #09c372;";
    result2.style.border = "";
    result3.style.border = "";
    let button = document.getElementById('orderbtn');
    button.innerHTML = "Processing..";
    setTimeout(function() {
        button.innerHTML = "Order Successful!"
    }, 5000);

    setTimeout(function() {
       alert(`Hey ${cost.charAt(0).toUpperCase() + cost.slice(1)} !
Your shawarma order [${selected2} ${selected}] is confirmed and in progress.
Please check your email (${cost2}) for payment instructions and further information.`);
    }, 5400);
  
    setTimeout(function() {
        button.innerHTML = "Order";
        result.value = '';
        result2.value = '';
        result3.value = '';
        result4.value = '';
    }, 6500);
 

}

} 


/*
let result = document.querySelector('.inputed');
let cost = result.value;
const inputValue = document.querySelector(".nameValue");

inputValue.style.bottom = "12px"; 
inputValue.addEventListener('focus', function() {
if(!cost === "") {
   inputValue.style.bottom = "22px";
} 
})
*/