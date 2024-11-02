var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function handleFormSubmit(event) {
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
    new ResumeSharing();
}
function handleSkillsToggle() {
    var isHidden = displaySkills.style.display === "none" || displaySkills.style.display === "";
    displaySkills.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden ? "Hide Skills" : "Show Skills";
}
var ResumeSharing = /** @class */ (function () {
    function ResumeSharing() {
        this.elements = {
            uniqueUrl: document.getElementById('uniqueUrl'),
            copyUrlBtn: document.getElementById('copyUrl'),
            downloadPdfBtn: document.getElementById('downloadPdf'),
            shareResumeBtn: document.getElementById('shareResume')
        };
        this.resumeContainer = document.querySelector('.resume-container');
        this.initializeSharing();
    }
    // private generateUniqueUrl(username: string): string {
    //     const baseUrl = window.location.origin;
    //     const uniqueId = btoa(username + '-' + Date.now()).replace(/[^a-zA-Z0-9]/g, '');
    //     return `${baseUrl}/resume/${uniqueId}`;
    // }
    ResumeSharing.prototype.generateUniqueUrl = function (username) {
        var baseUrl = window.location.origin;
        var uniqueId = btoa(username + '-' + Date.now()).replace(/[^a-zA-Z0-9]/g, '');
        return "".concat(baseUrl, "?resume=").concat(uniqueId);
    };
    ResumeSharing.prototype.showToast = function (message) {
        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        toast.style.display = 'block';
        setTimeout(function () {
            toast.remove();
        }, 3000);
    };
    ResumeSharing.prototype.copyToClipboard = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.clipboard.writeText(text)];
                    case 1:
                        _a.sent();
                        this.showToast('URL copied to clipboard!');
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error('Failed to copy:', err_1);
                        this.showToast('Failed to copy URL');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    ResumeSharing.prototype.downloadPdf = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element, clone, header, sections, skillsList, skills, sharingSection, canvas, pdf, imgWidth, pageHeight, imgHeight, remainingHeight, position, filename, err_2;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        element = this.resumeContainer;
                        clone = element.cloneNode(true);
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
                        header = clone.querySelector('.header');
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
                        sections = clone.querySelectorAll('.section');
                        sections.forEach(function (section) {
                            var sectionElement = section;
                            Object.assign(sectionElement.style, {
                                marginBottom: '15px',
                                pageBreakInside: 'avoid',
                                width: '100%'
                            });
                        });
                        skillsList = clone.querySelector('#displaySkills');
                        if (skillsList) {
                            Object.assign(skillsList.style, {
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                margin: '10px 0'
                            });
                            skills = skillsList.querySelectorAll('li');
                            skills.forEach(function (skill) {
                                Object.assign(skill.style, {
                                    backgroundColor: '#e9f2ff',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '10pt'
                                });
                            });
                        }
                        sharingSection = clone.querySelector('.sharing-section');
                        if (sharingSection) {
                            sharingSection.remove();
                        }
                        document.body.appendChild(clone);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, html2canvas(clone, {
                                scale: 2,
                                backgroundColor: '#ffffff',
                                logging: false,
                                width: clone.offsetWidth,
                                height: clone.offsetHeight,
                                windowWidth: clone.offsetWidth,
                                windowHeight: clone.offsetHeight,
                                useCORS: true,
                                letterRendering: true
                            })];
                    case 2:
                        canvas = _b.sent();
                        pdf = new jsPDF({
                            format: 'a4',
                            unit: 'mm',
                            orientation: 'portrait'
                        });
                        imgWidth = 210;
                        pageHeight = 297;
                        imgHeight = (canvas.height * imgWidth) / canvas.width;
                        pdf.addImage({
                            imageData: canvas.toDataURL('image/png', 1.0),
                            format: 'PNG',
                            x: 0,
                            y: 0,
                            width: imgWidth,
                            height: imgHeight
                        });
                        if (imgHeight > pageHeight) {
                            remainingHeight = imgHeight;
                            position = -pageHeight;
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
                        filename = "resume-".concat(((_a = displayName.textContent) === null || _a === void 0 ? void 0 : _a.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()) || 'document', ".pdf");
                        pdf.save(filename);
                        this.showToast('PDF downloaded successfully!');
                        return [3 /*break*/, 5];
                    case 3:
                        err_2 = _b.sent();
                        console.error('Failed to generate PDF:', err_2);
                        this.showToast('Failed to generate PDF');
                        return [3 /*break*/, 5];
                    case 4:
                        document.body.removeChild(clone);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ResumeSharing.prototype.shareResume = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shareData, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareData = {
                            title: 'My Resume',
                            text: 'Check out my professional resume!',
                            url: this.elements.uniqueUrl.value
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!navigator.share) return [3 /*break*/, 3];
                        return [4 /*yield*/, navigator.share(shareData)];
                    case 2:
                        _a.sent();
                        this.showToast('Resume shared successfully!');
                        return [3 /*break*/, 4];
                    case 3: throw new Error('Web Share API not supported');
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_3 = _a.sent();
                        console.error('Error sharing:', err_3);
                        this.showToast('Failed to share resume');
                        this.copyToClipboard(this.elements.uniqueUrl.value);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ResumeSharing.prototype.initializeSharing = function () {
        var _this = this;
        var nameInput = document.getElementById('name');
        var uniqueUrl = this.generateUniqueUrl(nameInput.value);
        this.elements.uniqueUrl.value = uniqueUrl;
        this.elements.copyUrlBtn.addEventListener('click', function () {
            _this.copyToClipboard(_this.elements.uniqueUrl.value);
        });
        this.elements.downloadPdfBtn.addEventListener('click', function () {
            _this.downloadPdf();
        });
        this.elements.shareResumeBtn.addEventListener('click', function () {
            _this.shareResume();
        });
    };
    return ResumeSharing;
}());
form.addEventListener("submit", handleFormSubmit);
toggleButton.addEventListener("click", handleSkillsToggle);
