import jsPDF from 'jspdf';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContainer = document.getElementById('dynamic-resume') as HTMLDivElement;
    const shareLinkButton = document.getElementById('share-link') as HTMLButtonElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
    const resumeLinkParagraph = document.getElementById('resume-link') as HTMLParagraphElement;
    const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;

    generateResumeButton.addEventListener('click', () => {
        // Prevent form submission default action
        event?.preventDefault();

        // Collect input values
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education-input') as HTMLInputElement).value;
        const skills = (document.getElementById('skills-input') as HTMLInputElement).value;
        const work = (document.getElementById('work-input') as HTMLInputElement).value;

        // Generate resume HTML
        const resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> <span id="resume-name" contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span id="resume-email" contenteditable="true">${email}</span></p>
            <p><strong>Education:</strong> <span id="resume-education" contenteditable="true">${education}</span></p>
            <p><strong>Skills:</strong> <ul id="resume-skills">
                ${skills.split(',').map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}
            </ul></p>
            <p><strong>Work Experience:</strong> <span id="resume-work" contenteditable="true">${work}</span></p>
        `;

        // Update resume container with generated HTML
        resumeContainer.innerHTML = resumeHTML;

        // Generate unique URL for resume (adjust URL accordingly)
        const resumeUrl = `https://your-vercel-app-url.vercel.app/resume/${username}`;
        resumeLinkParagraph.textContent = `Your resume URL: ${resumeUrl}`;
        
        // Share resume URL functionality
        shareLinkButton.onclick = () => {
            navigator.clipboard.writeText(resumeUrl).then(() => {
                alert('Resume link copied to clipboard!');
            });
        };

        // Download resume as PDF functionality
        downloadPdfButton.onclick = () => {
            const doc = new jsPDF();
            doc.text(resumeHTML.replace(/<\/?[^>]+>/gi, ''), 10, 10);
            doc.save(`${username}-resume.pdf`);
        };
    });
});
