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
var toggleButton = document.getElementById("toggleSkills");
function makeEditable(element) {
    element.addEventListener('click', function () {
        var _a;
        if (element.isEditing)
            return;
        var text = element.textContent || '';
        var input = document.createElement(element.tagName === 'P' ? 'textarea' : 'input');
        input.value = text;
        Object.assign(input.style, {
            width: '100%',
            padding: '8px',
            border: '2px solid #2563eb',
            borderRadius: '4px',
            fontSize: window.getComputedStyle(element).fontSize
        });
        if (input instanceof HTMLTextAreaElement) {
            input.style.minHeight = '100px';
            input.style.resize = 'vertical';
        }
        (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(input, element);
        input.focus();
        element.isEditing = true;
        input.addEventListener('blur', function () {
            var _a;
            element.textContent = input.value;
            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(element, input);
            element.isEditing = false;
            element.style.transition = 'background-color 0.3s';
            element.style.backgroundColor = '#e6ffe6';
            setTimeout(function () {
                element.style.backgroundColor = 'transparent';
            }, 500);
        });
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !(input instanceof HTMLTextAreaElement)) {
                input.blur();
            }
        });
    });
    Object.assign(element.style, {
        cursor: 'pointer'
    });
    element.title = 'Click to edit';
    element.addEventListener('mouseenter', function () {
        if (!element.isEditing) {
            element.style.backgroundColor = '#f0f0f0';
        }
    });
    element.addEventListener('mouseleave', function () {
        if (!element.isEditing) {
            element.style.backgroundColor = 'transparent';
        }
    });
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formValues = {
        name: document.getElementById("name").value,
        title: document.getElementById("title").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        summary: document.getElementById("summary").value,
        education: document.getElementById("education").value,
        workExperience: document.getElementById("workExperience").value,
        projects: document.getElementById("projects").value,
        skills: document.getElementById("skills").value.split(",")
    };
    displayName.textContent = formValues.name;
    displayTitle.textContent = formValues.title;
    displayContact.textContent = "".concat(formValues.email, " | ").concat(formValues.phone);
    displaySummary.textContent = formValues.summary;
    displayEducation.textContent = formValues.education;
    displayExperience.textContent = formValues.workExperience;
    displayProjects.textContent = formValues.projects;
    linkedinURL.href = formValues.linkedin;
    linkedinURL.textContent = formValues.linkedin;
    githubURL.href = formValues.github;
    githubURL.textContent = formValues.github;
    displaySkills.innerHTML = "";
    formValues.skills.forEach(function (skill) {
        var skillItem = document.createElement("li");
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });
    form.style.display = "none";
    var editableElements = [
        displayName,
        displayTitle,
        displaySummary,
        displayEducation,
        displayExperience,
        displayProjects,
        displayContact
    ];
    editableElements.forEach(function (element) {
        makeEditable(element);
    });
    var skillItems = displaySkills.getElementsByTagName('li');
    Array.from(skillItems).forEach(function (skill) {
        makeEditable(skill);
    });
});
toggleButton.addEventListener("click", function () {
    var isHidden = displaySkills.style.display === "none" || displaySkills.style.display === "";
    displaySkills.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden ? "Hide Skills" : "Show Skills";
});
