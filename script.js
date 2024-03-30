function submitForm() {
    var emailInput = document.getElementById('email');
    var mailresult = document.getElementById('mail');

    if (emailInput.value.includes('@')) {
        mailresult.innerHTML = emailInput.value ;
        // document.write( emailInput.value)
    } else {
        mailresult.innerHTML = '<p style="color: red;">Invalid email address. Please enter a valid email.</p>';
    }

    var numInput = document.getElementById('phnumber');
    var emernumber = document.getElementById('pnumber');

    if (numInput.value.length >= 10 && emernumber.value.length >= 10) {
    numresult.innerHTML =   numInput.value;
    emerresult.innerHTML =  emernumber.value;

    } else {
    numresult.innerHTML = '<p style="color: red;">Invalid number. Please enter a valid number.</p>';
    }
}