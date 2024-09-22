document.addEventListener("DOMContentLoaded", function () {
    //finder drop down fra html
    var dropbtn = document.querySelector('.dropdownBtn');

    //tilføjer en event listener som lytter efter et click på .dropdown btn
    dropbtn.addEventListener('click', function () {
        var dropdownIndhold = document.querySelector('.dropdownIndhold');

        // tilføjer vores dropdown ved at ændre display til block
        if (dropdownIndhold.style.display === "block") {
            dropdownIndhold.style.display = "none";
        } else {
            dropdownIndhold.style.display = "block";
        }
    });
});
