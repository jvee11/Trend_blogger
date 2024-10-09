// Nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value === "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });

    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });

    // Read more functionality
    $("#read-more-btn").click(function(event) {
        event.preventDefault(); // Prevent the default link action

        // Create a new paragraph element with the additional text
        const newText = $("<p>Stay ahead of the curve and make your voice heard in the ever-evolving conversation of today!</p>");

        // Append the new text to the about section
        $('.contentBx').append(newText);
    });
});
