var form = document.getElementById("resumeForm");
var displayName = document.getElementById("displayName");
var displayTitle = document.getElementById("displayTitle");
var displayContact = document.getElementById("displayContact");
var displaySummary = document.getElementById("displaySummary");
var displayEducation = document.getElementById("displayEducation");
var displayExperience = document.getElementById("displayExperience");
var displayProjects = document.getElementById("displayProjects");
var displaySkills = document.getElementById("displaySkills");
var linkedinURL = document.getElementById("linkedinURL");
var githubURL = document.getElementById("githubURL");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin").value;
    var github = document.getElementById("github").value;
    var summary = document.getElementById("summary").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var projects = document.getElementById("projects").value;
    var skills = document.getElementById("skills").value.split(",");
    displayName.textContent = name;
    displayTitle.textContent = title;
    displayContact.textContent = "".concat(email, " | ").concat(phone);
    displaySummary.textContent = summary;
    displayEducation.textContent = education;
    displayExperience.textContent = workExperience;
    displayProjects.textContent = projects;
    linkedinURL.href = linkedin;
    linkedinURL.textContent = linkedin;
    githubURL.href = github;
    githubURL.textContent = github;
    displaySkills.innerHTML = "";
    skills.forEach(function (skill) {
        var skillItem = document.createElement("li");
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });
    form.style.display = "none";
});
var toggleButton = document.getElementById("toggleSkills");
toggleButton.addEventListener("click", function () {
    if (displaySkills.style.display === "none" || displaySkills.style.display === "") {
        displaySkills.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        displaySkills.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});
