import { giphy_key } from "./key.js";
var request = new XMLHttpRequest();

request.open(
  "GET",
  `https://api.giphy.com/v1/gifs/random?api_key=${giphy_key}&tag=pets&rating=g`
);

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
  var image_url = parsedData.data.images.original.url;
  var image = document.createElement("img");
  image.setAttribute("src", image_url);
  document
    .getElementById("parent-image")
    .insertAdjacentElement("afterbegin", image);
};

request.send();
