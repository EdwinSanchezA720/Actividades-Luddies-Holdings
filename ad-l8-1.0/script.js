document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("messageSentAlert");

  // Defensive checks so other pages that also load script.js don't error.
  if (!form || !alertBox) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alertBox.classList.remove("d-none");
    alertBox.classList.add("show");

    // Demo behavior: reset fields after "sending".
    form.reset();
  });
});

