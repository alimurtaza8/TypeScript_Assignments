interface EditableElement extends HTMLElement {
    isEditing?: boolean;
}

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
const toggleButton = document.getElementById("toggleSkills") as HTMLButtonElement;

function makeEditable(element: EditableElement) {
    element.addEventListener('click', function() {
        if (element.isEditing) return;
        
        const text = element.textContent || '';
        const input = document.createElement(element.tagName === 'P' ? 'textarea' : 'input');
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

        element.parentNode?.replaceChild(input, element);
        input.focus();
        element.isEditing = true;

        input.addEventListener('blur', () => {
            element.textContent = input.value;
            input.parentNode?.replaceChild(element, input);
            element.isEditing = false;
            
            element.style.transition = 'background-color 0.3s';
            element.style.backgroundColor = '#e6ffe6';
            setTimeout(() => {
                element.style.backgroundColor = 'transparent';
            }, 500);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !(input instanceof HTMLTextAreaElement)) {
                input.blur();
            }
        });
    });

    Object.assign(element.style, {
        cursor: 'pointer'
    });
    element.title = 'Click to edit';
    
    element.addEventListener('mouseenter', () => {
        if (!element.isEditing) {
            element.style.backgroundColor = '#f0f0f0';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        if (!element.isEditing) {
            element.style.backgroundColor = 'transparent';
        }
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formValues = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        title: (document.getElementById("title") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        linkedin: (document.getElementById("linkedin") as HTMLInputElement).value,
        github: (document.getElementById("github") as HTMLInputElement).value,
        summary: (document.getElementById("summary") as HTMLTextAreaElement).value,
        education: (document.getElementById("education") as HTMLTextAreaElement).value,
        workExperience: (document.getElementById("workExperience") as HTMLTextAreaElement).value,
        projects: (document.getElementById("projects") as HTMLTextAreaElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value.split(",")
    };

    displayName.textContent = formValues.name;
    displayTitle.textContent = formValues.title;
    displayContact.textContent = `${formValues.email} | ${formValues.phone}`;
    displaySummary.textContent = formValues.summary;
    displayEducation.textContent = formValues.education;
    displayExperience.textContent = formValues.workExperience;
    displayProjects.textContent = formValues.projects;
    
    linkedinURL.href = formValues.linkedin;
    linkedinURL.textContent = formValues.linkedin;
    githubURL.href = formValues.github;
    githubURL.textContent = formValues.github;

    displaySkills.innerHTML = "";
    formValues.skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });

    form.style.display = "none";

    const editableElements = [
        displayName,
        displayTitle,
        displaySummary,
        displayEducation,
        displayExperience,
        displayProjects,
        displayContact
    ];

    editableElements.forEach(element => {
        makeEditable(element as EditableElement);
    });

    const skillItems = displaySkills.getElementsByTagName('li');
    Array.from(skillItems).forEach(skill => {
        makeEditable(skill as EditableElement);
    });
});

toggleButton.addEventListener("click", () => {
    const isHidden = displaySkills.style.display === "none" || displaySkills.style.display === "";
    displaySkills.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden ? "Hide Skills" : "Show Skills";
});