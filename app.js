// -------------------------------------------------------
// Comments functionality
// -------------------------------------------------------

let comments = []

const commentList = document.getElementById("comments");

if (localStorage.getItem("comments") !== null) {
    comments = JSON.parse(localStorage.getItem("comments"))
    comments.forEach((item) => {
        console.log(item.comment)
        let text = document.createElement("p");
        text.innerText = item.comment
        text.className = "comment-text";
        commentList.appendChild(text);
    })
}

class Comment {
    constructor(comment) {
        this.comment = comment
    }
}

function addComment() {
    if (localStorage.getItem("comments") !== null) {
        comments = JSON.parse(localStorage.getItem("comments"))
        }
    let newComment = new Comment(
        document.getElementById("commentText").value
    );
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments))
}



const commentBtn = document.getElementById("comment-btn");
commentBtn.addEventListener("click", addComment);
