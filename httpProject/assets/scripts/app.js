const listElement = document.querySelector(".posts");
const postTempalte = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHTTPRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const httpRq = new XMLHttpRequest();

    httpRq.open(method, url);

    httpRq.responseType = "json";

    httpRq.onload = function () {
      //const postList = JSON.parse(httpRq.response);
      if (httpRq.status >= 200 && httpRq.status < 300) {
        resolve(httpRq.response);
      } else {
        reject(new Error("Somthig went worng"));
      }
    };
    httpRq.onerror = function () {
      reject(new Error("Somthig went worng"));
    };
    httpRq.send(JSON.stringify(data));
  });
  return promise;
}

async function fetchPosts() {
  try {
    const respnonsData = await sendHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfPosts = respnonsData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTempalte.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (err) {
    alert(err.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
  // TODO : render new post on the screen
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});