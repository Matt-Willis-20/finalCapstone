// -------------------------------------------------------
// 'Subscribe' functionality
// -------------------------------------------------------

let subscribeBtn = document.getElementById("subscribe-btn");
subscribeBtn.addEventListener("click", subscribeUser);

function subscribeUser() {
    let email = document.getElementById("email").value;
    console.log(
        "Thank you for subscribing!\n" + 
        email + " has been added to our mailing list");
    document.getElementById("email").value = "";
}

// -------------------------------------------------------
// 'Send Contact Message' functionality
// -------------------------------------------------------

let sendMessageBtn = document.querySelector(".message-submit");
sendMessageBtn.addEventListener("click", sendMessage);

function sendMessage() {
    let email = document.getElementById("senderEmail").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    console.log(
        "Success!  Your message has been sent!\n" +
    "\nName: " + name +
    "\nEmail address:" + email +
    "\nMessage: " + message);
    document.getElementById("senderEmail").value = "";
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}
