window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 1000); // 1 seconds delay
});

const menuButton = document.querySelector(".menu-button");
const sidebar = document.getElementById("sidebar");
const closeButton = document.getElementById("closeBtn");

// Open sidebar on menu button click
menuButton.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Close sidebar on close button click
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
