const postContentElement = document.querySelector(".post__content");
const likeButton = document.querySelector(".post__btn--like");

function showLikedAnimation(target) {
  let likedIcon = target.querySelector(".ri-heart-fill");

  if (likedIcon) {
    likedIcon.remove();
  }

  likedIcon = document.createElement("i");
  likedIcon.classList.add("ri-heart-fill");

  target.append(likedIcon);
}

postContentElement.addEventListener("dblclick", () => {
  if (!likeButton.classList.contains("liked")) {
    likeButton.innerHTML = "<i class='ri-heart-fill'></i>";
    likeButton.classList.add("liked");
  }

  showLikedAnimation(postContentElement);
});

likeButton.addEventListener("click", () => {
  if (!likeButton.classList.contains("liked")) {
    likeButton.innerHTML = "<i class='ri-heart-fill'></i>";
    likeButton.classList.add("liked");
    showLikedAnimation(postContentElement);
  } else if (likeButton.classList.contains("liked")) {
    likeButton.innerHTML = "<i class='ri-heart-line'></i>";
    likeButton.classList.remove("liked");
  }
});