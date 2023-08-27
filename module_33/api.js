function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

/*
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

// Find My IP
const url = "https://api64.ipify.org?format=json";
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json.ip));
