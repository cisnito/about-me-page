const darkButton = document.getElementById("toggle-dark-mode");
darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    console.log("Button Clicked!");
});