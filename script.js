function send_email(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_ptbxrpo","template_7vchz9t", parms).then(alert("Email send successfully!"))
}