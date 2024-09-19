document.getElementById("btnLogin").addEventListener('click',(event)=>{
    event.preventDefault();
    let phoneNumber = document.getElementById("inputPhoneNumber").value;
    let pinNumber = document.getElementById("inputPinNumber").value;
    
    // sever copy
    let severPN = '017';
    let severPin = '123';

    if(severPN === phoneNumber && severPin === pinNumber){
        window.location.href = "./html/home.html";
    } else {
        alert("Invalid Phone Number or Pin Number!");
    }
})