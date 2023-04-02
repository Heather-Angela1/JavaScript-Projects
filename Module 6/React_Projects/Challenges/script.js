// Popup Form
function openForm() {
    document.getElementById("contact-popup").style.display = "block";
}

function closeForm() {
    document.getElementById("contact-popup").style.display = "none";
}

function toggleContactForm() {
    var contactPopup = document.getElementById('contact-popup');
    if (contactPopup.style.display === 'none' || contactPopup.style.display === '') {
      contactPopup.style.display = 'block';
    } else {
      contactPopup.style.display = 'none';
    }
}

// Slideshow
$(document).ready(function() {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
});
