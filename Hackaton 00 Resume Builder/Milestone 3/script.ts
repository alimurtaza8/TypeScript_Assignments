const form = document.getElementById("resumeForm") as HTMLFormElement;
const displayName = document.getElementById("displayName")!;
const displayTitle = document.getElementById("displayTitle")!;
const displayContact = document.getElementById("displayContact")!;
const displaySummary = document.getElementById("displaySummary")!;
const displayEducation = document.getElementById("displayEducation")!;
const displayExperience = document.getElementById("displayExperience")!;
const displayProjects = document.getElementById("displayProjects")!;
const displaySkills = document.getElementById("displaySkills")!;
const linkedinURL = document.getElementById("linkedinURL") as HTMLAnchorElement;
const githubURL = document.getElementById("githubURL") as HTMLAnchorElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const github = (document.getElementById("github") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");

    displayName.textContent = name;
    displayTitle.textContent = title;
    displayContact.textContent = `${email} | ${phone}`;
    displaySummary.textContent = summary;
    displayEducation.textContent = education;
    displayExperience.textContent = workExperience;
    displayProjects.textContent = projects;
    linkedinURL.href = linkedin;
    linkedinURL.textContent = linkedin;
    githubURL.href = github;
    githubURL.textContent = github;

    displaySkills.innerHTML = "";
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });

        form.style.display = "none";
});

const toggleButton = document.getElementById("toggleSkills") as HTMLButtonElement;
toggleButton.addEventListener("click", () => {
    if (displaySkills.style.display === "none" || displaySkills.style.display === "") {
        displaySkills.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    } else {
        displaySkills.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});


