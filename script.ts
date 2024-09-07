document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContainer = document.getElementById('dynamic-resume') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education-input') as HTMLInputElement).value;
        const skills = (document.getElementById('skills-input') as HTMLInputElement).value;
        const work = (document.getElementById('work-input') as HTMLInputElement).value;

        const resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Work Experience:</strong> ${work}</p>
        `;

        resumeContainer.innerHTML = resumeHTML;
    });
});
