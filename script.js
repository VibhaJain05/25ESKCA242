// ===============================
// Active Navbar Link
// ===============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});


// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";

    }

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    } else {

        alert("Please fill all the fields.");

    }

});
/* ==========================
   Active Navigation Link
========================== */
