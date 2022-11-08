function startDB1() {
  var xhr = new XMLHttpRequest();
  var method = "GET";
  var URL = "./db2.json";

  xhr.open(method, URL, true);
  xhr.send();

  xhr.onload = function () {
    var burger = JSON.parse(xhr.response);
    var burger = burger.burgers;
    console.log(burger);
    var output = "";
    for (var i = 0; i < burger.length; i++) {
      output += "<p>" + burger[i].name + "</p>";
    }
    document.getElementById("output").innerHTML = output;
  };
}

// This will get db1 as Basic API
function startDB2() {
  var xhr = new XMLHttpRequest();
  var method = "GET";
  var URL = "./db1.json";

  xhr.open(method, URL, true);
  xhr.send();

  xhr.onload = function () {
    var users = JSON.parse(xhr.response);
    var users = users.db2;
    console.log(users);

    var output = "";
    for (var i = 0; i < users.length; i++) {
      output +=
        "<ul>" +
        "<li>" +
        users[i].name +
        "</li>" +
        "<li>" +
        users[i].value +
        "</li>" +
        "</ul>";
    }
    document.getElementById("output").innerHTML = output;
  };
}
