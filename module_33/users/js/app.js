function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => users(data));
}

function users(users) {
  const userContainer = document.getElementById("user-container");

  for (const user of users) {
    const displayUsers = `
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body" id="">
            <h4 class="text-lg font-medium">ID : <span>${user.id}</span></h4>
            <h2 class="text-lg font-medium">Name : <span>${user.name}</span></h2>
            <h4 class="text-lg font-medium">Username : <span>${user.username}</span></h4>
            <h4 class="text-lg font-medium">E-mail : <span>${user.email}</span></h4>
            <h4 class="text-lg font-medium">Website : <span>${user.website}</span></h4>
        </div>
    </div>`;
    const createUserCard = document.createElement("div");
    createUserCard.innerHTML = displayUsers;
    userContainer.appendChild(createUserCard);
  }
}
