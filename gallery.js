// Get the modal
var modal = document.getElementById('myModal');
var images = document.querySelectorAll('.gallery img');
var modalImg = document.getElementById('img01');
var originalText = "Original text";

images.forEach(function(img, index) {
    img.setAttribute('tabindex', '0');
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }
    img.onfocus = function() {
        document.getElementById('img01').alt = this.alt;
        console.log('Image in focus: ' + this.alt);
    }
    img.onblur = function() {
        document.getElementById('img01').alt = originalText;
        console.log('Focus removed from image.');
    }
    img.onmouseover = function() {
        document.getElementById('img01').alt = this.alt;
        console.log('Mouse over image: ' + this.alt);
    }
    img.onmouseleave = function() {
        document.getElementById('img01').alt = originalText;
        console.log('Mouse left image.');
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

window.onload = function() {
    console.log('Page loaded successfully.');
}
