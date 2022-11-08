# XML HTTP Requests

XMLHttpRequest is an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment.

### Get started

1. Open `index.html` and click on particular operations

2. Refer `console` for details of both working and code

![image](https://user-images.githubusercontent.com/109010929/200133983-d996d1dc-4463-4c72-a81e-64927b85fd8d.png)

### Screenshots

![image](https://user-images.githubusercontent.com/76637730/200631372-547aea6a-c4d2-41dd-9716-6fce2efcb045.png)


### Structure

```
src
    Burgers

        - (Requires local database)

    GitHubAPI

        - (Requires GitHub API)

        - Get one field

        - Get array

    Local

        - (Burgers API alternative)

        - MessagesAPI

db1.json

db2.json

index.html
```

### CRUD Operations

- [ ] Create
- [x] Read
- [ ] Update
- [ ] Delete

### READ

```js
function gitUser() {
  var xhr = new XMLHttpRequest();
  var method = "GET";
  var URL = "https://api.github.com/users/pratikkabade";

  xhr.open(method, URL, true);

  xhr.send();

  xhr.onload = function () {
    if (xhr.status == 200) {
      const data = JSON.parse(xhr.response);
      console.log("success");

      const p = document.createElement("li");
      p.innerHTML = data.bio;
      document.getElementById("output").appendChild(p);
    }
  };
}
```