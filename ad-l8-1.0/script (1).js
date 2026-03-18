const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("alertBox").innerHTML =
        `<div class="alert alert-success alert-dismissible fade show mt-3">
            Sent message. Thanks for your request!
            <button class="btn-close" data-bs-dismiss="alert"></button>
        </div>`;

    form.reset();
});