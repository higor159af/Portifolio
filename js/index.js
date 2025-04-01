/* animation hidden */

let allElement = document.querySelectorAll(".hidden");
let myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

allElement.forEach((element) => {
  myObserver.observe(element);
});
