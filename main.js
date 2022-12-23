// Get the modal
const profileModal = document.getElementById("modal"); //Shows the modal window that will open on click in picture.

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.querySelector(".profile"); //Obtain profile image
const modalImg = document.getElementById("img01"); //Obtain banner image
const captionText = document.getElementById("caption");
img.onclick = function(){ //Function on click on image.
    profileModal.style.display = "block"; //Changes display of the image to block => Shows it in screen
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    profileModal.style.display = "none";
}