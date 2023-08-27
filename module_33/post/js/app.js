function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((post) => postNow(post));
}

function postNow(posts) {
  const postContainer = document.getElementById("post-container");

  for (const post of posts) {
    const newPost = document.createElement("article");
    const postContent = `
    <article class="card bg-base-100 shadow-xl flex-1 h-full">
        <div class="card-body">
            <h2 class="card-title capitalize">${post.title}</h2>
            <p class="capitalize">${post.body}</p>
            <div class="card-actions justify-end">
                <div class="badge badge-warning">USER ID : ${post.userId}</div>
                <div class="badge badge-warning">POST ID : ${post.id}</div>
            </div>
        </div>
    </article>`;
    newPost.innerHTML = postContent;
    postContainer.appendChild(newPost);
  }
}
