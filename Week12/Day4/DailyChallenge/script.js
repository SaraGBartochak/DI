function validate() {
    let email = document.getElementById('email').value;
    let message = document.getElementById('msg').value;
    if (email == "" || message == "") {
        alert("Please fill the form");
        return false;
    }
}