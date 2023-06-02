// Get the Modal
var modal = document.getElementById("myModal");
// Get the Image and insert it inside the Modal use its "alt" text as a Caption
var img = document.getElementById("myImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; 
}

// Get the <span> element that Closes the Modal
var span = document.getElementsByClassName("close")[0];

// when the user clicks on <span> (x), Close the Modal.
span.onclick = function() {
    modal.style.display = "none";
}