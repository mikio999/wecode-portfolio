const commentLocation = document.querySelector(".commentList");
const commentInput = document.querySelector(".commentSpace");
const commentBtn = document.querySelector(".commentBtn");

const makingComments = () => {
  const newComment = document.createElement("li");

  newComment.innerHTML = `
  <div>
    <span class="commentId">cute_gyuri</span>
    <span>${commentInput.value}</span>
  </div>`;

  commentLocation.appendChild(newComment);

  /* 하트 취소 불가 기능
  const likeBtn = document.createElement("button");
  likeBtn.setAttribute("class", "heartBtn");
  likeBtn.addEventListener("click", () => {
    likeBtn.setAttribute("class", "redBtn");
  });

  newComment.appendChild(likeBtn);
*/

  const likeBtn = document.createElement("span");
  likeBtn.setAttribute("class", "heartBtn");
  likeBtn.innerHTML =
    "<input type='checkbox' id='check1'> <label for = 'check1'></label>";

  newComment.appendChild(likeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete");
  deleteBtn.innerHTML = "<i class = 'delete'>x</i>";
  deleteBtn.addEventListener("click", () => {
    commentLocation.removeChild(newComment);
  });

  newComment.appendChild(deleteBtn);
  commentInput.value = "";

  return;
};

commentInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    makingComments();
  }
});

commentBtn.addEventListener("click", makingComments);
