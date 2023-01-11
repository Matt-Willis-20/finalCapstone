// -------------------------------------------------------
// 'Like' functionality
// -------------------------------------------------------

let likes = document.querySelectorAll(".like-btn");

likes.forEach((button) => button.addEventListener("click", updateLike));

function updateLike(e) {
    e.preventDefault;
    if (e.target.parentElement.classList.contains("liked")) {
        e.target.parentElement.classList.remove("liked");
        e.target.parentElement.innerHTML = "<i class='fa-regular fa-heart'></i>";
    } else {
        e.target.parentElement.classList.add("liked");
        e.target.parentElement.innerHTML = "<i class='fa-solid fa-heart'></i>";
    }
};

// -------------------------------------------------------
// 'Save Content' function
// -------------------------------------------------------

let savedContent = [];
let saveButtons = document.querySelectorAll(".save-btn");
saveButtons.forEach((button) => button.addEventListener("click", saveItem));

function saveItem(e) {
    e.preventDefault;
    if (localStorage.getItem("savedContent") === null) {
        localStorage.setItem("savedContent", JSON.stringify(savedContent));
    }
    savedContent = JSON.parse(localStorage.getItem("savedContent"))
    let card = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML;
    savedContent.push(card);
    alert(`You have ${savedContent.length} items saved - go to 'Saved Items' to view them`);
    localStorage.setItem("savedContent", JSON.stringify(savedContent))
};



