// Import the Axios library
// No need to import Axios in a browser environment

// GET Request
function getTodos() {
  axios
    .get("/api/todos")
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// POST Request
function addTodo() {
  axios
    .post("/api/todos", {
      title: "New Todo",
      completed: false,
    })
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// PUT/PATCH Request
function updateTodo() {
  axios
    .put("/api/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// DELETE Request
function removeTodo() {
  axios
    .delete("/api/todos/1")
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Simultaneous Data
function getData() {
  axios
    .all([axios.get("/api/todos"), axios.get("/api/posts")])
    .then(
      axios.spread(function (todos, posts) {
        // Handle the response for todos and posts separately
        console.log("Todos:", todos);
        console.log("Posts:", posts);
      })
    )
    .catch(function (error) {
      console.log(error);
    });
}

// Custom Headers
function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token",
    },
  };

  axios
    .get("/api/todos", config)
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Transforming Requests & Responses
function transformResponse() {
  const config = {
    transformResponse: axios.defaults.transformResponse.concat(function (data) {
      // Modify the response data here
      data.completed = data.completed ? "Yes" : "No";
      return data;
    }),
  };

  axios
    .get("/api/todos/1", config)
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Error Handling
function errorHandling() {
  axios
    .get("/api/todos")
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

// Cancel Token
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get("/api/todos", {
      cancelToken: source.token,
    })
    .then(function (response) {
      showOutput(response);
    })
    .catch(function (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.log(error);
      }
    });

  // Cancel the request
  source.cancel("Request canceled by the user.");
}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>

    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
