// -------------------------------------------------------
// 'Dynamic population of Saved Content' Page
// -------------------------------------------------------

// save an empty array to the variable savedContent
let savedContent = [];
// locate the element that we will be adding the saved content to
let savedContentContainer = document.getElementById("saved-content-container");

// if no items have yet been saved to local storage...
if (localStorage.getItem("savedContent") === null) {
  // update innerHTML to provide message to user
  savedContentContainer.innerHTML = "<p>You have no saved content yet...<p>";
  // otherwise...
} else {
  // retrieve the savedContent object from local storage and save to the savedContent variable
  savedContent = JSON.parse(localStorage.getItem("savedContent"));
  // loop through each saved item, for each item...
  savedContent.forEach((item) => {
    // create a new div element
    let newDiv = document.createElement("div");
    // add the relevant classes to the newly create div
    newDiv.classList.add("card");
    newDiv.classList.add("mb-3");
    // update the innerHTML using the saved item content
    newDiv.innerHTML = item;
    // add the new div to the savedContentContainer
    savedContentContainer.appendChild(newDiv);
  });
}

// locate all the save buttons and save to the variable saveButtons
let saveButtons = document.querySelectorAll(".save-btn");
// for each button...
saveButtons.forEach((button) => {
  // remove the 'save' HTML element (as the user has already saved the item)
  button.style.display = "none";
});
