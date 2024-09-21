document.addEventListener("DOMContentLoaded", function () {
    // Get the dropdown button
    var dropbtn = document.querySelector('.dropdownBtn');

    // Add a click event listener to toggle the dropdown content
    dropbtn.addEventListener('click', function () {
        var dropdownIndhold = document.querySelector('.dropdownIndhold');

        // Toggle the display property
        if (dropdownIndhold.style.display === "block") {
            dropdownIndhold.style.display = "none";
        } else {
            dropdownIndhold.style.display = "block";
        }
    });
});
