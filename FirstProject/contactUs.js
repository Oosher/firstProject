//form check
const fName =getElementby("fName"),lName=getElementby("lName"),email=getElementby("email"),textBox=getElementby("textBox");


let error1=getElementby("error1"),error2=getElementby("error2"),error3=getElementby("error3"),error4=getElementby("error4");

document.getElementById("submit").addEventListener("click", function(){
        
    notEmpty(fName,error1);
    notEmpty(lName,error2);
    notEmpty(textBox,error4);

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1|| email.value==""){

        error3.innerHTML="Email address must contain @ and . sine to be valid "
    }
    else{
        error3.innerHTML=""
    }
    console.log(fName.value);

});



function getElementby(elementId){

    
    return document.getElementById(elementId);
}

function notEmpty(form , error){
     if(form.value==""){
        error.innerHTML="This field must not be empty";
        form.focus();
    }else{
        error.innerHTML="";
    }
   

}




/* mobile form */
const fNaameLabel=document.getElementById("fNaameLabel");
const lNameLabel=document.getElementById("lNameLabel");
const emailLabel = document.getElementById("emailLabel");
const mobileRes =window.matchMedia("(max-width: 990px)");
const labelArray =[fNaameLabel,lNameLabel,emailLabel];
const inputArray =[fName,lName,email];

 
function mobileForm(){

    if (mobileRes.matches){
        displayChange(labelArray,"none",inputArray);
        
        
    }
    else{
       displayChange(labelArray,"block",inputArray);
      
    }
}

function displayChange(element,display,input){
    for (let i = 0; i < element.length; i++) {
        element[i].style.display=display; 
    }

    for (let i = 0; i < input.length; i++) {
        if(display=="none"){
         input[i].placeholder =element[i].innerHTML;
        }else{
         input[i].placeholder ="";
        }
    }
}
   


mobileForm();
mobileRes.addEventListener("change",mobileForm);

