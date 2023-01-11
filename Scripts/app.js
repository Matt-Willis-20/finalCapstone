// ------------------------------------------------------------
// 'Like' functionality
// ------------------------------------------------------------

// locate all 'like' buttons and save then to the variable likes
let likes = document.querySelectorAll(".like-btn");
// for each button, add onclick event listener
likes.forEach((button) => button.addEventListener("click", updateLike));

// create a function to mimic 'liking' an image
function updateLike(e) {
    // do not refresh the page when form submitted
    e.preventDefault;
    // if the form already has a class of 'liked'... 
    if (e.target.parentElement.classList.contains("liked")) {
        //remove the classname
        e.target.parentElement.classList.remove("liked");
        // update the innerHTML to empty heart icon
        e.target.parentElement.innerHTML = "<i class='fa-regular fa-heart'></i>";
        // otherwise...
    } else {
        // add the 'liked' classname
        e.target.parentElement.classList.add("liked");
        // update the innerHTML to the full heart icon
        e.target.parentElement.innerHTML = "<i class='fa-solid fa-heart'></i>";
    }
};

// -------------------------------------------------------------
// 'Save Content' function
// -------------------------------------------------------------

// save an empty array to the variable savedContent
let savedContent = [];
// locate all the save buttons and save them to the variable saveButtons
let saveButtons = document.querySelectorAll(".save-btn");
// for each button, add an eventlistener
saveButtons.forEach((button) => button.addEventListener("click", saveItem));

// create a function that saves content to local storage
function saveItem(e) {
    // prevent the page from reloading
    e.preventDefault;
    // if there are no saved items in localstorage...
    if (localStorage.getItem("savedContent") === null) {
        // save the empty savedContent array to local storage 
        localStorage.setItem("savedContent", JSON.stringify(savedContent));
    }
    // retrieve the savedContent object from local storage and save to a variable
    savedContent = JSON.parse(localStorage.getItem("savedContent"))
    // store the card-item we want to save to the variable card
    let card = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML;
    // add this to the savedContent array
    savedContent.push(card);
    // output to the user how many items are in their saved items.
    alert(`You have ${savedContent.length} items saved - go to 'Saved Items' to view them`);
    // save the savedContent object back to local storage
    localStorage.setItem("savedContent", JSON.stringify(savedContent))
};



