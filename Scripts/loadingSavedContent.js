// -------------------------------------------------------
// 'Dynamic population of Saved Content' Page
// -------------------------------------------------------

let savedContent = [];
let savedContentContainer = document.getElementById("saved-content-container");

if (localStorage.getItem("savedContent") === null) {
    savedContentContainer.innerHTML = '<p>You have no saved content yet...<p>';
} else {
    savedContent = JSON.parse(localStorage.getItem("savedContent"));
    savedContent.forEach((item) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add("card");
        newDiv.classList.add("mb-3");
        newDiv.innerHTML = item;
        savedContentContainer.appendChild(newDiv);
    }) 
}

let saveButtons = document.querySelectorAll(".save-btn");
saveButtons.forEach((button) => {
    button.style.display = "none";
})