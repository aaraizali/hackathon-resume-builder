"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContainer = document.getElementById('dynamic-resume');
    var shareLinkButton = document.getElementById('share-link');
    var downloadPdfButton = document.getElementById('download-pdf');
    var resumeLinkParagraph = document.getElementById('resume-link');
    var generateResumeButton = document.getElementById('generate-resume');
    generateResumeButton.addEventListener('click', function () {
        // Prevent form submission default action
        event === null || event === void 0 ? void 0 : event.preventDefault();
        // Collect input values
        var username = document.getElementById('username').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education-input').value;
        var skills = document.getElementById('skills-input').value;
        var work = document.getElementById('work-input').value;
        // Generate resume HTML
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> <span id=\"resume-name\" contenteditable=\"true\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span id=\"resume-email\" contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Education:</strong> <span id=\"resume-education\" contenteditable=\"true\">").concat(education, "</span></p>\n            <p><strong>Skills:</strong> <ul id=\"resume-skills\">\n                ").concat(skills.split(',').map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul></p>\n            <p><strong>Work Experience:</strong> <span id=\"resume-work\" contenteditable=\"true\">").concat(work, "</span></p>\n        ");
        // Update resume container with generated HTML
        resumeContainer.innerHTML = resumeHTML;
        // Generate unique URL for resume (adjust URL accordingly)
        var resumeUrl = "https://your-vercel-app-url.vercel.app/resume/".concat(username);
        resumeLinkParagraph.textContent = "Your resume URL: ".concat(resumeUrl);
        // Share resume URL functionality
        shareLinkButton.onclick = function () {
            navigator.clipboard.writeText(resumeUrl).then(function () {
                alert('Resume link copied to clipboard!');
            });
        };
        // Download resume as PDF functionality
        downloadPdfButton.onclick = function () {
            var doc = new jspdf_1.default();
            doc.text(resumeHTML.replace(/<\/?[^>]+>/gi, ''), 10, 10);
            doc.save("".concat(username, "-resume.pdf"));
        };
    });
});
