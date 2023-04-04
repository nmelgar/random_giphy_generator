import { giphy_key } from "./key.js";
var request = new XMLHttpRequest();

request.open(
  "GET",
  `https://api.giphy.com/v1/gifs/search?q=pets&api_key=${giphy_key}&rating=g&limit=50`
);

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);


  
  for (var counter = 0; counter < 50; counter++){
    insert_container();
    var image_url = parsedData.data[counter].images.original.url;
    var image = document.createElement("img");
    image.setAttribute("src", image_url);
    image.style.height = "200px";
    image.style.width = "320";
    document
      .getElementById("parent-image")
      .insertAdjacentElement("afterbegin", image);
    
  };
};

// request.onload = function () {
//   insert_container();
//   var response = request.response;
//   var parsedData = JSON.parse(response);
//   console.log(parsedData);
//   var image_url = parsedData.data.images.original.url;
//   var image = document.createElement("img");
//   image.setAttribute("src", image_url);
//   image.style.height = "200px";
//   image.style.width = "320";
//   document
//     .getElementById("parent-image")
//     .insertAdjacentElement("afterbegin", image);
// };

request.send();

function insert_container() {
  var insert_giphy_content = document.getElementById("parent_of_giphys");
  insert_giphy_content.innerHTML = `
  <div class="col">
    <div class="card shadow-sm" id="parent-image">


      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>`;
}
