var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");
var deleteBtns;
var visitBtns;
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.querySelector(".box-info");
var bookmarks = [];


if (localStorage.getItem("bookmarks") === null) {
  bookmarks = [];}
  else{
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmark()
  }
  // Function to add
function addProduct(){
  var bookmark = {
    name: siteName.value,
    url: siteURL.value ,
  }
  bookmarks.push(bookmark);
  console.log(bookmarks);

  clearForm();
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
  displayBookmark();
}
// Function display

function displayBookmark(){
         var cartoona = '';
         for(var i=0 ; i<bookmarks.length ; i++){
          cartoona +=`
                 <tr>
                 <td>${i+1}</td>
                 <td>${bookmarks[i].name}</td>
                 <td><button class="btn btn-visit"><i class="fa-solid fa-eye pe-2" ></i>Visit</button></td>
                 <td><button class="btn btn-delete"><i class="fa-solid fa-trash-can pe-2" onclick="deleteBookmark(${i})"></i>Delete</button></td>
                 </tr>
          `
         }
         tableContent.innerHTML = cartoona;
}
// Function to clear form
function clearForm(){
  siteName.value = "";
  siteURL.value = "";
}
// Function to delete 
function deleteBookmark(index){
  bookmarks.splice(index,1);
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
  displayBookmark();
}


Validate

var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

siteName.addEventListener("input", function () {
  validate(siteName, nameRegex);
});

siteURL.addEventListener("input", function () {
  validate(siteURL, urlRegex);
});

function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}
