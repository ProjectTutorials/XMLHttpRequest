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

function gitRepo() {
  var xhr = new XMLHttpRequest();
  var method = "GET";
  var URL = "https://api.github.com/users/pratikkabade/repos";

  xhr.open(method, URL, true);

  xhr.send();

  xhr.onload = function () {
    if (xhr.status == 200) {
      const data = JSON.parse(xhr.response);
      console.log(data[1]);
      console.log(data[1].owner);

      data.forEach((User) => {
        const list = document.createElement("li");
        list.innerHTML = User.name;
        document.getElementById("output").appendChild(list);
      });
    }
  };
}
