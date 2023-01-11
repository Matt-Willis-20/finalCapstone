// -------------------------------------------------------
// 'Subscribe' functionality
// -------------------------------------------------------

// locate the subscribe button element and save to the variable subscribeBtn
let subscribeBtn = document.getElementById("subscribe-btn");
// add the click eventlistener
subscribeBtn.addEventListener("click", subscribeUser);

// create the function to mimic adding a subscriber
function subscribeUser() {
    // get the users email entry and save to the variable email
    let email = document.getElementById("email").value;
    // output a confirmation message
    console.log(
        "Thank you for subscribing!\n" + 
        email + " has been added to our mailing list");
    // reset the email input
    document.getElementById("email").value = "";
}


// -------------------------------------------------------
// 'Send Contact Message' functionality
// -------------------------------------------------------

// locate the message submit button and save to the variable sendMessageBtn
let sendMessageBtn = document.querySelector(".message-submit");
// add the click event listener
sendMessageBtn.addEventListener("click", sendMessage);

// create the function to mimic sending a message
function sendMessage() {
    // save the user inputs to three separate variables
    let email = document.getElementById("senderEmail").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    // output a confirmation message to the console
    console.log(
        "Success!  Your message has been sent!\n" +
    "\nName: " + name +
    "\nEmail address:" + email +
    "\nMessage: " + message);
    // reset the form input fields
    document.getElementById("senderEmail").value = "";
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}
