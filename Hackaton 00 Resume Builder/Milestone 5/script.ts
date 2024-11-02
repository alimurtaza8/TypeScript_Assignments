interface EditableElement extends HTMLElement {
    isEditing?: boolean;
}

interface SharingElements {
    uniqueUrl: HTMLInputElement;
    copyUrlBtn: HTMLButtonElement;
    downloadPdfBtn: HTMLButtonElement;
    shareResumeBtn: HTMLButtonElement;
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

function handleFormSubmit(event: Event) {
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
    new ResumeSharing();
}

function handleSkillsToggle() {
    const isHidden = displaySkills.style.display === "none" || displaySkills.style.display === "";
    displaySkills.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden ? "Hide Skills" : "Show Skills";
}

class ResumeSharing {
    private elements: SharingElements;
    private resumeContainer: HTMLElement;

    constructor() {
        this.elements = {
            uniqueUrl: document.getElementById('uniqueUrl') as HTMLInputElement,
            copyUrlBtn: document.getElementById('copyUrl') as HTMLButtonElement,
            downloadPdfBtn: document.getElementById('downloadPdf') as HTMLButtonElement,
            shareResumeBtn: document.getElementById('shareResume') as HTMLButtonElement
        };
        this.resumeContainer = document.querySelector('.resume-container') as HTMLElement;
        this.initializeSharing();
    }

    // private generateUniqueUrl(username: string): string {
    //     const baseUrl = window.location.origin;
    //     const uniqueId = btoa(username + '-' + Date.now()).replace(/[^a-zA-Z0-9]/g, '');
    //     return `${baseUrl}/resume/${uniqueId}`;
    // }

    private generateUniqueUrl(username: string): string {
        const baseUrl = window.location.origin;
        const uniqueId = btoa(username + '-' + Date.now()).replace(/[^a-zA-Z0-9]/g, '');
        return `${baseUrl}?resume=${uniqueId}`;
    }

    private showToast(message: string): void {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    private async copyToClipboard(text: string): Promise<void> {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast('URL copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
            this.showToast('Failed to copy URL');
        }
    }

    // private async downloadPdf(): Promise<void> {
    //     const element = this.resumeContainer;
        
    //     // Create a clone of the resume container
    //     const clone = element.cloneNode(true) as HTMLElement;
    //     clone.style.background = 'white';
    //     clone.style.padding = '20px';
    //     document.body.appendChild(clone);

    //     try {
    //         const canvas = await html2canvas(clone, {
    //             scale: 2,
    //             backgroundColor: '#ffffff'
    //         });
    //         const pdf = new jsPDF('p', 'mm', 'a4');
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdfWidth = pdf.internal.pageSize.getWidth();
    //         const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
    //         pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //         pdf.save('resume.pdf');
            
    //         this.showToast('PDF downloaded successfully!');
    //     } catch (err) {
    //         console.error('Failed to generate PDF:', err);
    //         this.showToast('Failed to generate PDF');
    //     } finally {
    //         document.body.removeChild(clone);
    //     }
    // }

    
    private async downloadPdf(): Promise<void> {
        const element = this.resumeContainer;
        const clone = element.cloneNode(true) as HTMLElement;
    
        Object.assign(clone.style, {
            width: '210mm',
            minHeight: '297mm',
            padding: '20mm', 
            margin: '0',
            backgroundColor: 'white',
            boxSizing: 'border-box',
            position: 'absolute',
            left: '-9999px', 
            top: 0,
            fontSize: '11pt'
        });

    const header = clone.querySelector('.header') as HTMLElement;
    if (header) {
        Object.assign(header.style, {
            padding: '15px',
            marginBottom: '20px',
            backgroundColor: '#00fff2',
            borderRadius: '5px',
            webkitPrintColorAdjust: 'exact',
            printColorAdjust: 'exact'
        });
    }

    const sections = clone.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        Object.assign(sectionElement.style, {
            marginBottom: '15px',
            pageBreakInside: 'avoid',
            width: '100%'
        });
    });

    const skillsList = clone.querySelector('#displaySkills') as HTMLElement;
    if (skillsList) {
        Object.assign(skillsList.style, {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            margin: '10px 0'
        });

        const skills = skillsList.querySelectorAll('li');
        skills.forEach(skill => {
            Object.assign((skill as HTMLElement).style, {
                backgroundColor: '#e9f2ff',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '10pt'
            });
        });
    }

    const sharingSection = clone.querySelector('.sharing-section');
    if (sharingSection) {
        sharingSection.remove();
    }

    document.body.appendChild(clone);

    try {
        const canvas = await html2canvas(clone, {
            scale: 2, 
            backgroundColor: '#ffffff',
            logging: false,
            width: clone.offsetWidth,
            height: clone.offsetHeight,
            windowWidth: clone.offsetWidth,
            windowHeight: clone.offsetHeight,
            useCORS: true, 
            letterRendering: true 
        });

        const pdf = new jsPDF({
            format: 'a4',
            unit: 'mm',
            orientation: 'portrait'
        });

        const imgWidth = 210; 
        const pageHeight = 297; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage({
            imageData: canvas.toDataURL('image/png', 1.0),
            format: 'PNG',
            x: 0,
            y: 0,
            width: imgWidth,
            height: imgHeight
        });

        if (imgHeight > pageHeight) {
            let remainingHeight = imgHeight;
            let position = -pageHeight;

            while (remainingHeight > pageHeight) {
                pdf.addPage();
                pdf.addImage({
                    imageData: canvas.toDataURL('image/png', 1.0),
                    format: 'PNG',
                    x: 0,
                    y: position,
                    width: imgWidth,
                    height: imgHeight
                });
                remainingHeight -= pageHeight;
                position -= pageHeight;
            }
        }
        const filename = `resume-${displayName.textContent?.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() || 'document'}.pdf`;
        
        pdf.save(filename);
        this.showToast('PDF downloaded successfully!');
    } catch (err) {
        console.error('Failed to generate PDF:', err);
        this.showToast('Failed to generate PDF');
    } finally {
        document.body.removeChild(clone);
    }
}


 

    private async shareResume(): Promise<void> {
        const shareData = {
            title: 'My Resume',
            text: 'Check out my professional resume!',
            url: this.elements.uniqueUrl.value
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                this.showToast('Resume shared successfully!');
            } else {
                throw new Error('Web Share API not supported');
            }
        } catch (err) {
            console.error('Error sharing:', err);
            this.showToast('Failed to share resume');
            this.copyToClipboard(this.elements.uniqueUrl.value);
        }
    }

    private initializeSharing(): void {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const uniqueUrl = this.generateUniqueUrl(nameInput.value);
        this.elements.uniqueUrl.value = uniqueUrl;

        this.elements.copyUrlBtn.addEventListener('click', () => {
            this.copyToClipboard(this.elements.uniqueUrl.value);
        });

        this.elements.downloadPdfBtn.addEventListener('click', () => {
            this.downloadPdf();
        });

        this.elements.shareResumeBtn.addEventListener('click', () => {
            this.shareResume();
        });
    }
}

form.addEventListener("submit", handleFormSubmit);
toggleButton.addEventListener("click", handleSkillsToggle);