var toggleButton = document.getElementById("toggleSkills");
var skillsList = document.getElementById("skillsList");
toggleButton.addEventListener("click", function () {
    if (skillsList.style.display === "none" || skillsList.style.display === "") {
        skillsList.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsList.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});
