document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContainer = document.getElementById('dynamic-resume');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education-input').value;
        var skills = document.getElementById('skills-input').value;
        var work = document.getElementById('work-input').value;
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Work Experience:</strong> ").concat(work, "</p>\n        ");
        resumeContainer.innerHTML = resumeHTML;
    });
});
