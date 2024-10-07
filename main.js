document.addEventListener('DOMContentLoaded', function() {
    // Select all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more');

    // Loop through each button and add a click event listener
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page'); //link to other
            window.location.href = page;
        });
    });
});


//innerHTML - to write to an html element
//document.write() - write into html output
//window.alert() - write into an alert box
//console.log() - write into the browser console


