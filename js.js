function closeNav() {
    document.getElementById("side-nav-menu").style.display="none";
    document.getElementById("side-nav-menu").style.width="100%";
}

function openNav() {
    document.getElementById("side-nav-menu").style.display="flex";
  
}


document.getElementById("appoitmentBtn").addEventListener('click',()=> {
    window.location.href="login.html";
});

function submitAppointment() {
    nameInput = document.getElementById("nameInput");
    date = document.getElementById("dateInput");
    time = document.getElementById("timeInput");
    res = "You have successfully submited your appointment as Mr : "+nameInput.value +" on "+ date.value + " / " +time.value  ;
    if (date.value === "" | time.value === "") {
        res = 'Please Fill all the fileds !'
    }
    else {
        document.getElementById("appointmentField").innerText=res;
    }
    document.getElementById("appointmentField").innerText=res;
}
