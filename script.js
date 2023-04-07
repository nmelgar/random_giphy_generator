import { giphy_key } from "./key.js";

let generate_button = document
  .querySelector("#generate-function")
  .addEventListener("click", generate_giphys());

function generate_giphys() {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=pets&api_key=${giphy_key}&rating=g&limit=50`
  );

  request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    var images_container = document.getElementById("parent_of_giphys");

    for (var i = 0; i < parsedData.data.length; i++) {
      var col_div_element = document.createElement("div");
      col_div_element.classList.add("col");
      var parent_image = document.createElement("div");
      parent_image.classList.add("card", "shadow-sm");

      var image_url = parsedData.data[i].images.original.url;
      var image_element = document.createElement("img");
      image_element.setAttribute("src", image_url);
      image_element.style.height = "200px";
      image_element.style.width = "320";
      // images_container.appendChild(image_element);

      var under_image = document.createElement("div");
      under_image.classList.add("card-body");
      var text_under_image = document.createElement("p");
      text_under_image.classList.add("card-text");
      var title = parsedData.data[i].title;
      var short_title = title.slice(0, 15);
      if (short_title == "") {
        text_under_image.textContent = "No title available :(";
      } else {
        text_under_image.textContent = short_title;
      }
      text_under_image.style.fontSize = "10px";

      var div_under_paragraph = document.createElement("div");
      div_under_paragraph.classList.add(
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      var button_group = document.createElement("div");
      button_group.classList.add("btn-group");

      var original_image_button = document.createElement("button");
      original_image_button.classList.add(
        "btn",
        "btn-sm",
        "btn-outline-secondary"
      );
      original_image_button.textContent = "Original Image";
      original_image_button.setAttribute("type", "button");

      // insert the second button here
      // var original_image_button = document.createElement('button')
      // original_image_button.classList.add("btn", "btn-sm", "btn-outline-secondary")
      // original_image_button.textContent = "Original Image"
      // original_image_button.setAttribute("type", "button")

      var smallElement = document.createElement("small");
      smallElement.classList.add("text-body-secondary");
      smallElement.textContent = "Pets";

      images_container.appendChild(col_div_element);
      col_div_element.appendChild(parent_image);
      parent_image.appendChild(image_element);
      parent_image.appendChild(under_image);
      under_image.append(text_under_image);
      under_image.appendChild(div_under_paragraph);
      div_under_paragraph.appendChild(button_group);
      button_group.appendChild(original_image_button);
      div_under_paragraph.appendChild(smallElement);
    }
  };

  request.send();
}
