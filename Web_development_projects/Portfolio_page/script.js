var loader;

loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  }),
    {
      threshold: 1,
    };
});

const hidden_elements = document.querySelectorAll(".hidden");
hidden_elements.forEach((element) => {
  observer.observe(element);
});
