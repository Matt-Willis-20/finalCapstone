// -------------------------------------------------------
// Comments functionality
// -------------------------------------------------------

// save an empty array to a variable called comments
let comments = []
// locate the HTML element with the ID of comments and save to the variable called commentList
const commentList = document.getElementById("comments");
// check to see if there is a comments object saved in local storage
// if there is...
if (localStorage.getItem("comments") !== null) {
    // retrieve the object and save to the variable comments
    comments = JSON.parse(localStorage.getItem("comments"))
    // reverse the array so that the most recent comment will show first
    comments.reverse();
    // loop through each comment object
    comments.forEach((item) => {
        // create a new p element and save to the variable called text
        let text = document.createElement("p");
        // update the inner text of the new p element
        text.innerText = item.comment;
        // add a class to the new element
        text.className = "comment-text";
        // add the element to the commentsList
        commentList.appendChild(text);
    })
}

// create the contructor for a Comment object
class Comment {
    constructor(comment) {
        this.comment = comment
    }
}

// locate comment button element and save its location to the variable commentBtn
const commentBtn = document.getElementById("comment-btn");
// add an eventlister to the button
commentBtn.addEventListener("click", addComment);

// create a function that allows users to add a comment
function addComment() {
    // there comments already saved to local storage...
    if (localStorage.getItem("comments") !== null) {
        // save the comments object to the variable comments
        comments = JSON.parse(localStorage.getItem("comments"))
        }
    // create a new Comment object using the users input    
    let newComment = new Comment(
        document.getElementById("commentText").value
    );
    // add the Comment object to the comments array
    comments.push(newComment);
    // save the comments array back to local storage
    localStorage.setItem("comments", JSON.stringify(comments))
}

